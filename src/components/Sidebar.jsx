import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/perfil.jpg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Matheus Battisti" />
      <p className="title">Desenvolvedor Backend</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="https://drive.google.com/file/d/1SHCMm9D-3MyQewh0AJmQxe_s9PLkeztN/view?usp=drive_link" target="_blank" className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
