import React from 'react';

const Slider = () => {
	return (
		<div
			className="website gradient2 portfolio-block"
			style={{ marginTop: '-5px', background: 'linear-gradient(60deg,#7f70f5,#0ea0ff)' }}
		>
			<div className="container">
				<div className="row align-items-center block-height-top">
					<div className="col-md-12 col-lg-5 offset-lg-1 text">
						<h3 className="text-white">Website Project</h3>
						<p className="text-white">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit ultricies,
							feugiat est sed, efr nunc, vivamus vel accumsan dui. Quisque ac dolor cursus, volutpat nisl
							vel, porttitor eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit ultricies,
							feugiat est sed, efr nunc, vivamus vel accumsan dui. Quisque ac dolor cursus, volutpat nisl
							vel, porttitor eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit ultricies,
							feugiat est sed, efr nunc, vivamus vel accumsan dui. Quisque ac dolor cursus, volutpat nisl
							vel, porttitor eros.
						</p>
					</div>
					<div className="col-md-12 col-lg-5">
						<div className="portfolio-laptop-mockup">
							<div className="screen">
								<div
									className="screen-content"
									style={{ backgroundImage: 'url("assets/img/tech/image6.png")' }}
								/>
							</div>
							<div className="keyboard" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Slider;
