import styled from "styled-components"



interface PlanImgContainerProps {
	$minWidth?: string,
	$maxWidth?: string,
	$width?: string,
}



export const MainContainerWindow = styled.div`
	position: relative;
	height: 100%;
	display: flex;
	flex-direction: column;
`

export const HomeBgnd = styled.div`
	position: fixed;
	background: radial-gradient(rgb(240, 240, 240), rgb(240, 240, 240), rgb(255, 255, 229));
	top: 0;
	left: 0;
	width: 100%;
	height: 300%;
	z-index: -1;
`

export const PlanImgContainer = styled.div`
	position: relative;
	margin: auto;
	flex: 1 1 auto;
	margin-bottom: 3%;
`

export const PlanImg = styled.img`
	position: relative;
	margin: auto;
	left: 50%;
	transform: translateX(-50%);
	user-select: none;
	user-drag: none;
`

// width: ${(props) => props.$width ? props.$width : 'unset'};
