import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import Slider from 'react-slick';

class HandBook extends Component {

    render() {

        return (
            <div className='section-share section-HandBook'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'> Cẩm nang sức khỏe</span>
                        <button className='btn-section'> Xem thêm </button>
                    </div>
                    <div className='section-body'>

                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='bg-image section-HandBook' />
                                <div>Cẩm nang 1</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-HandBook' />
                                <div>Cẩm nang 2</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-HandBook' />
                                <div>Cẩm nang 3</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-HandBook' />
                                <div>Cẩm nang 4</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-HandBook' />
                                <div>Cẩm nang 5</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-HandBook' />
                                <div>Cẩm nang 6</div>
                            </div>
                        </Slider>
                    </div>
                </div>
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

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(HandBook));
