import React from 'react';
import { Link } from 'react-router-dom';

const Slider = ({ wdata, sdata }) => {
	return (
		<div className="website ">
			<div className="parallax">
				<div className="gradientParallax">
					<div className="container">
						<div className="block-height-top">
							<h2
								className="text-white"
								style={{ fontSize: '2rem', textAlign: 'center'}}
							>
								Web & Mobile Development
							</h2>
							<div className="d-flex justify-content-center row align-items-center">
								<div className="col-md-12 col-lg-5 text">
									<p className="mb-0 text-white">
										{sdata}
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
																src={wdata[1]?.thumb}
															/>
														</div>
														<div className="carousel-item">
															<img
																className="d-block w-100"
																alt="Second slide"
																src={wdata[2]?.thumb}
															/>
														</div>
														<div className="carousel-item">
															<img
																className="d-block w-100"
																alt="Third slide"
																src={wdata[0]?.thumb}
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
							<div className="text-center seemoreslider">
								<Link style={{ color: '#fff', fontWeight:'600' }} to="/web-design">See More</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Slider;
