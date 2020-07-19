import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAllowRegistration, setDisableBalanceOnAdd, setDisableBalanceOnEdit} from '../../actions/settingAction';

class Settings extends Component {

    allowRegistrationChange = (e) => {
        this.props.setAllowRegistration()
    }

    disableBalanceOnAddChange = (e) => {
        this.props.setDisableBalanceOnAdd()
    }

    disableBalanceOnEditChange = (e) => {
        this.props.setDisableBalanceOnEdit()
    }



    render() {
        const {
            disableBalanceOnAdd,
            disableBalanceOnEdit,
            allowRegistration
        } = this.props.settings;
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <Link to="/" className="btn btn-link"><i className="fa fa-arrow-circle-left">Back To Dashboard</i></Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">Edit Settings</div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>Allow Registration</label>{' '}
                                <input type="checkbox" name="allowRegistration" checked={allowRegistration} onChange={this.allowRegistrationChange}/>
                            </div>
                            <div className="form-group">
                                <label>Disable Balance On Add </label>{' '}
                                <input type="checkbox" name="disableBalanceOnAdd" checked={disableBalanceOnAdd} onChange={this.disableBalanceOnAddChange}/>
                            </div>
                            <div className="form-group">
                                <label>Disable Balance On Edit </label>{' '}
                                <input type="checkbox" name="disableBalanceOnEdit" checked={disableBalanceOnEdit} onChange={this.disableBalanceOnEditChange}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

Settings.propTypes = {
    settings: PropTypes.object.isRequired,
    setDisableBalanceOnEdit: PropTypes.func.isRequired,
    setDisableBalanceOnEdit: PropTypes.func.isRequired,
    setAllowRegistration: PropTypes.func.isRequired
}

const mapStateToProps = (state, props) => ({
    auth: state.firebase.auth,
    settings: state.settings
})

export default withRouter(connect(mapStateToProps, {setAllowRegistration, setDisableBalanceOnAdd, setDisableBalanceOnEdit})(Settings))  ;