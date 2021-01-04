import React from 'react';

const Footer = ({links,contacts}) => {
	return (
		<div>
			<footer className="footer text-center">
				<div className="container">
					<div className="row">
						<div className="col-md-4 mb-lg-0" style={{}}>
							<div className="d-flex justify-content-center" style={{ marginBottom: '-10px', fontSize: '15px'}}>
								<i className="fa fa-phone" style={{ fontSize: '15px', marginRight: '15px' }}></i>
								<p>{contacts?.phone}</p>
							</div>
							<div className="d-flex justify-content-center" style={{ fontSize: '15px' }}>
								<i className="fa fa-envelope" style={{ fontSize: '15px', marginRight: '15px' }}></i>
								<p>{contacts?.emailPriv}</p>
							</div>
						</div>
						<div className="col-md-4 mb-lg-0">
							<p style={{marginBottom:'25px'}}> </p>
							<ul className="list-inline">
								<li className="list-inline-item">
									<a
										className="btn btn-outline-light btn-social text-center rounded-circle"
										role="button"
										target="_blank"
										rel="noopener noreferrer"
										href={links?.github}
									>
										<i className="fa fa-github"></i>
									</a>
								</li>
								<li className="list-inline-item">
									<a
										className="btn btn-outline-light btn-social text-center rounded-circle"
										role="button"
										target="_blank"
										rel="noopener noreferrer"
										href={links?.linkedin}
									>
										<i className="fa fa-linkedin"></i>
									</a>
								</li>
								<li className="list-inline-item">
									<a
										className="btn btn-outline-light btn-social text-center rounded-circle"
										role="button"
										target="_blank"
										rel="noopener noreferrer"
										href={links?.fb}
									>
										<i className="fa fa-facebook" />
									</a>
								</li>
								<li className="list-inline-item">
									<a
										className="btn btn-outline-light btn-social text-center rounded-circle"
										role="button"
										target="_blank"
										rel="noopener noreferrer"
										href={links?.twitter}
									>
										<i className="fa fa-twitter" />
									</a>
								</li>
								<li className="list-inline-item">
									<a
										className="btn btn-outline-light btn-social text-center rounded-circle"
										role="button"
										target="_blank"
										rel="noopener noreferrer"
										href={links?.instagram}
									>
										<i className="fa fa-instagram" />
									</a>
								</li>
							</ul>
						</div>
						<div className="col-md-4">
							<p className="lead mb-0" style={{ fontSize: '19px'}}>
								Web & Mobile Development <br/> Graphic Design
							</p>
						</div>
					</div>
					<hr style={{backgroundColor: 'white', opacity:0.5}}/>
					<div className="d-flex justify-content-center" style={{ marginBottom: '0px', fontSize: '15px'}}>
						<i className="fa fa-copyright" style={{ fontSize: '15px', marginRight:'5px'}}></i>
						<p>2021 Navindu, All Rights Reserved</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
