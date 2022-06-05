import { vegetables } from './index.js';

const map = {};
for (const item of vegetables) {
	const key = item.name;
	map[key] = item;
}

export const get = async function (event) {
	const { name } = event.params;
	await new Promise((resolve) => setTimeout(resolve, 500)); // original 3000
	if (map[name]) {
		return {
			body: map[name]
		};
	} else {
		return {
			status: 404,
			body: {}
		};
	}
};
