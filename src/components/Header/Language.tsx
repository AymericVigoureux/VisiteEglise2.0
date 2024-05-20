import React, { MouseEventHandler, useState } from 'react';
import { FlagImg, LanguageContainer } from './Language.styled';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { flags } from '../LanguageModal/LanguageFlags.const';


interface LanguageProps {
	languageRef?: React.RefObject<HTMLDivElement>
	selected?: boolean
	onClick?: MouseEventHandler<HTMLDivElement> | undefined
}


const Language = ({ languageRef, selected, onClick }: LanguageProps) => {

	const languageState = useSelector((state: RootState) => state.language);


	return (
		<LanguageContainer ref={languageRef}
		selected={selected} onClick={onClick}>
			<FlagImg src={flags.get(languageState.currLanguage)} />
		</LanguageContainer>
	)
}

export default Language;