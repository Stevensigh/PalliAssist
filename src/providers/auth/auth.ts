import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from 'firebase';

import { Observable } from 'rxjs/Rx';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import { tableNames } from '../../app/app.constants';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public http: Http,
  public db: AngularFireDatabase,
  public afAuth: AngularFireAuth,) {
    console.log('Hello AuthProvider Provider');
  }

  loginUser(email: string, password: string): firebase.Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  signupUser(email: string, password: string): firebase.Promise<any> {
    return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then( newUser => {
      firebase
      .database()
      .ref('/userProfile')
      .child(newUser.uid)
      .set({ email: email });
    });
  }

  resetPassword(email: string): firebase.Promise<void> {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  logoutUser(): firebase.Promise<void> {
    return firebase.auth().signOut();
  }
  getAuth(): Observable<firebase.User> {
    return this.afAuth.authState;
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
}

export class UserModel {
  uid?: string;
  email?: string;
  displayName?: string;
  photoURL?: string;
  providerData?: any;
}