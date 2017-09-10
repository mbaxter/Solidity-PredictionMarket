require('babel-polyfill');
const React = require('react');
const ReactDom = require('react-dom');
const ReactRouter = require('react-router');
const Redux = require('redux');
const ReactRedux = require('react-redux');
const thunkMiddleware = require('redux-thunk').default;
const loggerMiddleware = require('redux-logger');

const Router = ReactRouter.Router;
const Provider = ReactRedux.Provider;
const Route = ReactRouter.Route;
const IndexRedirect = ReactRouter.IndexRedirect;
const IndexRoute = ReactRouter.IndexRoute;

const reducer = require('./reducer');
const App = require('./components/app');

const storeMiddleware = [];
storeMiddleware.push(thunkMiddleware);
storeMiddleware.push(loggerMiddleware());

let store = Redux.createStore(
	reducer,
	Redux.applyMiddleware(
		... storeMiddleware
	)
);

window.addEventListener('load', () => {
	ReactDom.render(
		<Provider store={store}>
			<Router history={Router.hashHistory}>
				<Route path = "/" component={App}>
				</Route>
				{/* Catch-all redirect */}
				<Route path="*" component={App}>
					<IndexRedirect to="/app" />
				</Route>
			</Router>
		</Provider>
		,window.document.getElementById('app'));
});