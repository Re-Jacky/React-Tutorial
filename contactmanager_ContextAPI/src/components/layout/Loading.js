import React, { Component } from 'react'

export default class Loading extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center text-danger mt-5">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }
}
