const { default: mongoose } = require("mongoose");

async function getDbConnection(dbUri) {
  return mongoose.connect(dbUri, {
    useNewUrlParser: true, useUnifiedTopology: true
  });
}

module.exports = getDbConnection;