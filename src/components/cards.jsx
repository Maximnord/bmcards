import React, { Component } from 'react';
import Card from './card';
import FavsTotal from "./favsTotal";
import { getCards } from "../services/cards";

class Cards extends Component { 

    state = {
        cards: [],
        favs: []
    };

    componentDidMount() {
        this.setState({ cards: getCards() });
    }

    onHandleFavs = cardId => {
        let { favs } = this.state;

        if (favs.includes(cardId)) {
            favs.splice(favs.indexOf(cardId), 1);
        } else {
            favs.push(cardId);
        }

        this.setState({ favs });
    };

    render() { 
        console.log("render hook invoke!");
        const { favs } = this.state;

        return ( 
            <div className="container">
                <FavsTotal favs={favs} />
                <div className="row">
                    {this.state.cards.map(card => (
                        <Card
                            onHandleFavs={() => this.onHandleFavs(card.id)}
                            key={card.id}
                            card={card}
                            favs={favs}
                        >
                            <span>Card #{card.id}</span>
                        </Card>
                    ))}
                </div>
            </div>
         );
    }
}
 
export default Cards;