import { useGetVideosQuery } from 'features/videos/videosApiSlice';
import { useState } from 'react';
import VideoCard from './VideoCard';

export default function VideoList() {
	const [page, setPage] = useState(1);
	const { data, isLoading, isError } = useGetVideosQuery(page, { keepPreviousData: true });

	// decide the content that will be rendered
	let content = null;
	// show loading if the videos are loading
	if (isLoading) content = <div>Loading...</div>;
	// show error if there is an error
	if (!isLoading && isError) content = <div>Error!</div>;
	// show the videos if the videos are loaded
	if (data?.videos?.length > 0 && !isLoading) {
		// map the videos to VideoCard component
		content = (
			<div className="videos">
				{data.videos.map((video) => (
					<VideoCard key={video._id} video={video} />
				))}
			</div>
		);
	}
	// show no videos found if the videos are loaded but there are no videos
	if (data?.videos?.length === 0 && !isLoading && !isError) content = <div>No videos found!</div>;

	return <div>{content}</div>;
}
