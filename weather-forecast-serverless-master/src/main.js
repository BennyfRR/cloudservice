import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		open_weather_url: 'https://functions.yandexcloud.net/d4e4qc7t91k7efe0i0jo?',
		accu_weather_url: 'https://functions.yandexcloud.net/d4e8kl3q0hsmut0kkb8e?',
		cache_url: 'https://functions.yandexcloud.net/d4eicaahqoucb0mnd0qv?'
	}
});

export default app;
