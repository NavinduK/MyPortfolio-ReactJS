import React from 'react';
import logo from './assets/img/logo.png';

const Navigation = () => {
	return (
		<div>
			<nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-white portfolio-navbar gradient">
				<div className="container">
					<a className="navbar-brand d-xl-flex logo" href="index.html" style={{ display: 'flex' }}>
						<img className="rubberBand animated" alt="Navindu Kavishka Logo" src={logo} height="50px" />
						<h5 className="d-xl-flex logo-text" style={{ marginLeft: '1rem', marginTop: '0.75rem' }}>
							Navindu Kavishka
						</h5>
					</a>
					<button data-toggle="collapse" className="navbar-toggler" data-target="#navbarNav">
						<span className="sr-only">Toggle navigation</span>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="nav navbar-nav ml-auto">
							<li className="nav-item" role="presentation">
								<a className="nav-link active" href="index.html">
									Home
								</a>
							</li>
							<li className="nav-item" role="presentation">
								<a className="nav-link" href="projects-grid-cards.html">
									Projects
								</a>
							</li>
							<li className="nav-item" role="presentation">
								<a className="nav-link" href="project-page.html">
									Project Page
								</a>
							</li>
							<li className="nav-item" role="presentation">
								<a className="nav-link" href="cv.html">
									CV
								</a>
							</li>
							<li className="nav-item" role="presentation">
								<a className="nav-link" href="contact.html">
									Contact
								</a>
							</li>
							<li className="nav-item" role="presentation">
								<a className="nav-link" href="hire-me.html">
									Hire me
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navigation;
