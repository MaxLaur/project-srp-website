import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiInstagram } from 'react-icons/fi'
import { RxDiscordLogo } from "react-icons/rx";
import { RiPatreonLine, RiPaypalLine } from "react-icons/ri";

const Footer = () => {
  return (
      <Wrapper>
          <IgLink to='https://www.instagram.com/shutoko_revival_project/' target='blank'>
            <FiInstagram />
          </IgLink>
          <DiscordLink to='https://discord.gg/JydhbJG' target='blank'>
            <RxDiscordLogo />
          </DiscordLink>
          <DiscordLink to='https://www.patreon.com/Shutoko_Revival_Project' target='blank'>
            <RiPatreonLine />
          </DiscordLink>
          <DiscordLink to='https://paypal.me/SRPDonations' target='blank'>
            <RiPaypalLine />
          </DiscordLink>
      </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 50px;
  position: sticky;
  left:0;
  bottom:0;
  right:0;
`;
const IgLink = styled(Link)`
  font-size: 40px;
  color: #d2d3c7;
  cursor: pointer;
  transition: 0.20s ease-in-out;

  &:hover {
    color: #b9955b;
    transform: scale(1.2)
  }
`;
const DiscordLink = styled(Link)`
  margin-left: 10px; 
  font-size: 40px;
  color: #d2d3c7;
  cursor: pointer;
  transition: 0.20s ease-in-out;

  &:hover {
    color: #b9955b;
    transform: scale(1.2)
  }
`;

export default Footer;