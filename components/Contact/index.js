import styled from 'styled-components';
import { appColors } from 'utils';

import Phone from './icons/phone.svg';
import Mail from './icons/mail.svg';
import Location from './icons/location.svg';
import User from './icons/user.svg';

const Contact = () => {

  return (
    <CONTACT className="flex" id="contato">
      <section>
        <h3>Vamos nos <span>falar?</span></h3>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
        <ul>
          <li className="flex">
            <Phone />
            <span>+55 11 3248 9421</span>
          </li>
          <li className="flex">
            <Mail />
            <span>contato@marlim.co</span>
          </li>
          <li className="flex">
            <Location />
            <span>Av. Brg. Faria Lima, 4440 - Vila Olímpia, São Paulo - SP, 04538-132</span>
          </li>
        </ul>
      </section>
      <form onSubmit={(e) => e.preventDefault()} className="flex c">
        <fieldset>
          <label>Seu Nome</label>
          <div>
            <User />
            <input type="text" />
          </div>
        </fieldset>
        <fieldset>
          <label>Seu E-mail</label>
          <div>
            <Mail />
            <input type="email" />
          </div>
        </fieldset>
        <fieldset>
          <label>Mensagem</label>
          <textarea placeholder="Digite aqui..." />
        </fieldset>
        <button>Enviar</button>
      </form>
      <div />
    </CONTACT>
  )

}

export const CONTACT = styled.section`

  padding: 0 0 136px;
  position: relative;
  align-items: flex-start;

  > section {

    max-width: 430px;

    > h3 {
      font-size: 3.2rem;
      line-height: 4.8rem;
      font-weight: 700;
      color: ${appColors.text};
      > span {
        font-weight: 700;
        color: ${appColors.pink};
      }
    }
    
    > p {
      font-size: 1.6rem;
      line-height: 2.4rem;
      color: rgba(59, 55, 68, .5);
      margin: 0 0 32px;
    }
    
    > ul {

      > li {
        
        justify-content: flex-start;

        > svg {
          min-width: 20px;
          max-width: 20px;
          min-height: 20px;
          max-height: 20px;
          margin: 0 20px 0 0;
        }
        
        > span {
          font-size: 1.4rem;
          line-height: 2.4rem;
          color: ${appColors.text};
        }

        :nth-child(2) {
          margin: 20px 0;
        }

        :last-of-type {
          max-width: 75%;
        }

      }

    }

  }
  
  > form {

    margin: 0 0 0 160px;
    width: 464px;
    padding: 28px 24px;
    background: #fff;
    box-shadow: 0 16px 24px rgba(0, 0, 0, .08);
    border-radius: 24px;
    align-items: flex-start;

    > fieldset {

      width: 100%;

      > label {
        font-size: 1.4rem;
        color: ${appColors.text};
        margin: 0 0 8px;
        display: block;
      }

      > div {

        display: flex;
        width: 100%;
        height: 56px;
        border: 1px solid rgba(112, 112, 112, 0.16);
        border-radius: 8px;
        padding: 0 18px;
        align-items: center;

        > svg {
          min-width: 20px;
          max-width: 20px;
          min-height: 20px;
          max-height: 20px;
          margin: 0 8px 0 0;
        }

        > input {
          flex: 1;
          font-size: 1.6rem;
          color: ${appColors.text};
        }

      }
      
      > textarea {
        width: 100%;
        min-height: 164px;
        border: 1px solid rgba(112, 112, 112, 0.16);
        border-radius: 8px;
        padding: 8px 16px;
        font-size: 1.4rem;
        color: ${appColors.text};
        resize: none;
        overflow: auto;
      }

      :nth-child(2) {
        margin: 24px 0;
      }

    }
    
    > button {
      margin: 12px 0 0;
      align-self: flex-end;
      background: ${appColors.pink};
      color: #fff;
      width: 152px;
      height: 40px;
      font-size: 1.6rem;
      font-weight: 700;
      border-radius: 40px;
      transition: var(--transition-bg);
      :hover {
        background: ${appColors.blue};
      }
    }

  }

  > div {
    position: absolute;
    width: 100vw;
    height: 80px;
    background: url("/images/products/pattern.png") repeat-x 0 0;
    transform: scaleX(-1);
    bottom: calc(136px + 70px);
    left: calc(-100vw + 352px);
  }

`;

export default Contact;