import React from "react";
import { useStyles } from "../Styles/Styles";
import { connect } from "react-redux";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

function Scorecard({ points, correctAnswer, answer, display, props }) {
	const classes = useStyles();
    return correctAnswer ? (
        <div className={classes.scorecardContainer}>
            <div className={classes.scoreCard}>
                <CardContent>
                    <Typography
                        className={classes.centerText}
                        color="textSecondary"
                        gutterBottom
                    >
                        WOW GREAT JOB
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography
                        className={classes.centerText}
                        color="textSecondary"
                        gutterBottom
                    >
                        SCORE: {points}
                    </Typography>
                </CardContent>
            </div>
        </div>
    ) : display ? (
		<div className={classes.scorecardContainer}>
			<div className={classes.scoreCard}>
                    <CardContent>
                        <Typography
                            className={classes.centerText}
                            color="textSecondary"
                            gutterBottom
                        >
                            DO YOU HAVE WHAT IT TAKES TO BE A QUIZBOY CHAMPION?
                        </Typography>
				</CardContent>
			</div>
		</div>
        ) : (
            <div className={classes.scorecardContainer}>
                <div className={classes.scoreCard}>
                    <CardContent>
                        <Typography
                            className={classes.centerText}
                            color="textSecondary"
                            gutterBottom
                        >
                            <br>
                            </br>
                            OOOH, UNFORTUNATELY THE CORRECT ANSWER WAS
                        </Typography>
                        <Typography
                                className={classes.centerText}
                            color="textSecondary"
                            gutterBottom
                        >
                            {answer}
                        </Typography>

                    </CardContent>
                    <CardContent>
                        <Typography
                            className={classes.title}
                            color="textSecondary"
                            gutterBottom
                        >
                            SCORE: {points}
                        </Typography>
                    </CardContent>
                </div>
            </div>
        );
}

const mapStateToProps = (state) => {
	return state;
};


export default connect(mapStateToProps)(Scorecard);
