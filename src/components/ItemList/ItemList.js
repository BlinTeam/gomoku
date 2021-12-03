import React from 'react'
import Item from '../Item/Item'
import './styles.css'

export default class ItemList extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    this.props.onClick(event)
  }

  render() {
    const list = this.props.list.map((item, index) =>
        <div key={index} className="list">
          <Item
              go={item.go}
              listNumber={this.props.listNumber}
              sequenceNumber={index}
              onClick={this.handleClick}/>
        </div>
    )

    return (
        <div>
          {list}
        </div>
    )
  }
}
