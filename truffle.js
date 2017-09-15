module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
	  net42: {
		  host: "localhost",
		  port: 8545,
		  network_id: "42" // Match any network id
	  }
  }
};
