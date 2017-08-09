import React from 'react'

//props
// datatTransferItem -- will be stored as JSON on the drage event
//

class Draggable extends React.Component{
  constructor(props){
    super(props)
    this.handleDragStart = this.handleDragStart.bind(this)
  }

  handleDragStart(e){
    console.log('e', e)
    let jsonItem = JSON.stringify(this.props.dataTransferItem)
    console.log('json', jsonItem)
    e.dataTransfer.setData('application/json', jsonItem)
  }

  render(){
    return(
      <div
        className='draggable'
        draggable
        onDragStart={this.handleDragStart}>
        {this.props.children}
      </div>
    )
  }
}

export default Draggable
