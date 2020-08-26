import React, { useEffect } from 'react';
import {connect} from 'react-redux'
import { fetchUsers } from '../Redux'
import Button from "@material-ui/core/Button";
import { useStyles } from '../Styles/Styles'
import CatagorySelector from './CatagorySelector';

function UserContainer({data, fetchUsers }) {
	const classes = useStyles();
    useEffect(() => {
        fetchUsers()

    }, [])
    
    return data.loading ? (
			<h2>Loading</h2>
		) : data.error ? (
			<h2>{data.error}</h2>
		) : (
			<div>
				<h2 className={classes.header}>TRIVIA TIME</h2>
				<h3 className={classes.header}>Select Your Catagory</h3>
				<CatagorySelector />
				<div>
					<p>{data.data.question}</p>
				</div>
			</div>
		);
}

const mapStateToProps = state => {
    return {
        data: state.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);