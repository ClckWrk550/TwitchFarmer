const { ApiClient } = require('twitch');
const { ClientCredentialsAuthProvider } = require('twitch-auth');
const clientId = 'tvlcfpojjstnvyya0qbfq941bq6zb0';
const clientSecret = 'CLIENT SECRET';
const authProvider = new ClientCredentialsAuthProvider(clientId, clientSecret);
const apiClient = new ApiClient({ authProvider });

var test = 'loltyler1';

// implement connection between variables

(async () => {
	let request = await isStreamLive(test)
	console.log(request)
  })()


async function isStreamLive(userName) {
	const user = await apiClient.helix.users.getUserByName(userName);
	if (!user) {
		return false;
	}
	return await user.getStream() !== null;
}
