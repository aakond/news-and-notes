import { combineReducers } from "redux";
import { notesReducer } from "./notesReducers";
import { newsReducer } from "./newsReducer";

const rootReducer = combineReducers({
	notes: notesReducer,
	news: newsReducer
});

export default rootReducer;