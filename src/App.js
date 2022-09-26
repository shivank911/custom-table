import React from "react";
import "./App.css";
import Table from "./Components/Table";
// eslint-disable-next-line
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, name: "shivank", loc: "lko", age: "23", canEdit: false },
        { id: 2, name: "subhav", loc: "lko", age: "23", canEdit: false },
        { id: 3, name: "deepak", loc: "lko", age: "23", canEdit: false },
      ],
    };
  }
  changeEdit(data) {
    // console.log(data);
    let updatedData = this.state.data.map((elem) => {
      if (elem.id === data.id) {
        elem.canEdit = true;
      }
      return elem;
    });
    this.setState({ data: updatedData });
  }
  changeEditOnEnter(data) {
    // console.log(data);
    let updatedData = this.state.data.map((elem) => {
      if (elem.id === data.id) {
        elem.canEdit = false;
      }
      return elem;
    });
    this.setState({ data: updatedData });
  }
  handleChange = (data) => {
    // console.log(data);
    let updatedData = this.state.data.map((elem) => {
      if (elem.id === data.id) {
        elem[data.key] = data.value;
      }
      return elem;
    });
    this.setState({ data: updatedData });
  };
  componentDidMount() {
    // eslint-disable-next-line
    this.state.data.map((el) => {
      el.canEdit = false;
    });
  }
  render() {
    // console.log(this.state.data);
    return (
      <Table
        data={this.state.data}
        changeEdit={this.changeEdit.bind(this)}
        changeEditOnEnter={this.changeEditOnEnter.bind(this)}
        changeCell={this.handleChange.bind(this)}
      ></Table>
    );
  }
}

export default App;
