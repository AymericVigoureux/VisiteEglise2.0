import { createSlice } from "@reduxjs/toolkit";
import { ParkourType } from "../../components/Home/Home";

export type ParkourSliceProps = {
	currParkour: ParkourType;
}

const initialState: ParkourSliceProps = {
	currParkour: 'short'
} as ParkourSliceProps

const parkourSlice = createSlice({
	name: "infoPoint",
	initialState,
	reducers: {
		set: (state, action) => {
			state.currParkour = action.payload as ParkourType
		},
		reset: (state, action) => {
			state.currParkour = 'short' as ParkourType
		}
	}
});

export const { set, reset } = parkourSlice.actions;

const parkourReducer = parkourSlice.reducer
export default parkourReducer;