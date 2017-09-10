const ReactRouter = require('react-router');
const Link = ReactRouter.Link;

const NavBarLink = ({ to, location, label }) => {
	const isActive = location === to || location.indexOf(`${to}/`) === 0;
	return (
		<li className={"nav-item " + (isActive ? 'active' : '')}>
			<Link to="account" className="nav-link">{label}</Link>
		</li>
	);
};

module.exports = NavBarLink;