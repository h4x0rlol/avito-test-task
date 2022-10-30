export type ItemType = 'job' | 'story' | 'comment' | 'poll' | 'pollopt';

export interface Item {
	id: number;
	deleted?: boolean;
	type?: ItemType;
	by?: string;
	time?: number;
	text?: string;
	dead?: boolean;
	parent?: Item;
	poll?: Item;
	kids?: number[];
	url?: string;
	score?: number;
	title?: string;
	parts?: Item[];
	descendants?: number;
}
