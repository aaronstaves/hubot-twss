# Description
# Generic hubot script boilerplate
#
# Commands:
#   hubot script (me) <thing>
#
# Configuration:
# HUBOT_TWSS_PROB (optional)
#   if twss.prob evaluates to a probability above this, it will
#   respond with 'twss'.  Defaults to 0.98
#
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
    prob = process.env.HUBOT_TWSS_PROB or 0.98

    robot.logger.debug twss.prob string
    if ( twss.prob string ) >= prob
      msg.send('twss')

