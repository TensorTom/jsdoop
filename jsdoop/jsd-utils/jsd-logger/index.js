class JSDLogger {
  
  constructor() {
    this.errorLevel = 0;
    this.warnLevel = 1;
    this.infoLevel = 5;
    this.debugLevel = 10;

    this.verbosity = 10;
  }

  error(msg) {
    if (this.errorLevel <= this.verbosity) {
      console.error(msg);
    }
  }

  warn(msg) {
    if (this.warnLevel <= this.verbosity) {
      console.warn(msg);
    }
  }


  info(msg) {
    if (this.infoLevel <= this.verbosity) {
      console.info(msg);
    }
  }

  debug(msg) {
    if (this.debugLevel <= this.verbosity) { 
      console.debug(msg);
    }
  }

  log(msg, level) {
    if (level === undefined) level = this.infoLevel;
    console.log("level = " + level);
    if (level <= this.verbosity) {
      console.log(msg);
    }
  }
  
}

const logger = new JSDLogger();

module.exports.logger = logger;
