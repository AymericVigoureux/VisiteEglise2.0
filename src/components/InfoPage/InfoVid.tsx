import { TabPanel } from "react-tabs"
import { YtbIFrame, InfoVidTextTitle,YtbIFrameContainer,InfoVidMiniText, InfoVidText } from "./InfoVid.styled"
import { InfoPointSliceProps } from "../../redux/slice/infoPointSlice";
import { useLocation, useParams } from "react-router-dom";


const InfoVid = () => {
	const { infoPointSlice }: {infoPointSlice: InfoPointSliceProps} = useLocation().state;

	return (
		<p>
			<InfoVidTextTitle>Vidéo</InfoVidTextTitle>
			<InfoVidText>{infoPointSlice.description}</InfoVidText>
			<InfoVidMiniText>Veuillez mettre des écouteurs pour suivre la vidéo</InfoVidMiniText>
			<YtbIFrameContainer>
				<YtbIFrame
					width="560" height="315" src= {infoPointSlice.video}
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen />
			</YtbIFrameContainer>
		</p>

		// <InfoVidContainer>
		// 	<InfoVidText>(Veuillez mettre des écouteurs pour suivre la vidéo)</InfoVidText>
		// 	<YtbIFrame
		// 		width="560" height="315" src={src}
		// 		title="YouTube video player"
		// 		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		// 		allowFullScreen />
		// </InfoVidContainer>
	)
}

export default InfoVid