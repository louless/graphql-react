
var isArray = function(data) {
  return (Array.isArray(data));
}; //end function

var restWrapper = function (data, method, uri) {
	switch (method) {
    case "GET" :
     console.log("GET / URI : ", uri)
     console.log("Data = ", data)
     if (uri == "http://oms-node.marx.tech:8080/omsrestservices/rest/orders/events") {
      //var keys = Object.keys(data)
      console.log("data after shift : ", uri)
     }
     if (uri == "http://oms-node.marx.tech:8080/omsrestservices/rest/accounts/3/positions") {
      console.log("Positions : ", data)
     }
     break;
    case "POST" :
     console.log("PUT / URI : ", uri)
     console.log("Data = ", data)
     break;
    default :
	}; //end switch
	return data
};

var getSymbols = function(data) {
   
      data.shift()
      //var keys = Object.keys(data)
        for (var i=0; i<data.length;i++) {
          var keys = Object.keys(data[i])
            for (var item in keys) {
              //console.log(data[i][keys[item]].attributes[0]) 
              data[i][keys[item]].attributes.shift() //[0] = data[i][keys[item]].attributes[1])
              //data[i][keys[item]].shift() //= data[keys[item]].attributes[1]
            }
            //data[keys[item]].attributes[0] = data[keys[item]].attributes[1]
            
        }
  return data;
};

var strucCheck = function ( data ) {// Array or Object ?
  // check array to see if it has child arrays
  if (isArray( data )) {
  
  var keys;
  keys = Object.keys(data);
    for (var item in keys) {
         switch (data[keys[item]]) {
             case  "java.util.TreeMap" :
               data[keys[item]] = data[keys[item+1]];
               data[keys[item]].shift();
               return data;
              
             case  "java.util.HashMap" : 
               data = data[1];
               return data;
             
             case "java.util.HashSet" :
               //data.shift();
               //data = data.pop(data[1]) //commented 
               data = data[1];  // added
               return data;
               
             case "java.util.ArrayList" : 
               data = data[1];
               return data;
             
             case "com.tradedesksoftware.ets.core.entities.Instrument" :
               data = data[1];
               return data;
             
             default :
             console.log ("fall through");
         }//end swtich
   //     }//end for
      }// end for
    } // end if
};// end function


// var rvObject = function( data) {
//   // takes the passed object and parse then prune.
//   var keys = Object.keys(data);
//   for (var item in keys) {
//     if (Array.isArray(data[keys[item]])) {
//       //data[keys[item]].shift();
//       data[0] = data[1]
      
//     } else {
//       // todo Error handling
//     } // end if
//   } // end for
//   return data;
// };
 
var returnJSON = function(returnValue) {  // rest/users/all

  var i; var j; var k; var l;  // maybe we can use a counter at some point
  var keys = new Array;
  var tempValue;

 returnValue = strucCheck(returnValue);
 //returnValue = returnValue[1]
  keys = Object.keys(returnValue);
  for (var item in keys) {
    
    if (Array.isArray(returnValue[keys[item]])) {
       var arrayLength = returnValue[keys[item]].length;
      for (i=0; i <= arrayLength; i++) {
        if (Array.isArray(returnValue[keys[item]][i])) {
          var arrayLength1 = returnValue[keys[item]][i].length;
          for (j=0; j <= arrayLength1; j++) {
            if (Array.isArray(returnValue[keys[item]][i][j])) {
              var arrayLength2 = returnValue[keys[item]][i][j].length;
              for(k=0; k <= arrayLength2; k++) {
                if (Array.isArray(returnValue[keys[item]][i][j][k])) {
                  var arrayLength3 = returnValue[keys[item]][i][j][k].length;
                  for (l=0;l<=arrayLength3;l++) {
                    if(Array.isArray(returnValue[keys[item]][i][j][k][l])) {
                      var arrayLength4 = returnValue[keys[item]][i][j][k][l].length;
                      console.log("it never ends")
                    } else {
                        switch (typeof returnValue[keys[item]][i][j][k][l]) {
                          case 'object' :
                            tempValue = returnValue[keys[item]][i][j][k][l];
                            strucCheck(tempValue);
                          break;
                          default :
                        } // end switch 
                    }// end if
                  }// end for
                } else {
                  switch (typeof returnValue[keys[item]][i][j][k]) {
                    case 'object' :
                      tempValue = returnValue[keys[item]][i][j][k];
                      strucCheck(tempValue);
                    break;
                    default :
                  } // end switch 
                } // end if
              }// end for k
            } else {
              switch (typeof returnValue[keys[item]][i][j]) {
                case 'object' :
                  tempValue = returnValue[keys[item]][i][j];
                  strucCheck(tempValue);
                break;
                default :
              } // end switch
            }// end if
          } // end for j
        } else {
          switch (typeof returnValue[keys[item]][i]) {
            case 'object' :
              tempValue = returnValue[keys[item]][i];
              strucCheck(tempValue);
            break;
            default :
          } // end switch
        } // end if
      }//for i
    } // end if 
    
  }// end for loop
  return restWrapper(returnValue,request.method,uri);
};

// namespace

var REST = {
 apiURL: null,
 debug: false,
 loglevel: 0,
 antiBrowserCache: false,
 cacheHeaders: []
};

// helper function
REST.getKeys = function(o) {
 if (o !== Object(o))
  throw new TypeError('REST.getKeys called on non-object');
 var ret = [],
  p;
 for (p in o)
  if (Object.prototype.hasOwnProperty.call(o, p)) ret.push(p);
 return ret;
};

// constructor
REST.Request = function() {
 REST.log("Creating new Request");
 this.uri = null;
 this.method = "GET";
 this.username = null;
 this.password = null;
 this.acceptHeader = "*/*";
 this.contentTypeHeader = null;
 this.async = true;
 this.queryParameters = [];
 this.matrixParameters = [];
 this.formParameters = [];
 this.forms = [];
 this.cookies = [];
 this.headers = [];
 this.entity = null;
}

REST.Request.prototype = {
 execute: function(callback) {
  var request = new XMLHttpRequest();
  var url = this.uri;

  if (REST.antiBrowserCache == true) {
   request.url = url;
  }

  var restRequest = this;
  for (var i = 0; i < this.matrixParameters.length; i++) {
   url += ";" + REST.Encoding.encodePathParamName(this.matrixParameters[i][0]);
   url += "=" + REST.Encoding.encodePathParamValue(this.matrixParameters[i][1]);
  }
  for (var i = 0; i < this.queryParameters.length; i++) {
   if (i == 0)
    url += "?";
   else
    url += "&";
   url += REST.Encoding.encodeQueryParamNameOrValue(this.queryParameters[i][0]);
   url += "=" + REST.Encoding.encodeQueryParamNameOrValue(this.queryParameters[i][1]);
  }
  for (var i = 0; i < this.cookies.length; i++) {
   document.cookie = escape(this.cookies[i][0]) +
    "=" + escape(this.cookies[i][1]);
  }
  request.open(this.method, url, this.async, this.username, this.password);
  var acceptSet = false;
  var contentTypeSet = false;
  for (var i = 0; i < this.headers.length; i++) {
   if (this.headers[i][0].toLowerCase() == 'accept')
    acceptSet = this.headers[i][1];
   if (this.headers[i][0].toLowerCase() == 'content-type')
    contentTypeSet = this.headers[i][1];
   request.setRequestHeader(REST.Encoding.encodeHeaderName(this.headers[i][0]),
    REST.Encoding.encodeHeaderValue(this.headers[i][1]));
  }
  if (!acceptSet)
   request.setRequestHeader('Accept', this.acceptHeader);
  REST.log("Got form params: " + this.formParameters.length);
  // see if we're sending an entity or a form
  if (this.entity && (this.formParameters.length > 0 || this.forms.length > 0))
   throw "Cannot have both an entity and form parameters";
  // form
  if (this.formParameters.length > 0 || this.forms.length > 0) {
   if (contentTypeSet && contentTypeSet != "application/x-www-form-urlencoded")
    throw "The ContentType that was set by header value (" + contentTypeSet + ") is incompatible with form parameters";
   if (this.contentTypeHeader && this.contentTypeHeader != "application/x-www-form-urlencoded")
    throw "The ContentType that was set with setContentType (" + this.contentTypeHeader + ") is incompatible with form parameters";
   contentTypeSet = "application/x-www-form-urlencoded";
   request.setRequestHeader('Content-Type', contentTypeSet);
  }
  else if (this.entity && !contentTypeSet && this.contentTypeHeader) {
   // entity
   contentTypeSet = this.contentTypeHeader;
   request.setRequestHeader('Content-Type', this.contentTypeHeader);
  }
  // we use this flag to work around buggy browsers
  var gotReadyStateChangeEvent = false;
  if (callback) {
   request.onreadystatechange = function() {
    gotReadyStateChangeEvent = true;
    REST.log("Got readystatechange");
    REST._complete(this, callback);
   };
  }
  var data = this.entity;
  if (this.entity) {
   if (this.entity instanceof Element) {
    if (!contentTypeSet || REST._isXMLMIME(contentTypeSet))
     data = REST.serialiseXML(this.entity);
   }
   else if (this.entity instanceof Document) {
    if (!contentTypeSet || REST._isXMLMIME(contentTypeSet))
     data = this.entity;
   }
   else if (this.entity instanceof Object) {
    if (!contentTypeSet || REST._isJSONMIME(contentTypeSet))
     data = JSON.stringify(this.entity);
   }
  }
  else if (this.formParameters.length > 0) {
   data = '';
   for (var i = 0; i < this.formParameters.length; i++) {
    if (i > 0)
     data += "&";
    data += REST.Encoding.encodeFormNameOrValue(this.formParameters[i][0]);
    data += "=" + REST.Encoding.encodeFormNameOrValue(this.formParameters[i][1]);
   }
  }
  else if (this.forms.length > 0) {
   data = '';
   for (var i = 0; i < this.forms.length; i++) {
    if (i > 0)
     data += "&";
    var obj = this.forms[i][1];
    var key = REST.getKeys(obj)[0];
    data += REST.Encoding.encodeFormNameOrValue(key);
    data += "=" + REST.Encoding.encodeFormNameOrValue(obj[key]);
   }
  }
  REST.log("Content-Type set to " + contentTypeSet);
  REST.log("Entity set to " + data);
  request.send(data);
  // now if the browser did not follow the specs and did not fire the events while synchronous,
  // handle it manually
  if (!this.async && !gotReadyStateChangeEvent && callback) {
   REST.log("Working around browser readystatechange bug");
   REST._complete(request, callback);
  }

  if (REST.debug == true) {
   REST.lastRequest = request;
  }

  if (REST.antiBrowserCache == true && request.status != 304) {
   var _cachedHeaders = {
    "Etag": request.getResponseHeader('Etag'),
    "Last-Modified": request.getResponseHeader('Last-Modified'),
    "entity": request.responseText
   };

   var signature = REST._generate_cache_signature(url);
   REST._remove_deprecated_cache_signature(signature);
   REST._addToArray(REST.cacheHeaders, signature, _cachedHeaders);
  }
 },
 setAccepts: function(acceptHeader) {
  REST.log("setAccepts(" + acceptHeader + ")");
  this.acceptHeader = acceptHeader;
 },
 setCredentials: function(username, password) {
  this.password = password;
  this.username = username;
 },
 setEntity: function(entity) {
  REST.log("setEntity(" + entity + ")");
  this.entity = entity;
 },
 setContentType: function(contentType) {
  REST.log("setContentType(" + contentType + ")");
  this.contentTypeHeader = contentType;
 },
 setURI: function(uri) {
  REST.log("setURI(" + uri + ")");
  this.uri = uri;
 },
 setMethod: function(method) {
  REST.log("setMethod(" + method + ")");
  this.method = method;
 },
 setAsync: function(async) {
  REST.log("setAsync(" + async + ")");
  this.async = async;
 },
 addCookie: function(name, value) {
  REST.log("addCookie(" + name + "=" + value + ")");
  REST._addToArray(this.cookies, name, value);
 },
 addQueryParameter: function(name, value) {
  REST.log("addQueryParameter(" + name + "=" + value + ")");
  REST._addToArray(this.queryParameters, name, value);
 },
 addMatrixParameter: function(name, value) {
  REST.log("addMatrixParameter(" + name + "=" + value + ")");
  REST._addToArray(this.matrixParameters, name, value);
 },
 addFormParameter: function(name, value) {
  REST.log("addFormParameter(" + name + "=" + value + ")");
  REST._addToArray(this.formParameters, name, value);
 },
 addForm: function(name, value) {
  REST.log("addForm(" + name + "=" + value + ")");
  REST._addToArray(this.forms, name, value);
 },
 addHeader: function(name, value) {
  REST.log("addHeader(" + name + "=" + value + ")");
  REST._addToArray(this.headers, name, value);
 }
};

