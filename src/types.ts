export type SiteConfig = {
	author: string;
	description: string;
	lang: string;
	ogLocale: string;
	showToc: boolean;
	webmentionUrl?: string;
	date: {
		locale: string | string[];
		options: Intl.DateTimeFormatOptions;
	};
};
