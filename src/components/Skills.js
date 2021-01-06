import React from 'react';
import AOS from 'aos';
AOS.init();

const Skills = ({ data }) => {
	return (
		<div className="portfolio-block skills " style={{ background: '#fff', padding: '40px 10px 10px 10px' }}>
			<div data-aos="zoom-in-down" data-aos-duration="1500" className="container">
				<h2 className="text-center" style={{ marginBottom: '4vh', fontSize: '2.2rem' }}>
					Special Skills
				</h2>
				<div className="m-0 pt-3 row">
					<div data-aos="fade-down"
						data-aos-offset="170"
						data-aos-easing="ease-in-sine" 
						className="col-md-4"
					>
						<div className="card special-skill-item border-0">
							<div className="p-0 card-header bg-transparent border-0">
								<i className="icon fa-desktop" />
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
					<div data-aos="fade-down"
						data-aos-offset="170"
						data-aos-easing="ease-in-sine" 
					 	className="col-md-4"
					 >
						<div className="card special-skill-item border-0">
							<div className="p-0 card-header bg-transparent border-0">
								<i className="icon fa-paint-brush" />
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
					<div data-aos="fade-down"
						data-aos-offset="170"
						data-aos-easing="ease-in-sine" 
						className="col-md-4" 
						style={{ paddingLeft: 0, paddingRight: 0 }}
					>
						<div className="card special-skill-item border-0">
							<div className="p-0 card-header bg-transparent border-0">
								<i className="icon fa-pie-chart" />
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
