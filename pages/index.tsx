import React from "react"
import { useQuery } from "@apollo/react-hooks"
import Head from "next/head"
import HomeView from "../src/views/HomeView"
import AppBar from "../src/components/AppBar"
import { GET_MYGITHUB } from "../src/queries/github.query.listsrepos";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 40
    }
  }),
);


const Index = () => {
  console.log("process.env.GIT_TOKEN", process.env.GIT_TOKEN)
  const classes = useStyles();
  // the hook that calls the query.
  const repos = useQuery(GET_MYGITHUB)
  const { data } = repos;
  const { viewer } = data || {};
  const { name, avatarUrl } = viewer || {};
  return (
    <>
      <Head>
        <title>{`Repositories ${name}`}</title>
      </Head>
      <AppBar />
      <div className={classes.root}>
        <HomeView data={repos?.data?.viewer} />
      </div>
    </>
  )
}

export default Index



