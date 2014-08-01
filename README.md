# Hubot: hubot-substitute 

[![Build Status](https://travis-ci.org/aaronstaves/hubot-script-boilerplate.svg?branch=master)](https://travis-ci.org/aaronstaves/hubot-script-boilerplate)

A hubot script boilerplate

See [`src/script-boilerplate.coffee`](src/script-boilerplate.coffee) for full documentation.

## Installation

Add **hubot-script-boilerplate** to your `package.json` file:

```json
"dependencies": {
  "hubot": ">= 2.5.1",
  "hubot-scripts": ">= 2.4.2",
  "hubot-script-boilerplate": ">= 0.0.0",
  "hubot-hipchat": "~2.5.1-5",
}
```

Add **hubot-script-boilerplate** to your `external-scripts.json`:

```json
["hubot-script-boilerplate"]
```

Run `npm install hubot-script-boilerplate`

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
