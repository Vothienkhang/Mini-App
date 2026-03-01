import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import { getAllUsers, createNewUserService, deleteUserService, editUserService } from '../../services/userService';
import ModalUser from './ModalUser';
import ModalEditUser from './ModalEditUser';
import emitter from '../../utils/emitter';
import { Modal } from 'reactstrap';

class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,
            isOpenModalEditUser: false,
            userEdit: {}
        }
    }

    async componentDidMount() {
        let response = await getAllUsers('ALL');
        if (response && response.errCode === 0) {
            this.setState({ arrUsers: response.users } 
            //     () => {
            //     console.log('Check state users: ', this.state.arrUsers);
            // }
            );
        // console.log('Check state users 1: ', response);
    }
}

    toggleUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser
        });
    }
    
    toggleUserEditModal = () => {
        this.setState({
            isOpenModalEditUser: !this.state.isOpenModalEditUser
        });
    }
    
    getAllUsersFromReact = async () => {
        let response = await getAllUsers('ALL');
        if (response && response.errCode === 0) {
            this.setState({ arrUsers: response.users });
        }
    }

    handleAddNewUser = () => {
        this.setState({
            isOpenModalUser: true
        });
    }

    createNewUser = async (data) => {
        try {
            let response = await createNewUserService(data);
                if (response && response.errCode === 0) {
                    this.getAllUsersFromReact();
                    this.setState({
                        isOpenModalUser: false
                    });

                    emitter.emit('EVENT_CLEAR_MODAL_DATA', { 'id': 'your id' });
                } else {
                    alert(response.errMessage);
                }
        } catch (error) {
            console.log('Check error: ', error);
        }
    }

    handleEditUser = (user) => {
        console.log('Check edit user: ', user);
        this.setState({
            isOpenModalEditUser: true,
            userEdit: user
        });
    }

    doEditUser = async(user) => {
        let res = await editUserService(user);
        if (res && res.errCode === 0) {
            this.setState({
                isOpenModalEditUser: false
            });
            this.getAllUsersFromReact();
        } else { alert(res.errMessage);
        }
        console.log('Check edit user from parent: ', user);
        this.setState({
            userEdit: user
        });
    }

    handleDeleteUser = async (user) => {
        try {
            let response = await deleteUserService(user.id);
            if (response && response.errCode === 0) {
                this.getAllUsersFromReact();
            } else {
                alert(response.errMessage);
            }
        } catch (error) {
            console.log('Check error: ', error);
        }
    }

    /** Life cycle
     * Run component:
     * 1. Run constructor -> init state
     * 2. Did mount (set state)
     * 3. Render (re-render if have state change)
     * 
     * 
     * 
     */


    render() {
        let arrUsers = this.state.arrUsers;
        // console.log('Check render arrUsers ', arrUsers);
        return (
            <div className="user-container">
                <ModalUser
                    isOpen={this.state.isOpenModalUser}
                    toggleFromParent={this.toggleUserModal}
                    createNewUser={this.createNewUser}
                />
                {
                this.state.isOpenModalEditUser && 
                <ModalEditUser
                    isOpen={this.state.isOpenModalEditUser}
                    toggleFromParent={this.toggleUserEditModal}
                    currentUser={this.state.userEdit}
                    editUser = {this.doEditUser}
                />
                }
                <div className='title text-center'>User Management</div>
                <div className='mx-1'>
                    <button 
                    className='btn btn-primary px-3'
                    onClick={() => this.handleAddNewUser()}
                    >
                    <i className="fas fa-plus"></i> Add new user
                    </button>
                </div>
                <div className='users-table mt-3 mx-1'>

                    <table id='customers'>
                        <tr>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                        
                            { arrUsers && arrUsers.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.email}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            <button className="btn-edit"
                                            onClick={() => this.handleEditUser(item)}
                                            >
                                                <i className="fas fa-pencil-alt"></i>
                                            </button>
                                            <button className="btn-delete"
                                            onClick={() => this.handleDeleteUser(item)}
                                            >
                                                <i className="fas fa-trash-alt"></i>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                    </table>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
