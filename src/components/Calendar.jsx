import React from "react";
import dateFns from "date-fns";
import { Icon, Popup,List } from "semantic-ui-react";
import "../App.css";
class Calendar extends React.Component {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date()
  };
  addID = a => {
    if (a.length <= 2) {
      return a.map(Data => (
        <div
          key={Data.key}
          style={{
            backgroundImage: "linear-gradient(90deg, #e8e8e8 100%, #a6a6a6 0%)",
            border: "1px solid white",
            borderRadius: "2px",
            fontWeight: 700,
            fontSize: "90%",
            lineHeight: 1.5,
            color: "#404040"
          }}
        >
          {Data.key}
        </div>
      ));
    }
    else{
      return(
      <div><div
        key={a[0].key}
        style={{
          backgroundImage: "linear-gradient(90deg, #e8e8e8 100%, #a6a6a6 0%)",
          border: "1px solid white",
          borderRadius: "2px",
          fontWeight: 700,
          fontSize: "90%",
          lineHeight: 1.5,
          color: "#404040"
        }}
      >
        {a[0].key}
      </div>
      <div
          key={a[1].key}
          style={{
            backgroundImage: "linear-gradient(90deg, #e8e8e8 100%, #a6a6a6 0%)",
            border: "1px solid white",
            borderRadius: "2px",
            fontWeight: 700,
            fontSize: "90%",
            lineHeight: 1.5,
            color: "#404040"
          }}
        >
          {a[1].key}
        </div>
        <div style={{textAlign:"center" , color:"red"}}>
        :::
        </div>
        </div>);
    }
  };

  showData= (a) =>{
    
    return a.map(Data => (
      
      <List.Item key={Data.key}>
      <List.Icon name='book' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>{Data.key}&nbsp;&nbsp;{Data.coursename}</List.Header>
        <List.Description as='a'>{Data.time}</List.Description>
      </List.Content>
    </List.Item>
    ))
  }

  renderHeader() {
    const dateFormat = "MMMM YYYY";

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            <Icon name="chevron left" />
          </div>
        </div>
        <div className="col col-center">
          <span>{dateFns.format(this.state.currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon">
            <Icon name="chevron right" />
          </div>
        </div>
      </div>
    );
  }

  renderDays() {
    const dateFormat = "dddd";
    const days = [];

    let startDate = dateFns.startOfWeek(this.state.currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="days row">{days}</div>;
  }

  renderCells() {
    const { currentMonth, selectedDate } = this.state;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dateFormat = "D";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";
    const cal = this.props.calDay;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        //console.log("#",day,"#")
        //console.log(dateFns.parse("15 May 2019"));
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        let a = cal.filter(item => {
          return dateFns.parse(item.caldate).getTime() === cloneDay.getTime();
        });

        if (a.length > 0) {
          days.push(
            <Popup
              key={day}
              wide='very'
              trigger={
                <div
                  className={`col cell ${
                    !dateFns.isSameMonth(day, monthStart)
                      ? "disabled"
                      : dateFns.isSameDay(day, selectedDate)
                      ? "selected"
                      : ""
                  }`}
                  key={day}
                  onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
                >
                  <span className="number">{formattedDate}</span>
                  <span className="bg">{formattedDate} </span>

                  <div style={{ marginTop: "1.5em" }}>{this.addID(a)}</div>
                </div>
              }
              content={<List divided relaxed>{this.showData(a)}</List>}
              on="hover"
            />
          );
        } else {
          days.push(
            <div
              className={`col cell ${
                !dateFns.isSameMonth(day, monthStart)
                  ? "disabled"
                  : dateFns.isSameDay(day, selectedDate)
                  ? "selected"
                  : ""
              }`}
              key={day}
              onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
            >
              <span className="number">{formattedDate}</span>
              <span className="bg">{formattedDate}</span>
            </div>
          );
        }
        day = dateFns.addDays(day, 1);
      }

      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  }

  onDateClick = day => {
    this.setState({
      selectedDate: day
    });
  };

  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    });
  };

  render() {
    return (
      <div className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
      </div>
    );
  }
}

export default Calendar;
