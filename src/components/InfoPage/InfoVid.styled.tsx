import styled from "styled-components";

export const InfoVidContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	margin: 1em calc((100% - 95%) / 2);
	width: 90%;
	box-sizing: border-box;
`

export const InfoVidTextTitle = styled.p`
	font-size: 1rem;
	font-weight: 400;
	margin-top: 0;
	margin-left: 1rem;
	margin-bottom: 0.5rem;
	margin-right: 1rem;
	color: rgb(148, 0, 0);
`

export const InfoVidText = styled.p`
	margin-top: 0;
	margin-left: 1rem;
	margin-bottom: 1rem;
	margin-right: 1rem;
	font-size: 0.8rem;
`
export const InfoVidSubText = styled.p`
	margin-top: 0;
	margin-left: 3rem;
	margin-right: 1rem;
	font-size: 0.8rem;

	&::before {
		content: "-";
		position: absolute;
		left: 2rem;
		color: black;
`


export const InfoVidMiniText = styled.p`
	margin-top: 0;
	margin-left: 1rem;
	margin-bottom: 1rem;
	margin-right: 1rem;
	font-size: 0.55rem;
	font-style: italic;
	font-weight: bold;
`

export const YtbIFrameContainer = styled.div`
	position: relative;
	margin-left: 1rem;
	flex: 1 1 auto;
`

export const YtbIFrame = styled.iframe`
	position: relative;
	border: 0;
	top: 0;
	left: 0;
	box-sizing: border-box;
	width: 95%;
	height: 20vh;
	margin: auto;
`