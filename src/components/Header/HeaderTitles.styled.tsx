import styled from "styled-components"

interface ArrowImgProps {
	returned?: boolean
}


export const HeaderTitleContainer = styled.div`
	margin: auto;
	padding: 3% 10%;
	color: white;
	text-align: center;
`

export const HeaderTitle = styled.h1`
	font-size: 1.7rem;
	margin: auto;
	font-weight: normal;
`

export const HeaderSubTitleContainer = styled.div`
	position: relative;
	display: flex;
	align-items: flex-end;
	margin: 3% auto 0;
	justify-content: center;
`

export const HeaderSubTitle = styled.p`
	margin: 0;
`

export const ArrowImg = styled.img<ArrowImgProps>`
	height: 0.6rem;
	margin: 0 0.15rem 0;
	transform: ${(props: ArrowImgProps) => props.returned ?
		`scale(-1, 1) rotate(-0.5rad)` :
		`scale(1, 1) rotate(-0.5rad)`
	};
	user-select: none;
	touch-action: none;
`