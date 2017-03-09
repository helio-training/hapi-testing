const plugin = (server, options, next) => {

  server.expose({
    getMessage: () => 'Hello World'
  });

  server.route({
    method: 'GET',
    path: '/hello',
    handler: (req, reply) => {

      const getMessage = req.server.plugins['hello'].getMessage;

      return reply({ message: getMessage() });
    }
  });

  return next();
};

plugin.attributes = {
  name: 'hello',
  version: '1.0.0'
};

export default plugin;
