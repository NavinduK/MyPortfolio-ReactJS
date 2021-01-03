import React from 'react';

const Skills = ({data}) => {
	return (
		<div className="portfolio-block skills" style={{background:'#fff', padding: '60px 50px 10px 50px' }}>
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
									{data?.['web-desc']}
								</p>
								<h5 className="text-center card-title">Technologies</h5>
								<p className="card-text" style={{ color: '#af3ecc' }}>
									{data?.['web-techs']}
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
								{data?.['graphic-desc']}
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
								{data?.['or-desc']}

								</p>
								<h5 className="text-center card-title">Technologies</h5>
								<p className="card-text" style={{ color: '#af3ecc' }}>
									R, Rstudio
									<br />
									Minitab
									<br />
									Lingo, Excel
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
