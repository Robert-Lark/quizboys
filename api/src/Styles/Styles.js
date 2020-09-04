import { makeStyles } from "@material-ui/core/styles";
import quizboys from "./quizboys.png";

export const useStyles = makeStyles({
	home: {
		boxSizing: "border-box",
		position: "absolute",
		top: "-1px",
		left: "-1px",
		bottom: "-1px",
		opacity: "90%",
		backgroundImage: `url(${quizboys})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		height: "100vh",
		width: "100vw",
	},
	centerText: {
		width: "100%",
		textAlign: "center",
	},
	loading: {
		width: "100vw",
		textAlign: "center",
	},
	mainHeader: {
		marginTop: "-5px",
		marginBottom: "-50px",
		color: "#ff6f61",
		fontSize: "3rem",
		display: "flex",
		justifyContent: "center",
	},
	header: {
		color: "#8B58EB",
		fontSize: "3rem",
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-between",

	},
	answerHeader: { 
		width: "auto",
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center",

		backgroundColor: 'transparent',
		boxShadow: 'none',
},
	buttonContainer: {
		display: "flex",
		justifyContent: "center",
	},
	buttonItem: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-between",
	},
	buttons: {
		marginTop: "10px",
		width: "300px",
		background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
		border: 0,
		borderRadius: 3,
		boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
		color: "white",
		height: 48,
		padding: "0 30px",
	},
	questionContainer: {
		marginTop: "125px",
		display: "flex",
		justifyContent: "center",
	},
	question: {
		BoxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
	},
	buttonContainer2: {
		marginTop: "75px",
		display: "flex",
		justifyContent: "center",
	},
	show: {
		transition: "opacity 5s",
		opacity: "1",
	},
	hide: {
		opacity: "0",
	},
	scorecardContainer: {
		marginTop: "25px",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
	scoreCard: {
		borderRadius: "10px 0px 0px 0px",
		mozBorderRadius: "10px 0px 0px 0px",
		webkitBorderRadius: "10px 0px 0px 0px",
		border: "30px ridge #8B58EB",
		backgroundColor: "teal",
		width: "250px",
		height: "140px",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
});
