Package.describe({
  summary: "Weibo OAuth flow",
  version: '2.0.0-alpha300.8',
});

Package.onUse(api => {
  api.use('oauth1', ['client', 'server']);
  api.use('oauth', ['client', 'server']);
  api.use('random', 'client');
  api.use(['service-configuration', 'ecmascript'], ['client', 'server']);

  api.addFiles('weibo_client.js', 'client');
  api.addFiles('weibo_server.js', 'server');

  api.export('Weibo');
});
