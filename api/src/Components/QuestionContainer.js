import React from "react";
import { connect } from "react-redux";
import Scorecard from './Scorecard';
import {
	fetchUsers,
	fetchCatagorySpecificQuestion,
	collateScore0,
	collateScore1,
	correctAnswer,
	wrongAnswer
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
	correctAnswer,
	wrongAnswer
}) {
	const categorySelector = (category) => {
		fetchCatagorySpecificQuestion(category);
	};
	const classes = useStyles();

	const score = (correct) => {
		if (correct === answer) {
			collateScore1();
			correctAnswer()
		} else {
			collateScore0();
			wrongAnswer()
		}
	}
	let answers = [...incorrectAnswers, answer].sort(function () {
		return 0.5 - Math.random()})
	function createMarkupQuestion(text) {
		return { __html: text };
	}
	return loading ? (
		<h2 className={classes.loading}>Loading</h2>
	) : singularData ? (
		<div>
			{/* <h2 className={classes.mainHeader}>QUIZBOYS!!!</h2>
			<CatagorySelector categorySelector={categorySelector} /> */}
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
						<Paper className={classes.answerHeader}>
						<Grid item className={classes.answerHeader}>
							{answers.map((answer) => (
								<Button onClick={() => score(answer)} className={classes.buttons}>
									<div
										dangerouslySetInnerHTML={createMarkupQuestion(answer)}
									></div>
								</Button>
							))}
						</Grid>
					</Paper>
				</Grid>
				
			</Grid>
		</div>
	) : data ? (
		<div>
					<h2 className={classes.mainHeader}>QUIZBOYS!!!</h2>
			<CatagorySelector categorySelector={categorySelector} />
					<Scorecard />
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
	correctAnswer,
	wrongAnswer
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionContainer);
