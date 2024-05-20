import { FooterContainer, FooterIconContainer, FooterIconImg, FooterIconText } from "./Footer.styled";
import Pray from '../../img/pray.svg'
import Map from '../../img/map.svg'
import Contact from '../../img/contact.svg'

const Footer = () => {

	return (
		<FooterContainer>
			<FooterIconContainer to={'/'}>
				<FooterIconImg src={Pray} />
				<FooterIconText>Prier</FooterIconText>
			</FooterIconContainer>
			<FooterIconContainer to={'/'}>
				<FooterIconImg src={Map} />
				<FooterIconText>Visites</FooterIconText>
			</FooterIconContainer>
			<FooterIconContainer to={'/'}>
				<FooterIconImg src={Contact} />
				<FooterIconText>Contact</FooterIconText>
			</FooterIconContainer>
		</FooterContainer>
	)
}

export default Footer;