import React from "react";
function WarningBanner(props) {
    if (!props.warn) {
      return null;
    }
  
    return (
      <div className="warning">
        Warning!
      </div>
    );
  }
  
  class Page extends React.Component {
    constructor(props) {
      super(props);
      this.state = {showWarning: true};
      this.handleToggleClick = this.handleToggleClick.bind(this);
    }
  
    //  handeling event concept 
    handleToggleClick() {
    //   this.setState(state => ({
    //     showWarning: !state.showWarning
    //   }));
      this.setState({
        showWarning: !this.state.showWarning
      });
    }
  
    render() {
      return (
        <div>
          <WarningBanner warn={this.state.showWarning} />
          {/* handeling event concept  */}
          <button onClick={this.handleToggleClick}>
            {this.state.showWarning ? 'Hide' : 'Show'}
          </button>
        </div>
      );
    }
}
  export default Page