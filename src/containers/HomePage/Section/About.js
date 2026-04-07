import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';

class About extends Component {

    render() {

        return (
            <div className='section-share section-about'>
                <div className='section-about-header'> Truyền thông nói về chúng tôi</div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe width="100%" height="400px"
                            src="https://www.youtube.com/embed/r-CQ8eh1Njc"
                            title="Deep Work Music | Shibuya, Tokyo Digital Workspace | Pure Focus for Productivity (3 Hours)"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; 
                            encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen>
                        </iframe>
                    </div>
                    <div className='content-right'>
                        <p>Healthcare là gì?
                            Healthcare không chỉ đơn thuần là việc điều trị bệnh tật; đó là một hệ thống toàn diện nhằm duy trì và cải thiện sức khỏe thể chất lẫn tinh thần. Thông qua các dịch vụ y tế chuyên nghiệp, Healthcare bao gồm một chu trình khép kín:

                            Phòng ngừa: Tiêm chủng, khám sức khỏe định kỳ và tư vấn lối sống.

                            Chẩn đoán: Sử dụng công nghệ để xác định tình trạng sức khỏe chính xác.

                            Điều trị: Can thiệp bằng thuốc, phẫu thuật hoặc liệu pháp hồi phục.

                            Quản lý: Chăm sóc dài hạn cho các bệnh mãn tính và hỗ trợ tâm lý.

                            Cốt lõi của Healthcare hiện đại: Là sự kết hợp giữa công nghệ tiên tiến (AI, telemedicine) và sự thấu cảm nhân văn, hướng tới mục tiêu kéo dài tuổi thọ và nâng cao chất lượng cuộc sống cho cộng đồng.</p>
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

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(About));
