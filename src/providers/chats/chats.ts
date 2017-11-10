import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';
import {DbProvider,QueryModel} from '../db/db';

import { AuthProvider } from '../auth/auth';

import { tableNames } from '../../app/app.constants';

@Injectable()
export class ChatsProvider {

  constructor(public authProvider: AuthProvider, public db: DbProvider) {
  }

  getMessages(channelId: string = 'general') {

    return this.db.list(`${tableNames.ChatMessage}/${channelId}`)
      .map(messages => messages.map((item) => {
        item.day = new Date(item.timestamp || Date.now()).getDate();

        if (item.from)
          item.user = this.authProvider.getFullProfile(item.from);

          return item;
      }));
  }

  getLastMessages(channelId: string = 'general', count: number = 5) {
    let query = new QueryModel();
    query.limitToLast = 5;
    query.orderByKey = true;
    return this.db.list(`${tableNames.ChatMessage}/${channelId}`, query).map(messages => 
      messages.reverse().map((item) => {
        if (item.from)
          item.user = this.authProvider.getFullProfile(item.from);

          return item;
}));
  }

  sendMessage(userId: string, message: string, channelId: string = 'general') {
    return this.db.push(`${tableNames.ChatMessage}/${channelId}`, {
      from: userId,
      message: message,
      timestamp: firebase.database['ServerValue']['TIMESTAMP']
});
   }

}

export class MessageModel {
  channelId?: string;             // channelId
  from?: string;                  // userId
  messsage?: string;              // message body(text)
  image?: string | any;           // message body(image)
  timestamp?: string | Object     // firebase timestamp
}

export class ChannelModel {
  name?: string;                   // channel name
  icon?: string;                   // channel icon
  members?: any;                   // member list
  lastMessage?: string;            // last message id
  timestamp?: string | Object;     // created / upadated time
}