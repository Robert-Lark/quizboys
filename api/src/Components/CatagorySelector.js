import React from "react";
import { useDispatch } from "react-redux";
import { fetchCatagorySpecificQuestion } from "../Redux/data/dataActions";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../Styles/Styles";

function CatagorySelector(props) {
	const dispatch = useDispatch();
	const classes = useStyles();
	return (
		<Grid container className={classes.buttonContainer}>
			<Grid item className={classes.buttonHeader}>
				<h3>Choose your Category</h3>
			</Grid>
			<Grid item className={classes.buttonItem}>
				<Button
					onClick={props.categorySelector}
					value=""
					className={classes.buttons}
				>
					Any Category
				</Button>
				<Button
					onClick={props.categorySelector}
					value="9"
					className={classes.buttons}
				>
					General Knowledge
				</Button>
				<Button
					onClick={props.categorySelector}
					value="10"
					className={classes.buttons}
				>
					Books
				</Button>
				<Button
					onClick={props.categorySelector}
					value="11"
					className={classes.buttons}
				>
					Film
				</Button>
				<Button
					onClick={props.categorySelector}
					value="12"
					className={classes.buttons}
				>
					Music
				</Button>
				<Button
					onClick={props.categorySelector}
					value="13"
					className={classes.buttons}
				>
					Musicals & Theatre
				</Button>
				<Button
					onClick={props.categorySelector}
					value="14"
					className={classes.buttons}
				>
					Television
				</Button>
				<Button
					onClick={props.categorySelector}
					value="15"
					className={classes.buttons}
				>
					Video Games
				</Button>
				<Button
					onClick={props.categorySelector}
					value="16"
					className={classes.buttons}
				>
					Board Games
				</Button>
				<Button
					onClick={props.categorySelector}
					value="17"
					className={classes.buttons}
				>
					Science & Nature
				</Button>
				<Button
					onClick={props.categorySelector}
					value="18"
					className={classes.buttons}
				>
					Computers
				</Button>
				<Button
					onClick={props.categorySelector}
					value="19"
					className={classes.buttons}
				>
					Mathematics
				</Button>
				<Button
					onClick={props.categorySelector}
					value="20"
					className={classes.buttons}
				>
					Mythology
				</Button>
				<Button
					onClick={props.categorySelector}
					value="21"
					className={classes.buttons}
				>
					Sports
				</Button>
				<Button
					onClick={props.categorySelector}
					value="22"
					className={classes.buttons}
				>
					Geography
				</Button>
				<Button
					onClick={props.categorySelector}
					value="23"
					className={classes.buttons}
				>
					History
				</Button>
				<Button
					onClick={props.categorySelector}
					value="24"
					className={classes.buttons}
				>
					Politics
				</Button>
				<Button
					onClick={props.categorySelector}
					value="25"
					className={classes.buttons}
				>
					Art
				</Button>
				<Button
					onClick={props.categorySelector}
					value="26"
					className={classes.buttons}
				>
					Animals
				</Button>
				<Button
					onClick={props.categorySelector}
					value="27"
					className={classes.buttons}
				>
					Vehicles
				</Button>
				<Button
					onClick={props.categorySelector}
					value="28"
					className={classes.buttons}
				>
					Comics
				</Button>
				<Button
					onClick={props.categorySelector}
					value="29"
					className={classes.buttons}
				>
					Anime & Manga
				</Button>
				<Button
					onClick={props.categorySelector}
					value="30"
					className={classes.buttons}
				>
					Cartoons & Animations
				</Button>
				<Button
					onClick={() => dispatch(fetchCatagorySpecificQuestion("30"))}
					value="31"
					className={classes.buttons}
				>
					Surprise Me
				</Button>
			</Grid>
		</Grid>
	);
}

export default CatagorySelector;
