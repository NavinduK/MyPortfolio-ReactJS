import React from 'react';
import logo from './assets/img/logo.png';
import { NavLink,Link } from 'react-router-dom';

const Navigation = () => {

	return (
		<div>
			<nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-white portfolio-navbar gradient4">
				<div className="container">
					<Link style={{ display: 'flex' }} className="justify-content-center align-content-center navbar-brand d-xl-flex logo" to="/">
						<img className="rubberBand animated" alt="Navindu Kavishka Logo" src={logo} height="50px" />
						<h5 className="mt-auto mb-auto d-xl-flex logo-text" style={{ marginLeft: '1rem' }}>
							Navindu Kavishka
						</h5>
					</Link>
					<button data-toggle="collapse" className="navbar-toggler" data-target="#navbarNav">
						<span className="sr-only">Toggle navigation</span>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="nav navbar-nav ml-auto">
							<li className={`nav-item`} id="Home" role="presentation">
								<NavLink
									exact
									activeClassName='active-item'
									className="nav-NavLink" to="/">
									Home
								</NavLink>
							</li>
							<li className={`nav-item`} id="Designs" role="presentation">
								<NavLink
									activeClassName='active-item'
									className="nav-NavLink" to="/graphic-design">
									Designs
								</NavLink>
							</li>
							<li className={`nav-item`} id="Dev" role="presentation">
								<NavLink
									activeClassName='active-item'
									className="nav-NavLink" to="/web-design">
									Developments
								</NavLink>
							</li>
							<li className={`nav-item`} id="Profile" role="presentation">
								<NavLink
									activeClassName='active-item'
									className="nav-NavLink" to="/navindu-kavishka">
									Profile
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navigation;
