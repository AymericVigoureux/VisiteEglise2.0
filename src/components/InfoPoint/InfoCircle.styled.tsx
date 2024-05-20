import styled, { keyframes } from "styled-components";


export const SHORT_COL = "#ebb358";


interface CircleProps {
	$top?: string
	$left?: string
	selected?: boolean
	done: boolean
	radius: string
}


const starterZoom = keyframes`
	0% {
		position: absolute;
		transform: translate(-50%, -50%) scale(1);
	}

	30% {
		position: absolute;
		transform: translate(-50%, -50%) scale(2);
	}

	70% {
		position: absolute;
		transform: translate(-50%, -50%) scale(2);
	}

	100% {
		position: absolute;
		transform: translate(-50%, -50%) scale(1);
	}
`


export const InfoCircle = styled.div`
	position: absolute;
	border-radius: 50%;
	border: solid 2px;
	color: ${SHORT_COL};
	cursor: pointer;
	top: ${(props: CircleProps) => props.$top ? `calc(${props.$top})` : 'unset'};
	left: ${(props: CircleProps) => props.$left ? `calc(${props.$left})` : 'unset'};
	transform: ${(props: CircleProps) => props.selected === true ?
		`translate(-50%, -50%) scale(2)` : `translate(-50%, -50%)`};
	width: ${(props: CircleProps) => props.radius ? props.radius : 'unset'};
	aspect-ratio: 1 / 1;
	transition: all 0.4s;
	background: ${(props: CircleProps) => {
		if (props.selected)
			return `rgb(178 225 255 / 95%)`;
		else if (props.done)
			return `${SHORT_COL}`
		return `white`;
	}};
	animation: ${starterZoom} 3s ease 0.2s;
`