
import React from 'react';
import Router from 'next/router';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip'
import ListItem from '../../../components/LIstItems';
import ListItemText from '../../../components/ListItemText';
import List from '../../../components/List';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';


function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        list: {
            width: '100%',
            backgroundColor: theme.palette.background.paper,
        },
        chip: {
            margin: theme.spacing(0.5),
        },
        section2: {
            margin: theme.spacing(2),
        },
        colorPrimary: {
            color: 'red'
        }
    }),
);
export interface Repo {
    id: string;
    name: string;
    description: string;
    updatedAt: string;
    primaryLanguage: {
        name: string;
    };
    owner: {
        login: string;
    }
}

interface IProps {
    repos: Repo[];
}


const ListRepositories = ({ repos }: IProps) => {
    const [open, setOpen] = React.useState(false);
    const [textError, setTextError] = React.useState('');
    const classes = useStyles();
    const handleCardClick = (name, login) => {
        if (login !== 'jokorezky') {
            setOpen(true)
            setTextError(name)
        } else {
            Router.push(`/${name}`)
        }
    };
    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    const listItems = repos.map((repo, index) => {
        const { id, name, description, primaryLanguage, owner } = repo || {};
        const { login } = owner || {};
        return (
            <>
                <ListItem key={index} handleCardClick={() => handleCardClick(name, login)}>
                    <ListItemText name={name} description={description} color="primary" />
                    {
                        primaryLanguage?.name && <div className={classes.section2}>
                            <div>
                                <Chip className={classes.chip} color="primary" label={primaryLanguage?.name} />
                            </div>
                        </div>
                    }
                </ListItem>
                <Divider />
            </>
        )
    })

    return (
        <List component="nav" className={classes.list}>
            {listItems}
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    Sorry you cannot get more info {textError}, this is not my repository
                </Alert>
            </Snackbar>
        </List>
    )
}
export default ListRepositories