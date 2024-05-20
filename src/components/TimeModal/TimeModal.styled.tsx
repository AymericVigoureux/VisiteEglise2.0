import styled from "styled-components";


interface TimeContainerProps {
	background?: string
}

interface TimeTitleProps {
	background?: string
	$color?: string
}


export const TimeWrapper = styled.div`
	position: relative;
	top: 50%;
	left: 50%;
	width: 88%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: row;
	justify-content: space-around;	
	max-width: 30rem;
	max-height: 20rem;
	transition: all 0.4s;
`

export const TimeContainer = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	background: ${(props: TimeContainerProps) => props.background};
	transition: all 0.4s;
	flex: 0.4 1 auto;
	border-radius: 6px;
	justify-content: flex-start;
`

export const TimeTitle = styled.p`
	font-weight: 700;
	font-style: normal;
	color: ${(props: TimeTitleProps) => props.$color};
	text-decoration: none;
	text-align: center;
	padding: 0.5rem 0;
	background: ${(props: TimeTitleProps) => props.background};
	border-radius: 6px;
	font-size: 1.2rem;
	margin: 0;
`