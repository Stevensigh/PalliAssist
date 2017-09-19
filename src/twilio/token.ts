
import { Component } from '@angular/core';

//jQUery to make an Ajax request to the server

export class Token {

    constructor() { }
    

public fetchAccessToken(handler) {


}

//Generate user token
public tokenGenerator(identity, deviceId) {
    const appName = 'palliAssist';

    //creating unique userID
    const userID = appName + ':' + identity + ':' + deviceId;

}


}