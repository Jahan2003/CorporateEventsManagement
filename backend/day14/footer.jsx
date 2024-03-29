import "../assets/css/footer.css";
import{FiInstagram,FiTwitter,FiFacebook} from "react-icons/fi"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__bottom">
        <p id="text">&copy; 2024 Eventify Event Mangement . All rights reserved.
        </p>
        <p id="foot-icons">
        <span className='foot-icon'><FiInstagram color='white' fontSize={22}/></span>
        <span className='foot-icon'><FiTwitter color='white' fontSize={22}/></span>
        <span className='foot-icon'><FiFacebook color='white' fontSize={22}/></span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;