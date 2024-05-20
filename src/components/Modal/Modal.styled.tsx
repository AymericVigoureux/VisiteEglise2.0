import styled, { css, keyframes } from "styled-components";


interface ModalWrapperProps {
	display: boolean
}


const displayModal = keyframes`
	0% {
		opacity: 0%;
	}
	100% {
		opacity: 100%;
	}
`

const hideModal = keyframes`
	0% {
		display: unset;
		opacity: 100%;
	}
	100% {
		display: none;
		opacity: 0%;
	}
`


export const ModalWrapper = styled.div<ModalWrapperProps>`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #00000089;
	z-index: 10;
	display: ${({display}: ModalWrapperProps) => display ? 'unset' : 'none'};
`
/*
	-- A voir avec lslb --

	animation: ${({ display }: ModalWrapperProps) => display ?
		css`0.4s ${displayModal}` :
		css`0.4s ${hideModal}`
	};
	opacity: ${({display}: ModalWrapperProps) => display ? '100%' : '0%'};
 */

