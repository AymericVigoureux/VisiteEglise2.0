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

// export const InfoImgContainerText = styled.div`
// 	position: relative;
// 	height: 20vh;
// 	padding: 1rem;
// `
export const InfoImgContainerText = styled.div`
	text-align: center;
  	padding: 0.5rem;
`

export const InfoImg = styled.img`
	position: relative;
	border: solid 1px black;
	box-sizing: border-box;
	object-fit: cover;
	width: 100%;
	height: 100%;
`
export const InfoImgText = styled.img`
	margin: 0 auto; 
	max-width: calc(100% - 4rem); 
	height: auto;
	display: block;
`

// export const InfoImgText = styled.img`
// 	position: relative;
// 	box-sizing: border-box;
// 	object-fit: cover;
// 	width: 100%;
// 	height: 100%;
// `