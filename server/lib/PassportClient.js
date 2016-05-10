var RestClient = require("./RESTClient.js");
var http = require('http');
var https = require('https');

PassportClient = function (apiKey, host) {
  this.apiKey = apiKey;
  this.host = host;
};

PassportClient.constructor = PassportClient;

PassportClient.prototype = {
  login: function (loginRequest, responseHandler) {
    var postData = JSON.stringify(loginRequest);
    var uri = this.host.split(':');
    var options = {
      hostname: uri[1].split("//")[1] !== null ? uri[1].split("//")[1] : "127.0.0.1",
      port: uri[2] !== null ? uri[2] : "80",
      path: "/api/login",
      method: "POST",
      headers: {
        "Authorization": this.apiKey,
        "Content-Type": "application/json",
        "Content-Length": postData.length
      }
    };
    if (uri[0] === "https") {
      https.request(options, function (response) {
        var clientResponse = new RestClient.ClientResponse(response.statusCode, null);
        response.on("data", function (data) {
          var json = JSON.parse(data);
          if (clientResponse.wasSuccessful()) {
            clientResponse.successResponse = json;
          } else {
            clientResponse.errorResponse = json;
          }
        }).on("error", function (error) {
          var json = JSON.parse(error);
          clientResponse.exception = json;
        }).on("exception", function (error) {
          var json = JSON.parse(error);
          clientResponse.exception = json;
        }).on("end", function () {
          responseHandler(clientResponse);
        });
      }).on("error", function (error) {
        var clientResponse = new RestClient.ClientResponse(500, null);
        clientResponse.exception = error;
        responseHandler(clientResponse);
      }).end(postData);
    } else {
      http.request(options, function (response) {
        var clientResponse = new RestClient.ClientResponse(response.statusCode, null);
        response.on("data", function (data) {
          var json = JSON.parse(data);
          if (clientResponse.wasSuccessful()) {
            clientResponse.successResponse = json;
          } else {
            clientResponse.errorResponse = json;
          }
        }).on("error", function (error) {
          var json = JSON.parse(error);
          clientResponse.exception = json;
        }).on("exception", function (error) {
          var json = JSON.parse(error);
          clientResponse.exception = json;
        }).on("end", function () {
          responseHandler(clientResponse);
        });
      }).on("error", function (error) {
        var clientResponse = new RestClient.ClientResponse(500, null);
        clientResponse.exception = error;
        responseHandler(clientResponse);
      }).end(postData);
    }
  },
  register: function (registrationRequest, responseHandler) {
    var postData = JSON.stringify(registrationRequest);
    var uri = this.host.split(':');
    var options = {
      hostname: uri[1].split("//")[1] !== null ? uri[1].split("//")[1] : "127.0.0.1",
      port: uri[2] !== null ? uri[2] : "80",
      path: "/api/user/registration",
      method: "POST",
      headers: {
        "Authorization": this.apiKey,
        "Content-Type": "application/json",
        "Content-Length": postData.length
      }
    };

    if (uri[0] === "https") {
      https.request(options, function (response) {
        var clientResponse = new RestClient.ClientResponse(response.statusCode, null);
        response.on("data", function (data) {
          var json = JSON.parse(data);
          if (clientResponse.wasSuccessful()) {
            clientResponse.successResponse = json;
          } else {
            clientResponse.errorResponse = json;
          }
        }).on("error", function (error) {
          var json = JSON.parse(error);
          clientResponse.exception = json;
        }).on("exception", function (error) {
          var json = JSON.parse(error);
          clientResponse.exception = json;
        }).on("end", function () {
          responseHandler(clientResponse);
        });
      }).on("error", function (error) {
        var clientResponse = new RestClient.ClientResponse(500, null);
        clientResponse.exception = error;
        responseHandler(clientResponse);
      }).end(postData);
    } else {
      http.request(options, function (response) {
        var clientResponse = new RestClient.ClientResponse(response.statusCode, null);
        response.on("data", function (data) {
          var json = JSON.parse(data);
          if (clientResponse.wasSuccessful()) {
            clientResponse.successResponse = json;
          } else {
            clientResponse.errorResponse = json;
          }
        }).on("error", function (error) {
          var json = JSON.parse(error);
          clientResponse.exception = json;
        }).on("exception", function (error) {
          var json = JSON.parse(error);
          clientResponse.exception = json;
        }).on("end", function () {
          responseHandler(clientResponse);
        });
      }).on("error", function (error) {
        var clientResponse = new RestClient.ClientResponse(500, null);
        clientResponse.exception = error;
        responseHandler(clientResponse);
      }).end(postData);
    }
  }
};
module.exports.PassportClient = PassportClient;
