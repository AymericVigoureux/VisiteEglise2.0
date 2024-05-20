import styled from "styled-components"

interface TimeContainerProps {
	selected?: boolean
}


export const TimeContainer = styled.div<TimeContainerProps>`
	position: relative;
	flex: 0 1 auto;
	height: 3rem;
	width: fit-content;
	margin-left: 1rem;
	cursor: pointer;
	transition: all 0.4s;
	transform: ${(props: TimeContainerProps) => props.selected ? `scale(1.3)` : `scale(1)`};
`

export const TimeImg = styled.img`
	height: 100%;
	border-radius: 50%;
	aspect-ratio: 1 / 1;
	user-select: none;
	touch-action: none;
`