import React from "react";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
 
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 
class daypick extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: "",
      
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(date) {
    
    this.props.addDate(date)
    
  }
  
  render() {
      console.log("%%%",this.state)
    return (
      <DatePicker
      placeholderText="Click to select a date"
        selected={this.state.startDate}
        value={this.state.dropDate}
        onChange={this.handleChange}
        dateFormat="dd/MMMM/yyyy"
        
        
        
      />
    );
  }
}

export default daypick