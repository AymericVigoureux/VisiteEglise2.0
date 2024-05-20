import React, { useCallback, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { HomeBgnd, MainContainerWindow } from "../Home/Home.styled";
import { InfoHeader, InfoImg, InfoImgContainer, InfoTitle, InfoTitleContainer } from "./InfoPage.styled";
import { InfoPointSliceProps } from "../../redux/slice/infoPointSlice";
import { InfoBtn, InfoBtnImg, InfoBtnsContainer, InfoContentContainer } from "./InfoPageBtns.styled";
import VideoSvg from '../../img/video.svg'
import TextSvg from '../../img/text.svg'
import InfoVid from "./InfoVid";
import InfoText from "./InfoText";
import Footer from "../Footer/Footer";
import { InfoVidContainer, InfoVidMiniText, InfoVidText, InfoVidTextTitle, YtbIFrame, YtbIFrameContainer } from "./InfoVid.styled";


const InfoPage = () => {

	const { infoTheme } = useParams();
	const { infoPointSlice }: {infoPointSlice: InfoPointSliceProps} = useLocation().state;
	const [ indexContent, setIndexContent ] = useState<number>(1);


	const activeVidBtn = useCallback(() => {
		setIndexContent(0);
	}, []);

	const activeWritBtn = useCallback(() => {
		setIndexContent(1);
	}, []);


	const onBtnClick = useCallback((setToSelected: () => void) => {
		setToSelected();
	}, []);
	

	return (
		<React.Fragment>
			<MainContainerWindow>
				<HomeBgnd />
				<InfoHeader>
					<InfoTitleContainer>
						<InfoTitle>Station {infoPointSlice.num} :<br />{infoPointSlice.title}</InfoTitle>
					</InfoTitleContainer>
					{ infoPointSlice.image &&
						<InfoImgContainer>
							<InfoImg src={infoPointSlice.image} />
						</InfoImgContainer>
					}
					<InfoBtnsContainer>
						<InfoBtn selected={indexContent === 0}
						onClick={() => onBtnClick(activeVidBtn)}>
							Vidéo
							<InfoBtnImg src={VideoSvg} />
						</InfoBtn>
						<InfoBtn selected={indexContent === 1}
						onClick={() => onBtnClick(activeWritBtn)}>
							Texte
							<InfoBtnImg src={TextSvg} />
						</InfoBtn>
					</InfoBtnsContainer>
				</InfoHeader>
				<InfoContentContainer index={indexContent}>
					<InfoVidContainer>
						<InfoVidTextTitle>L'ultime guide de rédaction</InfoVidTextTitle>
						<InfoVidText>Lisez une sélection d'articles de journalistes de renommée mondiale.</InfoVidText>
						<InfoVidMiniText>Publié le ...</InfoVidMiniText>
						<YtbIFrameContainer>
							<YtbIFrame
								width="560" height="315" src={"https://www.youtube.com/embed/0V8yNAZZfSE"}
								title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowFullScreen />
						</YtbIFrameContainer>
					</InfoVidContainer>
					<InfoText />
				</InfoContentContainer>
				<Footer />
			</MainContainerWindow>
		</React.Fragment>
	)
}

export default InfoPage;