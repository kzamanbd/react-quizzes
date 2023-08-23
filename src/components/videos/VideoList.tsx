import { useGetVideosQuery } from '@/features/videos/videosApiSlice';
import VideoCard from './VideoCard';

export default function VideoList() {
	const { data, isLoading, isError } = useGetVideosQuery(1);

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
				{data.videos.map((video: any) => (
					<VideoCard key={video._id} video={video} />
				))}
			</div>
		);
	}
	// show no videos found if the videos are loaded but there are no videos
	if (data?.videos?.length === 0 && !isLoading && !isError) content = <div>No videos found!</div>;

	return <div>{content}</div>;
}
