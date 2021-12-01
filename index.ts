function bootstrap() {
  // Setup
  (window as any).expect = chai.expect;
  (window as any).should = chai.should();
  mocha.setup("bdd");
  mocha.checkLeaks();

  // Load tests
  require("./adventofcode");

  // Run tests
  mocha.run();
}

window.bootstrap = bootstrap;