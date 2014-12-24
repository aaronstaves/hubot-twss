var expect = require("chai").expect;
var path   = require("path");

var Robot       = require("hubot/src/robot");
var TextMessage = require("hubot/src/message").TextMessage;

describe("Hubot-twss Functionality", function() {
  var robot;
  var user;
  var adapter;

  beforeEach(function(done) {
      // create new robot, without http, using the mock adapter
      robot = new Robot(null, "mock-adapter", false, "TestBot");

      robot.adapter.on("connected", function() { 
          // only load scripts we absolutely need, like auth.coffee
          process.env.HUBOT_AUTH_ADMIN = "1";
          robot.loadFile(
              path.resolve(
                  path.join("node_modules/hubot/src/scripts")
              ),
              "auth.coffee"
          );

          // load the module under test and configure it for the
          // robot.  This is in place of external-scripts
          require("../index")(robot);

          // create a user
          user = robot.brain.userForId("1", {
              name: "mocha",
              room: "#mocha"
          });

          // create a second user if we want to observer user to
          // user interaction
          user2 = robot.brain.userForId("2", {
              name: "chai",
              room: "#mocha"
          });

          adapter = robot.adapter;

          setTimeout(done, 250);
      });
      robot.run();
  });

  afterEach(function() {
      robot.shutdown();
  });

  describe("script abc123", function() { 
    /*
    * hubot script abc123
    */
    // Tell hubot script abc123
    //
    it("Nice weather we're having today", function(done) {
        var replied = false;

        // If it doesn't reply, we're good
      
        setTimeout(function() { 
          if (replied) { 
            done( new Error("replied with \""+replied+"\" when shouldn't have, no replace string") );
          }
          else {
            done(); 
          }
        }, 50);

        adapter.on("send", function(envelope, strings) {
           replied = strings[0];
        });

      // Send from first user
      adapter.receive(new TextMessage(user, "Nice weather we're having today"));
    });


    it("Can you make it harder?", function(done) {
      adapter.on("send", function(envelope, strings) {
        try { 
          expect(strings[0]).to.equal("twss");
          done();
        } catch(e) { 
          done(e);
        }
      });

      adapter.receive(new TextMessage(user, "Can you make it harder?"));
    });

    it("You're not going fast enough!", function(done) {
      adapter.on("send", function(envelope, strings) {
        try { 
          expect(strings[0]).to.equal("twss");
          done();
        } catch(e) { 
          done(e);
        }
      });

      adapter.receive(new TextMessage(user, "You're not going fast enough!"));
    });

  });
});
