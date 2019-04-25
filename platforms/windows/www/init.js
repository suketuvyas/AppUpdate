//    var jsonConfigUrl = 'https://raw.githubusercontent.com/suketuvyas/testupdate/master/app-config.json?nocache=' + (new Date()).getTime();
var jsonConfigUrl = 'http://funuf.com/AppUpdate/app-config.json?nocache=' + (new Date()).getTime();


var configObj = {}

var appendPath = true;

/// call init
init();


console.log("=========================  Inscript    ===============");

function init() {

  console.log("=========================  Init    ===============");
  loadConfig(function (response) {
    // Parse JSON string into object
    configObj = JSON.parse(response);


    console.log("=========================  config    ===============",configObj);

    var ScriptLoader = new cScriptLoader(getFilesWithPath(configObj.files));
    ScriptLoader.loadFiles();


  });
};


function getFilesWithPath(files) {

  var aFiles = []
  if (appendPath) {
    for (var i = 0; i < files.length; i++) {
      aFiles.push(configObj.basePath+configObj.softVersion+'/'+files[i]);
    }
    console.log("AppendPath:: ",aFiles);
    return aFiles;
  }else{
    console.log("NormalPath:: ",aFiles);
    return files;
  }

}

function loadConfig(callback) {

  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");

  xobj.open('GET', jsonConfigUrl, true); // Replace 'my_data' with the path to your file
  /*xobj.setRequestHeader('cache-control', 'no-cache, must-revalidate, post-check=0, pre-check=0');
  xobj.setRequestHeader('cache-control', 'max-age=0');
  xobj.setRequestHeader('expires', '0');
  xobj.setRequestHeader('expires', 'Tue, 01 Jan 1980 1:00:00 GMT');
  xobj.setRequestHeader('pragma', 'no-cache');*/

  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}


var cScriptLoader = (function () {
  function cScriptLoader(files) {
    var _this = this;
    this.log = function (t) {
      console.log("ScriptLoader: " + t);
    };
    this.withNoCache = function (filename) {
      if (filename.indexOf("?") === -1)
        filename += "?no_cache=" + new Date().getTime();
      else
        filename += "&no_cache=" + new Date().getTime();
      return filename;
    };
    this.loadStyle = function (filename) {
      // HTMLLinkElement
      var link = document.createElement("link");
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = _this.withNoCache(filename);
      _this.log('Loading style ' + filename);
      link.onload = function () {
        _this.log('Loaded style "' + filename + '".');
      };
      link.onerror = function () {
        _this.log('Error loading style "' + filename + '".');
      };
      _this.m_head.appendChild(link);
    };
    this.loadScript = function (i) {
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = _this.withNoCache(_this.m_js_files[i]);
      var loadNextScript = function () {
        if (i + 1 < _this.m_js_files.length) {
          _this.loadScript(i + 1);
        }
      };
      script.onload = function () {
        _this.log('Loaded script "' + _this.m_js_files[i] + '".');
        loadNextScript();
      };
      script.onerror = function () {
        _this.log('Error loading script "' + _this.m_js_files[i] + '".');
        loadNextScript();
      };
      _this.log('Loading script "' + _this.m_js_files[i] + '".');
      _this.m_head.appendChild(script);
    };
    this.loadFiles = function () {
      // this.log(this.m_css_files);
      // this.log(this.m_js_files);
      for (var i = 0; i < _this.m_css_files.length; ++i)
        _this.loadStyle(_this.m_css_files[i]);
      _this.loadScript(0);
    };
    this.m_js_files = [];
    this.m_css_files = [];
    this.m_head = document.getElementsByTagName("head")[0];

    // this.m_head = document.head; // IE9+ only
    function endsWith(str, suffix) {
      if (str === null || suffix === null)
        return false;
      return str.indexOf(suffix, str.length - suffix.length) !== -1;
    }

    for (var i = 0; i < files.length; ++i) {
      if (endsWith(files[i], ".css")) {
        this.m_css_files.push(files[i]);
      }
      else if (endsWith(files[i], ".js")) {
        this.m_js_files.push(files[i]);
      }
      else
        this.log('Error unknown filetype "' + files[i] + '".');
    }
  }

  return cScriptLoader;
})();
