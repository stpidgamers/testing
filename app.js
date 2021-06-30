const express = require("express");
const request = require("request")
const app = express();


request({
    url: "http://checkip.amazonaws.com/",
    json: false
}, (err,response,body) => {
    console.log(body);
});
