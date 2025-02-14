const defaults = {
  routes: [],
  notFoundResponse: ({ requestType }) => {
    const err = new Error('Route does not exist', {
      casue: {
        package: '@middy/cloudformation-router',
        data: { requestType }
      }
    })
    throw err
  }
}
const cloudformationCustomResourceRouteHandler = (opts = {}) => {
  if (Array.isArray(opts)) {
    opts = { routes: opts }
  }
  const { routes, notFoundResponse } = { ...defaults, ...opts }

  const routesStatic = {}
  for (const route of routes) {
    const { requestType, handler } = route

    // Static
    routesStatic[requestType] = handler
  }

  const requestTypes = {
    Create: true,
    Update: true,
    Delete: true
  }
  return (event, context, abort) => {
    const { RequestType: requestType } = event
    if (
      !requestType ||
      !Object.hasOwnProperty.call(requestTypes, requestType)
    ) {
      throw new Error('Unknown CloudFormation Custom Response event format', {
        cause: {
          package: '@middy/cloudformation-router',
          data: { requestType }
        }
      })
    }

    // Static
    if (Object.hasOwnProperty.call(routesStatic, requestType)) {
      const handler = routesStatic[requestType]
      return handler(event, context, abort)
    }

    // Not Found
    return notFoundResponse({ requestType })
  }
}

export default cloudformationCustomResourceRouteHandler
