#  🔗Pterodactyl Panel Data Fetcher
This `Node.js` script utilizes the `pterodactyl.js` library to interact with a Pterodactyl Panel instance. It fetches essential data including the number of _nodes, users, and servers_ within the panel and logs the results to the console.

##  🌿Features:

- Efficiently retrieves node, user, and server counts from Pterodactyl Panel.

- Leverages `dotenv` for secure environment variable management
- Provides a clear and concise data structure for output

Easy to integrate into larger scripts or applications
## Prerequisites:

> `Node.js` and `npm` installed
A Pterodactyl Panel instance with API credentials
A `.env` file containing `URL` and `API_KEY` environment variables.
## Usage:

Clone the repository

<b>Install dependencies:</b>

```bash
npm install
```

Set up your Pterodactyl Panel credentials in a `.env` file:

```
URL= your_pterodactyl_panel_url
API_KEY= your_pterodactyl_panel_api_key
````

<b>Run the script:</b>
```
node index.js
```



>  Note: This script is a basic example and can be extended to perform more complex operations or data manipulation.

## Additional Considerations:

Consider error handling and logging for production environments.

Explore caching mechanisms for performance optimization.
Implement asynchronous operations for better responsiveness.

By following these steps, you can effectively utilize this script to retrieve data from your Pterodactyl Panel instance.