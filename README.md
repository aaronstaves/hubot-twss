# Hubot: hubot-twss

[![Build Status](https://travis-ci.org/aaronstaves/hubot-twss.svg?branch=master)](https://travis-ci.org/aaronstaves/hubot-twss)

A hubot script to respond with "twss" in appropriate situations.  Still under development.

See [`src/hubot-twss.coffee`](src/hubot-twss.coffee) for full documentation.

## Installation

Add **hubot-twss** to your `package.json` file:

```json
"dependencies": {
  "hubot": ">= 2.5.1",
  "hubot-scripts": ">= 2.4.2",
  "hubot-twss": ">= 0.0.0",
  "hubot-hipchat": "~2.5.1-5",
}
```

Add **hubot-twss** to your `external-scripts.json`:

```json
["hubot-twss"]
```

Run `npm install hubot-twss`

## Sample Interaction

```
user> script abc123 
Hubot> script abc123
```
```
aaron> script me abc123
Hubot> script abc123
```
```
