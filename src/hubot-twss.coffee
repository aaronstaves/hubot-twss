# Description
# Generic hubot script boilerplate
#
# Commands:
#   hubot script (me) <thing>
#
# Author:
#   https://github.com/aaronstaves/

module.exports = (robot) ->

  #
  # listens to script or script me 
  #
  twss = require 'twss'
  robot.hear /(.*)/i, (msg) ->

    string = msg.match[0];
    if twss.is string
    	msg.send('twss')

