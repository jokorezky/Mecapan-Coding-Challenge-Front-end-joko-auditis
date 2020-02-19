import React from "react"
import { withRouter } from 'next/router'
import { useQuery } from "@apollo/react-hooks"
import Head from "next/head"
import AppBar from "../src/components/AppBar"
import DetailView from "../src/views/HomeView/Detail"
import { GET_DETAILREPO } from "../src/queries/github.query.detail";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
export interface Detail {
    url: string;
    data: any;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginTop: 40
        }
    }),
);

const Detail = (props) => {
    const classes = useStyles();
    const { url } = props?.router?.query;
    // // the hook that calls the query.
    const detailRepo = useQuery(GET_DETAILREPO, { variables: { url } })
    return (
        <>
            <Head>
                <title>Detail</title>
            </Head>
            <AppBar />
            <div className={classes.root}>
                <DetailView data={detailRepo?.data?.repository} />
            </div>
        </>
    )
}

export default withRouter(Detail)



