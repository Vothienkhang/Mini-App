import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import { FormattedMessage, injectIntl } from 'react-intl';
import { languages, LANGUAGES } from '../../utils';
import actionTypes from '../../store/actions/actionTypes';
import { changeLanguageApp } from '../../store/actions/appActions';

class HomeHeader extends Component {

    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language);
    }

    render() {
        let language = this.props.language;
        return (
            <React.Fragment>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <i className="fas fa-bars"></i>
                            <div className='header-logo'></div>
                        </div>
                        <div className='center-content'>
                            <div className='child-content'>
                                <div><b><FormattedMessage id='homeheader.speciality' /></b></div>
                                <div className='subs-title'><FormattedMessage id='homeheader.search-doctor' /></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id='homeheader.speciality' /></b></div>
                                <div className='subs-title'><FormattedMessage id='homeheader.search-doctor' /></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id='homeheader.health-facility' /></b></div>
                                <div className='subs-title'><FormattedMessage id='homeheader.select-hospital' /></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id='homeheader.doctor' /></b></div>
                                <div className='subs-title'><FormattedMessage id='homeheader.choose-doctor' /></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id='homeheader.package' /></b></div>
                                <div className='subs-title'><FormattedMessage id='homeheader.check-price' /></div>
                            </div>
                        </div>
                        <div className='right-content'>
                            <div className='support'>
                                <i className="fas fa-question-circle"></i>
                                <div><FormattedMessage id='homeheader.support' /></div>
                            </div>
                            <div className='language-vi'>
                                <span onClick={() => this.props.changeLanguage('vi')}>VN</span>
                            </div>
                            <div className='language-en'>
                                <span onClick={() => this.props.changeLanguage('en')}>EN</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='home-header-banner'>
                    <div className='content-up'>
                        <div className='title-1'><FormattedMessage id='banner.title-1' /></div>
                        <div className='title-2'><FormattedMessage id='banner.title-2' /></div>
                        <div className='search'>
                            <input type='text' placeholder={this.props.intl.formatMessage({ id: 'banner.search-placeholder' })} />
                            <i className="fas fa-search"></i>
                        </div>
                    </div>
                    <div className='content-down'>
                        <div className='option-child'>
                            <div className='icon-child'><i className="fas fa-hospital"></i></div>
                            <div className='text-child'><FormattedMessage id='banner.option1' /></div>
                        </div>
                        <div className='option-child'>
                            <div className='icon-child'><i className="fas fa-mobile-alt"></i></div>
                            <div className='text-child'><FormattedMessage id='banner.option2' /></div>
                        </div>
                        <div className='option-child'>
                            <div className='icon-child'><i className="fas fa-procedures"></i></div>
                            <div className='text-child'><FormattedMessage id='banner.option3' /></div>
                        </div>
                        <div className='option-child'>
                            <div className='icon-child'><i className="fas fa-flask"></i></div>
                            <div className='text-child'><FormattedMessage id='banner.option4' /></div>
                        </div>
                        <div className='option-child'>
                            <div className='icon-child'><i className="fas fa-user-md"></i></div>
                            <div className='text-child'><FormattedMessage id='banner.option5' /></div>
                        </div>
                        <div className='option-child'>
                            <div className='icon-child'><i className="fas fa-medkit"></i></div>
                            <div className='text-child'><FormattedMessage id='banner.option6' /></div>
                        </div>

                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
        languages: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(HomeHeader));
