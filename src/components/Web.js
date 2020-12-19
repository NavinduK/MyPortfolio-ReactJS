import React from 'react';
import '../components/assets/css/card.css';

const Web = ({data}) => {
	return (
		<div style={{ minHeight: '100vh'}}>
			<div className="container content">
				<h2 className="text-center" style={{ marginBottom: '4vh', marginTop: '105px', fontSize: '2rem' }}>
					Web Design
				</h2>
				<div className="web">
					<div>
						{
							data?.map((item) => (
								<div key={item.title} className="web-card">
									<div className="web-card__img">
										<img src={item.thumb} alt="Web Project" />
									</div>
									<div className="web-card__info">
										<div className="web-card__date">
											<span>{item.dev}</span>
										</div>
										<h1 className="web-card__title">{item.title}</h1>
										<p className="web-card__text">
											{item.desc} 
										</p>
										<div className="button-area">
											<a
												href={item.link}
												className="web-card__cta"
												target="_blank"
												rel="noopener noreferrer"
											>
												Live Preview
											</a>
											<a 
												href={item.repo} 
												className="web-card__cta"
												target="_blank"
												rel="noopener noreferrer"
											>
												Github Repo
											</a>
										</div>
									</div>
								</div>
							))
						}
						<div className="bottom-margin"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Web;
