const { reconDB } = require('reconlx');

const dbb = new reconDB({
    uri: 'MONGO DB URL'
})

module.exports = dbb;
