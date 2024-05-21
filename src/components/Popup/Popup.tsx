import React, { useCallback, useEffect, useRef, useState } from "react";
import { PopupBtnContainer, PopupContainer, PopupExtraText, PopupDoneText, PopupImage, PopupHeaderInfo, PopupTitle, PopupBtn, PopupBtnWrapper, PopupTitleImg } from "./Popup.styled";
import { ParkourType } from "../Home/Home";
import { InfoPointSliceProps } from "../../redux/slice/infoPointSlice";
import { Link } from "react-router-dom";


interface PopupProps {
	parkourType: ParkourType,
	infoPointSlice: InfoPointSliceProps
	popupRef?: React.RefObject<HTMLDivElement>
}


const Popup = ({ parkourType, infoPointSlice, popupRef }: PopupProps) => {

	console.log("infoPointSlice = ", infoPointSlice.num)
	// console.log("infoPointSlice.title.replace(/\s+/g, '-').toLowerCase() = ", infoPointSlice.title.replace(/\s+/g, '-').toLowerCase())


	const getHref = useCallback(() : string => {
		if (infoPointSlice.num > -1) {
			return ('/info/' + infoPointSlice.title.replace(/\s+/g, '-').toLowerCase());
		}
		return ''
	}, [infoPointSlice])


	return (
		<PopupContainer ref={popupRef} done={infoPointSlice.done}
		isMobile={(window.navigator as any).userAgentData.mobile}
		doPrint={infoPointSlice.num > 0} parkourType={parkourType}>
			<PopupHeaderInfo>
				<PopupTitleImg>
					<PopupTitle>Etape {infoPointSlice.num}</PopupTitle>
					{ infoPointSlice.image && <PopupImage src={infoPointSlice.image} />}
				</PopupTitleImg>
				<PopupExtraText>{infoPointSlice.title}</PopupExtraText>
			</PopupHeaderInfo>
			<PopupBtnWrapper>
				{ infoPointSlice.done && <PopupDoneText>Déjà lu !</PopupDoneText>}
				<PopupBtnContainer>
					<PopupBtn to={getHref()} role="button"
					state={{ infoPointSlice }}>
						Regarder
					</PopupBtn>
				</PopupBtnContainer>
			</PopupBtnWrapper>
		</PopupContainer>
	)
};

export default Popup;