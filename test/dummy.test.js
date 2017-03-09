import Test from 'ava';
// import Server from '../src';
import { Server } from 'hapi';
import HelloPlugin from '../src/plugins/hello';

Test.beforeEach(t => {
  const server = new Server();
  server.connection({ });
  server.register(HelloPlugin);
  t.context = server;
});

Test('/hello retrieves the proper message', async t => {

  const server = t.context;

  const message = 'Hey Beavis';
  server.plugins['hello'].getMessage = () => message;

  const response = await server.inject('/hello');





  t.is(response.statusCode, 200);
  t.deepEqual(response.result, { message });
});