REST.log = function(string) {
 if (REST.loglevel > 0)
  print(string);
};

REST._addToArray = function(array, name, value) {
 if (value instanceof Array) {
  for (var i = 0; i < value.length; i++) {
   array.push([name, value[i]]);
  }
 }
 else {
  array.push([name, value]);
 }
};

REST._generate_cache_signature = function(url) {
 return url.replace(/\?resteasy_jsapi_anti_cache=\d+/, '');
};

REST._remove_deprecated_cache_signature = function(signature) {
 for (idx in REST.cacheHeaders) {
  var _signature = REST.cacheHeaders[idx][0];
  if (signature == _signature) {
   REST.cacheHeaders.splice(idx, 1);
  }
 }

};

REST._get_cache_signature = function(signature) {
 for (idx in REST.cacheHeaders) {
  var _signature = REST.cacheHeaders[idx][0];
  if (signature == _signature) {
   return REST.cacheHeaders[idx];
  }
 }
 return null;
};

REST._complete = function(request, callback) {
 REST.log("Request ready state: " + request.readyState);
 if (request.readyState == 4) {
  var entity;
  REST.log("Request status: " + request.status);
  REST.log("Request response: " + request.responseText);
  if (request.status >= 200 && request.status < 300) {
   var contentType = request.getResponseHeader("Content-Type");
   if (contentType != null) {
    if (REST._isXMLMIME(contentType))
     entity = request.responseXML;
    else if (REST._isJSONMIME(contentType))
     entity = JSON.parse(request.responseText);
    else
     entity = request.responseText;
   }
   else
    entity = request.responseText;
  }

  if (request.status == 304) {
   entity = REST._get_cache_signature(REST._generate_cache_signature(request.url))[1]['entity'];
  }
  REST.log("Calling callback with: " + entity);
  callback(request.status, request, entity);
 }
}

REST._isXMLMIME = function(contentType) {
 return contentType == "text/xml" ||
  contentType == "application/xml" ||
  (contentType.indexOf("application/") == 0 &&
   contentType.lastIndexOf("+xml") == (contentType.length - 4));
}

REST._isJSONMIME = function(contentType) {
 return contentType == "application/json" ||
  (contentType.indexOf("application/") == 0 &&
   contentType.lastIndexOf("+json") == (contentType.length - 5));
}

/* Encoding */

REST.Encoding = {};

REST.Encoding.hash = function(a) {
 var ret = {};
 for (var i = 0; i < a.length; i++)
  ret[a[i]] = 1;
 return ret;
}

//
// rules

REST.Encoding.Alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

REST.Encoding.Numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

REST.Encoding.AlphaNum = [].concat(REST.Encoding.Alpha, REST.Encoding.Numeric);

REST.Encoding.AlphaNumHash = REST.Encoding.hash(REST.Encoding.AlphaNum);

/**
 * unreserved = ALPHA / DIGIT / "-" / "." / "_" / "~"
 */
REST.Encoding.Unreserved = [].concat(REST.Encoding.AlphaNum, ['-', '.', '_', '~']);

/**
 * gen-delims = ":" / "/" / "?" / "#" / "[" / "]" / "@"
 */
REST.Encoding.GenDelims = [':', '/', '?', '#', '[', ']', '@'];

/**
 * sub-delims = "!" / "$" / "&" / "'" / "(" / ")" / "*" / "+" / "," / ";" / "="
 */
REST.Encoding.SubDelims = ['!', '$', '&', '\'', '(', ')', '*', '+', ',', ';', '='];

/**
 * reserved = gen-delims | sub-delims
 */
REST.Encoding.Reserved = [].concat(REST.Encoding.GenDelims, REST.Encoding.SubDelims);

/**
 * pchar = unreserved | escaped | sub-delims | ":" | "@"
 * 
 * Note: we don't allow escaped here since we will escape it ourselves, so we don't want to allow them in the
 * unescaped sequences
 */
REST.Encoding.PChar = [].concat(REST.Encoding.Unreserved, REST.Encoding.SubDelims, [':', '@']);

/**
 * path_segment = pchar <without> ";"
 */
REST.Encoding.PathSegmentHash = REST.Encoding.hash(REST.Encoding.PChar);
delete REST.Encoding.PathSegmentHash[";"];

/**
 * path_param_name = pchar <without> ";" | "="
 */
REST.Encoding.PathParamHash = REST.Encoding.hash(REST.Encoding.PChar);
delete REST.Encoding.PathParamHash[";"];
delete REST.Encoding.PathParamHash["="];

/**
 * path_param_value = pchar <without> ";"
 */
REST.Encoding.PathParamValueHash = REST.Encoding.hash(REST.Encoding.PChar);
delete REST.Encoding.PathParamValueHash[";"];

/**
 * query = pchar / "/" / "?"
 */
REST.Encoding.QueryHash = REST.Encoding.hash([].concat(REST.Encoding.PChar, ['/', '?']));
// deviate from the RFC to disallow separators such as "=", "@" and the famous "+" which is treated as a space
// when decoding
delete REST.Encoding.QueryHash["="];
delete REST.Encoding.QueryHash["&"];
delete REST.Encoding.QueryHash["+"];

/**
 * fragment = pchar / "/" / "?"
 */
REST.Encoding.FragmentHash = REST.Encoding.hash([].concat(REST.Encoding.PChar, ['/', '?']));

// HTTP

REST.Encoding.HTTPSeparators = ["(", ")", "<", ">", "@", ",", ";", ":", "\\", "\"", "/", "[", "]", "?", "=", "{", "}", ' ', '\t'];

// This should also hold the CTLs but we never need them
REST.Encoding.HTTPChar = [];
(function() {
 for (var i = 32; i < 127; i++)
  REST.Encoding.HTTPChar.push(String.fromCharCode(i));
})()

// CHAR - separators
REST.Encoding.HTTPToken = REST.Encoding.hash(REST.Encoding.HTTPChar);
(function() {
 for (var i = 0; i < REST.Encoding.HTTPSeparators.length; i++)
  delete REST.Encoding.HTTPToken[REST.Encoding.HTTPSeparators[i]];
})()

//
// functions

//see http://www.w3.org/TR/html4/interact/forms.html#h-17.13.4.1
//and http://www.apps.ietf.org/rfc/rfc1738.html#page-4
REST.Encoding.encodeFormNameOrValue = function(val) {
 return REST.Encoding.encodeValue(val, REST.Encoding.AlphaNumHash, true);
};


//see http://www.w3.org/Protocols/rfc2616/rfc2616-sec4.html#sec4.2
REST.Encoding.encodeHeaderName = function(val) {
 // token+ from http://www.w3.org/Protocols/rfc2616/rfc2616-sec2.html#sec2

 // There is no way to encode a header name. it is either a valid token or invalid and the 
 // XMLHttpRequest will fail (http://www.w3.org/TR/XMLHttpRequest/#the-setrequestheader-method)
 // What we could do here is throw if the value is invalid
 return val;
}

