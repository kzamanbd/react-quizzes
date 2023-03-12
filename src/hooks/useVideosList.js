import { useEffect, useState } from 'react';
import axios from 'utils/axios';

export default function useVideoList(page) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [videos, setVideos] = useState([]);
	const [hasMore, setHasMore] = useState(true);

	useEffect(() => {
		async function fetchVideos() {
			try {
				setError(false);
				setLoading(true);
				// request firebase database
				const { data } = await axios.get(`/api/videos?page=${page}`);
				setLoading(false);
				if (data.videos.length) {
					setVideos((prevVideos) => {
						return [...prevVideos, ...data.videos];
					});
				} else {
					setHasMore(false);
				}
			} catch (err) {
				console.log(err);
				setLoading(false);
				setError(true);
			}
		}

		fetchVideos();
	}, [page]);

	return {
		loading,
		error,
		videos,
		hasMore
	};
}
