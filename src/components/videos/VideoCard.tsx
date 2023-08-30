import { Video } from '@/types';
import { Link } from 'react-router-dom';

type VideoProps = {
	video: Video;
};

export default function VideoCard({ video }: VideoProps) {
	const { title, youtubeID, noq } = video;
	return (
		<Link to={`/quiz/${youtubeID}`}>
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
