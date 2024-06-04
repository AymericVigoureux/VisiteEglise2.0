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
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const InfoPage = () => {

	const { infoTheme } = useParams();
	const { infoPointSlice }: {infoPointSlice: InfoPointSliceProps} = useLocation().state;
	const isVideo = () => {if(infoPointSlice.video){return 0}else{return 1}}
	const [ indexContent, setIndexContent ] = useState<number>(isVideo());


	const activeVidBtn = useCallback(() => {
		setIndexContent(0);
	}, []);

	const activeWritBtn = useCallback(() => {
		setIndexContent(1);
	}, []);


	const onBtnClick = useCallback((setToSelected: () => void) => {
		setToSelected();
	}, []);

	
	const printHeaderVideoText = () => {
		const headers : JSX.Element[] = []
		if (infoPointSlice.video){
			headers.push(
				<Tab>Vidéo</Tab>
			);
		}
		if (infoPointSlice.description){
			headers.push(
				<Tab>Text</Tab>
			);
		}
		return headers;
	}

	const printVideoText = () => {
		const VideoText : JSX.Element[] = []
		if (infoPointSlice.video){
			VideoText.push(
				<TabPanel>
					<InfoVid/>
				</TabPanel>
			);
		}
		if (infoPointSlice.description){
			VideoText.push(
				<TabPanel>
					<InfoText/>
				</TabPanel>
			);
		}
		return VideoText;
	}

	return (
		<React.Fragment>
			<Tabs>
			<HomeBgnd />
	 			<InfoHeader>
	 				<InfoTitleContainer>
	 					<InfoTitle>Etape {infoPointSlice.num} :<br />{infoPointSlice.title}</InfoTitle>
	 				</InfoTitleContainer>
					{ infoPointSlice.image &&
	 					<InfoImgContainer>
							<InfoImg src={infoPointSlice.image} />
	 					</InfoImgContainer>
	 				}
					<TabList>
						{printHeaderVideoText()}
					</TabList>
				</InfoHeader>
				{printVideoText()}
			</Tabs>
			<Footer />
		</React.Fragment>
	)


	// return (
	// 	<React.Fragment>
	// 		<MainContainerWindow>
	// 			<HomeBgnd />
	// 			<InfoHeader>
	// 				<InfoTitleContainer>
	// 					<InfoTitle>Etape {infoPointSlice.num} :<br />{infoPointSlice.title}</InfoTitle>
	// 				</InfoTitleContainer>
	// 				{ infoPointSlice.image &&
	// 					<InfoImgContainer>
	// 						<InfoImg src={infoPointSlice.image} />
	// 					</InfoImgContainer>
	// 				}
	// 				<InfoBtnsContainer>
	// 					{printHeaderVideoText()}
						
	// 				</InfoBtnsContainer>
	// 			</InfoHeader>
	// 			<InfoContentContainer index={indexContent}>
	// 				<InfoVidContainer>
	// 					<InfoVidTextTitle>Vidéo</InfoVidTextTitle>
	// 					<InfoVidText>{infoPointSlice.description}</InfoVidText>
	// 					<InfoVidMiniText>Mettez des écouteurs</InfoVidMiniText>
	// 					<YtbIFrameContainer>
	// 						<YtbIFrame
	// 							width="560" height="315" src= {infoPointSlice.video}
	// 							title="YouTube video player"
	// 							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	// 							allowFullScreen />
	// 					</YtbIFrameContainer>
	// 				</InfoVidContainer>
	// 				<InfoTextContainer>
	// 					<p>{infoPointSlice.description}</p>
	// 				</InfoTextContainer>
	// 			</InfoContentContainer>
	// 			<Footer />
	// 		</MainContainerWindow>
	// 	</React.Fragment>
	// )
}

export default InfoPage;