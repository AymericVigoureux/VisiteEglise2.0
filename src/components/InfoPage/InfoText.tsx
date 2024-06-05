import { InfoPointSliceProps } from "../../redux/slice/infoPointSlice";
import {  InfoVidTextTitle,InfoVidMiniText, InfoVidText,InfoVidSubText,InfoPriere } from "./InfoVid.styled"
import { InfoHeader, InfoImgText, InfoImgContainerText, InfoTitle, InfoTitleContainer } from "./InfoPage.styled";
import { useLocation, useParams } from "react-router-dom";
import { TabPanel } from "react-tabs"



const InfoText = () => {
	const { infoPointSlice }: {infoPointSlice: InfoPointSliceProps} = useLocation().state;

	const printTitleTextImg = () =>{
		const titleTextImg : JSX.Element[] =[];
		const elements = infoPointSlice.textarea;
		if(elements){
			for(let typeText= 0; typeText<elements.length; typeText+=2){
				if(elements[typeText] === "Title"){
					titleTextImg.push(<InfoVidTextTitle>{elements[typeText + 1]}</InfoVidTextTitle>)
				}
				else if (elements[typeText] === "Text") {
					titleTextImg.push(<InfoVidText>{elements[typeText + 1]}</InfoVidText>)
				} 
				else if (elements[typeText] === "img") {
					titleTextImg.push(
						<InfoImgContainerText>
							<InfoImgText src={elements[typeText + 1]} />
						</InfoImgContainerText>
					)
				}
				else if(elements[typeText] === "SubText"){
					titleTextImg.push(<InfoVidSubText>{elements[typeText + 1]}</InfoVidSubText>)
				}
				else if(elements[typeText] === "Priere"){
					titleTextImg.push(<InfoPriere><p dangerouslySetInnerHTML={{ __html: elements[typeText + 1] }} /></InfoPriere>)
				}
			}
		}
		return titleTextImg;
	}


	return (
		<p>
			<InfoTitle>Text</InfoTitle>
			{printTitleTextImg()}
		</p>
	)
}

export default InfoText;