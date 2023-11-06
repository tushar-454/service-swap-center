import { updateProfile } from 'firebase/auth';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Auth, storage } from '../../Firebase/firebase-config';
import Toast from '../../Utils/Toast/Toast';
import password from '../../assets/icon/cyber-security.png';
import google from '../../assets/icon/google.png';
import email from '../../assets/icon/internet.png';
import right from '../../assets/icon/right.png';
import name from '../../assets/icon/user.png';
import wrong from '../../assets/icon/wrong.png';
// import signupIllustration from '../../assets/sign_up.png';
import Lottie from 'lottie-react';
import singupLottie from '../../assets/login_lottie.json';
import ButtonIco from '../Reusable/ButtonIco';
import Container from '../Reusable/Container';
import Divider from '../Reusable/Divider';
import Info from '../Reusable/Info';
import LogSignLay from '../Reusable/LogSignLay';
import Button from '../UI/Button';
import Checkbox from '../UI/Checkbox';
import Input from '../UI/Input';
import InputFile from '../UI/InputFile';
import classes from './Signup.module.css';
const signupInit = {
  name: '',
  email: '',
  photoUrl: '',
  password: '',
  confirmPassword: '',
  terms: false,
};
const errorInit = {
  name: '',
  email: '',
  photoUrl: '',
  password: '',
  confirmPassword: '',
  terms: false,
};
const dynamicError = {
  uppercase: false,
  lowercase: false,
  special: false,
  length: false,
};
const Signup = () => {
  const [signup, setSignup] = useState({ ...signupInit });
  const [error, setError] = useState({ ...errorInit });
  const [isShow, setIsShow] = useState(false);
  const [photoStatus, setPhotoStatus] = useState('');
  const [path, setPath] = useState('');
  const [file, setFile] = useState(null);
  const { loginWithGoogle, signupWithEmailPassword, setProfilePhoto } =
    useContext(AuthContext);
  const navigate = useNavigate();

  //handle singup input change
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    const newError = type === 'checkbox' ? checked : '';
    setSignup((prevObj) => ({ ...prevObj, [name]: newValue }));
    setError((prevError) => ({ ...prevError, [name]: newError }));
    if (name === 'password') {
      setIsShow(true);
      // password strong check
      if (value.length >= 6) {
        dynamicError.length = true;
      } else {
        dynamicError.length = false;
      }
      if (/[A-Z]/.test(value)) {
        dynamicError.uppercase = true;
      } else {
        dynamicError.uppercase = false;
      }
      if (/[a-z]/.test(value)) {
        dynamicError.lowercase = true;
      } else {
        dynamicError.lowercase = false;
      }
      if (/[\W_]/.test(value)) {
        dynamicError.special = true;
      } else {
        dynamicError.special = false;
      }
    }
  };
  //handle photo file input change
  const handlePhotoChange = (e) => {
    const imageName = e.target.files[0].name;
    const random = new Date().getTime();
    const firebasePath = `images/${random}_${imageName}`;
    setPhotoStatus(imageName);
    setError((prev) => ({ ...prev, photoUrl: '' }));
    setPath(firebasePath);
    setFile(e.target.files[0]);
  };
  const handlePhotoUpload = () => {
    setPhotoStatus('Uploading...');
    const imagesRef = ref(storage, path);
    uploadBytes(imagesRef, file)
      .then(() => {
        getDownloadURL(ref(storage, path))
          .then((url) => {
            updateProfile(Auth.currentUser, {
              photoURL: url,
            });
            setProfilePhoto(url);
            setSignup((prevObj) => ({ ...prevObj, photoUrl: url }));
            setPhotoStatus('Completed.');
          })

          .catch((error) => Toast(error.message, 'error'));
      })

      .catch((error) => Toast(error.message, 'error'));
  };
  // handle singup with email and password
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    const { name, email, photoUrl, password, confirmPassword, terms } = signup;
    if (!name) {
      setError((prevError) => ({
        ...prevError,
        name: 'Name is required !',
      }));
      return;
    }
    if (!email) {
      setError((prevError) => ({
        ...prevError,
        email: 'Email is required !',
      }));
      return;
    }
    if (photoStatus === '') {
      setError((prevError) => ({
        ...prevError,
        photoUrl: 'Upload your Photo !',
      }));
      return;
    }
    if (!password) {
      setError((prevError) => ({
        ...prevError,
        password: 'Password is required !',
      }));
      return;
    } else if (!/^(?=.*[A-Z])(?=.*[\W_]).{6,}$/.test(password)) {
      setError((prevError) => ({
        ...prevError,
        password: '',
      }));
      return;
    }
    if (password !== confirmPassword) {
      setError((prevError) => ({
        ...prevError,
        confirmPassword: 'Password not matched !',
      }));
      return;
    }
    if (!terms) {
      return;
    }
    // handle photo upload
    signupWithEmailPassword(email, password)
      .then(() => {
        updateProfile(Auth.currentUser, {
          displayName: name,
        });
        if (!photoUrl) {
          handlePhotoUpload();
        }
        Toast('Account create successfull', 'success');
        navigate('/');
      })
      .catch((error) => Toast(error.message, 'error'));
  };

  // handle login with google
  const handleLoginWithGoogle = () => {
    loginWithGoogle()
      .then(() => {
        navigate('/');
        Toast('Login Successfull.', 'success');
      })
      .catch((error) => Toast(error.message, 'error'));
  };

  return (
    <section>
      <Helmet>
        <title>Services Swap Center | Signup</title>
      </Helmet>
      <Container>
        <LogSignLay
          illustration={<Lottie animationData={singupLottie} />}
          title={'Signup'}
          isRowDirectionReverse={true}
          handleSubmit={handleSignUpSubmit}
        >
          <Input
            displayName={'Name'}
            id={'name'}
            icon={name}
            type={'text'}
            placeholder={'John Dou'}
            name={'name'}
            onChange={handleInputChange}
            value={signup.name}
            error={error.name}
          />
          <Input
            displayName={'Email'}
            id={'email'}
            icon={email}
            type={'email'}
            placeholder={'example@yeahoo.com'}
            name={'email'}
            onChange={handleInputChange}
            value={signup.email}
            error={error.email}
          />
          <InputFile
            displayName={'Upload your photo'}
            id={'photoUrl'}
            name={'photoUrl'}
            onChange={handlePhotoChange}
            photoStatus={photoStatus}
            error={error.photoUrl}
          />
          <Input
            displayName={'Password'}
            id={'password'}
            icon={password}
            isPassInput={true}
            type={'password'}
            placeholder={'dfO(&*(%'}
            name={'password'}
            onChange={handleInputChange}
            value={signup.password}
            error={error.password}
          />
          <Input
            displayName={'Confirm Password'}
            id={'confirmPass'}
            icon={password}
            isPassInput={true}
            type={'password'}
            placeholder={'dfO(&*(%'}
            name={'confirmPassword'}
            onChange={handleInputChange}
            value={signup.confirmPassword}
            error={error.confirmPassword}
          />
          {/* dynamicError show  */}
          <div className={`${classes.hide} ${isShow && classes.block}`}>
            <div
              className={`${classes.errorLine} ${
                dynamicError.lowercase ? classes.right : classes.wrong
              }`}
            >
              <img src={dynamicError.lowercase ? right : wrong} width='16px' />
              <p>Must one lowercase</p>
            </div>
            <div
              className={`${classes.errorLine} ${
                dynamicError.uppercase ? classes.right : classes.wrong
              }`}
            >
              <img src={dynamicError.uppercase ? right : wrong} width='16px' />
              <p>Must one uppercase</p>
            </div>
            <div
              className={`${classes.errorLine} ${
                dynamicError.special ? classes.right : classes.wrong
              }`}
            >
              <img src={dynamicError.special ? right : wrong} width='16px' />
              <p>Must one special character</p>
            </div>
            <div
              className={`${classes.errorLine} ${
                dynamicError.length ? classes.right : classes.wrong
              }`}
            >
              <img src={dynamicError.length ? right : wrong} width='16px' />
              <p>Password must be 6 characters</p>
            </div>
          </div>
          <Checkbox
            displayName={'Accept our terms and condition.'}
            id={'terms'}
            name={'terms'}
            onChange={handleInputChange}
            value={signup.terms}
          />
          <Button displayName={'Signup'} type={'submit'} />
          <Divider text={'Or'} />
          <ButtonIco
            displayName={'Login with google'}
            icon={google}
            onClick={handleLoginWithGoogle}
          />
          <Info
            text={'You have already an account.'}
            linkText={'Login'}
            path={'/login'}
          />
        </LogSignLay>
      </Container>
    </section>
  );
};

export default Signup;
