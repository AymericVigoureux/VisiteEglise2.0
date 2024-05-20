import { HeaderContainer, HeaderLogos, HeaderWrapper, InvisibleTextLogos } from "./Header.styled";
import { ArrowImg, HeaderSubTitle, HeaderSubTitleContainer, HeaderTitle, HeaderTitleContainer } from "./HeaderTitles.styled";
import Language from "./Language";
import Time from "./Time";
import Arrow from '../../img/arrow.svg'
import { useCallback, useEffect, useRef, useState } from "react";
import Modal from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ModalEnum, display } from "../../redux/slice/modalSlice";

const Header = () => {

	const dispatch = useDispatch();
	const modal = useSelector((state: RootState) => state.modal)
	const [parkourChoiceText, setParkourChoiceText] = useState<string>('Choisissez votre parcours !');
	const languageRef = useRef<HTMLDivElement>(null);
	const timeRef = useRef<HTMLDivElement>(null);
	const [ selectedLanguage, setSelectedLanguage ] = useState<boolean>(false);
	const [ selectedTime, setSelectedTime ] = useState<boolean>(false);

	const onLanguageClicked = () => {
		dispatch(display([ModalEnum.LANGUAGE]))
	}

	const onTimeClicked = () => {
		dispatch(display([ModalEnum.TIME]))
	}


	useEffect(() => {
		setSelectedLanguage(modal.displays[ModalEnum.LANGUAGE]);
		setSelectedTime(modal.displays[ModalEnum.TIME]);
	}, [modal])



	return (
		<HeaderWrapper>
			<HeaderContainer>
				<HeaderTitleContainer>
					<HeaderTitle>Visite de l'église du Saint-Esprit</HeaderTitle>
					<HeaderSubTitleContainer>
						<ArrowImg src={Arrow} />
						<HeaderSubTitle>{parkourChoiceText}</HeaderSubTitle>
						<ArrowImg returned src={Arrow} />
					</HeaderSubTitleContainer>
				</HeaderTitleContainer>
			</HeaderContainer>
			<HeaderLogos>
				<Language languageRef={languageRef}
				selected={selectedLanguage} onClick={onLanguageClicked} />
				<InvisibleTextLogos>{parkourChoiceText}</InvisibleTextLogos>
				<Time timeRef={timeRef}
				selected={selectedTime} onClick={onTimeClicked} />
			</HeaderLogos>
		</HeaderWrapper>
	)
}

export default Header;