import React, { useState } from "react";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

function CardProfile(props) {
    const [className] = useState(props.className);
    const [headerTitle] = useState(props.headerTitle);
    const [headerSubHeader] = useState(props.headerSubHeader);
    const [mediaImg] = useState(props.mediaImg);
    const [mediaTitle] = useState(props.mediaTitle);
    const [contentText] = useState(props.contentText);
    const [bio] = useState(props.bio);
    const [location] = useState(props.location);
    const [classNameMedia] = useState(props.classNameMedia);
    return (
        <Card className={className}>
            <CardHeader
                title={headerTitle}
                subheader={headerSubHeader}
            />
            <CardMedia
                className={classNameMedia}
                image={mediaImg}
                title={mediaTitle}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {contentText}
                </Typography>
                {bio}
                <div>{location}</div>
            </CardContent>
        </Card>
    );
}
export default CardProfile;