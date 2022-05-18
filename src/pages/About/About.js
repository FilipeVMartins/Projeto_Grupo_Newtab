import React from 'react';

import './About.css';

import NavMenu from '../../components/Menu/NavMenu.jsx'

import Footer from "../../components/Footer/Footer.jsx"

import svg from '../../images/layout1/about-illustration.svg';

export default class About extends React.Component {

  state = {
    textAbout:"",
    list:[]
  }

  /* ===============puxando sobre da api ===============*/
  componentDidMount(){
    this.getTableSobre()
    this.getTableEquipe()
  }

   getTableSobre(){
    fetch("https://api.airtable.com/v0/app6wQWfM6eJngkD4/Projeto?api_key=key2CwkHb0CKumjuM&filterByFormula=({Squad}='1')", {
    })
    .then(response => response.json())
    .then(responseJson => {
        this.setState({textAbout:responseJson.records[0].fields.Sobre})
    })
  }

  /*====================puxando informações da equipe da api =================*/

  getTableEquipe(){
    fetch("https://api.airtable.com/v0/app6wQWfM6eJngkD4/Equipe?api_key=key2CwkHb0CKumjuM&filterByFormula=({Squad}='1')", {
    })
    .then(response => response.json())
    .then(responseJson => {
        this.setState({list:responseJson.records})
        console.log(responseJson)
    })
  }

  render() {
    
    return (
    
      <div className="about-content">
          <div className="about-header">
            <header className="header">
                <NavMenu headerHeightMobile={12.875} headerHeightDesktop={26.3643}/>
            </header>
             <h1 className="about-sobre">Sobre o projeto</h1>
          </div>
          <div className="about-projeto">
            <div className="about-aside">
              <h3>O que é</h3>
            <p>{this.state.textAbout}
              </p>
            </div>
            <img src={svg} alt="Logo" className="about-svg" />
          </div>
          <h1 className="about-we">Quem somos nós</h1>
            <div className="about-team">
              {this.state.list.map((person, index) => {
                if(person.fields.Nome !== "Matheus Olegário"){
                return(
                  <div className="about-card" key={'person-card' + index}>
                    <div className="about-team-content">
                      <div className='about-simulation-foto'>
                        <img src={person.fields['Imagem de perfil'][0].url} alt="profile"></img>
                      </div>
                      <h2>{person.fields.Nome}</h2>
                      <p>{person.fields.Descrição}</p>
                      <div className="about-socials">
                        <a href={person.fields.Github}><i className="fab fa-github"></i></a>
                        <a href={person.fields.Email}><i className="fas fa-envelope"></i></a>
                        <a href={person.fields.LinkedIn}><i className="fab fa-linkedin linkedin"></i></a>
                      </div>
                    </div>
                  </div>
                )
                }
                else {
                  return null;
                }
              })}
            </div>
          <footer>
           <Footer/>
          </footer>
      </div>
    );
  };
};
