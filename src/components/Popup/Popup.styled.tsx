import styled from "styled-components";
import { SHORT_COL } from "../InfoPoint/InfoCircle.styled";
import { ParkourType } from "../Home/Home";
import { Link } from "react-router-dom";


interface PopupContainerProps {
	parkourType: ParkourType,
	doPrint: boolean,
	done: boolean,
	isMobile: boolean,
}


export const PopupContainer = styled.div`
	position: fixed;
	-webkit-backface-visibility: hidden;
	display: flex;
	flex-direction: column;
	top: 50%;
	right: ${(props: PopupContainerProps) => props.doPrint ? '2%' : '0%'};
	transform: translateX(${(props: PopupContainerProps) => props.doPrint ? '0%' : '101%'});
	width: 30%;
	height: 30%;
	max-width: 20rem;
	max-height: 30rem;
	background: #bfe1f6;
	transition: all 0.4s;
	border-radius: 8px;
	overflow-y: auto;
	overflow-x: hidden;
	transition: all 0.4s;
	
`

/*       ! SCROLLBAR POUR WEB ET RIEN POUR MOBILE !

	${(props: PopupContainerProps) => (!props.isMobile) ?
		(`
		&::-webkit-scrollbar {
			width: 8px;
			height: 8px;
		}

		&::-webkit-scrollbar-track-piece {
			background: #eee;
			border-radius: 10px;
		}
		
		&::-webkit-scrollbar-thumb {
			background: #aaa;
			border-radius: 10px;
		}​

		&::-webkit-scrollbar-thumb::hover {
			background: #888;
			border-radius: 10px;
		}​

		scrollbar-width: thin;
	`) : ''}

 */

export const PopupHeaderInfo = styled.div`	
	margin-bottom: 0px;
`

export const PopupTitleImg = styled.div`
`

export const PopupTitle = styled.p`
	font-size: 1.02rem;
	background: #6ca7cd;
	font-weight: bold;
	text-align: center;
	margin: 0;
	padding: 3px 0;
	hyphens: manual;
`

export const PopupImage = styled.img`
	display: block;
	position: relative;
	width: 100%;
	padding: 0;
	box-sizing: border-box;
`

export const PopupExtraText = styled.p`
	font-size: 0.9rem;
	line-height: 1.2em;
	margin: 9px 0 0;
	text-align: center;
	padding: 0.2rem;
`

export const PopupBtnWrapper = styled.div`
	position: relative;
	flex: 1 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	margin: 10px 0 10px;
`

export const PopupDoneText = styled.p`
	position: relative;
	font-style: italic;
	width: fit-content;
	left: 100%;
	font-size: 0.75rem;
	margin: 0 0 0.2rem 0;
	transform: translateX(-110%);
`

export const PopupBtnContainer = styled.div`
	position: relative;
	display: flex;
	left: 100%; 
	justify-content: flex-end;
	transform: translateX(-100%);
`

export const PopupBtn = styled(Link)`
	position: relative;
	overflow: hidden;
	color: white;
	display: inline-block;
	font-size: 0.9rem;
	line-height: 15px;
	padding: 9px 12px;
	bottom: 0;
	right: 0;
	text-decoration: none;
	cursor: pointer;
	background: #ebb358;
	width: 80%;
	box-sizing: border-box;
	user-select: none;
	text-align: center;
	touch-action: manipulation;
	margin: 1% 5% 1% 0%;
`