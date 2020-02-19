import React, { useState } from "react";
import Avatar from '@material-ui/core/Avatar';

function AvatarComponent(props) {
    const [avatar] = useState(props.avatarUrl);
    return (
        <Avatar src={avatar} />
    );
}
export default AvatarComponent;