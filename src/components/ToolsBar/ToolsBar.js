import React from 'react'

import './styles.css'

export default class ToolsBar extends React.Component {
  constructor(props) {
    super(props)

    this.restart = this.restart.bind(this)
  }

  restart(event) {
    const mode = this.refs.modeSelect.value
    const first = this.refs.firstSelect.value
    this.props.onRestart({
      mode: mode,
      first: first
    })
    event.preventDefault()
  }

  render() {
    return (
        <div className="toolsBar">
          <div>
            <h3>mode：</h3>
            <select
                ref="modeSelect"
                className="select">
              <option value="pve">vs computer</option>
              <option value="pvp">vs second player</option>
            </select>
          </div>

          <div>
            <h3>First move：</h3>
            <select
                ref="firstSelect"
                className="select">
              <option value="human">you</option>
              <option value="computer">computer</option>
            </select>
          </div>

          <button className="btn" onClick={this.restart}>Start game</button>
        </div>
    )
  }
}
