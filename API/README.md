# BASIC UNDERSTANDING OF API

API = APPLICATION PROGRAMMING INTERFACE
is a way for two computers to talk to each other. 

## Installation

Use the package manager [Node.js](https://nodejs.org/en/download/) to install Node.js.

```bash
install node.js
```

## Usage

```bash
# to create a new package.json file
npm init -y

# installing express
npm install express

# create a index.js file
vim index.js

# inside index.js copy the following code
const express = require('express');
const app = express();
const PORT = 8080;

app.use( express.json())

app.get('/gasprice', (req, res) => {
    res.status(200).send({
        gasprice: '⛽',
        size: 'large'
    })
});

app.post('/gasprice/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({ message: 'We need a logo!'})
    }

    res.send({
        gasprice: `⛽ with your ${logo} and ID of ${id}`,
    });
});

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)
```

## Result
When running your API on PORT: 8080 you should be able to inspect and see the different results and different status quote depending on the testings.
