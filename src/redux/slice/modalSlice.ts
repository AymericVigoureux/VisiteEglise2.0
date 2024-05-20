import { createSlice } from "@reduxjs/toolkit";


export enum ModalEnum {
	LANGUAGE = 0,
	TIME
}

interface ModalSliceProps {
	displays: boolean[];
}

const initialState: ModalSliceProps = {
	displays: [false, false]
} as ModalSliceProps

const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		display: (state, action) => { // action is the number corresponding to the number enum
			console.log("action.payload = ", action.payload)
			state.displays.fill(false)
			state.displays[Number(action.payload)] = true;
			console.log("state.displays = ", state.displays);
		},
		hide: (state) => {
			state.displays.fill(false);
		}
	}
})

export const { display, hide } = modalSlice.actions;

const modalReducer = modalSlice.reducer
export default modalReducer;