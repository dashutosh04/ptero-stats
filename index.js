const ptero = require("pterodactyl.js");
require("dotenv").config();

const client = new ptero.Builder()
  .setURL(process.env.URL)
  .setAPIKey(process.env.API_KEY)
  .asAdmin();

  async function data_fetcher(client) {
    return Promise.all([
      client.getNodes(),
      client.getUsers(),
      client.getServers(),
    ])
    .then(([nodes, users, servers]) => {
      return {
        node: nodes[0].pagination.total,
        user: users[0].pagination.total,
        server: servers[0].pagination.total,
      };
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
  }

data_fetcher(client).then((stats) => {
  console.log(stats);
});