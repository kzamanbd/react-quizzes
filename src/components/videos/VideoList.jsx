import { fetchVideos } from 'features/videos/videosSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import VideoCard from './VideoCard';

export default function VideoList() {
	const dispatch = useDispatch();
	const { videos, isLoading, error, isError } = useSelector((state) => state.videos);

	useEffect(() => {
		dispatch(fetchVideos({ page: 1 }));
	}, [dispatch]);

	// decide the content that will be rendered
	let content = null;
	// show loading if the videos are loading
	if (isLoading) content = <div>Loading...</div>;
	// show error if there is an error
	if (!isLoading && isError) content = <div>{error}</div>;
	// show the videos if the videos are loaded
	if (videos.length > 0 && !isLoading) {
		// map the videos to VideoCard component
		content = videos.map((video) => <VideoCard key={video._id} video={video} />);
	}
	// show no videos found if the videos are loaded but there are no videos
	if (videos.length === 0 && !isLoading && !isError) content = <div>No videos found!</div>;

	return <div className="videos">{content}</div>;
}
