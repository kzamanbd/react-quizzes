import { Link } from 'react-router-dom';

type VideoCardProps = {
	video: {
		title: string;
		youtubeID: string;
		noq: number;
	};
};

export default function VideoCard({ video }: VideoCardProps) {
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
