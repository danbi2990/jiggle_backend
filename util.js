module.exports = function requireUncached(module) {
  delete require.cache[require.resolve(module)];
  return require(module);
};

module.exports = function runScript(script) {
  script = "./mongoose-scripts/" + script;
  return new Promise(function(resolve, reject) {
    require(script);
    delete require.cache[require.resolve(script)];
    resolve();
  });
};
