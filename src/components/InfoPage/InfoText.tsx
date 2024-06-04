import { InfoPointSliceProps } from "../../redux/slice/infoPointSlice";
import {  InfoVidTextTitle,InfoVidMiniText, InfoVidText } from "./InfoVid.styled"
import { useLocation, useParams } from "react-router-dom";
import { TabPanel } from "react-tabs"



const InfoText = () => {
	const { infoPointSlice }: {infoPointSlice: InfoPointSliceProps} = useLocation().state;


	return (
		<p>
			<InfoVidTextTitle>Text</InfoVidTextTitle>
			<InfoVidText>{infoPointSlice.description}</InfoVidText>
		</p>
	)
}

export default InfoText;