import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Chip from '@material-ui/core/Chip';
import CssBaseline from '@material-ui/core/CssBaseline'

import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import DescriptionIcon from '@material-ui/icons/Description';
import Divider from '@material-ui/core/Divider';

import ListItem from '../../../components/LIstItems';
import ListItemText from '../../../components/ListItemText';

const useStyles = makeStyles(theme => ({
    flex: {
        display: 'flex',
        marginTop: 20
    },
    icon: {
        marginRight: theme.spacing(0.5),
        width: 20,
        height: 20,
    },
}),
);

const Detail = ({ data }, props) => {
    const { object, name, updatedAt, isPrivate, primaryLanguage } = data || {};
    const listItems = object?.entries.map((repo, index) => {
        const { name, type } = repo || {};
        return (
            <>
                <div>
                    <ListItem key={index}>
                        <ListItemAvatar>
                            <Avatar>
                                {type === 'tree' && <FolderIcon />}
                                {type === 'blob' && <DescriptionIcon />}
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText name={name} color="primary" />
                    </ListItem>
                    <Divider />
                </div>
            </>
        )
    })
    return (
        <>
            <CssBaseline />
            <React.Fragment>
                <Container fixed>
                    <Grid container spacing={3}>
                        <Grid item xs={12} lg={12}>
                            <div>
                                <Breadcrumbs separator="›" aria-label="breadcrumb">
                                    <Link color="inherit" href="/">
                                        Home
                                        </Link>
                                    <Typography color="textPrimary">{name}</Typography>
                                    {isPrivate && <Chip label={'Private'} />}
                                </Breadcrumbs>
                            </div>
                        </Grid>
                        <Grid item xs={12} lg={12}>
                            {listItems}
                        </Grid>
                    </Grid>
                </Container>
            </React.Fragment>
        </>
    )
}
export default Detail