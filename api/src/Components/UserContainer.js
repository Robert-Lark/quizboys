import React, { useEffect } from 'react';
import {connect} from 'react-redux'
import { fetchUsers } from '../Redux'

function UserContainer({data, fetchUsers }) {
    useEffect(() => {
        fetchUsers()

    }, [])
    
    return data.loading ? (
			<h2>Loading</h2>
		) : data.error ? (
			<h2>{data.error}</h2>
		) : (
			<div>
				<h2>Data List</h2>
				<div>
					{data &&
						data.data &&
						data.data.map((data) => <p>{data.question}</p>)}
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