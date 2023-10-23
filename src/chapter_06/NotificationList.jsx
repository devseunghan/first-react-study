import React from "react";
import Notification from "./Notification";

const reservedNotifiactions = [
  {
    id: 1,
    message: '안녕하세요, 오늘 일정을 알려드립니다.',
  },
  {
    id: 2,
    message: '점심식사 시간입니다.',
  },
  {
    id: 3,
    message: '이제 곧 미팅이 시작됩니다.'
  }
];

let timer;

export default class NotificationList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: [],
    };
  }

  componentDidMount() {
    const { notifications } = this.state;
    timer = setInterval(() => {
      if (notifications.length < reservedNotifiactions.length) {
        const index = notifications.length;
        notifications.push(reservedNotifiactions[index]);
        this.setState({
          notifications: notifications
        });
      }
      else {
        this.setState({
          notifications: [],
        });
      }
    }, 1000);
  }

  render() {
    return (
      <div>
        {this.state.notifications.map((notification) => {
          return (
            <Notification 
              key={notification.id}
              id={notification.id}
              message={notification.message} 
            />
          );
        })}
      </div>
    );
  }
}