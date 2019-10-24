import React from 'react';
import logo from '../../assets/images/logo.png';
import partnerLogo from '../../assets/images/partner_logo.png';

export default class Footer extends React.Component {
  render() {
    return (
      <section className="footer">
        <div className="footer__limiter">
          <div className="footer__box">
            <img className="footer__box__logo" src={logo} alt="marlim logo"/>
            <div className="footer__box__icons">
              <i class="mdi mdi-facebook" />
              <i class="mdi mdi-twitter" />
              <i class="mdi mdi-dribbble" />
              <i class="mdi mdi-behance" />
              <i class="mdi mdi-instagram" />
            </div>
          </div>
          <div className="footer__links">
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Service</a></li>
              <li><a href="#">Clients</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Termos e condições</a></li>
              <li><a href="#">Políticas de privacidade</a></li>
            </ul>
          </div>
          <div className="footer__partner">
            <img src={partnerLogo} alt="partner logo"/>
          </div>
          <div className="footer__decoration" />
        </div>
      </section>
    );
  }
}
