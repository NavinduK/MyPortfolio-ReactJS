import React from 'react';
import logo from './assets/img/logo.png';
import { Link } from 'react-router-dom';

const Navigation = () => {
	const [active,setActive] = React.useState(['active-item'])

	const toggleActive = (index) => {
		var temp = ['','','',''];
		temp[index] = 'active-item';
		setActive(temp);
	}

	return (
		<div>
			<nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-white portfolio-navbar gradient">
				<div className="container">
					<Link style={{ display: 'flex' }} className="navbar-brand d-xl-flex logo" to="/">
						<img className="rubberBand animated" alt="Navindu Kavishka Logo" src={logo} height="50px" />
						<h5 className="d-xl-flex logo-text" style={{ marginLeft: '1rem', marginTop: '0.75rem' }}>
							Navindu Kavishka
						</h5>
					</Link>
					<button data-toggle="collapse" className="navbar-toggler" data-target="#navbarNav">
						<span className="sr-only">Toggle navigation</span>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="nav navbar-nav ml-auto">
							<li className={`nav-item ${active[0]}`} id="Home" role="presentation">
								<Link
									onClick={()=>toggleActive(0)}
									className="nav-link" to="/">
									Home
								</Link>
							</li>
							<li className={`nav-item ${active[1]}`} id="Designs" role="presentation">
								<Link
									onClick={()=>toggleActive(1)}
									className="nav-link" to="/graphic-design">
									Designs
								</Link>
							</li>
							<li className={`nav-item ${active[2]}`} id="Dev" role="presentation">
								<Link
									onClick={()=>toggleActive(2)}
									className="nav-link" to="/web-design">
									Developments
								</Link>
							</li>
							<li className={`nav-item ${active[3]}`} id="Profile" role="presentation">
								<Link
									onClick={()=>toggleActive(3)}
									className="nav-link" to="/navindu-kavishka">
									Profile
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navigation;
