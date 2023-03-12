import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos } from '../../features/videos/videosSlice';
import VideoCard from './VideoCard';

export default function VideoList() {
	const dispatch = useDispatch();
	const { videos, isLoading, error, isError, hasMore } = useSelector((state) => state.videos);

	const [page, setPage] = useState(1);

	const fetchData = () => setPage((prevPage) => prevPage + 1);

	useEffect(() => {
		dispatch(fetchVideos({ page }));
	}, [dispatch, page]);

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

	return (
		<InfiniteScroll next={fetchData} dataLength={videos.length} hasMore={hasMore}>
			<div className="videos">{content}</div>
		</InfiniteScroll>
	);
}
