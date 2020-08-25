export const GET_DATA = "GET_DATA"

export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS"

export const GET_DATA_FAILURE = "GET_DATA_FAILURE";

export const getData = () => {
return { type: GET_DATA };
}

export const getDataSucess = (data) => {
    return { type: GET_DATA_SUCCESS, payload: data };
   };

export const getDataFailure = (error) => {
	return { type: GET_DATA_FAILURE, payload: error };
};

