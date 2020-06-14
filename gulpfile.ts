const { parallel, series } = require("gulp");

const doc = require("gulptask-tsdoc").get();
const server = require("gulptask-dev-server").get("./docs/demo");
const { bundleDemo, watchDemo } = require("gulptask-demo-page").get({
  externalScripts: [],
});

const watchTasks = async () => {
  watchDemo();
};

exports.start_dev = series(watchTasks, server);
const bundle = parallel(bundleDemo, doc);
exports.build = series(bundle);
exports.build_clean = series(bundle);
