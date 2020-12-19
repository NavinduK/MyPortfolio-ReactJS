import React from 'react';

const Slider = ({data}) => {
	return (
		<div className="website ">
			<div className="parallax">
				<div className="gradientParallax">
					<div className="container">
						<div className="block-height-top">
							<h2
								className="text-white"
								style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '5vh' }}
							>
								Web & Mobile Development
							</h2>
							<div className="d-flex justify-content-center row align-items-center">
								<div className="col-md-12 col-lg-5 text">
									<p className="text-white">
									In the time of freelancing through Graphic Designing, it motivated me to learn Web Development, then I successfully learned WordPress as a beginner and continued learning until Server-side Development using various frameworks, environments, platforms, and languages. I followed many online courses and tutorials to learn web and also mobile developments A to Z. After entered the University, I was able to learn Computer Science as a subject, and there I learned different programming concepts and techniques. Now I am a developer who can serve a client to accomplish their web and mobile developments.
									</p>
								</div>
								<div className="col-md-12 col-lg-6">
									<div className="portfolio-laptop-mockup">
										<div className="screen">
											<div
												className="screen-content"
												style={{ backgroundImage: 'url("assets/img/tech/image6.png")' }}
											>
												<div
													id="carouselExampleIndicators"
													className="carousel slide"
													data-ride="carousel"
													data-interval="2000"
												>
													<ol className="carousel-indicators">
														<li
															data-target="#carouselExampleIndicators"
															data-slide-to={0}
															className="active"
														/>
														<li
															data-target="#carouselExampleIndicators"
															data-slide-to={1}
														/>
														<li
															data-target="#carouselExampleIndicators"
															data-slide-to={2}
														/>
													</ol>
													<div className="carousel-inner">
														<div className="carousel-item active">
															<img
																className="d-block w-100"
																alt="First slide"
																src={data[1]?.thumb}
															/>
														</div>
														<div className="carousel-item">
															<img
																className="d-block w-100"
																alt="Second slide"
																src={data[2]?.thumb}
															/>
														</div>
														<div className="carousel-item">
															<img
																className="d-block w-100"
																alt="Third slide"
																src={data[0]?.thumb}
															/>
														</div>
													</div>
													<a
														className="carousel-control-prev"
														href="#carouselExampleIndicators"
														role="button"
														data-slide="prev"
													>
														<span
															className="carousel-control-prev-icon"
															aria-hidden="true"
														/>
														<span className="sr-only">Previous</span>
													</a>
													<a
														className="carousel-control-next"
														href="#carouselExampleIndicators"
														role="button"
														data-slide="next"
													>
														<span
															className="carousel-control-next-icon"
															aria-hidden="true"
														/>
														<span className="sr-only">Next</span>
													</a>
												</div>
											</div>
										</div>
										<div className="keyboard" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Slider;
