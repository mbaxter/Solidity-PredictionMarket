const simple = require('./simple');
module.exports = function isOwner(state) {
   const owner = simple.getPredictionMarketOwner(state);
   const activeAccount = simple.getActiveAccount(state);
   return owner === activeAccount;
};