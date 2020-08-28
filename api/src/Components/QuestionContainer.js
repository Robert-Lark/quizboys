import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
	fetchUsers,
	fetchCatagorySpecificQuestion,
} from "../Redux/data/dataActions";
import { useStyles } from "../Styles/Styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CatagorySelector from "./CatagorySelector";
import Button from "@material-ui/core/Button";

function QuestionContainer(
	{ data, fetchUsers, fetchCatagorySpecificQuestion, loading, error, singularData },
	category
) {
	useEffect(() => {
		fetchUsers();
	}, []);
	const categorySelector = (category) => {
		fetchCatagorySpecificQuestion(category);
	};
	const classes = useStyles();
	const incorrect = [data.incorrect_answers];

	// return loading ? (
	// 	<h2 className={classes.centerText}>Loading</h2>
	// ) : error ? (
	// 	<h2>{error}</h2>
	// ) : data ? ( <div>
	// 			<h2 className={classes.header}>TRIVIA TIME</h2>

	// 			<CatagorySelector categorySelector={categorySelector} />
	// </div> ) : singularData ? (
		return (
		<div>
			<h2 className={classes.header}>TRIVIA TIME</h2>

			<CatagorySelector categorySelector={categorySelector} />
			<Grid container className={classes.questionContainer}>
				<Paper className={classes.question}>
					<Typography variant="h5" className={classes.question}>
						Question: {data.question}
					</Typography>
				</Paper>

				<Grid container className={classes.buttonContainer2}>
					<Grid item className={classes.answerHeader}>
						<Button className={classes.buttons}>{data.correct_answer}</Button>	
						{incorrect.map((incorrect) => (
							<Button key={incorrect} className={classes.buttons}>
								{incorrect}
							</Button>
						))}
					</Grid>
				</Grid>
			</Grid>
		</div>
	)
	// : <p>ERROR</p>
}

const mapStateToProps = (state) => {
	return state;
};

const mapDispatchToProps = {
	fetchUsers,
	fetchCatagorySpecificQuestion,
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionContainer);
