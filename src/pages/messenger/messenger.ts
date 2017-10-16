import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform} from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import {AuthService, UserModel} from '../../providers/auth-service';
import {ChatsProvider} from '../../providers/chats/chats';
import { Keyboard } from '@ionic-native/keyboard';

/**
 * Generated class for the MessengerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-messenger',
  templateUrl: 'messenger.html',
})
export class MessengerPage {
  chatText: string;
  chatMessages: Array<string>;
  textMaxLength: number = 400;
  user: UserModel;
  private autoScroller: MutationObserver;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public platform: Platform,
    public keyboard: Keyboard,
    public chatProvider: ChatsProvider,
    public authProvider: AuthService
    ) {
      this.user = navParams.get('user');
  }

  ionViewDidLoad() {   
    this.chatProvider.getMessages()
    .subscribe((messages => this.chatMessages = messages));

  if (this.platform.is('cordova')) {
    this.keyboard.onKeyboardShow()
      .subscribe(() => this.scrollDown());
  }
  }
  ngOnInit() {
    this.autoScroller = this.autoScroll();
  }

  ngOnDestroy() {
    this.autoScroller.disconnect();
  }


  sendMessage(event: any) {
    if (!this.chatText)
      return;

    this.chatProvider.sendMessage((this.user as any).$key, this.chatText)
      .then(() => {
          this.chatText = '';
          this.scrollDown();
      }, (error) => {
          console.log(error);
      });
    }

  private scrollDown() {
    this.scroller.scrollTop = this.scroller.scrollHeight;
  }

  private autoScroll(): MutationObserver {
    const autoScroller = new MutationObserver(this.scrollDown.bind(this));

    autoScroller.observe(this.messageContent, {
      childList: true,
      subtree: true
    });

    return autoScroller;
  }

  private get messageContent(): Element {
    return document.querySelector('.messages');
  }

  private get scroller(): Element {
    return this.messageContent.querySelector('.scroll-content');
  }

      
}
