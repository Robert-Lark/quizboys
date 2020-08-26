import axios from 'axios'
import {FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from "./dataTypes";

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
						const data = response.data.results;
						dispatch(fetchDataSuccess(data));
					})
					.catch((error) => {
						const errorMsg = error.msg;
						dispatch(fetchDataFailure(errorMsg));
					});
    }
}