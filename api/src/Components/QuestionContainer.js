import React from 'react';
import {connect} from 'react-redux'
import {getQuestion} from '../Actions'

function QuestionContainer(props) {
    return (
        <div>
            <p>Question: {props.question}</p>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        question: state.question
    }
}

const mapDispatchToProps = dispatch => {
    return {
        question: () => dispatch (getQuestion())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionContainer);