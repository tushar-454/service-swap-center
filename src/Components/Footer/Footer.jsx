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
          <div className={classes.footerContent}>
            <div>
              <Logo />
            </div>
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
              <h3>Social Media</h3>
              <div>
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
                <ul>
                  <li>
                    <a href='tel:+8089495334'>+8089495334</a>
                  </li>
                  <li>
                    <a href='mailto:serviceswapcenter@yahoo.com'>
                      serviceswapcenter@yahoo.com
                    </a>
                  </li>
                </ul>
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
