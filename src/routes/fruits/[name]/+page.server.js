import fruits from '$lib/fruits';
import { error } from '@sveltejs/kit';

const map = {};
for (const item of fruits) {
	const key = item.name;
	map[key] = item;
}

export const load = function (req) {
	const { name } = req.params;
	if (map[name]) {
		return map[name];
	} else {
		throw error(404);
	}
};
