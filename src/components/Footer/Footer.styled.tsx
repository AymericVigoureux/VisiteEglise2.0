import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterContainer = styled.div`
	display: flex;
	flex-direction: row;
	background: rgb(148, 0, 0);
	flex: 0 0 auto;
	justify-content: space-evenly;
	padding: 0.4rem 0;
`

export const FooterIconContainer = styled(Link)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	text-decoration: none;
	user-select: none;
	text-align: center;
	touch-action: manipulation;
	flex: auto;
`

export const FooterIconImg = styled.img`
	height: 2.7rem;
	aspect-ratio: 1 / 1;
	width: fit-content;
`

export const FooterIconText = styled.p`
	margin: 0;
	color: white;
	font-size: 0.8rem;
	font-weight: 700;
	margin-top: 0.2rem;
`