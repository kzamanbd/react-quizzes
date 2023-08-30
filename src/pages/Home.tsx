import VideoList from '@/components/videos/VideoList';
import quizData from '@/data.json';

export default function Home() {
	console.log(quizData.quiz);
	return (
		<main className="main">
			<div className="container">
				<VideoList />
			</div>
		</main>
	);
}
