import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import {Observable} from 'rxjs/Rx';


import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
 import {tableNames} from '../app/app.constants';

export class User {
  username: string;
  password: string;
 
  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

}


 
@Injectable()
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth,
    public db: AngularFireDatabase,
    public platform: Platform
  ) {}

  //get authState
  get currentUser(): any {
    return this.getAuth().first();
  }

  // get auth
  getAuth(): Observable<firebase.User> {
    return this.afAuth.authState;
  }

  /**
   * sign in with emai & password
   */
  signInWithEmail(credential: any): firebase.Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(credential.email, credential.password);
  }

  /**
   * sign up with email & password
   */
  signUpWithEmail(credential: any): firebase.Promise<void> {
    return this.afAuth.auth.createUserWithEmailAndPassword(credential.email, credential.password);
  }

  /**
   * sign out
   */
  signOut(): firebase.Promise<any> {
    return this.afAuth.auth.signOut();
  }

  
  /**
   * get full profile
   */
  getFullProfile(uid?: string): Observable<UserModel> {
    if (uid)
      return this.db.object(tableNames.User + '/' + uid);

    return Observable.create((observer) => {
      this.getAuth().subscribe((user: firebase.User) => {
        if (user !== null)
          this.db.object(tableNames.User + '/' + user.uid).subscribe((res) => observer.next(res));
      });
    });
  }
  
 
  public login(credentials) {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
        let access = (credentials.password === "pass" && credentials.username === "user");
        //this.currentUser = new User('user', 'pass');
        observer.next(access);
        observer.complete();
      });
    
  }
 
  public register(credentials) {
   
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    
  }
 
  public getUserInfo() : User {
    return this.currentUser;
  }
 

}

export class UserModel {
  uid?: string;
  email?: string;
  displayName?: string;
  photoURL?: string;
  providerData?: any;
}