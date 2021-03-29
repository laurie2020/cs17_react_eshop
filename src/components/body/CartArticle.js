import React from 'react';


export default class CartArticle extends React.Component{

    back = () => {
        this.props.back(this.props.id, this.props.nom);
    }
    render(){


        return(
            <li className="cartArticle">
                <p>Produit : {this.props.nom} || Unités: 1</p>
                <button onClick={this.back}>Rendre</button>
            </li>       
        );
    }
}