//see http://www.w3.org/Protocols/rfc2616/rfc2616-sec4.html#sec4.2
REST.Encoding.encodeHeaderValue = function(val) {
 // *TEXT or combinations of token, separators, and quoted-string from http://www.w3.org/Protocols/rfc2616/rfc2616-sec2.html#sec2
 // FIXME: implement me. Stef has given up, since it involves latin1, quoted strings, MIME encoding (http://www.ietf.org/rfc/rfc2047.txt)
 // which mentions a limit on encoded value of 75 chars, which should be split into several lines. This is mad.
 return val;
}

// see http://www.ietf.org/rfc/rfc3986.txt
REST.Encoding.encodeQueryParamNameOrValue = function(val) {
 return REST.Encoding.encodeValue(val, REST.Encoding.QueryHash);
}

//see http://www.ietf.org/rfc/rfc3986.txt
REST.Encoding.encodePathSegment = function(val) {
 return REST.Encoding.encodeValue(val, REST.Encoding.PathSegmentHash);
}

//see http://www.ietf.org/rfc/rfc3986.txt
REST.Encoding.encodePathParamName = function(val) {
 return REST.Encoding.encodeValue(val, REST.Encoding.PathParamHash);
}

//see http://www.ietf.org/rfc/rfc3986.txt
REST.Encoding.encodePathParamValue = function(val) {
 return REST.Encoding.encodeValue(val, REST.Encoding.PathParamValueHash);
}

REST.Encoding.encodeValue = function(val, allowed, form) {
 if (typeof val != "string") {
  REST.log("val is not a string");
  return val;
 }
 if (val.length == 0) {
  REST.log("empty string");
  return val;
 }
 var ret = '';
 for (var i = 0; i < val.length; i++) {
  var first = val[i];
  if (allowed[first] == 1) {
   REST.log("char allowed: " + first);
   ret = ret.concat(first);
  }
  else if (form && (first == ' ' || first == '\n')) {
   // special rules for application/x-www-form-urlencoded
   if (first == ' ')
    ret += '+';
   else
    ret += '%0D%0A';
  }
  else {
   // See http://www.faqs.org/rfcs/rfc2781.html 2.2

   // switch to codepoint
   first = val.charCodeAt(i);
   // utf-16 pair?
   if (first < 0xD800 || first > 0xDFFF) {
    // just a single utf-16 char
    ret = ret.concat(REST.Encoding.percentUTF8(first));
   }
   else {
    if (first > 0xDBFF || i + 1 >= val.length)
     throw "Invalid UTF-16 value: " + val;
    var second = val.charCodeAt(++i);
    if (second < 0xDC00 || second > 0xDFFF)
     throw "Invalid UTF-16 value: " + val;
    // char = 10 lower bits of first shifted left + 10 lower bits of second 
    var c = ((first & 0x3FF) << 10) | (second & 0x3FF);
    // and add this
    c += 0x10000;
    // char is now 32 bit unicode
    ret = ret.concat(REST.Encoding.percentUTF8(c));
   }
  }
 }
 return ret;
}

// see http://tools.ietf.org/html/rfc3629
REST.Encoding.percentUTF8 = function(c) {
 if (c < 0x80)
  return REST.Encoding.percentByte(c);
 if (c < 0x800) {
  var first = 0xC0 | ((c & 0x7C0) >> 6);
  var second = 0x80 | (c & 0x3F);
  return REST.Encoding.percentByte(first, second);
 }
 if (c < 0x10000) {
  var first = 0xE0 | ((c >> 12) & 0xF);
  var second = 0x80 | ((c >> 6) & 0x3F);
  var third = 0x80 | (c & 0x3F);
  return REST.Encoding.percentByte(first, second, third);
 }
 if (c < 0x110000) {
  var first = 0xF0 | ((c >> 18) & 0x7);
  var second = 0x80 | ((c >> 12) & 0x3F);
  var third = 0x80 | ((c >> 6) & 0x3F);
  var fourth = 0x80 | (c & 0x3F);
  return REST.Encoding.percentByte(first, second, third, fourth);
 }
 throw "Invalid character for UTF-8: " + c;
}

REST.Encoding.percentByte = function() {
 var ret = '';
 for (var i = 0; i < arguments.length; i++) {
  var b = arguments[i];
  if (b >= 0 && b <= 15)
   ret += "%0" + b.toString(16);
  else
   ret += "%" + b.toString(16);
 }
 return ret;
}

REST.serialiseXML = function(node) {
 if (typeof XMLSerializer != "undefined")
  return (new XMLSerializer()).serializeToString(node);
 else if (node.xml) return node.xml;
 else throw "XML.serialize is not supported or can't serialize " + node;
}
REST.apiURL = 'http://localhost:8080/etsmarketdata';
var IMarketDataRESTServices = {};


