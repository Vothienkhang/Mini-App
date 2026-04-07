import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';

class HomeFooter extends Component {

    render() {

        return (
            <div className='home-footer'>
                <p>&copy; 2026 My Company. All rights reserved.
                    More information, please visit my website.
                    <a href="https://www.facebook.com/lacky.close/" target='blank'> 
                        Click here
                    </a> |
                </p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        languages: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(HomeFooter));
