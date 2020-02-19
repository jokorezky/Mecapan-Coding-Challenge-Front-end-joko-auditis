import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import Avatar from '../../../components/Avatar'
import CardProfile from '../../../components/CardProfile'

import { red } from '@material-ui/core/colors';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import moment from 'moment';

export interface Profile {
    avatarUrl: string;
    createdAt: string;
    name: string;
    location: string;
    status: {
        name: string;
    };
    bio: string;
    organizations: {
        [edges: string]: any;
    };
    headerTitle : string;

}

interface IProps {
    profile: Profile
}
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: red[500],
        },
    }),
);

const Profile = ({ profile }: IProps) => {
    const classes = useStyles();
    const { avatarUrl, createdAt, name, location, status, bio, organizations } = profile || {};
    const listOrganizers = organizations?.edges?.map((repo, index) => {
        const { node } = repo || {};
        return (
            <>
                <Avatar avatarUrl={node?.avatarUrl} key={index} />
            </>
        )
    })

    return (
        <>
            <CardProfile 
            className={classes.root}
            headerTitle={name}
            headerSubHeader={`since ${moment(createdAt).format('DD/MM/YYYY')}`}
            classNameMedia={classes.media}
            mediaImg={avatarUrl}
            mediaTitle={name}
            contentText={status?.name}
            bio={bio}
            location={location}
            />
            <h4>Organizations</h4>
            <AvatarGroup>
                {listOrganizers}
            </AvatarGroup>
        </>
    )
}
export default Profile