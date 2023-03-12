import axios from 'utils/axios';

export const getVideos = async ({ page }) => {
	const { data } = await axios.get(`/api/videos?page=${page}`);
	return data;
};
