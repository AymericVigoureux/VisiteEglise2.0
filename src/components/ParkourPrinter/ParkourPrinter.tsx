import React from "react";
import { LongParkourImg, ShortParkourImg } from "./ParkourPrinter.styled";
import ShortParkourSvg from "../../img/short_parkour.svg"
import LongParkourSvg from "../../img/long_parkour.svg"
import { ParkourType } from "../Home/Home";
import InfoPoints from "../InfoPoints/InfoPoints";


interface ParkourPrinterProps {
	parkourType: ParkourType
}


const ParkourPrinter = ({ parkourType }: ParkourPrinterProps) => {

	const parkourPrinter = (parkourType: ParkourType) => {
		if (parkourType === 'short') {
			return (
				<React.Fragment>
					<ShortParkourImg src={ShortParkourSvg} />
					<InfoPoints parkourType={'short'}/>
				</React.Fragment>
			)
		}
		else if (parkourType === 'long') {
			return (
				<React.Fragment>
					<LongParkourImg src={LongParkourSvg} />
					<InfoPoints parkourType={'long'}/>
				</React.Fragment>
			)
		}
	}

	return (
		<React.Fragment>
			{parkourPrinter(parkourType)}
		</React.Fragment>
	)
}

export default ParkourPrinter;