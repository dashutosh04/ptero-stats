const ptero = require("pterodactyl.js");
require("dotenv").config();

const client = new ptero.Builder()
  .setURL(process.env.URL)
  .setAPIKey(process.env.API_KEY)
  .asAdmin();

async function data_fetcher(client) {
  nodes = await client.getNodes();
  users = await client.getUsers();
  servers = await client.getServers();

  data = {
    node: nodes.length,
    user: users.length,
    server: servers.length,
  };
  return data;
}

data_fetcher(client).then(async (stats) => {
  console.log(stats);
});
