import React from "react";
import { connect } from "react-redux";
import {
	fetchUsers,
	fetchCatagorySpecificQuestion,
	collateScore0,
	collateScore1,
} from "../Redux/data/dataActions";
import { useStyles } from "../Styles/Styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CatagorySelector from "./CatagorySelector";
import Button from "@material-ui/core/Button";

function QuestionContainer({
	data,
	fetchCatagorySpecificQuestion,
	loading,
	error,
	singularData,
	answer,
	incorrectAnswers,
	display,
	collateScore0,
	collateScore1,
	points,
}) {
	const categorySelector = (category) => {
		fetchCatagorySpecificQuestion(category);
	};

	const classes = useStyles();

	const score = (e) => {
		console.log(e.target.id)
		if (e.target.id === answer) {
			collateScore1();
		} else {
			collateScore0();
		}
	}
	let answers = [incorrectAnswers, answer].sort(function () {
		return 0.5 - Math.random()})
	console.log(answers);
	function createMarkupQuestion(text) {
		return { __html: text };
	}
	return loading ? (
		<h2 className={classes.centerText}>Loading</h2>
	) : error ? (
		<h2>{error}</h2>
	) : singularData ? (
		<div>
			<h2 className={classes.header}>TRIVIA TIME</h2>
			<CatagorySelector categorySelector={categorySelector} />
			<Grid container className={classes.questionContainer}>
				<Paper className={classes.question}>
					<Typography variant="h5" className={classes.question}>
						<div
							dangerouslySetInnerHTML={createMarkupQuestion(
								singularData.question
							)}
						></div>
					</Typography>
				</Paper>
				<Grid container className={classes.buttonContainer2}>
					<Paper className={display ? classes.show : classes.hide}>
						<Grid item className={classes.answerHeader}>
							{answers.map((answers) => (
								<Button id={answers} onClick={score} className={classes.buttons}>
									<div
										dangerouslySetInnerHTML={createMarkupQuestion(answers)}
									></div>
								</Button>
							))}
							{singularData.incorrect_answers.map((incorrect) =>
								console.log(incorrect)
								// <Button onClick={incorrect} className={classes.buttons}>
								// 	<div
								// 		dangerouslySetInnerHTML={createMarkupQuestion(incorrect)}
								// 	></div>
								// </Button>
							)}
						</Grid>
					</Paper>
				</Grid>
			</Grid>
		</div>
	) : data ? (
		<div>
			<h2 className={classes.header}>TRIVIA TIME</h2>

			<CatagorySelector categorySelector={categorySelector} />
			<div>Your Score: {points}</div>
		</div>
	) : (
		<p>ERROR</p>
	);
}

const mapStateToProps = (state) => {
	return state;
};

const mapDispatchToProps = {
	fetchUsers,
	fetchCatagorySpecificQuestion,
	collateScore0,
	collateScore1,
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionContainer);
