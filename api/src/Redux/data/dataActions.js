import axios from "axios";

export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const FETCH_SINGULAR_DATA = "FETCH_SINGULAR_DATA";
export const COLLATE_SCORE0 = "COLLATE_SCORE0";
export const COLLATE_SCORE1 = "COLLATE_SCORE1";
export const FETCH_ANSWER = "FETCH_ANSWERS";
export const FETCH_INCORRECT_ANSWERS = "FETCH_INCORRECT_ANSWERS";
export const CORRECT_ANSWER = "CORRECT_ANSWER"
export const WRONG_ANSWER = "WRONG_ANSWER"

export const fetchDataRequest = () => {
	return {
		type: FETCH_DATA_REQUEST,
	};
};

export const fetchSingularData = (data) => {
	return {
		type: FETCH_SINGULAR_DATA,
		payload: data,
	};
};

export const fetchAnswer = (correct) => {
	return {
		type: FETCH_ANSWER,
		payload: correct,
	};
};
export const fetchIncorrectAnswers = (incorrect) => {
	return {
		type: FETCH_INCORRECT_ANSWERS,
		payload: incorrect,
	};
};

export const fetchDataSuccess = (data) => {
	return {
		type: FETCH_DATA_SUCCESS,
		payload: data,
	};
};

export const fetchDataFailure = (error) => {
	return {
		type: FETCH_DATA_FAILURE,
		payload: error,
	};
};

export const fetchUsers = () => {
	return (dispatch) => {
		dispatch(fetchDataRequest());
		axios
			.get("https://opentdb.com/api.php?amount=50")
			.then((response) => {
				const number0 = response.data.results;
				const number1 = Math.random() * number0.length;
				let indexNumber = Math.floor(number1);
				const data = response.data.results[indexNumber];
				dispatch(fetchDataSuccess(data));
			})
			.catch((error) => {
				const errorMsg = error.msg;
				dispatch(fetchDataFailure(errorMsg));
			});
	};
};
export const fetchCatagorySpecificQuestion = (category) => {
	return (dispatch) => {
		dispatch(fetchDataRequest());
		axios
			.get(`https://opentdb.com/api.php?amount=27&category=${category}`)
			.then((response) => {
				const number0 = response.data.results;
				const number1 = Math.random() * number0.length;
				let indexNumber = Math.floor(number1);
				const data = response.data.results[indexNumber];
				dispatch(fetchDataSuccess(data));
				dispatch(fetchSingularData(data));
				dispatch(fetchAnswer(data.correct_answer));
				dispatch(fetchIncorrectAnswers(data.incorrect_answers));
			})
			.catch((error) => {
				const errorMsg = error.msg;
				dispatch(fetchDataFailure(errorMsg));
			});
	};
};

export const collateScore0 = () => {
	return {
		type: COLLATE_SCORE0,
	};
};
export const collateScore1 = () => {
	return {
		type: COLLATE_SCORE1,
	};
};

export const correctAnswer = () => {
	return {
		type: CORRECT_ANSWER
	}
}
export const wrongAnswer = () => {
	return {
		type: WRONG_ANSWER
	}
}
