import React from "react";
import PropTypes from "prop-types";

const FavsTotal = ({ favs }) => {
    return (
        <div className="row">
            <div className="col-12">
                <p>Total cards in your bookmark: {favs.length}</p>
            </div>
        </div>
    );
};

FavsTotal.propTypes = {
    favs: PropTypes.array
};

export default FavsTotal;