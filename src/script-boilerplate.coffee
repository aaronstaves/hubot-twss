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
  robot.respond /script( me)? (.*)/i, (msg) ->

    thing = msg.match[2]
    msg.send("script " + thing)

