import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
	fetchUsers,
	fetchCatagorySpecificQuestion,
} from "../Redux/data/dataActions";
import { useStyles } from "../Styles/Styles";
import CatagorySelector from "./CatagorySelector";

function QuestionContainer({
	data,
	fetchUsers,
}, category) {

	const categorySelector = (e) => {
		category = (e.target.value);
		console.log(category)
	};

	const classes = useStyles();

	useEffect(() => {
		fetchUsers();
	}, []);
	useEffect(() => {
		fetchCatagorySpecificQuestion(category);
	}, []);

	return data.loading ? (
		<h2>Loading</h2>
	) : data.error ? (
		<h2>{data.error}</h2>
	) : (
		<div>
			<h2 className={classes.header}>TRIVIA TIME</h2>

			<CatagorySelector categorySelector={categorySelector} />
			<div>
				<p>{data.question}</p>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		data: state.data,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchUsers: () => dispatch(fetchUsers()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionContainer);
