import React from "react";
import Cell from "./Cell";
class Row extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  setEdit() {
    this.props.changeEdit(this.props.data);
  }
  setChangeEditOnEnter(e) {
      if(e.key === 'Enter')
      this.props.changeEditOnEnter(this.props.data);  
  }
  change = (data) => {
    this.props.onCellChange(data);
  };

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
            changeCell: this.change.bind(this),
          }}
        />
      );
    });
    console.log(y);
    return (
      <tr
        onClick={this.setEdit.bind(this)}
        onKeyDown={this.setChangeEditOnEnter.bind(this)}
      >
        {y}
      </tr>
    );
  }
}
export default Row;
