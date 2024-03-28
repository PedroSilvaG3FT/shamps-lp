export interface IFirebaseAuthenticationCredentials {
  email: string;
  password: string;
}

export interface IFirebaseAuthenticationSignUp {
  id?: string | number;
  uid?: string;
  age: number;
  name: string;
  email: string;
  password: string;
}
