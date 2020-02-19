import React, { useState } from "react";
import ListItem from '@material-ui/core/ListItem';

function ListItemComponent(props) {
    const [key] = useState(props.key);
    const {handleCardClick} = props;
    return (
        <ListItem key={key} button onClick={handleCardClick}>
            {props.children}
        </ListItem>
    );
}
export default ListItemComponent;