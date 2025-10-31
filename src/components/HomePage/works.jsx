import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../../components/common/Card";
import football from "../../assets/news/football.png";
import tennis from "../../assets/news/club.png";
import sso from "../../assets/news/29.png";
import ssf from "../../assets/news/download (12).jpg";


import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Vi Støtter"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src={football}
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">FIUK Fodbold Klub</div>
							<div className="work-subtitle">
							Vi støtter lokale sportsaktiviteter
							</div>
						
						</div>

						<div className="work">
							<img
								src={tennis}
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Stjernen Tennis</div>
							<div className="work-subtitle">
								Sponsor af Stjernen Tennisklub
							</div>
						
						</div>
                        	<div className="work">
							<img
								src={sso}
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">SSO - Somalisk Student organisation</div>
							<div className="work-subtitle">
								De hjælper unge mennesker
							</div>
						
						</div>
                        	<div className="work">
							<img
								src={ssf}
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">SSF - Somalisk Sundheds forbund</div>
							<div className="work-subtitle">
								
De hjælper ældre mennesker
							</div>
						
						</div>
                        	
					</div>
				}
			/>
		</div>
	);
};

export default Works;
