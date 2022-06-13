import React from 'react'
import '../styles/Card.css'




export default function Card(props){ 
    console.log(props)
    return ( 
        <div className="card">
             <img  src={props.item.img} alt=""/>
             <div className="card-inner">
              <h3>{props.item.name}</h3>
               <p className="dev">{props.item.title}</p>
               <p  className="web">{props.item.web}</p>
             </div>
             <div className="btnWrapper">
         <button className="btnEmail">
           <div>
             <i className="fa fa-envelope"></i>
           </div>
          <div className="email">Email</div>
         </button>
         <button className="bt btn-primary btnlinkedin">
           <div>
           <i className="fa fa-linkedin-square"></i>
           </div>
          <div className="email">Linkedin</div>
         </button>
       </div>
         <div className="about">
        <h3>About</h3>
        <p>I am a frontend developer with a particular interest in making things simple  and automating
            daily task.
        </p>
      </div>

       <div className="card-footer">
            <div>
             <div>
       <a href="https://twitter.com/home">
            <i className="fa fa-twitter-square" aria-hidden="true"></i>
       </a>
      </div>
      
      <div>
        <a href="https://www.facebook.com">
            <i className="fa fa-facebook-square" aria-hidden="true"></i>
        </a>
      </div>
      <div>
         <a href="https://www.instagram.com">
            <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
      </div>
      <div>
         <a href="https://github.com/jibola2588">
            <i className="fa fa-github-square" aria-hidden="true"></i>
        </a>
      </div>
      </div>
     </div>
        </div>
    )
}