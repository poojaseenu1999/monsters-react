import React from "react";

const Header = (props) => {
    console.log('props', props)
    return (
        <div>pooja is {props.gender}</div>
    )
}

export default Header;