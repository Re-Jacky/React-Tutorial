// import React from 'react'
// import PropTypes from 'prop-types'


// const TextInputGroup = ({label, name, value, placeholder, type, onChange}) => {
    // return (
    //     <div className="form-group">
    //         <label htmlFor={name}>{label}</label>
    //         <input type={type} name={name} className="form-control form-control-lg" placeholder={placeholder} value={value} onChange={onChange}/>
    //     </div>
    // )
// };

// TextInputGroup.propTypes = {
    // name: PropTypes.string.isRequired,
    // placeholder: PropTypes.string.isRequired,
    // type: PropTypes.string.isRequired,
    // value: PropTypes.string.isRequired,
    // label: PropTypes.string.isRequired,
    // onChange: PropTypes.func.isRequired,
// }

// TextInputGroup.defaultProps = {
//     type: 'text'
// }

// export default TextInputGroup;


import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class TextInputGroup extends Component {
    static defaultProps = {
        type: 'text'
    }
    static propTypes = {
        name: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        error: PropTypes.string.isRequired
    }
    render() {
        const {label, name, value, placeholder, type, onChange, error} = this.props;

        return (
            <div className="form-group">
                <label htmlFor={name}>{label}</label>
                <input type={type} name={name} className={classnames('form-control form-control-lg',{'is-invalid':error})} placeholder={placeholder} value={value} onChange={onChange}/>
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        )
    }

}
