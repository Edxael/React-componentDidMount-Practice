import React from 'react'
import ReactDOM from 'react-dom'
import Cp1 from './comps/01-cp.jsx'

const MainComp = () => {
  return(
    <div>
      <div>Hello</div>
      <Cp1/>
    </div>
  )
}

ReactDOM.render(<MainComp/>, document.getElementById("root"))
