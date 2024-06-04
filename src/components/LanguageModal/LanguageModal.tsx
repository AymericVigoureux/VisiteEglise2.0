import { useDispatch, useSelector } from "react-redux";
import ParentModal from "../Modal/Modal";
import { RootState } from "../../redux/store";
import { ModalEnum, hide } from "../../redux/slice/modalSlice";
import { ImgFlag, LanguageContainer, LanguageFlagsContainer, LanguageFlagsWrapper, LanguageTitle } from "./LanguageModal.styled";
import { LanguageType, flags } from "./LanguageFlags.const";
import React, { useRef } from "react";
import { set } from "../../redux/slice/languageSlice";

const LanguageModal = () => {
 
	const dispatch = useDispatch();
	const modal = useSelector((state: RootState) => state.modal);
	const languageState = useSelector((state: RootState) => state.language);
	const flagsRef = useRef<React.ReactNode[]>([]);


	const onOutsideClick = () => {
		dispatch(hide());
	}

	const onFlagClick = (language: LanguageType) => {
		dispatch(set(language))
		dispatch(hide());
	}

	const printFlags = (modulo: number) => {
		flagsRef.current = [];
		return Array.from(flags.entries()).map(([language, flag], index, arrayFlags) => {
			flagsRef.current.push(
				<ImgFlag src={flag} onClick={() => onFlagClick(language)} />
			)
			if ((index + 1) % modulo === 0) {
				const temp = (
					<LanguageFlagsContainer key={index}>
						{ flagsRef.current }
					</LanguageFlagsContainer>
				)
				flagsRef.current = [];
				return temp;
			}
			else if ((index + 1) % modulo && (index + 1) === arrayFlags.length) {
				const temp = (
					<LanguageFlagsContainer key={index}>
						{ flagsRef.current }
					</LanguageFlagsContainer>
				)
				flagsRef.current = [];
				return temp;
			}
		})
	}


	return (
		<ParentModal display={modal.displays[ModalEnum.LANGUAGE]} onOutsideClick={onOutsideClick}>
			<LanguageContainer>
				<LanguageTitle>Langues</LanguageTitle>
				<LanguageFlagsWrapper>
					{ printFlags(3) }
				</LanguageFlagsWrapper>
			</LanguageContainer>
		</ParentModal>
	)
}

export default LanguageModal;