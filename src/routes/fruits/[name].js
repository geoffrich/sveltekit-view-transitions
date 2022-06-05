import { fruits } from './index.js';

const map = {};
for (const item of fruits) {
	const key = item.name;
	map[key] = item;
}

export const get = function (req) {
	const { name } = req.params;
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
