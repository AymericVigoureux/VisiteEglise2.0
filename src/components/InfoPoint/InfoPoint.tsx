import React, { useCallback, useEffect, useRef, useState } from "react";
import { InfoCircle } from "./InfoCircle.styled";
import { InfoNumber } from "./InfoPoint.styled";
import { useResizeText } from "../../hooks/useResizeText";
import { InfoPointSliceProps } from "../../redux/slice/infoPointSlice";


export interface InfoPopup {
	title: string,
	done: boolean,
	image?: string,
	description?: string,
	video?: string,
}

export interface InfoPointProps {
	num: number,
	infoPopup: InfoPopup
	selected?: boolean,
	$top?: string
	$left?: string,
	onSelected?: (infoPoint: InfoPointSliceProps) => void
}

const InfoPoint = ({ num, infoPopup, selected = false, $top, $left, onSelected }: InfoPointProps) => {
	

	const [radius, setRadius] = useState<string>('5%')
	const [read, setRead] = useState<number[]>([]);

	return (
		<React.Fragment>
			<InfoCircle done={infoPopup.done}
			onClick={() => onSelected ? onSelected({
				num,
				title: infoPopup.title,
				done: infoPopup.done,
				image: infoPopup.image,
				description: infoPopup.description,
				video: infoPopup.video,
			}) : undefined}
			selected={selected} $top={$top} $left={$left} radius={radius}>
				<InfoNumber viewBox="0 0 30 18">
					<text x="50%" y="50%">{num}</text>
				</InfoNumber>
			</InfoCircle>
		</React.Fragment>
	)
}

export default InfoPoint;