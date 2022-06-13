import React, { Component } from 'react'
import ReactDOM from 'react-dom/client';
import SideBar from './components/SideBar'
import Card from './components/Card'
import './index.css';
import './styles/SideBar.css'
import data from './data'



 class App extends Component {
    constructor(){ 
      super()
      this.state = { 
        users:data,
        userData : []
      }
    }
    componentDidMount(){ 
      this.setState({ 
        userData : data
      })
    }
    handleUsers = (event) =>{ 
      console.log(event.target.value)
      let cardData;
      if(event.target.value === 'All'){ 
      cardData = this.state.users
      }
      if(event.target.value === 'Males'){ 
        console.log(event.target.value)
       cardData = this.state.users.filter((user) => {
        return user.gender === 'male'
       
      })
       console.log(cardData)
      }
      if(event.target.value === 'Females'){ 
        console.log(event.target.value)
        cardData = this.state.users.filter((user) => {
          return user.gender === 'female'
        })
        console.log(cardData)
      }
      this.setState({ 
        userData:cardData
      },
      () => console.log(this.state.userData))
     
    }
  
   render() {
  
    return (
      <div className="app">
        <SideBar handleUsers ={this.handleUsers}/>
        <div className="section">
           {this.state.userData.map((card) =>{ 
            return (
              <Card 
              key={card.id}
              item={card}/>
            )
           })}
        </div>
      </div>
    )
  }
}







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)

