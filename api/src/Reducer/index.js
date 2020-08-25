import { GET_DATA, GET_DATA_SUCCESS } from "../Actions";

export const initialState = {
	loading: false,
	data: [],
	error: '',
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_DATA:
			return {
				...state,
				loading: true,
			};
		case GET_DATA_SUCCESS:
			return {
                ...state,
				data: action.payload,
            };
		case GET_DATA_FAILURE:
			return {
                ...state,
				error: action.payload,
            };
            default: return state
	}
};

export default reducer;
