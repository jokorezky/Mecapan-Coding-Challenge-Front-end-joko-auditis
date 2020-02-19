import React from 'react';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Profile from './Profile'
import ListRepositories from './ListRepositories'

export interface HomeView {
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
    headerTitle: string;
    repositories: any;

}

interface IProps {
    data: HomeView
}

const HomeView = ({ data }: IProps) => {
    const { repositories } = data || {};
    return (
        <>
            <React.Fragment>
                <CssBaseline />
                <Container fixed>
                    <Grid container spacing={3}>
                        <Grid item xs={12} lg={3}>
                            <Profile profile={data} />
                        </Grid>
                        <Grid item xs={12} lg={9}>
                            <ListRepositories repos={repositories?.nodes || []} />
                        </Grid>
                    </Grid>
                </Container>
            </React.Fragment>
        </>
    )
}
export default HomeView