// POST /rest/routes/add
IMarketDataRESTServices.addRoute = function(_params) {
 var params = _params ? _params : {};
 var request = new REST.Request();
 request.setMethod('POST');
 var uri = params.$apiURL ? params.$apiURL : REST.apiURL;
 uri += '/rest/routes/add';
 if (params.$entity)
  request.setEntity(params.$entity);
 request.setURI(uri);
 if (params.$username && params.$password)
  request.setCredentials(params.$username, params.$password);
 if (params.$accepts)
  request.setAccepts(params.$accepts);
 else
  request.setAccepts('application/json');
 if (REST.antiBrowserCache == true) {
  request.addQueryParameter('resteasy_jsapi_anti_cache', (new Date().getTime()));
  var cached_obj = REST._get_cache_signature(REST._generate_cache_signature(uri));
  if (cached_obj != null) {
   request.addHeader('If-Modified-Since', cached_obj[1]['Last-Modified']);
   request.addHeader('If-None-Match', cached_obj[1]['Etag']);
  }
 }
 if (params.$contentType)
  request.setContentType(params.$contentType);
 else
  request.setContentType('application/json');
 if (params.$callback) {
  request.execute(params.$callback);
 }
 else {
  var returnValue;
  request.setAsync(false);
  var callback = function(httpCode, xmlHttpRequest, value) {
   returnValue = value;
  };
  request.execute(callback);
  return restWrapper(returnValue,request.method,uri);
 }
};
// POST /rest/routes/delete
IMarketDataRESTServices.deleteRoute = function(_params) {
 var params = _params ? _params : {};
 var request = new REST.Request();
 request.setMethod('POST');
 var uri = params.$apiURL ? params.$apiURL : REST.apiURL;
 uri += '/rest/routes/delete';
 if (params.$entity)
  request.setEntity(params.$entity);
 request.setURI(uri);
 if (params.$username && params.$password)
  request.setCredentials(params.$username, params.$password);
 if (params.$accepts)
  request.setAccepts(params.$accepts);
 else
  request.setAccepts('application/json');
 if (REST.antiBrowserCache == true) {
  request.addQueryParameter('resteasy_jsapi_anti_cache', (new Date().getTime()));
  var cached_obj = REST._get_cache_signature(REST._generate_cache_signature(uri));
  if (cached_obj != null) {
   request.addHeader('If-Modified-Since', cached_obj[1]['Last-Modified']);
   request.addHeader('If-None-Match', cached_obj[1]['Etag']);
  }
 }
 if (params.$contentType)
  request.setContentType(params.$contentType);
 else
  request.setContentType('application/json');
 if (params.$callback) {
  request.execute(params.$callback);
 }
 else {
  var returnValue;
  request.setAsync(false);
  var callback = function(httpCode, xmlHttpRequest, value) {
   returnValue = value;
  };
  request.execute(callback);
  return restWrapper(returnValue,request.method,uri);
 }
};
// POST /rest/symbols/delete
IMarketDataRESTServices.deleteInstrument = function(_params) {
 var params = _params ? _params : {};
 var request = new REST.Request();
 request.setMethod('POST');
 var uri = params.$apiURL ? params.$apiURL : REST.apiURL;
 uri += '/rest/symbols/delete';
 if (params.$entity)
  request.setEntity(params.$entity);
 request.setURI(uri);
 if (params.$username && params.$password)
  request.setCredentials(params.$username, params.$password);
 if (params.$accepts)
  request.setAccepts(params.$accepts);
 else
  request.setAccepts('application/json');
 if (REST.antiBrowserCache == true) {
  request.addQueryParameter('resteasy_jsapi_anti_cache', (new Date().getTime()));
  var cached_obj = REST._get_cache_signature(REST._generate_cache_signature(uri));
  if (cached_obj != null) {
   request.addHeader('If-Modified-Since', cached_obj[1]['Last-Modified']);
   request.addHeader('If-None-Match', cached_obj[1]['Etag']);
  }
 }
 if (params.$contentType)
  request.setContentType(params.$contentType);
 else
  request.setContentType('application/json');
 if (params.$callback) {
  request.execute(params.$callback);
 }
 else {
  var returnValue;
  request.setAsync(false);
  var callback = function(httpCode, xmlHttpRequest, value) {
   returnValue = value;
  };
  request.execute(callback);
  return restWrapper(returnValue,request.method,uri);
 }
};
// GET /rest/markups/{marketid}
IMarketDataRESTServices.getMarkupsForMarket = function(_params) {
 var params = _params ? _params : {};
 var request = new REST.Request();
 request.setMethod('GET');
 var uri = params.$apiURL ? params.$apiURL : REST.apiURL;
 uri += '/rest/markups/';
 uri += REST.Encoding.encodePathSegment(params.marketid);
 request.setURI(uri);
 if (params.$username && params.$password)
  request.setCredentials(params.$username, params.$password);
 if (params.$accepts)
  request.setAccepts(params.$accepts);
 else
  request.setAccepts('application/json');
 if (REST.antiBrowserCache == true) {
  request.addQueryParameter('resteasy_jsapi_anti_cache', (new Date().getTime()));
  var cached_obj = REST._get_cache_signature(REST._generate_cache_signature(uri));
  if (cached_obj != null) {
   request.addHeader('If-Modified-Since', cached_obj[1]['Last-Modified']);
   request.addHeader('If-None-Match', cached_obj[1]['Etag']);
  }
 }
 if (params.$contentType)
  request.setContentType(params.$contentType);
 else
  request.setContentType('text/plain');
 if (params.$callback) {
  request.execute(params.$callback);
 }
 else {
  var returnValue;
  request.setAsync(false);
  var callback = function(httpCode, xmlHttpRequest, value) {
   returnValue = value;
  };
  request.execute(callback);
  return restWrapper(returnValue,request.method,uri);
 }
};
// GET /rest/exchanges/{symbol}
IMarketDataRESTServices.getCandidateExchanges = function(_params) {
 var params = _params ? _params : {};
 var request = new REST.Request();
 request.setMethod('GET');
 var uri = params.$apiURL ? params.$apiURL : REST.apiURL;
 uri += '/rest/exchanges/';
 uri += REST.Encoding.encodePathSegment(params.symbol);
 request.setURI(uri);
 if (params.$username && params.$password)
  request.setCredentials(params.$username, params.$password);
 if (params.$accepts)
  request.setAccepts(params.$accepts);
 else
  request.setAccepts('application/json');
 if (REST.antiBrowserCache == true) {
  request.addQueryParameter('resteasy_jsapi_anti_cache', (new Date().getTime()));
  var cached_obj = REST._get_cache_signature(REST._generate_cache_signature(uri));
  if (cached_obj != null) {
   request.addHeader('If-Modified-Since', cached_obj[1]['Last-Modified']);
   request.addHeader('If-None-Match', cached_obj[1]['Etag']);
  }
 }
 if (params.$contentType)
  request.setContentType(params.$contentType);
 else
  request.setContentType('text/plain');
 if (params.$callback) {
  request.execute(params.$callback);
 }
 else {
  var returnValue;
  request.setAsync(false);
  var callback = function(httpCode, xmlHttpRequest, value) {
   returnValue = value;
  };
  request.execute(callback);
  return restWrapper(returnValue,request.method,uri);
 }
};
// GET /rest/symbols/exchange/{exchangeid}/{carrier}
IMarketDataRESTServices.getAllExchangeCarrierInstruments = function(_params) {
 var params = _params ? _params : {};
 var request = new REST.Request();
 request.setMethod('GET');
 var uri = params.$apiURL ? params.$apiURL : REST.apiURL;
 uri += '/rest/symbols/exchange/';
 uri += REST.Encoding.encodePathSegment(params.exchangeid);
 uri += '/';
 uri += REST.Encoding.encodePathSegment(params.carrier);
 request.setURI(uri);
 if (params.$username && params.$password)
  request.setCredentials(params.$username, params.$password);
 if (params.$accepts)
  request.setAccepts(params.$accepts);
 else
  request.setAccepts('application/json');
 if (REST.antiBrowserCache == true) {
  request.addQueryParameter('resteasy_jsapi_anti_cache', (new Date().getTime()));
  var cached_obj = REST._get_cache_signature(REST._generate_cache_signature(uri));
  if (cached_obj != null) {
   request.addHeader('If-Modified-Since', cached_obj[1]['Last-Modified']);
   request.addHeader('If-None-Match', cached_obj[1]['Etag']);
  }
 }
 if (params.$contentType)
  request.setContentType(params.$contentType);
 else
  request.setContentType('text/plain');
 if (params.$callback) {
  request.execute(params.$callback);
 }
 else {
  var returnValue;
  request.setAsync(false);
  var callback = function(httpCode, xmlHttpRequest, value) {
   returnValue = value;
  };
  request.execute(callback);
  return restWrapper(returnValue,request.method,uri);
 }
};
// GET /rest/routes/carriers/list
IMarketDataRESTServices.getAllCarriers = function(_params) {
 var params = _params ? _params : {};
 var request = new REST.Request();
 request.setMethod('GET');
 var uri = params.$apiURL ? params.$apiURL : REST.apiURL;
 uri += '/rest/routes/carriers/list';
 request.setURI(uri);
 if (params.$username && params.$password)
  request.setCredentials(params.$username, params.$password);
 if (params.$accepts)
  request.setAccepts(params.$accepts);
 else
  request.setAccepts('application/json');
 if (REST.antiBrowserCache == true) {
  request.addQueryParameter('resteasy_jsapi_anti_cache', (new Date().getTime()));
  var cached_obj = REST._get_cache_signature(REST._generate_cache_signature(uri));
  if (cached_obj != null) {
   request.addHeader('If-Modified-Since', cached_obj[1]['Last-Modified']);
   request.addHeader('If-None-Match', cached_obj[1]['Etag']);
  }
 }
 if (params.$contentType)
  request.setContentType(params.$contentType);
 else
  request.setContentType('text/plain');
 if (params.$callback) {
  request.execute(params.$callback);
 }
 else {
  var returnValue;
  request.setAsync(false);
  var callback = function(httpCode, xmlHttpRequest, value) {
   returnValue = value;
  };
  request.execute(callback);
  return restWrapper(returnValue,request.method,uri);
 }
};
// GET /rest/routes/carrierexchanges/list
IMarketDataRESTServices.getAllCarrierExchanges = function(_params) {
 var params = _params ? _params : {};
 var request = new REST.Request();
 request.setMethod('GET');
 var uri = params.$apiURL ? params.$apiURL : REST.apiURL;
 uri += '/rest/routes/carrierexchanges/list';
 request.setURI(uri);
 if (params.$username && params.$password)
  request.setCredentials(params.$username, params.$password);
 if (params.$accepts)
  request.setAccepts(params.$accepts);
 else
  request.setAccepts('application/json');
 if (REST.antiBrowserCache == true) {
  request.addQueryParameter('resteasy_jsapi_anti_cache', (new Date().getTime()));
  var cached_obj = REST._get_cache_signature(REST._generate_cache_signature(uri));
  if (cached_obj != null) {
   request.addHeader('If-Modified-Since', cached_obj[1]['Last-Modified']);
   request.addHeader('If-None-Match', cached_obj[1]['Etag']);
  }
 }
 if (params.$contentType)
  request.setContentType(params.$contentType);
 else
  request.setContentType('text/plain');
 if (params.$callback) {
  request.execute(params.$callback);
 }
 else {
  var returnValue;
  request.setAsync(false);
  var callback = function(httpCode, xmlHttpRequest, value) {
   returnValue = value;
  };
  request.execute(callback);
  return restWrapper(returnValue,request.method,uri);
 }
};
// GET /rest/routes/levels/list
IMarketDataRESTServices.getAllCarrierSupplierLevels = function(_params) {
 var params = _params ? _params : {};
 var request = new REST.Request();
 request.setMethod('GET');
 var uri = params.$apiURL ? params.$apiURL : REST.apiURL;
 uri += '/rest/routes/levels/list';
 request.setURI(uri);
 if (params.$username && params.$password)
  request.setCredentials(params.$username, params.$password);
 if (params.$accepts)
  request.setAccepts(params.$accepts);
 else
  request.setAccepts('application/json');
 if (REST.antiBrowserCache == true) {
  request.addQueryParameter('resteasy_jsapi_anti_cache', (new Date().getTime()));
  var cached_obj = REST._get_cache_signature(REST._generate_cache_signature(uri));
  if (cached_obj != null) {
   request.addHeader('If-Modified-Since', cached_obj[1]['Last-Modified']);
   request.addHeader('If-None-Match', cached_obj[1]['Etag']);
  }
 }
 if (params.$contentType)
  request.setContentType(params.$contentType);
 else
  request.setContentType('text/plain');
 if (params.$callback) {
  request.execute(params.$callback);
 }
 else {
  var returnValue;
  request.setAsync(false);
  var callback = function(httpCode, xmlHttpRequest, value) {
   returnValue = value;
  };
  request.execute(callback);
  return restWrapper(returnValue,request.method,uri);
 }
};
// POST /rest/routes/levels/add
IMarketDataRESTServices.addCarrierSupplierLevel = function(_params) {
 var params = _params ? _params : {};
 var request = new REST.Request();
 request.setMethod('POST');
 var uri = params.$apiURL ? params.$apiURL : REST.apiURL;
 uri += '/rest/routes/levels/add';
 if (params.$entity)
  request.setEntity(params.$entity);
 request.setURI(uri);
 if (params.$username && params.$password)
  request.setCredentials(params.$username, params.$password);
 if (params.$accepts)
  request.setAccepts(params.$accepts);
 else
  request.setAccepts('application/json');
 if (REST.antiBrowserCache == true) {
  request.addQueryParameter('resteasy_jsapi_anti_cache', (new Date().getTime()));
  var cached_obj = REST._get_cache_signature(REST._generate_cache_signature(uri));
  if (cached_obj != null) {
   request.addHeader('If-Modified-Since', cached_obj[1]['Last-Modified']);
   request.addHeader('If-None-Match', cached_obj[1]['Etag']);
  }
 }
 if (params.$contentType)
  request.setContentType(params.$contentType);
 else
  request.setContentType('application/json');
 if (params.$callback) {
  request.execute(params.$callback);
 }
 else {
  var returnValue;
  request.setAsync(false);
  var callback = function(httpCode, xmlHttpRequest, value) {
   returnValue = value;
  };
  request.execute(callback);
  return restWrapper(returnValue,request.method,uri);
 }
};
// POST /rest/exchanges/clone
IMarketDataRESTServices.cloneExchange = function(_params) {
 var params = _params ? _params : {};
 var request = new REST.Request();
 request.setMethod('POST');
 var uri = params.$apiURL ? params.$apiURL : REST.apiURL;
 uri += '/rest/exchanges/clone';
 if (params.$entity)
  request.setEntity(params.$entity);
 request.setURI(uri);
 if (params.$username && params.$password)
  request.setCredentials(params.$username, params.$password);
 if (params.$accepts)
  request.setAccepts(params.$accepts);
 else
  request.setAccepts('application/json');
 if (REST.antiBrowserCache == true) {
  request.addQueryParameter('resteasy_jsapi_anti_cache', (new Date().getTime()));
  var cached_obj = REST._get_cache_signature(REST._generate_cache_signature(uri));
  if (cached_obj != null) {
   request.addHeader('If-Modified-Since', cached_obj[1]['Last-Modified']);
   request.addHeader('If-None-Match', cached_obj[1]['Etag']);
  }
 }
 if (params.$contentType)
  request.setContentType(params.$contentType);
 else
  request.setContentType('application/json');
 if (params.$callback) {
  request.execute(params.$callback);
 }
 else {
  var returnValue;
  request.setAsync(false);
  var callback = function(httpCode, xmlHttpRequest, value) {
   returnValue = value; 
  };
  request.execute(callback);
  return restWrapper(returnValue,request.method,uri);
 }
};
// POST /rest/routes/levels/delete
IMarketDataRESTServices.deleteCarrierSupplierLevel = function(_params) {
 var params = _params ? _params : {};
 var request = new REST.Request();
 request.setMethod('POST');
 var uri = params.$apiURL ? params.$apiURL : REST.apiURL;
 uri += '/rest/routes/levels/delete';
 if (params.$entity)
  request.setEntity(params.$entity);
 request.setURI(uri);
 if (params.$username && params.$password)
  request.setCredentials(params.$username, params.$password);
 if (params.$accepts)
  request.setAccepts(params.$accepts);
 else 
  request.setAccepts('application/json');
 if (REST.antiBrowserCache == true) {
  request.addQueryParameter('resteasy_jsapi_anti_cache', (new Date().getTime()));
  var cached_obj = REST._get_cache_signature(REST._generate_cache_signature(uri));
  if (cached_obj != null) {
   request.addHeader('If-Modified-Since', cached_obj[1]['Last-Modified']);
   request.addHeader('If-None-Match', cached_obj[1]['Etag']);
  }
 }
 if (params.$contentType)
  request.setContentType(params.$contentType);
 else
  request.setContentType('application/json');
 if (params.$callback) {
  request.execute(params.$callback);
 }
 else {
  var returnValue;
  request.setAsync(false);
  var callback = function(httpCode, xmlHttpRequest, value) {
   returnValue = value;
  };
  request.execute(callback);
  return restWrapper(returnValue,request.method,uri);
 }
};
// POST /rest/exchanges/update
IMarketDataRESTServices.updateExchange = function(_params) {
 var params = _params ? _params : {};
 var request = new REST.Request();
 request.setMethod('POST');
 var uri = params.$apiURL ? params.$apiURL : REST.apiURL;
 uri += '/rest/exchanges/update';
 if (params.$entity)
  request.setEntity(params.$entity);
 request.setURI(uri);
 if (params.$username && params.$password)
  request.setCredentials(params.$username, params.$password);
 if (params.$accepts)
  request.setAccepts(params.$accepts);
 else
  request.setAccepts('application/json');
 if (REST.antiBrowserCache == true) {
  request.addQueryParameter('resteasy_jsapi_anti_cache', (new Date().getTime()));
  var cached_obj = REST._get_cache_signature(REST._generate_cache_signature(uri));
  if (cached_obj != null) {
   request.addHeader('If-Modified-Since', cached_obj[1]['Last-Modified']);
   request.addHeader('If-None-Match', cached_obj[1]['Etag']);
  }
 }
 if (params.$contentType)
  request.setContentType(params.$contentType);
 else
  request.setContentType('application/json');
 if (params.$callback) {
  request.execute(params.$callback);
 }
 else {
  var returnValue;
  request.setAsync(false);
  var callback = function(httpCode, xmlHttpRequest, value) {
   returnValue = value;
  };
  request.execute(callback);
  return restWrapper(returnValue,request.method,uri);
 }
};
// warning: unused
// GET /rest/routes/search
IMarketDataRESTServices.getMarketDataRoutes = function(_params) {
 var params = _params ? _params : {};
 var request = new REST.Request();
 request.setMethod('GET');
 var uri = params.$apiURL ? params.$apiURL : REST.apiURL;
 uri += '/rest/routes/search';
 if (Object.prototype.hasOwnProperty.call(params, 'level'))
  request.addQueryParameter('level', params.level);
 if (Object.prototype.hasOwnProperty.call(params, 'carrier'))
  request.addQueryParameter('carrier', params.carrier);
 if (Object.prototype.hasOwnProperty.call(params, 'supplier'))
  request.addQueryParameter('supplier', params.supplier);
 if (Object.prototype.hasOwnProperty.call(params, 'symbol'))
  request.addQueryParameter('symbol', params.symbol);
 if (Object.prototype.hasOwnProperty.call(params, 'marketid'))
  request.addQueryParameter('marketid', params.marketid);
 if (Object.prototype.hasOwnProperty.call(params, 'protocol'))
  request.addQueryParameter('protocol', params.protocol);
 request.setURI(uri);
 if (params.$username && params.$password)
  request.setCredentials(params.$username, params.$password);
 if (params.$accepts)
  request.setAccepts(params.$accepts);
 else
  request.setAccepts('application/json');
 if (REST.antiBrowserCache == true) {
  request.addQueryParameter('resteasy_jsapi_anti_cache', (new Date().getTime()));
  var cached_obj = REST._get_cache_signature(REST._generate_cache_signature(uri));
  if (cached_obj != null) {
   request.addHeader('If-Modified-Since', cached_obj[1]['Last-Modified']);
   request.addHeader('If-None-Match', cached_obj[1]['Etag']);
  }
 }
 if (params.$contentType)
  request.setContentType(params.$contentType);
 else
  request.setContentType('text/plain');
 if (params.$callback) {
  request.execute(params.$callback);
 }
 else {
  var returnValue;
  request.setAsync(false);
  var callback = function(httpCode, xmlHttpRequest, value) {
   returnValue = value;
  };
  request.execute(callback);
  return restWrapper(returnValue,request.method,uri);
 }
};
// GET /rest/routes/all/permitted
IMarketDataRESTServices.getAllPermittedRoutes = function(_params){
 var params = _params ? _params : {};
 var request = new REST.Request();
 request.setMethod('GET');
 var uri = params.$apiURL ? params.$apiURL : REST.apiURL;
 uri += '/rest/routes/all/permitted';
 request.setURI(uri);
 if(params.$username && params.$password)
  request.setCredentials(params.$username, params.$password);
 if(params.$accepts)
  request.setAccepts(params.$accepts);
 else
  request.setAccepts('application/json');
if (REST.antiBrowserCache == true) {
  request.addQueryParameter('resteasy_jsapi_anti_cache', (new Date().getTime()));
    var cached_obj = REST._get_cache_signature(REST._generate_cache_signature(uri));
    if (cached_obj != null) { request.addHeader('If-Modified-Since', cached_obj[1]['Last-Modified']); request.addHeader('If-None-Match', cached_obj[1]['Etag']);}
}
 if(params.$contentType)
  request.setContentType(params.$contentType);
 else
  request.setContentType('text/plain');
 if(params.$callback){
  request.execute(params.$callback);
 }else{
  var returnValue;
  request.setAsync(false);
  var callback = function(httpCode, xmlHttpRequest, value){ returnValue = value;};
  request.execute(callback);
  //console.log(returnValue);
  returnValue = strucCheck(returnValue);
  return returnValue //[{"subtopic":"feedhandler:8787","carrier":"LMAX","supplier":"LMAX","level":12,"marketid":1,"protocol":"com.tradedesksoftware.feedhandler.feed.tcp.MarxFeed","symbol":null,"description":"1 - LMAX"}];
 }
};
// warning : unused
// GET /rest/routes/{symbol}/permitted
IMarketDataRESTServices.getPermittedRoutes = function(_params) {
 var params = _params ? _params : {};
 var request = new REST.Request();
 request.setMethod('GET');
 var uri = params.$apiURL ? params.$apiURL : REST.apiURL;
 uri += '/rest/routes/';
 uri += REST.Encoding.encodePathSegment(params.symbol);
 uri += '/permitted';
 request.setURI(uri);
 if (params.$username && params.$password)
  request.setCredentials(params.$username, params.$password);
 if (params.$accepts)
  request.setAccepts(params.$accepts);
 else
  request.setAccepts('application/json');
 if (REST.antiBrowserCache == true) {
  request.addQueryParameter('resteasy_jsapi_anti_cache', (new Date().getTime()));
  var cached_obj = REST._get_cache_signature(REST._generate_cache_signature(uri));
  if (cached_obj != null) {
   request.addHeader('If-Modified-Since', cached_obj[1]['Last-Modified']);
   request.addHeader('If-None-Match', cached_obj[1]['Etag']);
  }
 }
 if (params.$contentType)
  request.setContentType(params.$contentType);
 else
  request.setContentType('text/plain');
 if (params.$callback) {
  request.execute(params.$callback);
 }
 else {
  var returnValue;
  request.setAsync(false);
  var callback = function(httpCode, xmlHttpRequest, value) {
   returnValue = value;
  };
  request.execute(callback);
  return restWrapper(returnValue,request.method,uri);
 }
};
// POST /rest/routes/carrierexchanges/add
IMarketDataRESTServices.addCarrierExchange = function(_params) {
 var params = _params ? _params : {};
 var request = new REST.Request();
 request.setMethod('POST');
 var uri = params.$apiURL ? params.$apiURL : REST.apiURL;
 uri += '/rest/routes/carrierexchanges/add';
 if (params.$entity)
  request.setEntity(params.$entity);
 request.setURI(uri);
 if (params.$username && params.$password)
  request.setCredentials(params.$username, params.$password);
 if (params.$accepts)
  request.setAccepts(params.$accepts);
 else
  request.setAccepts('application/json');
 if (REST.antiBrowserCache == true) {
  request.addQueryParameter('resteasy_jsapi_anti_cache', (new Date().getTime()));
  var cached_obj = REST._get_cache_signature(REST._generate_cache_signature(uri));
  if (cached_obj != null) {
   request.addHeader('If-Modified-Since', cached_obj[1]['Last-Modified']);
   request.addHeader('If-None-Match', cached_obj[1]['Etag']);
  }
 }
 if (params.$contentType)
  request.setContentType(params.$contentType);
 else
  request.setContentType('application/json');
 if (params.$callback) {
  request.execute(params.$callback);
 }
 else {
  var returnValue;
  request.setAsync(false);
  var callback = function(httpCode, xmlHttpRequest, value) {
   returnValue = value;
  };
  request.execute(callback);
  return restWrapper(returnValue,request.method,uri);
 }
};
// POST /rest/symbols/carrier/saveMultiple
IMarketDataRESTServices.saveCarrierSymbols = function(_params) {
 var params = _params ? _params : {};
 var request = new REST.Request();
 request.setMethod('POST');
 var uri = params.$apiURL ? params.$apiURL : REST.apiURL;
 uri += '/rest/symbols/carrier/saveMultiple';
 if (params.$entity)
  request.setEntity(params.$entity);
 request.setURI(uri);
 if (params.$username && params.$password)
  request.setCredentials(params.$username, params.$password);
 if (params.$accepts)
  request.setAccepts(params.$accepts);
 else
  request.setAccepts('application/json');
 if (REST.antiBrowserCache == true) {
  request.addQueryParameter('resteasy_jsapi_anti_cache', (new Date().getTime()));
  var cached_obj = REST._get_cache_signature(REST._generate_cache_signature(uri));
  if (cached_obj != null) {
   request.addHeader('If-Modified-Since', cached_obj[1]['Last-Modified']);
   request.addHeader('If-None-Match', cached_obj[1]['Etag']);
  }
 }
 if (params.$contentType)
  request.setContentType(params.$contentType);
 else
  request.setContentType('application/json');
 if (params.$callback) {
  request.execute(params.$callback);
 }
 else {
  var returnValue;
  request.setAsync(false);
  var callback = function(httpCode, xmlHttpRequest, value) {
   returnValue = value;
  };
  request.execute(callback);
  return restWrapper(returnValue,request.method,uri);
 }
};
// POST /rest/symbols/destination/saveMultiple
IMarketDataRESTServices.saveDestinationSymbols = function(_params) {
 var params = _params ? _params : {};
 var request = new REST.Request();
 request.setMethod('POST');
 var uri = params.$apiURL ? params.$apiURL : REST.apiURL;
 uri += '/rest/symbols/destination/saveMultiple';
 if (params.$entity)
  request.setEntity(params.$entity);
 request.setURI(uri);
 if (params.$username && params.$password)
  request.setCredentials(params.$username, params.$password);
 if (params.$accepts)
  request.setAccepts(params.$accepts);
 else
  request.setAccepts('application/json');
 if (REST.antiBrowserCache == true) {
  request.addQueryParameter('resteasy_jsapi_anti_cache', (new Date().getTime()));
  var cached_obj = REST._get_cache_signature(REST._generate_cache_signature(uri));
  if (cached_obj != null) {
   request.addHeader('If-Modified-Since', cached_obj[1]['Last-Modified']);
   request.addHeader('If-None-Match', cached_obj[1]['Etag']);
  }
 }
 if (params.$contentType)
  request.setContentType(params.$contentType);
 else
  request.setContentType('application/json');
 if (params.$callback) {
  request.execute(params.$callback);
 }
 else {
  var returnValue;
  request.setAsync(false);
  var callback = function(httpCode, xmlHttpRequest, value) {
   returnValue = value;
  };
  request.execute(callback);
  return restWrapper(returnValue,request.method,uri);
 }
};
// POST /rest/markups/update
IMarketDataRESTServices.saveMarkups = function(_params) {
 var params = _params ? _params : {};
 var request = new REST.Request();
 request.setMethod('POST');
 var uri = params.$apiURL ? params.$apiURL : REST.apiURL;
 uri += '/rest/markups/update';
 if (params.$entity)
  request.setEntity(params.$entity);
 request.setURI(uri);
 if (params.$username && params.$password)
  request.setCredentials(params.$username, params.$password);
 if (params.$accepts)
  request.setAccepts(params.$accepts);
 else
  request.setAccepts('application/json');
 if (REST.antiBrowserCache == true) {
  request.addQueryParameter('resteasy_jsapi_anti_cache', (new Date().getTime()));
  var cached_obj = REST._get_cache_signature(REST._generate_cache_signature(uri));
  if (cached_obj != null) {
   request.addHeader('If-Modified-Since', cached_obj[1]['Last-Modified']);
   request.addHeader('If-None-Match', cached_obj[1]['Etag']);
  }
 }
 if (params.$contentType)
  request.setContentType(params.$contentType);
 else
  request.setContentType('application/json');
 if (params.$callback) {
  request.execute(params.$callback);
 }
 else {
  var returnValue;
  request.setAsync(false);
  var callback = function(httpCode, xmlHttpRequest, value) {
   returnValue = value;
  };
  request.execute(callback);
  return restWrapper(returnValue,request.method,uri);
 }
};
// POST /rest/symbols/all
IMarketDataRESTServices.getInstruments = function(_params) {
 var params = _params ? _params : {};
 var request = new REST.Request();
 request.setMethod('POST');
 var uri = params.$apiURL ? params.$apiURL : REST.apiURL;
 uri += '/rest/symbols/all';
 if (params.$entity)
  request.setEntity(params.$entity);
 request.setURI(uri);
 if (params.$username && params.$password)
  request.setCredentials(params.$username, params.$password);
 if (params.$accepts)
  request.setAccepts(params.$accepts);
 else
  request.setAccepts('application/json');
 if (REST.antiBrowserCache == true) {
  request.addQueryParameter('resteasy_jsapi_anti_cache', (new Date().getTime()));
  var cached_obj = REST._get_cache_signature(REST._generate_cache_signature(uri));
  if (cached_obj != null) {
   request.addHeader('If-Modified-Since', cached_obj[1]['Last-Modified']);
   request.addHeader('If-None-Match', cached_obj[1]['Etag']);
  }
 }
 if (params.$contentType)
  request.setContentType(params.$contentType);
 else
  request.setContentType('application/json');
 if (params.$callback) {
  request.execute(params.$callback);
 }
 else {
  var returnValue;
  request.setAsync(false);
  var callback = function(httpCode, xmlHttpRequest, value) {
   returnValue = value;
  };
  request.execute(callback);
  var keys = Object.keys(returnValue)
  for (var item in keys) {
    returnValue[keys[item]].attributes.shift()
    console.log(returnValue)
  }
  return returnValue;
 }
};
// POST /rest/symbols/update
IMarketDataRESTServices.updateSymbolInfo = function(_params) {
 var params = _params ? _params : {};
 var request = new REST.Request();
 request.setMethod('POST');
 var uri = params.$apiURL ? params.$apiURL : REST.apiURL;
 uri += '/rest/symbols/update';
 if (params.$entity)
  request.setEntity(params.$entity);
 request.setURI(uri);
 if (params.$username && params.$password)
  request.setCredentials(params.$username, params.$password);
 if (params.$accepts)
  request.setAccepts(params.$accepts);
 else
  request.setAccepts('application/json');
 if (REST.antiBrowserCache == true) {
  request.addQueryParameter('resteasy_jsapi_anti_cache', (new Date().getTime()));
  var cached_obj = REST._get_cache_signature(REST._generate_cache_signature(uri));
  if (cached_obj != null) {
   request.addHeader('If-Modified-Since', cached_obj[1]['Last-Modified']);
   request.addHeader('If-None-Match', cached_obj[1]['Etag']);
  }
 }
 if (params.$contentType)
  request.setContentType(params.$contentType);
 else
  request.setContentType('application/json');
 if (params.$callback) {
  request.execute(params.$callback);
 }
 else {
  var returnValue;
  request.setAsync(false);
  var callback = function(httpCode, xmlHttpRequest, value) {
   returnValue = value;
  };
  request.execute(callback);
  return restWrapper(returnValue,request.method,uri);
 }
};
// GET /rest/symbols/exchange/{exchangeid}
IMarketDataRESTServices.getExchangeInstruments = function(_params) {
 var params = _params ? _params : {};
 var request = new REST.Request();
 request.setMethod('GET');
 var uri = params.$apiURL ? params.$apiURL : REST.apiURL;
 uri += '/rest/symbols/exchange/';
 uri += REST.Encoding.encodePathSegment(params.exchangeid);
 request.setURI(uri);
 if (params.$username && params.$password)
  request.setCredentials(params.$username, params.$password);
 if (params.$accepts)
  request.setAccepts(params.$accepts);
 else
  request.setAccepts('application/json');
 if (REST.antiBrowserCache == true) {
  request.addQueryParameter('resteasy_jsapi_anti_cache', (new Date().getTime()));
  var cached_obj = REST._get_cache_signature(REST._generate_cache_signature(uri));
  if (cached_obj != null) {
   request.addHeader('If-Modified-Since', cached_obj[1]['Last-Modified']);
   request.addHeader('If-None-Match', cached_obj[1]['Etag']);
  }
 }
 if (params.$contentType)
  request.setContentType(params.$contentType);
 else
  request.setContentType('text/plain');
 if (params.$callback) {
  request.execute(params.$callback);
 }
 else {
  var returnValue;
  request.setAsync(false);
  var callback = function(httpCode, xmlHttpRequest, value) {
   returnValue = value;
  };
  request.execute(callback);
  
  return getSymbols(returnValue);
  //return returnValue;
 }
}; 
// POST /rest/routes/suppliers/delete
IMarketDataRESTServices.deleteSupplier = function(_params) {
 var params = _params ? _params : {};
 var request = new REST.Request();
 request.setMethod('POST');
 var uri = params.$apiURL ? params.$apiURL : REST.apiURL;
 uri += '/rest/routes/suppliers/delete';
 if (params.$entity)
  request.setEntity(params.$entity);
 request.setURI(uri);
 if (params.$username && params.$password)
  request.setCredentials(params.$username, params.$password);
 if (params.$accepts)
  request.setAccepts(params.$accepts);
 else
  request.setAccepts('application/json');
 if (REST.antiBrowserCache == true) {
  request.addQueryParameter('resteasy_jsapi_anti_cache', (new Date().getTime()));
  var cached_obj = REST._get_cache_signature(REST._generate_cache_signature(uri));
  if (cached_obj != null) {
   request.addHeader('If-Modified-Since', cached_obj[1]['Last-Modified']);
   request.addHeader('If-None-Match', cached_obj[1]['Etag']);
  }
 }
 if (params.$contentType)
  request.setContentType(params.$contentType);
 else
  request.setContentType('application/json');
 if (params.$callback) {
  request.execute(params.$callback);
 }
 else {
  var returnValue;
  request.setAsync(false);
  var callback = function(httpCode, xmlHttpRequest, value) {
   returnValue = value;
  };
  request.execute(callback);
  return restWrapper(returnValue,request.method,uri);
 }
};
// POST /rest/routes/carriers/delete
IMarketDataRESTServices.deleteCarrier = function(_params) {
 var params = _params ? _params : {};
 var request = new REST.Request();
 request.setMethod('POST');
 var uri = params.$apiURL ? params.$apiURL : REST.apiURL;
 uri += '/rest/routes/carriers/delete';
 if (params.$entity)
  request.setEntity(params.$entity);
 request.setURI(uri);
 if (params.$username && params.$password)
  request.setCredentials(params.$username, params.$password);
 if (params.$accepts)
  request.setAccepts(params.$accepts);
 else
  request.setAccepts('application/json');
 if (REST.antiBrowserCache == true) {
  request.addQueryParameter('resteasy_jsapi_anti_cache', (new Date().getTime()));
  var cached_obj = REST._get_cache_signature(REST._generate_cache_signature(uri));
  if (cached_obj != null) {
   request.addHeader('If-Modified-Since', cached_obj[1]['Last-Modified']);
   request.addHeader('If-None-Match', cached_obj[1]['Etag']);
  }
 }
 if (params.$contentType)
  request.setContentType(params.$contentType);
 else
  request.setContentType('application/json');
 if (params.$callback) {
  request.execute(params.$callback);
 }
 else {
  var returnValue;
  request.setAsync(false);
  var callback = function(httpCode, xmlHttpRequest, value) {
   returnValue = value;
  };
  request.execute(callback);
  return restWrapper(returnValue,request.method,uri);
 }
};
// GET /rest/symbols/destination/{destid}/{instrumentID}/{destSymbol}
IMarketDataRESTServices.saveDestinationSymbol = function(_params) {
 var params = _params ? _params : {};
 var request = new REST.Request();
 request.setMethod('GET');
 var uri = params.$apiURL ? params.$apiURL : REST.apiURL;
 uri += '/rest/symbols/destination/';
 uri += REST.Encoding.encodePathSegment(params.destid);
 uri += '/';
 uri += REST.Encoding.encodePathSegment(params.instrumentID);
 uri += '/';
 uri += REST.Encoding.encodePathSegment(params.destSymbol);
 request.setURI(uri);
 if (params.$username && params.$password)
  request.setCredentials(params.$username, params.$password);
 if (params.$accepts)
  request.setAccepts(params.$accepts);
 else
  request.setAccepts('application/json');
 if (REST.antiBrowserCache == true) {
  request.addQueryParameter('resteasy_jsapi_anti_cache', (new Date().getTime()));
  var cached_obj = REST._get_cache_signature(REST._generate_cache_signature(uri));
  if (cached_obj != null) {
   request.addHeader('If-Modified-Since', cached_obj[1]['Last-Modified']);
   request.addHeader('If-None-Match', cached_obj[1]['Etag']);
  }
 }
 if (params.$contentType)
  request.setContentType(params.$contentType);
 else
  request.setContentType('application/json');
 if (params.$callback) {
  request.execute(params.$callback);
 }
 else {
  var returnValue;
  request.setAsync(false);
  var callback = function(httpCode, xmlHttpRequest, value) {
   returnValue = value;
  };
  request.execute(callback);
  return restWrapper(returnValue,request.method,uri);
 }
};
// GET /rest/symbols/carrier/{carrierID}/{instrumentID}/{carrierSymbol}
IMarketDataRESTServices.saveCarrierSymbol = function(_params) {
 var params = _params ? _params : {};
 var request = new REST.Request();
 request.setMethod('GET');
 var uri = params.$apiURL ? params.$apiURL : REST.apiURL;
 uri += '/rest/symbols/carrier/';
 uri += REST.Encoding.encodePathSegment(params.carrierID);
 uri += '/';
 uri += REST.Encoding.encodePathSegment(params.instrumentID);
 uri += '/';
 uri += REST.Encoding.encodePathSegment(params.carrierSymbol);
 request.setURI(uri);
 if (params.$username && params.$password)
  request.setCredentials(params.$username, params.$password);
 if (params.$accepts)
  request.setAccepts(params.$accepts);
 else
  request.setAccepts('application/json');
 if (REST.antiBrowserCache == true) {
  request.addQueryParameter('resteasy_jsapi_anti_cache', (new Date().getTime()));
  var cached_obj = REST._get_cache_signature(REST._generate_cache_signature(uri));
  if (cached_obj != null) {
   request.addHeader('If-Modified-Since', cached_obj[1]['Last-Modified']);
   request.addHeader('If-None-Match', cached_obj[1]['Etag']);
  }
 }
 if (params.$contentType)
  request.setContentType(params.$contentType);
 else
  request.setContentType('application/json');
 if (params.$callback) {
  request.execute(params.$callback);
 }
 else {
  var returnValue;
  request.setAsync(false);
  var callback = function(httpCode, xmlHttpRequest, value) {
   returnValue = value;
  };
  request.execute(callback);
  return restWrapper(returnValue,request.method,uri);
 }
};
// GET /rest/exchanges/all
IMarketDataRESTServices.getExchanges = function(_params) {
 var params = _params ? _params : {};
 var request = new REST.Request();
 request.setMethod('GET');
 var uri = params.$apiURL ? params.$apiURL : REST.apiURL;
 uri += '/rest/exchanges/all';
 request.setURI(uri);
 if (params.$username && params.$password)
  request.setCredentials(params.$username, params.$password);
 if (params.$accepts)
  request.setAccepts(params.$accepts);
 else
  request.setAccepts('application/json');
 if (REST.antiBrowserCache == true) {
  request.addQueryParameter('resteasy_jsapi_anti_cache', (new Date().getTime()));
  var cached_obj = REST._get_cache_signature(REST._generate_cache_signature(uri));
  if (cached_obj != null) {
   request.addHeader('If-Modified-Since', cached_obj[1]['Last-Modified']);
   request.addHeader('If-None-Match', cached_obj[1]['Etag']);
  }
 }
 if (params.$contentType)
  request.setContentType(params.$contentType);
 else
  request.setContentType('text/plain');
 if (params.$callback) {
  request.execute(params.$callback);
 }
 else {
  var returnValue;
  request.setAsync(false);
  var callback = function(httpCode, xmlHttpRequest, value) {
   returnValue = value;
  };
  request.execute(callback);
//  returnValue = [{"id":1,"description":"LMAX","micCode":"LMX","fix42Code":"LMX"}]
  return restWrapper(returnValue,request.method,uri);
 }
};
// POST /rest/routes/carrierexchanges/delete
IMarketDataRESTServices.deleteCarrierExchange = function(_params) {
 var params = _params ? _params : {};
 var request = new REST.Request();
 request.setMethod('POST');
 var uri = params.$apiURL ? params.$apiURL : REST.apiURL;
 uri += '/rest/routes/carrierexchanges/delete';
 if (params.$entity)
  request.setEntity(params.$entity);
 request.setURI(uri);
 if (params.$username && params.$password)
  request.setCredentials(params.$username, params.$password);
 if (params.$accepts)
  request.setAccepts(params.$accepts);
 else
  request.setAccepts('application/json');
 if (REST.antiBrowserCache == true) {
  request.addQueryParameter('resteasy_jsapi_anti_cache', (new Date().getTime()));
  var cached_obj = REST._get_cache_signature(REST._generate_cache_signature(uri));
  if (cached_obj != null) {
   request.addHeader('If-Modified-Since', cached_obj[1]['Last-Modified']);
   request.addHeader('If-None-Match', cached_obj[1]['Etag']);
  }
 }
 if (params.$contentType)
  request.setContentType(params.$contentType);
 else
  request.setContentType('application/json');
 if (params.$callback) {
  request.execute(params.$callback);
 }
 else {
  var returnValue;
  request.setAsync(false);
  var callback = function(httpCode, xmlHttpRequest, value) {
   returnValue = value;
  };
  request.execute(callback);
  return restWrapper(returnValue,request.method,uri);
 }
};
// POST /rest/exchanges/delete
IMarketDataRESTServices.deleteExchange = function(_params) {
 var params = _params ? _params : {};
 var request = new REST.Request();
 request.setMethod('POST');
 var uri = params.$apiURL ? params.$apiURL : REST.apiURL;
 uri += '/rest/exchanges/delete';
 if (params.$entity)
  request.setEntity(params.$entity);
 request.setURI(uri);
 if (params.$username && params.$password)
  request.setCredentials(params.$username, params.$password);
 if (params.$accepts)
  request.setAccepts(params.$accepts);
 else
  request.setAccepts('application/json');
 if (REST.antiBrowserCache == true) {
  request.addQueryParameter('resteasy_jsapi_anti_cache', (new Date().getTime()));
  var cached_obj = REST._get_cache_signature(REST._generate_cache_signature(uri));
  if (cached_obj != null) {
   request.addHeader('If-Modified-Since', cached_obj[1]['Last-Modified']);
   request.addHeader('If-None-Match', cached_obj[1]['Etag']);
  }
 }
 if (params.$contentType)
  request.setContentType(params.$contentType);
 else
  request.setContentType('application/json');
 if (params.$callback) {
  request.execute(params.$callback);
 }
 else {
  var returnValue;
  request.setAsync(false);
  var callback = function(httpCode, xmlHttpRequest, value) {
   returnValue = value;
  };
  request.execute(callback);
  return restWrapper(returnValue,request.method,uri);
 }
};
// GET /rest/symbols/destination/{destid}
IMarketDataRESTServices.getDestinationInstruments = function(_params) {
 var params = _params ? _params : {};
 var request = new REST.Request();
 request.setMethod('GET');
 var uri = params.$apiURL ? params.$apiURL : REST.apiURL;
 uri += '/rest/symbols/destination/';
 uri += REST.Encoding.encodePathSegment(params.destid);
 request.setURI(uri);
 if (params.$username && params.$password)
  request.setCredentials(params.$username, params.$password);
 if (params.$accepts)
  request.setAccepts(params.$accepts);
 else
  request.setAccepts('application/json');
 if (REST.antiBrowserCache == true) {
  request.addQueryParameter('resteasy_jsapi_anti_cache', (new Date().getTime()));
  var cached_obj = REST._get_cache_signature(REST._generate_cache_signature(uri));
  if (cached_obj != null) {
   request.addHeader('If-Modified-Since', cached_obj[1]['Last-Modified']);
   request.addHeader('If-None-Match', cached_obj[1]['Etag']);
  }
 }
 if (params.$contentType)
  request.setContentType(params.$contentType);
 else
  request.setContentType('text/plain');
 if (params.$callback) {
  request.execute(params.$callback);
 }
 else {
  var returnValue;
  request.setAsync(false);
  var callback = function(httpCode, xmlHttpRequest, value) {
   returnValue = value;
  };
  request.execute(callback);
  return restWrapper(returnValue,request.method,uri);
 }
};
// POST /rest/routes/carriers/add
IMarketDataRESTServices.addCarrier = function(_params) {
 var params = _params ? _params : {};
 var request = new REST.Request();
 request.setMethod('POST');
 var uri = params.$apiURL ? params.$apiURL : REST.apiURL;
 uri += '/rest/routes/carriers/add';
 if (params.$entity)
  request.setEntity(params.$entity);
 request.setURI(uri);
 if (params.$username && params.$password)
  request.setCredentials(params.$username, params.$password);
 if (params.$accepts)
  request.setAccepts(params.$accepts);
 else
  request.setAccepts('application/json');
 if (REST.antiBrowserCache == true) {
  request.addQueryParameter('resteasy_jsapi_anti_cache', (new Date().getTime()));
  var cached_obj = REST._get_cache_signature(REST._generate_cache_signature(uri));
  if (cached_obj != null) {
   request.addHeader('If-Modified-Since', cached_obj[1]['Last-Modified']);
   request.addHeader('If-None-Match', cached_obj[1]['Etag']);
  }
 }
 if (params.$contentType)
  request.setContentType(params.$contentType);
 else
  request.setContentType('application/json');
 if (params.$callback) {
  request.execute(params.$callback);
 }
 else {
  var returnValue;
  request.setAsync(false);
  var callback = function(httpCode, xmlHttpRequest, value) {
   returnValue = value;
  };
  request.execute(callback);
  return restWrapper(returnValue,request.method,uri);
 }
};
// POST /rest/routes/suppliers/add
IMarketDataRESTServices.addSupplier = function(_params) {
 var params = _params ? _params : {};
 var request = new REST.Request();
 request.setMethod('POST');
 var uri = params.$apiURL ? params.$apiURL : REST.apiURL;
 uri += '/rest/routes/suppliers/add';
 if (params.$entity)
  request.setEntity(params.$entity);
 request.setURI(uri);
 if (params.$username && params.$password)
  request.setCredentials(params.$username, params.$password);
 if (params.$accepts)
  request.setAccepts(params.$accepts);
 else
  request.setAccepts('application/json');
 if (REST.antiBrowserCache == true) {
  request.addQueryParameter('resteasy_jsapi_anti_cache', (new Date().getTime()));
  var cached_obj = REST._get_cache_signature(REST._generate_cache_signature(uri));
  if (cached_obj != null) {
   request.addHeader('If-Modified-Since', cached_obj[1]['Last-Modified']);
   request.addHeader('If-None-Match', cached_obj[1]['Etag']);
  }
 }
 if (params.$contentType)
  request.setContentType(params.$contentType);
 else
  request.setContentType('application/json');
 if (params.$callback) {
  request.execute(params.$callback);
 }
 else {
  var returnValue;
  request.setAsync(false);
  var callback = function(httpCode, xmlHttpRequest, value) {
   returnValue = value;
  };
  request.execute(callback);
  return restWrapper(returnValue,request.method,uri);
 }
};
// GET /rest/routes/{symbol}/all
IMarketDataRESTServices.getRoutes = function(_params) {
 var params = _params ? _params : {};
 var request = new REST.Request();
 request.setMethod('GET');
 var uri = params.$apiURL ? params.$apiURL : REST.apiURL;
 uri += '/rest/routes/';
 uri += REST.Encoding.encodePathSegment(params.symbol);
 uri += '/all';
 request.setURI(uri);
 if (params.$username && params.$password)
  request.setCredentials(params.$username, params.$password);
 if (params.$accepts)
  request.setAccepts(params.$accepts);
 else
  request.setAccepts('application/json');
 if (REST.antiBrowserCache == true) {
  request.addQueryParameter('resteasy_jsapi_anti_cache', (new Date().getTime()));
  var cached_obj = REST._get_cache_signature(REST._generate_cache_signature(uri));
  if (cached_obj != null) {
   request.addHeader('If-Modified-Since', cached_obj[1]['Last-Modified']);
   request.addHeader('If-None-Match', cached_obj[1]['Etag']);
  }
 }
 if (params.$contentType)
  request.setContentType(params.$contentType);
 else
  request.setContentType('text/plain');
 if (params.$callback) {
  request.execute(params.$callback);
 }
 else {
  var returnValue;
  request.setAsync(false);
  var callback = function(httpCode, xmlHttpRequest, value) {
   returnValue = value;
  };
  request.execute(callback);
  return restWrapper(returnValue,request.method,uri);
 }
};
// POST /rest/symbols/search
IMarketDataRESTServices.findSymbolInfo = function(_params) {
 var params = _params ? _params : {};
 var request = new REST.Request();
 request.setMethod('POST');
 var uri = params.$apiURL ? params.$apiURL : REST.apiURL;
 uri += '/rest/symbols/search';
 if (params.$entity)
  request.setEntity(params.$entity);
 request.setURI(uri);
 if (params.$username && params.$password)
  request.setCredentials(params.$username, params.$password);
 if (params.$accepts)
  request.setAccepts(params.$accepts);
 else
  request.setAccepts('application/json');
 if (REST.antiBrowserCache == true) {
  request.addQueryParameter('resteasy_jsapi_anti_cache', (new Date().getTime()));
  var cached_obj = REST._get_cache_signature(REST._generate_cache_signature(uri));
  if (cached_obj != null) {
   request.addHeader('If-Modified-Since', cached_obj[1]['Last-Modified']);
   request.addHeader('If-None-Match', cached_obj[1]['Etag']);
  }
 }
 if (params.$contentType)
  request.setContentType(params.$contentType);
 else
  request.setContentType('application/json');
 if (params.$callback) {
  request.execute(params.$callback);
 }
 else {
  var returnValue;
  request.setAsync(false);
  var callback = function(httpCode, xmlHttpRequest, value) {
   returnValue = value;
  };
  request.execute(callback);
  return restWrapper(returnValue,request.method,uri);
 }
};
// GET /rest/routes/suppliers/list
IMarketDataRESTServices.getAllSuppliers = function(_params) {
 var params = _params ? _params : {};
 var request = new REST.Request();
 request.setMethod('GET');
 var uri = params.$apiURL ? params.$apiURL : REST.apiURL;
 uri += '/rest/routes/suppliers/list';
 request.setURI(uri);
 if (params.$username && params.$password)
  request.setCredentials(params.$username, params.$password);
 if (params.$accepts)
  request.setAccepts(params.$accepts);
 else
  request.setAccepts('application/json');
 if (REST.antiBrowserCache == true) {
  request.addQueryParameter('resteasy_jsapi_anti_cache', (new Date().getTime()));
  var cached_obj = REST._get_cache_signature(REST._generate_cache_signature(uri));
  if (cached_obj != null) {
   request.addHeader('If-Modified-Since', cached_obj[1]['Last-Modified']);
   request.addHeader('If-None-Match', cached_obj[1]['Etag']);
  }
 }
 if (params.$contentType)
  request.setContentType(params.$contentType);
 else
  request.setContentType('text/plain');
 if (params.$callback) {
  request.execute(params.$callback);
 }
 else {
  var returnValue;
  request.setAsync(false);
  var callback = function(httpCode, xmlHttpRequest, value) {
   returnValue = value;
  };
  request.execute(callback);
  return restWrapper(returnValue,request.method,uri);
 }
};
