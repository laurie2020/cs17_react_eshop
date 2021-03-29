import React from 'react';


export default class Article extends React.Component {

    clickMe = () => {
        this.props.clickMe(this.props.titre);
        console.log(this.props.stock);
    }

    render(){
    

        return(

            <div className="article">
                <img src={this.props.image} alt="coca" width="200"/>
                {  this.props.stock > 1 &&
                    
                    <div className="article-info">
                        <p>{this.props.titre}</p>

                        <p>Prix: {this.props.prix}</p>

                        <div className="info">

                            <p>Stock: {this.props.stock}</p>

                            <button onClick={this.clickMe}>Acheter</button>

                        </div> 

                    </div>

                }
                { this.props.stock === 1 &&

                    <div className="bg-orange article-info">

                        <p>{this.props.titre}</p>

                        <p>Prix: {this.props.prix}</p>

                        <div className="info">

                            <p>Stock: {this.props.stock}</p>

                            <button onClick={this.clickMe}>Acheter</button>

                        </div> 

                    </div>
                }
                {   this.props.stock === 0 &&
                    
                    <div className="bg-red article-info">

                        <p>{this.props.titre}</p>

                        <p>Prix: {this.props.prix}</p>

                        <div className="info">

                            <p className="rupture">RUPTURE DE STOCK</p>

                        </div>   
                    </div>
                }
                
            </div>
        )
    }
}