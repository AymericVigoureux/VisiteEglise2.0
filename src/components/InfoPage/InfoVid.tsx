import { YtbIFrame, InfoVidContainer, InfoVidText } from "./InfoVid.styled"


interface InfoVidProps {
	src: string
}


const InfoVid = ({src}: InfoVidProps) => {


	return (
		<InfoVidContainer>
			<InfoVidText>(Veuillez mettre des écouteurs pour suivre la vidéo)</InfoVidText>
			<YtbIFrame
				width="560" height="315" src={src}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen />
		</InfoVidContainer>
	)
}

export default InfoVid