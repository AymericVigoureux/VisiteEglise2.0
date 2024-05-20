import { TimeContainer, TimeImg } from "./Time.styled";
import Timer from '../../img/hourglass.svg'
import { MouseEventHandler } from "react";

interface TimeProps {
	timeRef?: React.RefObject<HTMLDivElement>
	selected?: boolean
	onClick?: MouseEventHandler<HTMLDivElement> | undefined
}


const Time = ({ timeRef, selected, onClick }: TimeProps) => {

	return (
		<TimeContainer ref={timeRef}
		selected={selected} onClick={onClick}>
			<TimeImg src={Timer} />
		</TimeContainer>
	)
}

export default Time;