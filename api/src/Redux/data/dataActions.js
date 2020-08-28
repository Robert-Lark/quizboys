import axios from "axios";

export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const FETCH_SINGULAR_DATA = "FETCH_SINGULAR_DATA";

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
}

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
			.get(`https://opentdb.com/api.php?amount=50&category=${category}`)
			.then((response) => {
				const number0 = response.data.results;
				const number1 = Math.random() * number0.length;
				let indexNumber = Math.floor(number1);
				const data = response.data.results[indexNumber];
				dispatch(fetchDataSuccess(data));
				//dispatch(fetchSingularData(data));
			})
			.catch((error) => {
				const errorMsg = error.msg;
				dispatch(fetchDataFailure(errorMsg));
			});
	};
};
