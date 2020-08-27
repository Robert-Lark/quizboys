import axios from "axios";

export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const fetchDataRequest = () => {
	return {
		type: FETCH_DATA_REQUEST,
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
				console.log(response.data);
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
		console.log("test");
		dispatch(fetchDataRequest());
		axios
			.get(`https://opentdb.com/api.php?amount=50&category=${category}`)
			.then((response) => {
				const number0 = response.data.results;
				console.log(number0);
				const number1 = Math.random() * number0.length;
				console.log(number1);
				let indexNumber = Math.floor(number1);
				console.log(indexNumber);
				const data = response.data.results[indexNumber];
				console.log(data);
				dispatch(fetchDataSuccess(data));
			})
			.catch((error) => {
				const errorMsg = error.msg;
				dispatch(fetchDataFailure(errorMsg));
			});
	};
};
