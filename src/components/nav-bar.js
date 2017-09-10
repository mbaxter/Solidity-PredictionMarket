const NavBarLink = require('./nav-bar-link');
require('./nav-bar.css');

const NavBar = ({ location }) => {
	return (
		<div>
		<nav className="navbar navbar-dark bg-dark fixed-top navbar-expand-lg">
			<a className="navbar-brand" href="#">Prediction Market</a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarText">
				<ul className="navbar-nav">
					<NavBarLink to="/account" label="Account" location={location} />
				</ul>
			</div>
		</nav>
			<div className="navbar-spacer"></div>
		</div>
	);
};

module.exports = NavBar;