
# # Mecapan Coding Challenge Front-End

The goal of this challenge is to give the candidate the opportunity to demonstrate their web front-end engineering skills. In this challenge, the candidate will be expected to learn from various sources of documentation, configure a project, and use the knowledge they've obtained to build a working web application.

## This application uses :
* Comitizen [https://github.com/commitizen/cz-cli](https://github.com/commitizen/cz-cli)
* Graphql [https://graphql.org/](https://graphql.org/)
* Apollo-boost [https://www.apollographql.com/docs/react/get-started/](https://www.apollographql.com/docs/react/get-started/)
* Prettier [https://prettier.io/](https://prettier.io/)
* Material-ui [https://material-ui.com/](https://material-ui.com/)

I use the GraphQL API v4 open API *github* https://api.github.com/graphql
documentation : [https://developer.github.com/v4/](https://developer.github.com/v4/)

## Usage

<details><summary><b>Show instructions</b></summary>

1. Install the package:

    ```sh
    $ yarn or npm install
    ```

2. You must add your github token in `.env` [tutorial create github token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)

    ```diff
    + GIT_TOKEN : {your github token}
    ```

3. I have added the github Graphql url

    ```diff
    + GRAPHQL_URI = https://api.github.com/graphql
    ```

4. To run locally you type `yarn dev` in the terminal :

    ```diff
      "dev": "ts-node --project tsconfig.server.json server/index.ts",
    ```

5. to run production mode type `yarn build` and `yarn start` in terminal :


    ```diff
      "scripts": {
        "build": "next build",
        "start": "NODE_ENV=production ts-node --project tsconfig.server.json server/index.ts",
      }
    ```

6. To push to repo you must `git add .` and here I make a neat commit. I use comitizen. You just type `yarn commit` [https://github.com/commitizen/cz-cli](https://github.com/commitizen/cz-cli)


</details>

thank you