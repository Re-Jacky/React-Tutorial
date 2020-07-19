import React, { Component } from 'react'

export default class Test extends Component {
    state = {
        title: '',
        id: ''
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(data => this.setState({title: data.title, id: data.id}))
    }

    render() {
        const { title, id } = this.state; 
        return (
            <div>
                <h1>{title}</h1>
                <p>{id}</p>
            </div>
        )
    }
}
