import React from "react";
import "./Notification.css"; // CSS 파일 임포트

class Notification extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="notification-item">
                <div className="notification-avatar">
                    <div className="notification-avatar-inner"></div>
                </div>
                <span className="notification-text">
                    {/* user_{this.props.id} 부분을 SHISA로 변경했습니다 */}
                    <span className="username">SHISA</span>
                    {this.props.message}
                </span>
            </div>
        );
    }

    componentDidMount() {
        console.log(`${this.props.id}: componentDidMount called`);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(`${this.props.id}: componentDidUpdate called`);
    }

    componentWillUnmount() {
        console.log(`${this.props.id}: componentWillUnmount called`);
    }
}

export default Notification;