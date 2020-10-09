import React from 'react';

const Skills = () => {
	return (
		<div className="portfolio-block skills" style={{ padding: '60px 50px 10px 50px' }}>
			<div className="container">
				<h2 className="text-center" style={{ marginBottom: '4vh', fontSize: '2.2rem' }}>
					Special Skills
				</h2>
				<div className="row" style={{ marginTop: 0 }}>
					<div className="col-md-4">
						<div className="card special-skill-item border-0">
							<div className="card-header bg-transparent border-0">
								<i className="icon ion-android-desktop" />
							</div>
							<div className="card-body">
								<h4 className="card-title">Web &amp; Mobile Development</h4>
								<p className="card-text">
									I started learning Computer Science as&nbsp;a part of my degree program and after I
									start learning Web and Mobile Developing.
								</p>
								<h5 className="text-center card-title">Technologies</h5>
								<p className="card-text" style={{ color: '#af3ecc' }}>
									HTML, CSS, JS, jQuery, Bootstrap, ReactJS, React-Native, Angular, NodeJS, Django, Express, Python, Java, PHP, MySQL, MongoDB, Android Studio, Wordpress
									
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="card special-skill-item border-0">
							<div className="card-header bg-transparent border-0">
								<i className="icon ion-paintbrush" />
							</div>
							<div className="card-body">
								<h4 className="card-title">Graphic Design</h4>
								<p className="card-text">
									Turning point of my life is learning graphic designing. Its the first thing I
									involved in the field of technology.
								</p>
								<h5 className="text-center card-title">Technologies</h5>
								<p className="card-text" style={{ color: '#af3ecc' }}>
									Adobe Illustrator
									<br />
									Adobe Photoshop
									<br />
									Adobe Lightroom
									<br />
									Adobe Premiere Pro
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-4" style={{ paddingLeft: 0, paddingRight: 0 }}>
						<div className="card special-skill-item border-0">
							<div className="card-header bg-transparent border-0">
								<i className="icon ion-pie-graph" />
							</div>
							<div className="card-body">
								<h4 className="card-title" style={{ fontSize: '1.48rem' }}>
									Statistics &amp; Operations Research
								</h4>
								<p className="card-text">
									In 2019 I started 4 year B.Sc. Honors Degree Program in Statistics and Operations Research. I studied Operations Research, Statistics and Computer Science as main subjects.
								</p>
								<h5 className="text-center card-title">Technologies</h5>
								<p className="card-text" style={{ color: '#af3ecc' }}>
									R, Rstudio
									<br />
									Minitab, Matlab
									<br />
									Lingo,&nbsp;Excel&nbsp;
									<br />
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
