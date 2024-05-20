import React, { useEffect, useRef, useState } from "react";
import { HomeBgnd, MainContainerWindow, PlanImg, PlanImgContainer } from "./Home.styled";
import Plan from '../../img/plan.svg'
import ParkourPrinter from "../ParkourPrinter/ParkourPrinter";
import Popup from "../Popup/Popup";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { remove } from "../../redux/slice/infoPointSlice";
import Header from "../Header/Header";
import Modal from "../Modal/Modal";
import LanguageModal from "../LanguageModal/LanguageModal";
import TimeModal from "../TimeModal/TimeModal";
import Footer from "../Footer/Footer";


export enum EPoint {
	SHORT,
	LONG
}

export type ParkourType =
	'short' |
	'long';


const Home = () => {
// #940000
	// const [width, setWidth] = useState<string>(`${window.outerWidth * 0.9}`);
	const [height, setHeight] = useState<string>(`${window.outerHeight * 0.6}`);
	const planImgRef = useRef<HTMLImageElement>(null);
	const infoPoint = useSelector((state: RootState) => state.infoPoint)
	const parkour = useSelector((state: RootState) => state.parkour)
	const dispatch = useDispatch();
	const popupRef = useRef<HTMLDivElement>(null);



	// const widthSetter = () => {
	// 	setWidth(`${window.outerWidth * 0.8}`);
	// }

	const heightSetter = () => {
		setHeight(`${window.outerHeight * 0.6}`);
		
	}

	const planResizer = (e: UIEvent) => {
		e.preventDefault();

		heightSetter();
	}



	const onScreenClick = (e: MouseEvent) => {
		
		if (popupRef.current) {
			const popupDim = popupRef.current.getBoundingClientRect();
	
			console.log("e.clientX = ", e.clientX, "  e.clientY = ", e.clientY)
			// console.log("popupDim.x = ", popupDim.x, "  (popupDim.x + popupDim.width) = ", (popupDim.x + popupDim.width))
			// console.log("popupDim.y = ", popupDim.y, "  (popupDim.y + popupDim.width) = ", (popupDim.y + popupDim.height))
			if ((e.clientX < popupDim.x || e.clientX > (popupDim.x + popupDim.width))
			|| (e.clientY < popupDim.y || e.clientY > (popupDim.y + popupDim.height))) {
				dispatch(remove());
			}

		}
	}



	useEffect(() => {
		window.addEventListener("click", onScreenClick, true);

		return () => {
			window.removeEventListener("click", onScreenClick);
		}
	}, [])

	useEffect(() => {
		if (planImgRef.current) {
			window.addEventListener('resize', planResizer)
		}
		return () => {
			window.removeEventListener('resize', planResizer)
		}
	}, [planImgRef])
	


	return (
		<React.Fragment>
			<MainContainerWindow>
				<HomeBgnd />
				<Header />
				<PlanImgContainer>
					<PlanImg ref={planImgRef} src={Plan} height={'100%'} />
					<ParkourPrinter parkourType={parkour.currParkour} />
					<Popup infoPointSlice={infoPoint}
						parkourType={parkour.currParkour}
						popupRef={popupRef} />
				</PlanImgContainer>
				<LanguageModal />
				<TimeModal />
				<Footer />
			</MainContainerWindow>
		</React.Fragment>
	);
}

export default Home;