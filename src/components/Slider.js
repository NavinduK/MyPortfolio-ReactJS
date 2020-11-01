import React from 'react';
import img1 from './assets/img/desk.jpg';
import img2 from './assets/img/building.jpg';
import img3 from './assets/img/loft.jpg';

const Slider = () => {
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
								Web Development
							</h2>
							<div className="d-flex justify-content-center row align-items-center">
								<div className="col-md-12 col-lg-5 text">
									<p className="text-white">
										In the time of freelancing through Graphic Designing, it motivated me to learn
										Web Development. I successfully learned WordPress as a beginner and continued
										until Server-side Development through many programming languages, frameworks and platforms. I followed many online courses and tutorials to
										learn web developing A to Z. After entered the University, I was able to learn
										Computer Science as a subject, and there I learned programming languages and the
										skills of programming. As the best chance of learning web development, I was
										able to select for "Random Software Limited (RSL) Undergraduate Programme 2020"
										and there I learned about Web Development deeply than I learned ago.
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
																src={img1}
																alt="First slide"
															/>
														</div>
														<div className="carousel-item">
															<img
																className="d-block w-100"
																src={img2}
																alt="Second slide"
															/>
														</div>
														<div className="carousel-item">
															<img
																className="d-block w-100"
																src={img3}
																alt="Third slide"
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
