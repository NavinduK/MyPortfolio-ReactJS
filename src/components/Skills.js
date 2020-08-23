import React from 'react';

const Skills = () => {
	return (
		<div className="portfolio-block skills" style={{ padding: '50px' }}>
			<div className="container">
				<h2 className="text-center" style={{ marginBottom: '4vh', fontSize: '2.5rem' }}>
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
									HTML, CSS, JS, jQuery, Bootstrap
									<br />
									ReactJs, React-Native, Angular
									<br />
									NodeJS, PHP, Python, Java, Wordpress
									<br />
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
									After my Advance Level Examination I started 4 year B.Sc. Honors Degree Program in
									Statistics and Operations Research.
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
