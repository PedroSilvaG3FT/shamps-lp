import { Injectable } from '@angular/core';
import {
  Auth,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';

import { FirebaseCollectionBase } from './firebase-collection.base';
import {
  IFirebaseAuthenticationCredentials,
  IFirebaseAuthenticationSignUp,
} from './@interfaces/firebase-authentication.interface';

@Injectable({ providedIn: 'root' })
export class FirebaseAuthenticationService extends FirebaseCollectionBase {
  private auth: Auth;

  constructor() {
    super('User');
    this.auth = getAuth();
  }

  public async signUp(data: IFirebaseAuthenticationSignUp) {
    try {
      const response = await createUserWithEmailAndPassword(
        this.auth,
        data.email,
        data.password
      );

      await this.create<IFirebaseAuthenticationSignUp>({
        ...data,
        uid: response.user.uid,
      });

      if (this.auth.currentUser) {
        await updateProfile(this.auth.currentUser, {
          displayName: data.name,
        });
      }

      return response;
    } catch (error) {
      throw error;
    }
  }

  public async signIn({ email, password }: IFirebaseAuthenticationCredentials) {
    try {
      await setPersistence(this.auth, browserSessionPersistence);

      const response = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );

      const refreshToken = response.user.refreshToken;
      const { token: accessToken } = await response.user.getIdTokenResult();

      const data = await this.getByColumn<IFirebaseAuthenticationSignUp>(
        'uid',
        response.user.uid
      );

      const result = {
        ...response,
        user: {
          ...response.user,
          refreshToken,
          accessToken,
          data,
        },
      };

      return result;
    } catch (error) {
      throw error;
    }
  }

  public async recoveryPassword(email: string) {
    return sendPasswordResetEmail(this.auth, email);
  }

  public signOut() {
    return signOut(this.auth);
  }
}
