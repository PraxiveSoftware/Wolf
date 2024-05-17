import version from "./version";
import config from "./config";

const webSDK = {
    startingPoint: "./src/resources/websdk/index.js",
    globVersion: version.version,
    version: config.webSDK
};

export default webSDK;