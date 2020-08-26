import axios from 'axios'
import {FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from "./dataTypes";

export const fetchUsersRequest = () => {
	return {
		type: FETCH_USERS_REQUEST,
	};
};

export const fetchUsersSuccess = (users) => {
	return {
		type: FETCH_USERS_SUCCESS,
		payload: users,
	};
};

export const fetchUsersFailure = (error) => {
	return {
		type: FETCH_USERS_FAILURE,
		payload: error,
	};
};


export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest());
				//axios
					// .get("https://jsonplaceholder.typicode.com/users")
					// .then((response) => {
					// 	console.log(response.data)
					// 	const users = response.data;
					// 	dispatch(fetchUsersSuccess(users));
                    // })
                    axios
					.get("https://opentdb.com/api.php?amount=50")
					.then((response) => {
						console.log(response.data.results);
						const users = response.data.results;
						dispatch(fetchUsersSuccess(users));
					})
					.catch((error) => {
						const errorMsg = error.msg;
						dispatch(fetchUsersFailure(errorMsg));
					});
    }
}