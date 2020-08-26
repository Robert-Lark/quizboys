import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
	header: {
		display: "flex",
		justifyContent: "center",
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
        width: "200px",
		background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
		border: 0,
		borderRadius: 3,
		boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
		color: "white",
		height: 48,
		padding: "0 30px",
	},
});
