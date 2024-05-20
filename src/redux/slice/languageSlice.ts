import { createSlice } from "@reduxjs/toolkit";
import { LanguageType } from "../../components/LanguageModal/LanguageFlags.const";

interface LanguageSliceProps {
	currLanguage: LanguageType;
}

const initialState: LanguageSliceProps = {
	currLanguage: 'french'
} as LanguageSliceProps

const languageSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		set: (state, action) => {
			state.currLanguage = action.payload as LanguageType
		},
		reset: (state, action) => {
			state.currLanguage = 'french' as LanguageType
		}
	}
})

export const { set, reset } = languageSlice.actions;

const languageReducer = languageSlice.reducer
export default languageReducer;