import React from "react";
import Row from "./Row";
class Table extends React.Component {
  constructor(props) {
    super(props);
  }
  change = (data) => {
    this.props.changeCell(data);
  };
  render() {
    let y = [];
    this.props.data.map((elem) => {
      y.push(
        <Row
          data={elem}
          changeEdit={this.props.changeEdit}
          changeEditOnEnter={this.props.changeEditOnEnter}
          onCellChange={this.change.bind(this)}
        />
      );
    });
    return (
      <div>
        <table>
          <tbody>{y}</tbody>
        </table>
      </div>
    );
  }
}
export default Table;
