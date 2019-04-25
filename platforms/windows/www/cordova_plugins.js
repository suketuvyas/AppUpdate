cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-device.DeviceProxy",
    "file": "plugins/cordova-plugin-device/src/windows/DeviceProxy.js",
    "pluginId": "cordova-plugin-device",
    "runs": true
  },
  {
    "id": "cordova-plugin-ionic-webview.IonicWebView",
    "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
    "pluginId": "cordova-plugin-ionic-webview",
    "clobbers": [
      "Ionic.WebView"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreenProxy",
    "file": "plugins/cordova-plugin-splashscreen/www/windows/SplashScreenProxy.js",
    "pluginId": "cordova-plugin-splashscreen",
    "runs": true
  },
  {
    "id": "cordova-plugin-statusbar.statusbar",
    "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
    "pluginId": "cordova-plugin-statusbar",
    "clobbers": [
      "window.StatusBar"
    ]
  },
  {
    "id": "cordova-plugin-statusbar.StatusBarProxy",
    "file": "plugins/cordova-plugin-statusbar/src/windows/StatusBarProxy.js",
    "pluginId": "cordova-plugin-statusbar",
    "runs": true
  },
  {
    "id": "phonegap-plugin-contentsync.ContentSync",
    "file": "plugins/phonegap-plugin-contentsync/www/index.js",
    "pluginId": "phonegap-plugin-contentsync",
    "clobbers": [
      "window.ContentSync",
      "window.Zip",
      "window.zip"
    ]
  },
  {
    "id": "phonegap-plugin-contentsync.SyncProxy",
    "file": "plugins/phonegap-plugin-contentsync/src/windows/SyncProxy.js",
    "pluginId": "phonegap-plugin-contentsync",
    "runs": true
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-device": "2.0.2",
  "cordova-plugin-ionic-keyboard": "2.1.3",
  "cordova-plugin-ionic-webview": "4.0.1",
  "cordova-plugin-splashscreen": "5.0.2",
  "cordova-plugin-statusbar": "2.4.2",
  "cordova-plugin-whitelist": "1.3.3",
  "phonegap-plugin-contentsync": "1.4.2"
};
// BOTTOM OF METADATA
});