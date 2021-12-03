import React from 'react'

import './styles.css'

export default class StatusBar extends React.Component {
  render() {
    const mode = this.props.mode
    if (mode === 'pvp') {
      const itemClass = this.props.activeUser === 'black' ? 'black' : 'white'

      return (
          <div className="statusBar">
            <div className="players">
              Current player：
              <div className={itemClass}/>
            </div>
          </div>
      )
    }
    const humanClass = this.props.first === 'human' ? 'black' : 'white'
    const computerClass = this.props.first === 'computer' ? 'black' : 'white'

    return (
        <div className="statusBar">

          <div className="players">
            Player：
            <div className={humanClass}/>
            Computer：
            <div className={computerClass}/>
          </div>
        </div>
    )
  }
}
