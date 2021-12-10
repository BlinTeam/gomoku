import React from 'react'
import './styles.css'

export default class Notification extends React.Component {
  render() {
    return !this.props.gameOver ?
        (<div styles="display: none;"/>) :
        (<div className="notificationWrapper">
          <div className="notificationBg"/>
          <div className="notificationContent">
            <h1>Game over</h1>
            <h3>Winner：{this.props.winner === 'black' ? 'black' : 'white'}</h3>
          </div>
        </div>)
  }
}
