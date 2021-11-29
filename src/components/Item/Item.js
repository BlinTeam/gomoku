import React from 'react'
import './Item.css'

export default class Item extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    if (this.props.go !== 'none') {
      return
    }

    this.props.onClick({
      x: this.props.listNumber,
      y: this.props.sequenceNumber
    })
    event.preventDefault()
  }

  handleItemClassName(x, y) {
    if (x === 0 && y === 0) {
      return 'itemLeftTop'
    }

    if (x === 18 && y === 0) {
      return 'itemRightTop'
    }

    if (x === 18 && y === 18) {
      return 'itemRightBottom'
    }

    if (x === 0 && y === 18) {
      return 'itemLeftBottom'
    }

    if (y === 0) {
      return 'itemTop'
    }

    if (x === 18) {
      return 'itemRight'
    }

    if (y === 18) {
      return 'itemBottom'
    }

    if (x === 0) {
      return 'itemLeft'
    }

    if ((x === 9 && y === 9) ||
        (x === 3 && (y === 3 || y === 9 || y === 15)) ||
        (y === 3 && (x === 3 || x === 9 || x === 15)) ||
        (x === 15 && (y === 9 || y === 15)) ||
        (x === 9 && y === 15)
    ) {
      return 'itemPoint'
    }

    return 'itemNormal'
  }

  render() {
    const go = this.props.go
    const x = this.props.listNumber
    const y = this.props.sequenceNumber
    let itemClassName
    let spanClassName

    itemClassName = this.handleItemClassName(x, y)
    if (go === 'none') {
      spanClassName = 'spanNone'
    }
    else if (go === 'black') {
      spanClassName = 'spanBlack'
    }
    else {
      spanClassName = 'spanWhite'
    }

    return (
        <div onClick={this.handleClick} className={itemClassName}>
          <div className={spanClassName}/>
        </div>
    )
  }
}
