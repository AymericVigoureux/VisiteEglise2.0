import { useDispatch, useSelector } from 'react-redux';
import ParentModal from '../Modal/Modal'
import { TimeContainer, TimeTitle, TimeWrapper } from './TimeModal.styled';
import { RootState } from '../../redux/store';
import { ModalEnum, hide } from '../../redux/slice/modalSlice';
import { SelectionButton, SelectionButtonContainer, TimeContentContainer, TimeStepContainer, TimeStepNumber, TimeStepText, TimeTimeContainer, TimeTimeImg, TimeTimeText, TimeTypeContainer, TimeTypeImg, TimeTypePlus } from './TimeModalContainer.styled';
import Timer from '../../img/timer.svg'
import Clap from '../../img/clap.svg'
import TextSvg from '../../img/text.svg'
import PlusSvg from '../../img/plus.svg'
import { set } from '../../redux/slice/parkourSlice';
import { ParkourType } from '../Home/Home';

const TimeModal = () => {
	
	const dispatch = useDispatch();
	const modal = useSelector((state: RootState) => state.modal);


	const onOutsideClick = () => {
		dispatch(hide());
	}

	const onParkourClick = (parkour: ParkourType) => {
		dispatch(set(parkour));
		dispatch(hide());
	}


	return (
		<ParentModal display={modal.displays[ModalEnum.TIME]} onOutsideClick={onOutsideClick}>
			<TimeWrapper>
				<TimeContainer background='rgb(241, 224, 188)'>
					<TimeTitle $color='rgb(214, 141, 25)' background='rgb(232, 201, 116)'>Court</TimeTitle>
					<TimeContentContainer>
						<TimeStepContainer>
							<TimeStepNumber>5</TimeStepNumber>
							<TimeStepText $color='rgb(214, 141, 25)'>étapes</TimeStepText>
						</TimeStepContainer>
						<TimeTimeContainer>
							<TimeTimeImg src={Timer} />
							<TimeTimeText $color='rgb(214, 141, 25)'>15 min.</TimeTimeText>
						</TimeTimeContainer>
						<TimeTypeContainer>
							<TimeTypeImg src={Clap} />
						</TimeTypeContainer>
					</TimeContentContainer>
					<SelectionButtonContainer>
						<SelectionButton
							onClick={() => onParkourClick('short')}>Choisir</SelectionButton>
					</SelectionButtonContainer>
				</TimeContainer>
				<TimeContainer background='rgb(224, 237, 225)'>
					<TimeTitle background='rgb(139, 203, 143)' $color='rgb(15, 128, 22)'>Long</TimeTitle>
					<TimeContentContainer>
						<TimeStepContainer>
							<TimeStepNumber>≈15</TimeStepNumber>
							<TimeStepText $color='rgb(15, 128, 22)'>étapes</TimeStepText>
						</TimeStepContainer>
						<TimeTimeContainer>
							<TimeTimeImg src={Timer} />
							<TimeTimeText $color='rgb(15, 128, 22)'>30 min.</TimeTimeText>
						</TimeTimeContainer>
						<TimeTypeContainer>
							<TimeTypeImg src={Clap} />
							<TimeTypePlus>+</TimeTypePlus>
							<TimeTypeImg src={TextSvg} />
						</TimeTypeContainer>
					</TimeContentContainer>
					<SelectionButtonContainer>
						<SelectionButton
							onClick={() => onParkourClick('long')}>Choisir</SelectionButton>
					</SelectionButtonContainer>
				</TimeContainer>
			</TimeWrapper>
		</ParentModal>
	)
}

export default TimeModal;