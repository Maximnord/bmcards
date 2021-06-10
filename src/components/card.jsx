import React, { Component } from 'react';
import PropTypes from "prop-types";


class Card extends Component {

    buttonClass(cardId) {
        const { favs } = this.props;
        let classes = "btn btn-sm ";
        classes += favs.includes(cardId) ? "btn-secondary" : "btn-primary";
        return classes;
    }

    render() { 
        const { card, onHandleFavs } = this.props;
        return ( 
            <div className="col-md-6 col-lg-4 col-xl-3 mt-3">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{card.title}</h5>
                        <p className="card-text">{card.article}</p>
                        {this.props.children}
                        <span className="float-right">
                            <button
                                onClick={onHandleFavs}
                                className={this.buttonClass(card.id)}
                            >
                                Bookmark
              </button>
                        </span>
                    </div>
                </div>
            </div>
         );
    }
}

Card.propTypes = {
    card: PropTypes.object,
    favs: PropTypes.array
};
 
export default Card;