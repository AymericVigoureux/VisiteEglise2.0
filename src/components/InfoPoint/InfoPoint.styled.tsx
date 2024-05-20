import styled from "styled-components";
import { SHORT_COL } from "./InfoCircle.styled";

export const InfoNumber = styled.svg`
	position: absolute;
	font-family: 'Roboto', sans-serif;
	display: block;
	margin: auto;
	z-index: 1;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	user-select: none;

	& text {
		text-align: center;
		line-height: 1em;
		width: 100%;
		text-anchor: middle;
		dominant-baseline: middle;
		fill: black;
	}
`