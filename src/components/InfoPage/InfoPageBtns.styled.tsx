import styled from "styled-components";


interface InfoBtnProps {
	selected?: boolean,
}

interface InfoContentContainerProps {
	index: number
}


const speedTransition = '0.35s';


export const InfoBtnsContainer = styled.div`
	display: flex;
	margin: 0;
`

export const InfoBtn = styled.button`
	transition: all ${speedTransition};
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	outline: none;
	flex: 1 1 auto;
	margin: 0;
	padding: 0;
	color: white;
	font-family: inherit;
	background: ${(props: InfoBtnProps) => props.selected ? 'rgb(82, 0, 0)' : 'unset'};
	font-weight: ${(props: InfoBtnProps) => props.selected ? '700' : 'normal'};
	font-size: 1.1rem;
	padding: 0.8rem 0;
`

export const InfoBtnImg = styled.img`
	height: 1.7rem;
	aspect-ratio: 1 / 1;
	margin-left: 0.5rem;
`

export const InfoContentContainer = styled.div`
	position: static;
	display: flex;
	// overflow-x: auto;
	// overflow-y: scroll;
	transform: translateX(${(props: InfoContentContainerProps) => props.index * -100}%);
	flex: 1 1 auto;
	transition: transform ${speedTransition} ease;
	
	& > * {
		flex: 0 0 100%;
		box-sizing: border-box;
		opacity: 0;
    	transition: opacity ${speedTransition} ease;
	}

	& :nth-of-type(${(props: InfoContentContainerProps) => props.index + 1}) {
		opacity: 1;
	}
`