import { Link } from 'react-router-dom';
import password from '../../assets/icon/cyber-security.png';
import google from '../../assets/icon/google.png';
import email from '../../assets/icon/internet.png';
import loginIllustration from '../../assets/login-illustration.png';
import ButtonIco from '../Reusable/ButtonIco';
import Container from '../Reusable/Container';
import Divider from '../Reusable/Divider';
import Info from '../Reusable/Info';
import LogSignLay from '../Reusable/LogSignLay';
import Button from '../UI/Button';
import Checkbox from '../UI/Checkbox';
import Input from '../UI/Input';
import classes from './Login.module.css';
const Login = () => {
  return (
    <section>
      <Container>
        <LogSignLay illustration={loginIllustration} title={'Login'}>
          <Input
            displayName={'Email'}
            id={'email'}
            icon={email}
            type={'email'}
            name={'email'}
            placeholder={'example@yeahoo.com'}
          />
          <Input
            isPassInput={true}
            displayName={'Password'}
            id={'password'}
            icon={password}
            type={'password'}
            name={'password'}
            placeholder={'dlfh459#$*J'}
          />
          <div className={classes.remforWrap}>
            <div>
              <Checkbox displayName={'remember me.'} id={'remember'} />
            </div>
            <div>
              <Link to={'/forgot-password'} className={classes.forgotPass}>
                Forgot password ?
              </Link>
            </div>
          </div>
          <Button displayName={'Login'} type={'submit'} />
          <Divider text={'Or'} />
          <ButtonIco displayName={'Login with google'} icon={google} />
          <Info
            text={'Don’t have an account.'}
            linkText={'Signup'}
            path={'/signup'}
          />
        </LogSignLay>
      </Container>
    </section>
  );
};
export default Login;
