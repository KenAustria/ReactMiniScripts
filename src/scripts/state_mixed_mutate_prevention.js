// filename: state-mixed-Mutate-Prevention.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class MyApp extends Component {
  state = {
    candidate: {
      account: { firstName: "First Name", lastName: "", email: "", phone: "" },
      salary: null,
      headline: "Headline",
      topSkills: [
        { experience: "", title: "Top Skill" },
        { experience: "", title: "" },
        { experience: "", title: "" }
      ]
    }
	};

  handleChange = event => {
    const candidateClone = {...this.state.candidate}; // Shallow clone.
    const accountClone = {...this.state.candidate.account}; // Deep clone.
    const topSkillsClone = {...this.state.candidate.topSkills}; // Deep clone.

		// below (let): Persists the last entered value (required).
    let myHeadline = candidateClone.headline;
    let myFirstName = candidateClone.account.firstName;
    let mySalary = candidateClone.salary;
		let myTopSkillsTitle = candidateClone.topSkills[0].title;

    switch (event.target.name) {
      case "headlineInput":
        myHeadline = event.target.value;
        break;
      case "firstNameInput":
        myFirstName = event.target.value;
        break;
      case "salaryInput":
        mySalary = event.target.value;
        break;
      case "topSkillsTitleInput":
        myTopSkillsTitle = event.target.value;
        break;
      default:
        console.log("Switch statement error");
    }

    accountClone.firstName = myFirstName; // Place the property value inside the deep cloned embedded object.
    topSkillsClone[0].title = myTopSkillsTitle; // Place the property value inside the deep cloned embedded array.
    candidateClone["account"] = accountClone; // Place the deep cloned embedded object inside the shallow cloned main object.
    candidateClone["salary"] = mySalary; // Place the property inside the shallow cloned main object.
    candidateClone["headline"] = myHeadline; // Place the property inside the shallow cloned main object.
    candidateClone["topSkills"] = topSkillsClone; // Place the deep cloned embedded array inside the shallow cloned main object.
    this.setState({ candidate: candidateClone });
	};

  render() {
    const myContainer = {
      maxWidth: "280px",
      margin: "10px auto",
      padding: "4px 0",
      backgroundColor: "#ddd",
      textAlign: "center",
      border: "1px solid #000"
    };
    return (
      <div style={myContainer}>
        <input
          type="text"
          name="headlineInput"
          value={this.state.candidate.headline}
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          name="firstNameInput"
          value={this.state.candidate.account.firstName}
          onChange={this.handleChange}
        />
        <br />
        <input
          type="number"
          name="salaryInput"
          value={this.state.candidate.salary || 0}
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          name="topSkillsTitleInput"
          value={this.state.candidate.topSkills[0].title}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
ReactDOM.render(<MyApp />, document.getElementById("root"));
