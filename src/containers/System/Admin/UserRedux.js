import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
class UserRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
    }


    render() {
        return (
            <div className="user-redux-container container mt-4">
                <h3 className="text-center text-primary fw-bold mb-4">USER REDUX MANAGEMENT</h3>

                <form>
                    <div className='user-redux-body'>
                        <div className='container'>
                            <div className="row">
                                <div className='col-12'> <FormattedMessage id="manage-user.add-new" />
                                </div>
                                <div className="col-md-3 mb-3">
                                    <label htmlFor="email" className="form-label fw-semibold">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                    />
                                </div>

                                <div className="col-md-3 mb-3">
                                    <label htmlFor="password" className="form-label fw-semibold">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                    />
                                </div>

                                <div className="col-md-3 mb-3">
                                    <label htmlFor="firstName" className="form-label fw-semibold">First name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="firstName"
                                    />
                                </div>

                                <div className="col-md-3 mb-3">
                                    <label htmlFor="lastName" className="form-label fw-semibold">Last name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="lastName"
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-3 mb-3">
                                    <label htmlFor="phoneNumber" className="form-label fw-semibold">Phone number</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="phoneNumber"
                                    />
                                </div>

                                <div className="col-md-9 mb-3">
                                    <label htmlFor="address" className="form-label fw-semibold">Address</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="address"
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-3 mb-3">
                                    <label htmlFor="gender" className="form-label fw-semibold">Gender</label>
                                    <select id="gender" className="form-select">
                                        <option defaultValue>Choose...</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-md-3 mb-3">
                                <label htmlFor="position" className="form-label fw-semibold">Position</label>
                                <select id="position" className="form-select">
                                    <option defaultValue>Choose...</option>
                                    <option>Doctor</option>
                                    <option>Admin</option>
                                    <option>Patient</option>
                                </select>
                            </div>

                            <div className="col-md-3 mb-3">
                                <label htmlFor="roleId" className="form-label fw-semibold">RoleID</label>
                                <select id="roleId" className="form-select">
                                    <option defaultValue>Choose...</option>
                                    <option>R1</option>
                                    <option>R2</option>
                                    <option>R3</option>
                                </select>
                            </div>

                            <div className="col-md-3 mb-3">
                                <label htmlFor="image" className="form-label fw-semibold">Image</label>
                                <input type="file" className="form-control" id="image" />
                            </div>

                            <button type="submit" className="btn btn-primary mt-2">
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
