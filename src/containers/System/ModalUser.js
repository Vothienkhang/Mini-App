import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './ModalUser.scss';
import emitter from '../../utils/emitter';

class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: ''
        };

        this.listenToEmitter();
    }

    listenToEmitter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', (data) => {
            console.log('Listen emitter: ', data);
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: ''
            });
        });
    }

    handleOnChangeInput = (event, id) => {
        const copyState = { ...this.state };
        copyState[id] = event.target.value;
        this.setState(copyState);
    };

    checkValidateInput = () => {
        let isValid = true;
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address'];
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert('Missing required field: ' + arrInput[i]);
                break;
            }
        }
        return isValid;
    }

    handleAddNewUser = () => {
        let isValid = this.checkValidateInput();
        if (isValid === true) {
            // TODO: call API create user here
            this.props.createNewUser(this.state);
            console.log('New user data:', this.state);
        }
        // Close modal after submit
        this.props.toggleFromParent();
    };

    componentDidMount() {
        console.log('mounting modal');
    }

    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={this.props.toggleFromParent}
                centered
                size='lg'
                className={'modal-user-container'}
            >
                <ModalHeader toggle={this.props.toggleFromParent}>Add new user</ModalHeader>

                <ModalBody>
                    <div className="modal-user-body">
                        <div className="input-container">
                            <label>Email</label>
                            <input
                                type="email"
                                value={this.state.email}
                                onChange={(e) => this.handleOnChangeInput(e, 'email')}
                                placeholder='name@example.com'
                            />
                        </div>
                        <div className="input-container">
                            <label>Password</label>
                            <input
                                type="password"
                                value={this.state.password}
                                onChange={(e) => this.handleOnChangeInput(e, 'password')}
                                placeholder='Enter your password'
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
                        onClick={this.handleAddNewUser}
                    >
                        Add new
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);