import { useState } from 'react';
import password from '../../assets/icon/cyber-security.png';
import google from '../../assets/icon/google.png';
import email from '../../assets/icon/internet.png';
import right from '../../assets/icon/right.png';
import name from '../../assets/icon/user.png';
import wrong from '../../assets/icon/wrong.png';
import signupIllustration from '../../assets/sign_up.svg';
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
const dynamicError = {
  uppercase: false,
  lowercase: false,
  special: false,
  length: false,
};
const Signup = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <section>
      <Container>
        <LogSignLay
          illustration={signupIllustration}
          title={'Signup'}
          isRowDirectionReverse={true}
        >
          <Input
            displayName={'Name'}
            id={'name'}
            icon={name}
            type={'text'}
            placeholder={'John Dou'}
            name={'name'}
          />
          <Input
            displayName={'Email'}
            id={'email'}
            icon={email}
            type={'email'}
            placeholder={'example@yeahoo.com'}
            name={'email'}
          />
          <InputFile
            displayName={'Upload your photo'}
            id={'photoUrl'}
            name={'photoUrl'}
          />
          <Input
            displayName={'Password'}
            id={'password'}
            icon={password}
            isPassInput={true}
            type={'password'}
            placeholder={'dfO(&*(%'}
            name={'password'}
          />
          <Input
            displayName={'Confirm Password'}
            id={'confirmPass'}
            icon={password}
            isPassInput={true}
            type={'password'}
            placeholder={'dfO(&*(%'}
            name={'confirmPassword'}
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
          />
          <Button displayName={'Signup'} type={'submit'} />
          <Divider text={'Or'} />
          <ButtonIco displayName={'Login with google'} icon={google} />
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
