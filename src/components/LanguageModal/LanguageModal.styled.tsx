import styled from "styled-components";

export const LanguageContainer = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	top: 50%;
	left: 50%;
	width: 88%;
	max-width: 30rem;
	max-height: 20rem;
	background: rgb(191, 225, 246);
	transform: translate(-50%, -50%);
	transition: all 0.4s;
	border-radius: 6px;
`

export const LanguageTitle = styled.p`
	font-weight: 700;
    font-style: normal;
    color: rgb(3, 43, 132);
    text-decoration: none;
	text-align: center;
	padding: 0.5rem 0;
	background: rgb(108, 167, 205);
	border-radius: 6px;
	font-size: 1.2rem;
	margin: 0;
`

export const LanguageFlagsWrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	flex: 1 1 auto;
	overflow: auto;
`

export const LanguageFlagsContainer = styled.div`
	position: relative;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	flex: 0 1 auto;
	padding: 0.5rem 0;
`

export const ImgFlag = styled.img`
	position: relative;
	width: 18%;
	aspect-ratio: 1 / 1;
	border-radius: 50%;
	cursor: pointer;
`