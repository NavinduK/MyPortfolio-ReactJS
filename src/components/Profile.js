import React from 'react';
import introimg from './assets/img/intro-img.png';
import '../components/assets/css/profile.css';

const Profile = () => {
	return (
		<div className="profile-page" style={{ minHeight: '100vh' }}>
			<div className="page-header header-filter" data-parallax="true"/>
			<div className="container">
				<div className="main main-raised">
					<div className="profile-content">
						<div>
							<div className="col-md-6 ml-auto mr-auto">
								<div className="profile">
									<div className="avatar">
										<img
											src={introimg}
											alt="Circle Image"
											className="img-raised rounded-circle img-fluid"
										/>
									</div>
									<div className="name">
										<h3 className="title">Navindu Kavishka Rajamanthree</h3>
										<h6>Designer</h6>
										<a href="#pablo" className="btn btn-just-icon btn-link btn-dribbble">
											<i className="fa fa-dribbble" />
										</a>
										<a href="#pablo" className="btn btn-just-icon btn-link btn-twitter">
											<i className="fa fa-twitter" />
										</a>
										<a href="#pablo" className="btn btn-just-icon btn-link btn-pinterest">
											<i className="fa fa-pinterest" />
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="description text-center">
							<p>
								An artist of considerable range, Chet Faker — the name taken by Melbourne-raised,
								Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving
								it a warm, intimate feel with a solid groove structure.
							</p>
						</div>
						<div className="description text-center">
							<p>
								An artist of considerable range, Chet Faker — the name taken by Melbourne-raised,
								Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving
								it a warm, intimate feel with a solid groove structure.
							</p>
						</div>
						<div className="description text-center">
							<p>
								An artist of considerable range, Chet Faker — the name taken by Melbourne-raised,
								Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving
								it a warm, intimate feel with a solid groove structure.
							</p>
						</div>
						<div className="description text-center">
							<p>
								An artist of considerable range, Chet Faker — the name taken by Melbourne-raised,
								Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving
								it a warm, intimate feel with a solid groove structure.
							</p>
						</div>
						<div className="description text-center">
							<p>
								An artist of considerable range, Chet Faker — the name taken by Melbourne-raised,
								Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving
								it a warm, intimate feel with a solid groove structure.
							</p>
						</div>
						<div>Navindu</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
