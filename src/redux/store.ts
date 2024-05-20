import { configureStore } from "@reduxjs/toolkit";
import infoPointReducer from "./slice/infoPointSlice";
import modalReducer from "./slice/modalSlice";
import languageReducer from "./slice/languageSlice";
import parkourReducer from "./slice/parkourSlice";

const store = configureStore({
	reducer: {
		infoPoint: infoPointReducer,
		modal: modalReducer,
		language: languageReducer,
		parkour: parkourReducer,
	}
})


export type RootState = ReturnType<typeof store.getState>

export default store;