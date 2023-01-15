import React from "react";

const Footer = (props) => {
    const {description} = props;
    return (
        <div className="bg-success" style={{height: '50px'}}>
        <footer>{description}</footer>
        </div>
    )

}


export default Footer