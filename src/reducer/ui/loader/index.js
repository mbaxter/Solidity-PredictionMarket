const Action = require('../../../constants/action-type');

const loader = (state = { requests:0 }, action) => {
   	switch(action.type) {
	    case Action.START_LOADING:
		    return {
			    ... state,
			    requests: state.requests + 1
		    };
	    case Action.FINISH_LOADING:
		    return {
			    ... state,
			    requests: state.requests - 1
		    };
	    default:
	    	return state;
    }
};

module.exports = loader;