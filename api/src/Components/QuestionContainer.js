import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
	fetchUsers,
	fetchCatagorySpecificQuestion,
} from "../Redux/data/dataActions";
import { useStyles } from "../Styles/Styles";
import CatagorySelector from "./CatagorySelector";

function QuestionContainer(
	{ data, fetchUsers, fetchCatagorySpecificQuestion, loading, error  },
	category
) {
	const categorySelector = (category) => {
		fetchCatagorySpecificQuestion(category);
		console.log(category);
	};
	const classes = useStyles();
	useEffect(() => {
		fetchUsers();
	}, []);


	return loading ? (
		<h2>Loading</h2>
	) : error ? (
		<h2>{error}</h2>
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

		return state

};

const mapDispatchToProps = {
		fetchUsers,
		fetchCatagorySpecificQuestion
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionContainer);
