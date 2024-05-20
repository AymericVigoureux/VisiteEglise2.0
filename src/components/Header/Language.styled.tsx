import styled from "styled-components";

interface LanguageContainerProps {
	selected?: boolean
}


export const LanguageContainer = styled.div<LanguageContainerProps>`
	position: relative;
	flex: 0 1 auto;
	height: 3rem;
	width: fit-content;
	margin-right: 1rem;
	cursor: pointer;
	transition: all 0.4s;
	transform: ${(props: LanguageContainerProps) => props.selected ? `scale(1.3)` : `scale(1)`};
`

export const FlagImg = styled.img`
	height: 100%;
	border-radius: 50%;
	aspect-ratio: 1 / 1;
	user-select: none;
	touch-action: none;
`