# Projeto score - Serasa

A disposição dos cards é rendizada seguindo as seguintes regras:

- Caso a pontuação esteja abaixo de 30, ele recebe ofertas para negociar suas dívidas - caso o usuário decida por negociar a dívida, recebe 15 pontos e a dívida sai da lista;
- Caso sua pontuação esteja entre 31 e 60, ele está elegível para solicitar crédito, podendo escolher uma das proposta oferecidas - caso o usuário decida aceitar a oferta de crédito, recebe 10 pontos e a crédito sai da lista;
- Caso sua pontuação esteja acima de 50, será apresentado para ele um card com um plano de proteção ao RG - caso o usuário decida por aceitar a oferta, recebe 10 pontos e a oferta sai da lista;
- Caso sua pontuação esteja acima de 90, ele receberá um desconto (%) para obter o seu programa de proteção ao RG - caso o usuário decida por aceitar a promoção, recebe 5 promoção e a oferta sai da lista;

## Stacks utilizadas:

- React
- Redux Saga
- Material UI
- SCSS

## Deploy:

https://serasa-app.netlify.app/

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
