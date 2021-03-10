import React, { Component } from 'react';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import ChangeCityModal from './ChangeCityModal';
import { weatherSelector } from '../../../selector/selector';
import { ACTION_WEATHER_QUERY } from '../../../constants/constants';

class WeatherMain extends Component {
    state = {
        showModal: false,
        city: '杭州'
    };

    showModal = () => {
        this.setState((state, props) => {
            return {showModal: true}
        })
    };

    hideModal = () => {
        this.setState((state, props) => {
            return {showModal: false}
        })
    };

    updateCity = (newCity) => {
        this.setState((state) => {
            return {city: newCity};
        });

        this.props.getWeather(newCity)
        this.hideModal();
    };

    // componentDidMount() {
    //     this.props.getWeather(this.state.city);
    // }

    render() {
        const {location, desc, avgTmp, nightTmp, dayTmp, windSpeed, wind, updateTime } = this.props;
        const {city} = this.state;
        const showModal = this.state.showModal;
        return (
            <div>
                <Card className = 'displayMain' style = {{ backgroundColor: 'lightblue'}}>
                    
                    <Card.Body>
                        <Card.Title>{location}</Card.Title>
                        <Card.Text>{desc}</Card.Text>
                        <Card.Text>{avgTmp}°C</Card.Text>
                        {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
                    </Card.Body>
                    <ListGroup className='listGroup'>
                        <ListGroupItem>夜间温度：{nightTmp}</ListGroupItem>
                        <ListGroupItem>日间温度：{dayTmp}</ListGroupItem>
                        <ListGroupItem>风速： {windSpeed}</ListGroupItem>
                        <ListGroupItem>风向： {wind}</ListGroupItem>
                    </ListGroup>
                    <hr></hr>
                    <Card.Text>更新时间：{updateTime}</Card.Text>
                    <Card.Body>
                        <Button variant="primary" onClick={this.showModal}>更改城市</Button>
                    </Card.Body>
                </Card>
                <ChangeCityModal show={showModal}
                    onHide={this.hideModal}
                    onSave={this.updateCity}
                />
            </div>
        )
    }
}

 const matchStateToProps = (state) => (weatherSelector(state));
 const matchDispatchToProps = (dispatch) => {
     return {
        getWeather: (city) => dispatch({type: ACTION_WEATHER_QUERY, payload: {city}})
     }
 };


export default connect(matchStateToProps, matchDispatchToProps)(WeatherMain);