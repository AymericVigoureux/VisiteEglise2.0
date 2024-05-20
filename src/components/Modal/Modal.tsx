import { PropsWithChildren, useEffect, useRef } from "react";
import { ModalWrapper } from "./Modal.styled";


interface ModalProps {
	display: boolean
	onOutsideClick?: () => void
}

const Modal = ({display, onOutsideClick, children}: PropsWithChildren<ModalProps>) => {

	const modalWrapperRef = useRef<HTMLDivElement>(null);


	const onModalLeave = (e: MouseEvent) => {
		if (e.target === modalWrapperRef.current)
		if (onOutsideClick)
			onOutsideClick();
	}

	useEffect(() => {
		window.addEventListener('click', onModalLeave, true);

		return () => {
			window.removeEventListener('click', onModalLeave);
		}
	}, [])

	
	return (
		<ModalWrapper ref={modalWrapperRef} display={display} >
			{ children }
		</ModalWrapper>
	)
}

export default Modal;