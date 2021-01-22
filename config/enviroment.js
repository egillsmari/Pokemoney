const environments = {
	staging: {
		FIREBASE_API_KEY: "AIzaSyBzYn-Z0Etq2TlFwILi2TH13qHT68B16kM",
		FIREBASE_AUTH_DOMAIN: "third-summer-293619.firebaseapp.com",
		FIREBASE_DATABASE_URL: 'XXXX',
		FIREBASE_PROJECT_ID: "third-summer-293619",
		FIREBASE_STORAGE_BUCKET: "third-summer-293619.appspot.com",
		FIREBASE_MESSAGING_SENDER_ID: '672506894926',
		GOOGLE_CLOUD_VISION_API_KEY: 'AIzaSyBzYn-Z0Etq2TlFwILi2TH13qHT68B16kM'
	},
	production: {
	}
};

function getReleaseChannel() {
	let releaseChannel = Expo.Constants.manifest.releaseChannel;
	if (releaseChannel === undefined) {
		return 'staging';
	} else if (releaseChannel === 'staging') {
		return 'staging';
	} else {
		return 'staging';
	}
}
function getEnvironment(env) {
	console.log('Release Channel: ', getReleaseChannel());
	return environments[env];
}
var Environment = getEnvironment(getReleaseChannel());
export default Environment;
