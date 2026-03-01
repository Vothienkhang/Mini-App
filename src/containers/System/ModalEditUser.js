import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './ModalUser.scss';
import emitter from '../../utils/emitter';
import _ from 'lodash';

class ModalEditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: ''
        };
    }

    handleOnChangeInput = (event, id) => {
        const copyState = { ...this.state };
        copyState[id] = event.target.value;
        this.setState(copyState);
    };

    checkValidateInput = () => {
        let isValid = true;
        let arrInput = ['email', 'firstName', 'lastName', 'address'];
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert('Missing required field: ' + arrInput[i]);
                break;
            }
        }
        return isValid;
    }

    handleSaveUser = () => {
        let isValid = this.checkValidateInput();
        if (isValid === true) {
            // TODO: call API edit user here
            this.props.editUser(this.state);
            console.log('Edit user data:', this.state);
        }
        // Close modal after submit
        this.props.toggleFromParent();
    };

    componentDidMount() {
        if (this.props.currentUser && this.props.currentUser.id) {
            this.setState({
                id: this.props.currentUser.id,
                email: this.props.currentUser.email,
                // password: this.props.currentUser.password,
                firstName: this.props.currentUser.firstName,
                lastName: this.props.currentUser.lastName,
                address: this.props.currentUser.address
            });
        }
        console.log('didmount edit modal', this.props.currentUser);

    }

    render() {
        // console.log('Check props from parent: ', this.props);
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={this.props.toggleFromParent}
                centered
                size='lg'
                className={'modal-user-container'}
            >
                <ModalHeader toggle={this.props.toggleFromParent}>Edit a user</ModalHeader>

                <ModalBody>
                    <div className="modal-user-body">
                        <div className="input-container">
                            <label>Email</label>
                            <input
                                type="email"
                                value={this.state.email}
                                onChange={(e) => this.handleOnChangeInput(e, 'email')}
                                placeholder='name@example.com'
                                disabled
                            />
                        </div>
                        <div className="input-container">
                            <label>Password</label>
                            <input
                                type="password"
                                value={this.state.password}
                                onChange={(e) => this.handleOnChangeInput(e, 'password')}
                                placeholder='Enter your password'
                                disabled
                            />
                        </div>
                        <div className="input-container">
                            <label>First Name</label>
                            <input
                                type="text"
                                value={this.state.firstName}
                                onChange={(e) => this.handleOnChangeInput(e, 'firstName')}
                                placeholder='Enter your first name'
                            />
                        </div>
                        <div className="input-container">
                            <label>Last Name</label>
                            <input
                                type="text"
                                value={this.state.lastName}
                                onChange={(e) => this.handleOnChangeInput(e, 'lastName')}
                                placeholder='Enter your last name'
                            />
                        </div>
                        <div className="input-container">
                            <label>Address</label>
                            <input
                                type="text"
                                value={this.state.address}
                                onChange={(e) => this.handleOnChangeInput(e, 'address')}
                                placeholder='Enter your address'
                            />
                        </div>
                    </div>
                </ModalBody>

                <ModalFooter>
                    <Button color="primary"
                        onClick={this.handleSaveUser}
                    >
                        Save changes
                    </Button>{' '}
                    <Button color="secondary" onClick={this.props.toggleFromParent}>Cancel</Button>
                </ModalFooter>
            </Modal>)
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);