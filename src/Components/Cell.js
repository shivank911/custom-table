import React from "react";
class Cell extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    this.state = { value: this.props.cellData.value };
  }
  constructObject(e) {
      let key = this.props.cellData.key;
      let id = this.props.cellData.id;
      let value = this.state.value;
      let data = {key:key,value:value,id:id}
      this.props.cellData.currentState(data);
  }
  handleChange(e) {
    this.setState({ value: e.currentTarget.value });
  }
  render() {
    //   console.log(this.props.cellData.edit);
    return (
      <td key={this.props.key} onKeyDown={this.constructObject.bind(this)}>
        {(this.props.cellData.edit === true && this.props.cellData.key!=='id' && this.props.cellData.key !== 'undefined') ? (
          this.props.cellData.value === null ? null : (
            <input
              onChange={this.handleChange.bind(this)}
              type="text"
              value={this.state.value}
            />
          )
        ) : (
          this.props.cellData.value
        )}
      </td>
    );
  }
}
export default Cell;
