export interface ChildrenProps {
	children: React.ReactNode;
}

export interface Video {
	_id: string;
	title: string;
	youtubeID: string;
	noq: number;
	created_at: string;
	updated_at: string;
}
