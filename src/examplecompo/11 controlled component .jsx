import { Component } from "react";

class EssayForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   type 1
      // value: 'Please write an essay about your favorite DOM element.'

      // type 2
      value: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log("onchange handlechange", event.target.value);
  }

  handleSubmit(event) {
    console.log("submit handlesubmit", this.state.value);

    alert("An essay was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Type here :
          <textarea value={this.state.value} onChange={this.handleChange} />
            </label>
            
        <br />
        <br />
        <label>
          <h3>Pick your favorite flavor:</h3>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default EssayForm;
