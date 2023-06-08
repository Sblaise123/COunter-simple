

import React from "react";

const digits = (props) => {
    return (
        <div className="digitContainer">
            <h1>{props.cool % 10}</h1>
        </div>
    );
};

export default digits;