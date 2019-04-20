import React, { Component } from 'react'

import logo from '../assets/favicon.jpeg'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <img id='navbar-logo' src={logo} width="40" height="40" alt="Quiz logo" />
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav navbar-nav ml-md-auto pull-right">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" 
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Autores
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#"><img src='https://media.licdn.com/dms/image/C5603AQGIO6KFdi7zBA/profile-displayphoto-shrink_200_200/0?e=1549497600&v=beta&t=oGDJUlhlxa1-iAgspUI5vvX7aP4DTvhFa-qTPNeH3xQ' /></a>
                <p>Pablo Caraballo Llorente</p>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#"><img src='https://media.licdn.com/dms/image/C5603AQF6coDBBF-Ifg/profile-displayphoto-shrink_800_800/0?e=1549497600&v=beta&t=qammuvBN3CK76-qsG-MUIrNLf7EkLoKviVg86geTtkg' /></a>
                <p>Mario Penavades Suárez</p>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" 
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sobre Quiz
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <p class="dropdown-item" style={{textAlign: 'justify'}}>
                A quiz is a form of game or mind sport,<br></br> 
                in which the players (as individuals or <br></br> 
                in teams) attempt to answer questions <br></br>
                correctly. It is a game to test your <br></br>
                knowledge about a certain subject. <br></br> 
                In some countries, a quiz is also a <br></br>
                brief assessment used in education and <br></br>
                similar fields to measure growth in <br></br>
                knowledge, abilities, and/or skills.</p>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}