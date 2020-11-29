# Cats Wiki

> Get, search for information about cat breeds. If you love cats, you got to the right place :)

In the cats wiki you can learn many things about all kinds of cats. You can search for cat breeds, see some daily top breeds and get amazed with lots of cute photos.

This is the frontend component of the cats wiki project. You can find the main [backend here](https://github.com/mapra99/cats-wiki-api)

## Built With

- React, Redux and Router
- Webpack

Also consuming the public [Cat API](https://thecatapi.com/)

## Live Demo

[Live Demo Link](https://cats-wiki.vercel.app/)


## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites
- NPM (and Node)

### Setup
1. Clone this repository
```
git clone git@github.com:mapra99/cats-wiki.git
```
2. `cd` to the project's folder
```
cd cats-wiki
```
3. Install all library dependencies
```
npm install --save-dev
```
4. On the project's folder, create a file called `.env`, and add the following
```
API_URL=http://localhost:3000
```
So far this is the only required environment variable. See the file `.env.example` for further variables that trigger optional services if any. Also, check the next section to set up a local API to get started.

#### Setting up a local backend
The application needs a local API to attend the requests from the React application.

You can either set up a local copy of the real backend or run a fake json api. For the former you can follow the [setup instructions here](https://github.com/mapra99/cats-wiki-api/blob/development/README.md), for the latter follow this:

1. On the project's folder, run the following:
```
npx json-server db.json --routes routes.json
```

### Usage

- Run a local development server by executing:
```
npm run start
```

- You can also create a production build by running:
```
npm run build
```
And you will find the production builds at the dist/ folder

## Author

👤 **Miguel Prada**

- Github: [@mapra99](https://github.com/mapra99)
- Twitter: [@MiguelPrada1](https://twitter.com/MiguelPrada1)
- Linkedin: [mprada](https://linkedin.com/in/mprada)

## Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](issues/).

## Show your support

Give a star if you like this project!

## Acknowledgments

- devchallenges.io for their amazing designs and its community!

## License

This project is [MIT](lic.url) licensed.
