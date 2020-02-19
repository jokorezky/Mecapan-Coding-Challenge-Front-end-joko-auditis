import React, { useState } from "react";
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
function ListItemTextComponent(props) {
    const [name] = useState(props.name);
    const [description] = useState(props.description);
    const [color] = useState(props.color);
    return (
        <ListItemText primary={<Typography color={color}>{name}</Typography>} secondary={description}>{props.children}</ListItemText>
    );
}
export default ListItemTextComponent;