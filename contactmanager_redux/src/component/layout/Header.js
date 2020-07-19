import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3">
                <div className="container">
                    <a href="/" className="navbar-brand">Contact Manager</a>
                    <div>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to='/' className="nav-link"><i className="fa fa-home">Home</i></Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contact/add' className="nav-link"><i className="fa fa-plus">Add</i></Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/about' className="nav-link"><i className="fa fa-question">About</i></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
