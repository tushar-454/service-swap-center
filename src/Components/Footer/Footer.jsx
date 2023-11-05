import facebook from '../../assets/icon/facebook.png';
import instagram from '../../assets/icon/instagram.png';
import twitter from '../../assets/icon/twitter.png';
import Logo from '../Header/Logo';
import Container from '../Reusable/Container';
import classes from './Footer.module.css';
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Container>
        <div className={classes.footerWrap}>
          <div className={classes.footerBrand}>
            <Logo />
          </div>
          <div className={classes.footerContent}>
            <div>
              <h3>Product</h3>
              <ul>
                <li>
                  <a href='#'>Features</a>
                </li>
                <li>
                  <a href='#'>Integrations</a>
                </li>
                <li>
                  <a href='#'>Pricing</a>
                </li>
                <li>
                  <a href='#'>FAQ</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Company</h3>
              <ul>
                <li>
                  <a href='#'>Privacy</a>
                </li>
                <li>
                  <a href='#'>Terms of Service</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Developers</h3>
              <ul>
                <li>
                  <a href='#'>Public API</a>
                </li>
                <li>
                  <a href='#'>Documentation</a>
                </li>
                <li>
                  <a href='#'>Guides</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Social Media</h3>
              <div className={classes.socialWrap}>
                <a href='#' title='Facebook'>
                  <img src={facebook} />
                </a>
                <a href='#' title='Twitter'>
                  <img src={twitter} />
                </a>
                <a href='#' title='Instagram'>
                  <img src={instagram} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.footerCopyRight}>
          © 1968 Company Co. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
