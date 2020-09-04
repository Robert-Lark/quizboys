import {
	FETCH_DATA_REQUEST,
	FETCH_DATA_SUCCESS,
	FETCH_DATA_FAILURE,
	FETCH_SINGULAR_DATA,
	FETCH_ANSWER,
	FETCH_INCORRECT_ANSWERS,
	COLLATE_SCORE1,
	COLLATE_SCORE0,
	CORRECT_ANSWER,
	WRONG_ANSWER
} from "./dataActions";

export const initialState = {
	loading: false,
	data: [],
	singularData: null,
	answer: null,
	incorrectAnswers: [],
	error: "",
	display: true,
	points: 0,
	correctAnswer: false,
};

const dataReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_DATA_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_SINGULAR_DATA:
			return {
				...state,
				loading: false,
				singularData: action.payload,
				error: "",
				display: true,
			};
		case FETCH_ANSWER:
			return {
				...state,
				answer: action.payload,
			};
		case FETCH_INCORRECT_ANSWERS:
			return {
				...state,
				incorrectAnswers: action.payload,
			};
		case FETCH_DATA_SUCCESS:
			return {
				...state,
				loading: false,
				data: action.payload,
				error: "",
			};
		case FETCH_DATA_FAILURE:
			return {
				...state,
				loading: false,
				data: [],
				error: action.payload,
			};
		case COLLATE_SCORE0:
			return {
				...state,
				points: state.points - 1,
				singularData: null,
			};
		case COLLATE_SCORE1:
			return {
				...state,
				points: state.points + 1,
				singularData: null,
			};
		case CORRECT_ANSWER: 
		return {
			...state,
			correctAnswer: true
		}
		case WRONG_ANSWER:
			return {
				...state,
				correctAnswer: false,
				display: false
			}
			
		default:
			return state;
	}
};

export default dataReducer;
