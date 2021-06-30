const express = require("express");
const app = express();
const packetsToSend = [1,2,3,4,5];
for (let index = 0; index < packetsToSend.length; index++) {
    const element = packetsToSend[index];
    if (element != 4){
        console.log("sent packet from API " + element);
    }
    if (element == 4){
        console.log("API 4 Failed : down for maintenance")
    }
}