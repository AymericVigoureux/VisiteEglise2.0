import { createSlice } from "@reduxjs/toolkit";

export type InfoPointSliceProps = {
	num: number,
	title: string,
	done: boolean,
	image?: string,
	description?: string,
}

const initialState: InfoPointSliceProps = { num: -1 } as InfoPointSliceProps;

const infoPointSlice = createSlice({
	name: "infoPoint",
	initialState,
	reducers: {
		select(state, action) {
			state.num = action.payload.num
			state.title = action.payload.title
			state.done = action.payload.done
			state.image = action.payload.image
			state.description = action.payload.description
		},
		remove(state) {
			state.num = -1
			state.title = ''
			state.done = false
			state.image = undefined
			state.description = undefined
		}
	}
});

export const { select, remove } = infoPointSlice.actions;

const infoPointReducer = infoPointSlice.reducer
export default infoPointReducer;