import React from 'react';
import { Link } from 'react-router-dom';

export default function VideoCard({ video }) {
	const { title, youtubeID, noq } = video;
	return (
		<Link to="quiz.html">
			<div className="video">
				<img src={`https://img.youtube.com/vi/${youtubeID}/hqdefault.jpg`} alt="" />
				<p>{title}</p>
				<div className="qmeta">
					<p>{noq} Questions</p>
					<p>Score : Not taken yet</p>
				</div>
			</div>
		</Link>
	);
}
