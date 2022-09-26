import React from "react";
import Cell from "./Cell";
class Row extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    this.state = {changedState:this.props.data}
    this.state.onClick = this.checkButtonPressed.bind(this);
  }
  setEdit() {
    console.log(this.props.data);
    this.props.changeEdit(this.props.data);
  }
  setChangeEditOnEnter(e) {
      
      this.props.changeEditOnEnter(this.props.data);  
  }
  change = (data) => {
    this.props.onCellChange(data);
  };
  getCurrentState = (data)=>{
    console.log(data);
    this.setState({changedState:data})
  }
  checkButtonPressed(e){
    if(e.target.id === "save"){
      this.change(this.state.changedState);
      
    }
    else if(e.target.id === "cancel"){
      Object.keys(this.props.data).forEach((key)=>{
        console.log(key);
      })
      this.change(this.props.data);
      
    }
    this.setChangeEditOnEnter();
  }
  render() {
    let y = [];
    Object.keys(this.props.data).forEach((key) => {
      y.push(
        <Cell
          cellData={{
            id: this.props.data.id,
            key: key,
            value: key === "canEdit" ? null : this.props.data[key],
            edit: this.props.data.canEdit,
            // changeCell: this.change.bind(this),
            currentState:this.getCurrentState.bind(this),
          }}
        />
      );
    });
    //console.log(y);
    return (
      <tr>
        {y}
        <button onClick={this.setEdit.bind(this)}>Edit</button>
        <button id = "save"  onClick={this.state.onClick}>Save</button>
        <button id = "cancel"  onClick={this.state.onClick}>Cancel</button>
      </tr>
      
    );
  }
}
export default Row;
