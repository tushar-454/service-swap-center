import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { Auth } from '../Firebase/firebase-config';
import Toast from '../Utils/Toast/Toast';
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [profilePhoto, setProfilePhoto] = useState('');

  // signup or crate account with email and password
  const signupWithEmailPassword = (email, password) => {
    setLoading(false);
    return createUserWithEmailAndPassword(Auth, email, password);
  };

  // signin account with email and password
  const loginWithEmailPass = (email, password) => {
    setLoading(false);
    return signInWithEmailAndPassword(Auth, email, password);
  };

  // login with google
  const loginWithGoogle = () => {
    setLoading(false);
    return signInWithPopup(Auth, new GoogleAuthProvider());
  };

  //logout account
  const logOutAccount = () => {
    setLoading(false);
    signOut(Auth)
      .then(() => Toast('Logout successfull', 'success'))
      .catch((error) => Toast(error.message, 'error'));
  };

  useEffect(() => {
    const unsubscriber = onAuthStateChanged(Auth, (currentUser) => {
      if (currentUser) {
        console.log(currentUser);
        setUser(currentUser);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });
    return () => unsubscriber();
  }, []);

  const userInfo = {
    user,
    loading,
    profilePhoto,
    setProfilePhoto,
    loginWithGoogle,
    signupWithEmailPassword,
    loginWithEmailPass,
    logOutAccount,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
