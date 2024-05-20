import styled from "styled-components";

export const InfoHeader = styled.div`
	position: relative;
	background: rgb(148, 0, 0);
	display: flex;
	flex-direction: column;
	flex: 0 1 auto;
`

export const InfoTitleContainer = styled.div`
	position: relative;
	margin: 8% 0 5%;
	width: 100%;
`

export const InfoTitle = styled.h2`
	text-align: center;
	margin: 0;
	color: white;
	font-weight: normal;
`

export const InfoImgContainer = styled.div`
	position: relative;
	height: 20vh;
`

export const InfoImg = styled.img`
	position: relative;
	border: solid 1px black;
	box-sizing: border-box;
	object-fit: cover;
	width: 100%;
	height: 100%;
`