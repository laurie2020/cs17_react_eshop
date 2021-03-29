import React from 'react';
import Header from '../header/Header'
import '../../style/css/style.css'
import Article from '../../components/body/Article'
import Coca from '../../img/coca.jpg'
import Fanta from '../../img/fanta.jpg'
import IceTea from '../../img/ice-tea.jpg'
import CartArticle from './CartArticle'
export default class App extends React.Component{
 
  constructor(props){
    super(props);
    this.state = {
      myNumber : 0,
      cart : [],
      produits : [{
          nom : "Coca-Cola",
          prix : 1,
          stock : 5
        },{
          nom : "Fanta",
          prix : 1.5,
          stock : 5
        },{
          nom : "Ice Tea",
          prix : 2,
          stock : 5
        }
      ],
      myMoney : 20
    }
  }

  // fonction acheter
  handleClick = (article) => {
    let newObjet = {
      key : this.state.myNumber,
      nom : article,
      id : this.state.myNumber
    }
    let copyCart = [...this.state.cart];
    
    if(article === "Coca-Cola" && this.state.myMoney >= 1){
      copyCart.push(newObjet);
      this.setState(prevState => ({
        cart : copyCart,
        myNumber : this.state.myNumber + 1,
        myMoney : this.state.myMoney - 1,

        produits : prevState.produits.map((el) => {
          if(el.nom === "Coca-Cola"){
            return {...el, stock : el.stock - 1}
          }else{
            return el
          }
        })
      }))
    }else if(article === "Fanta" && this.state.myMoney >= 1.5){
      copyCart.push(newObjet);
      this.setState(prevState => ({
        cart : copyCart,
        myNumber : this.state.myNumber + 1,
        myMoney : this.state.myMoney - 1.5,
        produits : prevState.produits.map((el) => {
          if(el.nom === "Fanta"){
            return {...el, stock : el.stock - 1}
          }else{
            return el
          }
        })
      }))
    }else if(article === "Ice Tea" && this.state.myMoney >= 2){
      copyCart.push(newObjet);
      this.setState(prevState => ({
        cart : copyCart,
        myNumber : this.state.myNumber + 1,
        myMoney : this.state.myMoney - 2,
        produits : prevState.produits.map((el) => {
          if(el.nom === "Ice Tea"){
            return {...el, stock : el.stock - 1 }
          }else{
            return el
          }
        })
      }))
    }
  }

  // fonction rendre

  rendre = (id, nom) => {
    let copyCart = [...this.state.cart];
    copyCart.forEach(element => {
      if(element.id === id){
        copyCart.splice(copyCart.indexOf(element), 1);
      }
    });
    if(nom === "Coca-Cola"){
      this.setState(prevState => ({
        myMoney : this.state.myMoney + 1,
        cart : copyCart,
        produits : prevState.produits.map((el) => {
          if(el.nom === "Coca-Cola"){
            return {...el, stock : el.stock + 1}
          }else{
            return el
          }
        })
      }))
    }else if(nom === "Fanta"){
      this.setState(prevState => ({
        myMoney : this.state.myMoney + 1.5,
        cart : copyCart,
        produits : prevState.produits.map((el) => {
          if(el.nom === "Fanta"){
            return {...el, stock : el.stock + 1}
          }else{
            return el
          }
        })
      }))
    }else if(nom === "Ice Tea"){
      this.setState(prevState => ({
        myMoney : this.state.myMoney + 2,
        cart : copyCart,
        produits : prevState.produits.map((el) => {
          if(el.nom === "Ice Tea"){
            return {...el, stock : el.stock + 1 }
          }else{
            return el
          }
        })
      }))
    }
  }
  render(){

    return(
      <div>
        <Header />
        <div>
          { this.state.myMoney < 1 &&
            <h2 className="bg-red">Mon Argent : {this.state.myMoney}€</h2>
          }
          { this.state.myMoney >= 1 &&
            <h2>Mon Argent : {this.state.myMoney}€</h2>
          }
          <div className="article-container">

            <Article
              image={Coca} 
              titre="Coca-Cola" 
              prix = {this.state.produits[0].prix}
              stock = {this.state.produits[0].stock}
              clickMe = {this.handleClick}
            />


            <Article 
              image={Fanta} 
              titre="Fanta" 
              prix = {this.state.produits[1].prix}
              stock = {this.state.produits[1].stock}
              clickMe = {this.handleClick}
            />


            <Article 
              image={IceTea} 
              titre="Ice Tea" 
              prix = {this.state.produits[2].prix}
              stock = {this.state.produits[2].stock}
              clickMe = {this.handleClick}
            />
          </div>

        </div>

        <div>
          <h2>Panier:</h2>
          <ul>

            {
              this.state.cart.map((objet) => {
                return(
                  <CartArticle
                    key = {objet.key}
                    id = {objet.key}
                    nom = {objet.nom}
                    back = {this.rendre}
                  />
                )
              })
            }

          </ul>
        </div>
        
      </div>
    );
  }
}
