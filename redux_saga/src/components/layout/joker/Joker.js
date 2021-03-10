import React, { Component } from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { jokeSelector } from '../../../selector/selector';
import { ACTION_JOKE_QUERY, ACTION_JOKE_CLEAR} from '../../../constants/constants';

class Joker extends Component {
    state = {
        jokes: []
    };

    addItem = () => {
        this.props.addJoke();
    };
    
    clearList = () => {
        this.props.clearJokes();
    }
    
    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            jokes: nextProps.jokes
        }
    }

    render() {
        const jokes = this.state.jokes;
        return (
            <div className="displayMain">
                <h1 style={{marginTop: 20, marginBottom: 30}}>Chuck Norric Joke Generator</h1>
                <Button variant="primary" size="lg" style={{marginRight: 100}} onClick={this.addItem}>Generate a Joke</Button>
                <Button variant="primary" size="lg" onClick={this.clearList}>Reset</Button>
                <hr></hr>
                <ListGroup as="ul">
                    {jokes.map(joke => <ListGroup.Item as="li">{joke}</ListGroup.Item>)}
                </ListGroup>
            </div>
        )
    }
}

const matchStateToProps = (state) => (jokeSelector(state));

const matchDispatchToProps = (dispatch) => {
    return {
        clearJokes: () => {dispatch({type: ACTION_JOKE_CLEAR})},
        addJoke: () => {dispatch({type: ACTION_JOKE_QUERY})}
    }
};

export default connect(matchStateToProps, matchDispatchToProps)(Joker);