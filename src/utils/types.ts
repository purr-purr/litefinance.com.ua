export interface INavigationList {
	title: string;
	path: string;
	isActive: boolean;
}

export interface IDocumentsList {
	title: string;
	link: string;
}

export interface IDocumentsListGroup {
	groupTitle: string;
	list: IDocumentsList[];
}
