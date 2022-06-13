import React from 'react'
import "../styles/SideBar.css"

function SideBar(props) {
  console.log(props)
  return (
    <div>
    <input type="checkbox" id="check"/>
    <label for="check">
    <i className="fa fa-bars" aria-hidden="true" id="btn"></i>
    <i className="fa fa-times" aria-hidden="true" id="cancel"></i>
    </label>
    <div className="sidebar">
      <header>Welcome</header>
      <ul>
        <li>
            <button  value="Males" onClick={props.handleUsers}><i className="fa fa-male" aria-hidden="true"></i>Males </button>
        </li>
        <li>
            <button value="Females" onClick={props.handleUsers}><i className="fa fa-female" aria-hidden="true"></i>Females</button>
        </li>
        <li>
            <button value="All" onClick={props.handleUsers}><i className="fa fa-users" aria-hidden="true"></i>Both M & F</button>
        </li>
        {/* <li>
            <a href="#"><i className="fa fa-envelope" aria-hidden="true"></i>Events</a>
        </li> */}
      </ul>
    </div>
  </div>
   
  )
}

export default SideBar
