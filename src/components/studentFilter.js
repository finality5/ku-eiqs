import React, { Component } from "react";
import { Label, Menu, Tab, Dropdown } from "semantic-ui-react";

export class studentFilter extends Component {
  state = {
    year: "",
    semester: ""
  };

  render() {
    return (
      <Tab
        panes={[
          {
            menuItem: (
              <Menu.Item key="year">
                Year
                <Label />
              </Menu.Item>
            ),
            render: () => (
              <Tab.Pane>
                <Dropdown
                  placeholder="Select Year"
                  fluid
                  selection
                  options={[
                    {
                      key: "2561",
                      text: "2561",
                      value: "2561"
                    },
                    {
                      key: "2560",
                      text: "2560",
                      value: "2560"
                    }
                  ]}
                  onChange={(e, { value }) => {
                    console.log("#", value);
                    this.setState({ year: value });
                    console.log(this.state);
                  }}
                />
              </Tab.Pane>
            )
          },
          {
            menuItem: (
              <Menu.Item key="semester">
                Semester
                <Label />
              </Menu.Item>
            ),
            render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>
          }
        ]}
      />
    );
  }
}

export default studentFilter;
