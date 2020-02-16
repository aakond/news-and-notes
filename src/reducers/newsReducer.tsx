import { INewsModel } from "../interfaces";

export const initialState: INewsModel = {
	header: "Lorem ipsum",
	content: "Lorem ipsum – псевдо-латинский текст, который используется для веб дизайна, типографии, оборудования, и распечатки вместо английского текста для того, чтобы сделать ударение не на содержание, а на элементы дизайна. Такой текст также называется как заполнитель. Это очень удобный инструмент для моделей (макетов).",
	date: new Date().toLocaleString("ru", {
		day: "numeric",
		month: "long",
		year: "numeric"
	}),
	imageSrc1: "src\/images\/sample-1.jpg",
	imageSrc2: "src\/images\/sample-2.jpg"
};

export const newsReducer = (state: INewsModel = initialState, action: any) => {
	switch (action.type) {
		default:
			return state;
	}
};