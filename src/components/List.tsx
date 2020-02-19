import React, { useState } from "react";
import List from '@material-ui/core/List';
function Button(props) {
    const [className] = useState(props.className);
    const [component] = useState(props.component);
    return (
        <List component={component} className={className}>{props.children}</List>
    );
}
export default Button;