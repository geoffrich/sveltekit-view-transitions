// script to manually resize the fruit images

import fs from 'fs';
import sharp from 'sharp';

fs.readdir('./static/images', (err, files) => {
	for (const file of files) {
		console.log(file);

		sharp(`./static/images/${file}`)
			.resize(360)
			.jpeg({ quality: 75 })
			.toFile(`./static/images/opt/${file}`);
	}
});
