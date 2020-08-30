import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../Styles/Styles";

function CatagorySelector(props) {
	const classes = useStyles();
	return (
		<Grid container className={classes.buttonContainer}>
			<Grid item className={classes.buttonHeader}>
				<h3 className={classes.header}>Choose your Category</h3>
			</Grid>
			<Grid item className={classes.buttonItem}>
				<Button
					onClick={() => props.categorySelector("")}
					value=""
					className={classes.buttons}
				>
					Any Category
				</Button>
				<Button
					onClick={() => props.categorySelector("9")}
					value="9"
					className={classes.buttons}
				>
					General Knowledge
				</Button>
				<Button
					onClick={() => props.categorySelector("10")}
					value="10"
					className={classes.buttons}
				>
					Books
				</Button>
				<Button
					onClick={() => props.categorySelector("11")}
					value="11"
					className={classes.buttons}
				>
					Film
				</Button>
				<Button
					onClick={() => props.categorySelector("12")}
					value="12"
					className={classes.buttons}
				>
					Music
				</Button>
				{/* <Button
					onClick={() => props.categorySelector("13")}
					value="13"
					className={classes.buttons}
				>
					Musicals & Theatre
				</Button> */}
				<Button
					onClick={() => props.categorySelector("14")}
					value="14"
					className={classes.buttons}
				>
					Television
				</Button>
				<Button
					onClick={() => props.categorySelector("15")}
					value="15"
					className={classes.buttons}
				>
					Video Games
				</Button>
				<Button
					onClick={() => props.categorySelector("16")}
					value="16"
					className={classes.buttons}
				>
					Board Games
				</Button>
				<Button
					onClick={() => props.categorySelector("17")}
					value="17"
					className={classes.buttons}
				>
					Science & Nature
				</Button>
				<Button
					onClick={() => props.categorySelector("18")}
					value="18"
					className={classes.buttons}
				>
					Computers
				</Button>
				<Button
					onClick={() => props.categorySelector("19")}
					value="19"
					className={classes.buttons}
				>
					Mathematics
				</Button>
				<Button
					onClick={() => props.categorySelector("20")}
					value="20"
					className={classes.buttons}
				>
					Mythology
				</Button>
				<Button
					onClick={() => props.categorySelector("21")}
					value="21"
					className={classes.buttons}
				>
					Sports
				</Button>
				<Button
					onClick={() => props.categorySelector("22")}
					value="22"
					className={classes.buttons}
				>
					Geography
				</Button>
				<Button
					onClick={() => props.categorySelector("23")}
					value="23"
					className={classes.buttons}
				>
					History
				</Button>
				<Button
					onClick={() => props.categorySelector("24")}
					value="24"
					className={classes.buttons}
				>
					Politics
				</Button>
				<Button
					onClick={() => props.categorySelector("25")}
					value="25"
					className={classes.buttons}
				>
					Celebrities
				</Button>
				<Button
					onClick={() => props.categorySelector("26")}
					value="25"
					className={classes.buttons}
				>
					Art
				</Button>
				<Button
					onClick={() => props.categorySelector("27")}
					value="26"
					className={classes.buttons}
				>
					Animals
				</Button>
				<Button
					onClick={() => props.categorySelector("28")}
					value="27"
					className={classes.buttons}
				>
					Vehicles
				</Button>
				<Button
					onClick={() => props.categorySelector("29")}
					value="28"
					className={classes.buttons}
				>
					Comics
				</Button>
				<Button
					onClick={() => props.categorySelector("31")}
					value="29"
					className={classes.buttons}
				>
					Anime & Manga
				</Button>
				<Button
					onClick={() => props.categorySelector("32")}
					value="30"
					className={classes.buttons}
				>
					Cartoons & Animations
				</Button>
			</Grid>
		</Grid>
	);
}

export default CatagorySelector;
