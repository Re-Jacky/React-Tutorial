import React, { Component } from 'react'
import classnames from 'classnames'

export default class TestInputGroup extends Component {

    render() {
        const { label, name, type, placeholder, value, onChange, error } = this.props;
        return (
            <div className="form-group">
                <label htmlFor={name}>{label}</label>
                <input type={type} className={classnames("form-control",{'is-invalid': error})} name={name} placeholder={placeholder} value={value} onChange={onChange}/>
                <div className="invalid-feedback">{error}</div>
            </div>
        )
    }
}

TestInputGroup.defaultProps = {
    type: 'text'
}