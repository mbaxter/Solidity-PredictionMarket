require('babel-polyfill');
const React = require('react');
const ReactDom = require('react-dom');
const ReactRouter = require('react-router');
const Redux = require('redux');
const ReactRedux = require('react-redux');
const thunkMiddleware = require('redux-thunk').default;
const loggerMiddleware = require('redux-logger');
const promiseMiddleware = require('redux-promise');

const Router = ReactRouter.Router;
const Provider = ReactRedux.Provider;
const Route = ReactRouter.Route;
const IndexRedirect = ReactRouter.IndexRedirect;
const IndexRoute = ReactRouter.IndexRoute;

const reducer = require('./reducer');
const App = require('./components/app');
const AccountPage = require('./components/account-page');
const AdminPage = require('./components/admin-page');
const QuestionsPage = require('./components/questions-page');
const selectors = require('./selectors');

const storeMiddleware = [];
storeMiddleware.push(thunkMiddleware);
storeMiddleware.push(promiseMiddleware);
// storeMiddleware.push(loggerMiddleware());

let store = Redux.createStore(
	reducer,
	Redux.applyMiddleware(
		... storeMiddleware
	)
);

const requireAdmin = (nextState, replace) => {
	const state = store.getState();
	if (!selectors.simple.getPredictionMarketOwner(state) || !selectors.isOwner(state)) {
		replace('/account');
	}
};

window.addEventListener('load', () => {
	ReactDom.render(
		<Provider store={store}>
			<Router history={Router.hashHistory}>
				<Route component={App}>
					{/*<IndexRedirect to="account" />*/}
					<Route path="account" component={AccountPage}/>
					<Route path="admin" component={AdminPage} onEnter={requireAdmin}/>
					<Route path="questions" component={QuestionsPage}/>
				</Route>
				{/* Catch-all redirect */}
				<Route path="*" component={App}>
					<IndexRedirect to="/account" />
				</Route>
			</Router>
		</Provider>
		,window.document.getElementById('app'));
});