import { FooterDiv, FooterText, FooterImg, FooterSocialIcon } from './styles';
import logo from '../assets/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import './footer.css';
const Footer: React.FC = () => {
  return (
    <FooterDiv>
      <FooterImg>
        <img src={logo} alt='logo quiz' width='100' height='100' />
      </FooterImg>
      <FooterText> created by Michał Marchewa. 2021</FooterText>
      <FooterSocialIcon>
        <a href='https://www.linkedin.com/in/michalmarchewa'>
          <FontAwesomeIcon className='linkedin' icon={faLinkedin} />
        </a>
      </FooterSocialIcon>
      <FooterSocialIcon>
        <a href='https://www.twitter.com/marchewam'>
          <FontAwesomeIcon className='twitter' icon={faTwitter} />
        </a>
      </FooterSocialIcon>
      <FooterSocialIcon>
        <a href='https://github.com/michalmarchewa'>
          <FontAwesomeIcon className='github' icon={faGithub} />
        </a>
      </FooterSocialIcon>
    </FooterDiv>
  );
};

export default Footer;
