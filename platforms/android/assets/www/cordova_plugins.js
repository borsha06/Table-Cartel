cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "id": "cordova-plugin-facebook4.FacebookConnectPlugin",
        "file": "plugins/cordova-plugin-facebook4/www/facebook-native.js",
        "pluginId": "cordova-plugin-facebook4",
        "clobbers": [
            "facebookConnectPlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-inappbrowser": "1.7.1",
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-plugin-facebook4": "1.9.1"
};
// BOTTOM OF METADATA
});