const { parallel, series } = require("gulp");

const server = require("@masatomakino/gulptask-dev-server").generateTask("./docs/demo", {});
const { bundleDemo, watchDemo } = require("@masatomakino/gulptask-demo-page").generateTasks({
  externalScripts: [],
});

const watchTasks = async () => {
  watchDemo();
};

exports.start_dev = series(watchTasks, server);
const bundle = parallel(bundleDemo);
exports.build = series(bundle);
