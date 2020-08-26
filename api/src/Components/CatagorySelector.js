import React from 'react';
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid'
import { useStyles } from "../Styles/Styles";

function CatagorySelector(props) {
    	const classes = useStyles();
    return (
			<Grid container className={classes.buttonContainer}>
				<Grid item className={classes.buttonHeader}>
					<h3>Choose your Catagory</h3>
				</Grid>
				<Grid item className={classes.buttonItem}>
					<Button className={classes.buttons}>Any Catagory</Button>
					<Button className={classes.buttons}>General Knowledge</Button>
					<Button className={classes.buttons}>Books</Button>
					<Button className={classes.buttons}>Film</Button>
					<Button className={classes.buttons}>Music</Button>
					<Button className={classes.buttons}>Musicals & Theatre</Button>
					<Button className={classes.buttons}>Television</Button>
					<Button className={classes.buttons}>Video Games</Button>
					<Button className={classes.buttons}>Board Games</Button>
					<Button className={classes.buttons}>Science & Nature</Button>
					<Button className={classes.buttons}>Computers</Button>
					<Button className={classes.buttons}>Mathematics</Button>
					<Button className={classes.buttons}>Mythology</Button>
					<Button className={classes.buttons}>Sports</Button>
					<Button className={classes.buttons}>Geography</Button>
					<Button className={classes.buttons}>History</Button>
					<Button className={classes.buttons}>Politics</Button>
					<Button className={classes.buttons}>Art</Button>
					<Button className={classes.buttons}>Animals</Button>
					<Button className={classes.buttons}>Vehicles</Button>
					<Button className={classes.buttons}>Comics</Button>
					<Button className={classes.buttons}>Anime & Manga</Button>
					<Button className={classes.buttons}>Cartoons & Animations</Button>
					<Button className={classes.buttons}>Murprise Me</Button>
				</Grid>
			</Grid>
		);
}

export default CatagorySelector;