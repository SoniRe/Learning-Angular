import { Injectable } from '@angular/core';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { auth } from '../../../firebaseconfig';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private uid = '';

  constructor(private router: Router) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.uid = user.uid;
        this.router.navigate(['/dashboard']);
      } else {
        this.uid = '';
        this.router.navigate(['/login']);
      }
    });
  }

  isAuthenticated() {
    if (this.uid === '') return false;

    return true;
  }

  registerUser(email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        // const user = userCredential.user;
        // console.log(user);
        // this.router.navigate(['/dashboard']);
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        alert('Something went wrong try again');
      });
  }

  loginUser(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        // this.router.navigate(['/dashboard']);
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        alert('Something went wrong try again');
      });
  }

  logout() {
    signOut(auth).catch((error) => {
      alert('Unable to signout');
    });
  }
}
