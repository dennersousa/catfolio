import "../styles/components/informationcontainer.sass";

import { AiFillPhone, AiFillMail, AiFillEnvironment } from "react-icons/ai";

const InformationContainer = () => {
  return (
    <section id="information">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <a href="http://wa.me/5522992410927" target="_blank"><h3>Telefone</h3></a>
          <p>(22) 99241-0927</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillMail id="email-icon" />
        <div>
          <a href="mailto:dev.marcus@outlook.com"><h3>E-mail</h3></a>
          <p>den.marcus@outlook.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localização</h3>
          <p>Rio de Janeiro / RJ</p>
        </div>
      </div>
    </section>
  );
};

export default InformationContainer;
