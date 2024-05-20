import { Link } from "react-router-dom";
import styled from "styled-components";


interface TimeStepTextProps {
	$color?: string
}

interface TimeTimeTextProps {
	$color?: string
}


export const TimeContentContainer = styled.div`
	position: relative;
	flex: 0 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 1rem 0;
`



export const TimeStepContainer = styled.div`
	position: relative;
	display: flex;
	margin: 0;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const TimeStepNumber = styled.p`
	font-weight: 700;
    font-style: normal;
    color: rgb(84, 80, 74);
    text-decoration: none;
	font-size: 2.5rem;
	margin: 0;
`

export const TimeStepText = styled.p`
	margin: 0;
	font-size: 0.8rem;
	font-weight: 700;
    font-style: normal;
	text-decoration: none;
	color: ${(props: TimeStepTextProps) => props.$color};
`



export const TimeTimeContainer = styled.div`
	position: relative;	
	display: flex;
	justify-content: center;
	margin-top: 1.5rem;
	align-items: center;
`

export const TimeTimeImg = styled.img`
	width: 2rem;
`

export const TimeTimeText = styled.p`
	margin: 0;
	margin-left: 0.5rem;
	font-weight: 700;
    font-style: normal;
    color: ${(props: TimeTimeTextProps) => props.$color};
    text-decoration: none;
`



export const TimeTypeContainer = styled.div`
	position: relative;
	margin: 0;
	margin-top: 1.5rem;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	
`

export const TimeTypeImg = styled.img`
	width: 2rem;
`

export const TimeTypePlus = styled.p`
	margin: 0;
	font-size: 2rem;
	font-weight: bold;
	margin: 0 0.4rem;
	color: #032b84;
`


export const SelectionButtonContainer = styled.div`
	flex: 1 1 auto;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`

export const SelectionButton = styled.button`
	position: relative;
	bottom: 0;
	right: 0;
	width: 80%;
	height: fit-content;
	overflow: hidden;
	color: white;
	border: none;
	border-radius: 3px;
	font-size: 0.9rem;
	line-height: 15px;
	padding: 9px 12px;
	text-decoration: none;
	cursor: pointer;
	background: rgb(108, 167, 205);
	box-sizing: border-box;
	user-select: none;
	text-align: center;
	touch-action: manipulation;
	margin: 0.2rem auto 1rem;
`