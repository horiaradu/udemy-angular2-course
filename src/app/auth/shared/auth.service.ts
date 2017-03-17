import { User } from "./user.interface";
import * as firebase from 'firebase';
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable()
export class AuthService {
  constructor(private router: Router) {
  }

  signupUser(user: User) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .catch(err => console.error(err));
  }

  signinUser(user: User) {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .catch(err => console.error(err));
  }

  isAuthenticated(): Observable<boolean> {
    const subject = new Subject<boolean>();
    firebase.auth().onAuthStateChanged(user => {
      subject.next(!!user);
    });
    return subject.asObservable();
  }

  logout() {
    firebase.auth().signOut();
    this.router.navigate(['/auth', 'signin']);
  }
}
