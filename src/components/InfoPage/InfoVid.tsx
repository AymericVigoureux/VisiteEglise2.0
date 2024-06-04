import { YtbIFrame, InfoVidTextTitle,YtbIFrameContainer,InfoVidMiniText, InfoVidText } from "./InfoVid.styled"
import { InfoPointSliceProps } from "../../redux/slice/infoPointSlice";
import { useLocation, useParams } from "react-router-dom";


const InfoVid = () => {
	const { infoPointSlice }: {infoPointSlice: InfoPointSliceProps} = useLocation().state;

	const printDescription = ()=>{
		const description : JSX.Element[] =[];
		if(infoPointSlice.description){
			for(var i = 0; i < infoPointSlice.description.length; i++){
				description.push(<InfoVidText>{infoPointSlice.description[i]}</InfoVidText>)
			}
		}
		return (description);
	}

	return (
		<p>
			<InfoVidTextTitle>Vidéo</InfoVidTextTitle>
			<InfoVidMiniText>Veuillez mettre des écouteurs pour suivre la vidéo</InfoVidMiniText>
			<YtbIFrameContainer>
				<YtbIFrame
					width="560" height="315" src= {infoPointSlice.video}
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen />
			</YtbIFrameContainer>
			{printDescription()}
		</p>
	)
}

export default InfoVid