// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Aurora Studio 文档中心',
			social: {
				github: 'https://github.com/Aurora-Studio-Dev/AuroraStudioWebsite-Docs',
			},
			sidebar: [
				{
					label: 'Stars Api',
					// autogenerate: { directory: 'starsapi' },
					items: [
						{ label: '引言', 
					      translations: {
						    'en': 'Guide',
						  },
					      slug: 'starsapi/guides' },
						{ label: '调用 Api',translations: {
							'en': 'Use Api',
						  },
						  items: [
							    { label: '每日一言', 
							      translations: {
									'en': 'Daily Sentence',
								  },
								  slug: 'starsapi/use/daily-sentence' },
						    ], 
					    },
					],
				},
			],
			// 为此网站设置英语为默认语言。
			defaultLocale: 'root',
			locales: {
			  // 英文文档在 `src/content/docs/en/` 中。
			  en: {
				label: 'English',
				lang: 'en',
			  },
			  root: {
				label: '简体中文',
				lang: 'zh-CN',
			  },
			},
		}),
	],
});
