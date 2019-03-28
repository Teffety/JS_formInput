'use strict';

export default function Ajax(method, url, type) {
  let xhr = new XMLHttpRequest();
  if (method.toLowerCase() == "get") {

    if ("withCredentials" in xhr) {
      // XHR for Chrome/Firefox/Opera/Safari.
      xhr.open(method, url, type);
    } else if (typeof ActiveXObject != "undefined") {
      // XDomainRequest for IE.
      xhr = new XDomainRequest();
      xhr.open(method, url);
    } else {
      // CORS not supported.
      xhr = null;
    }

    //  xhr.setRequestHeader("Access-Control-Allow-Origin", "application/x-www-form-urlencoded; charset=utf-8");
  } else if (method.toLowerCase() == "post") {

    if ("withCredentials" in xhr) {
      // XHR for Chrome/Firefox/Opera/Safari.

      xhr.open(method, url, type);
    } else if (typeof XDomainRequest != "undefined") {
      // XDomainRequest for IE.
      xhr = new XDomainRequest();
      xhr.open(method, url);
    } else {
      // CORS not supported.
      xhr = null;
    }

    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");

  }

  return xhr;

}
