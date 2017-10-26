import React, { Component } from 'react'

export default class extends Component {
  state = { people: [] }

  async componentDidMount(){
    console.log("Running CompDidMount");

    const info = await fetch("https://swapi.co/api/people/", { method: "GET"})
    const data = await info.json()
    const { results } = data
    await console.log(results)
    await this.setState({ people: results })
    await console.log(this.state.people);
  }

  render() {
    return(
      <div>
        <div>CP-1</div>
        <div>
          {
            this.state.people.map((person) => { return ( <div key={person.name} >{person.name}</div> ) })
          }
        </div>
      </div>
    )
  }
}
