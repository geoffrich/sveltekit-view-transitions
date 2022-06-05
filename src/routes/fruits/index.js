const fruits = [
	{
		name: 'bananas',
		image: '/images/anastasia-eremina-VI2rIoZUrks-unsplash.jpg',
		amountPer: '100 grams',
		nutrition: {
			Calories: 89,
			'Total Fat': '0.3 g',
			Cholesterol: '0 mg',
			Sodium: '1 mg',
			Potassium: '358 mg',
			'Total Carbohydrate': '23 g',
			Protein: '1.1 g'
		}
	},
	{
		name: 'apples',
		image: '/images/tuqa-nabi-71JHj_t-kS0-unsplash.jpg',
		amountPer: '100 grams',
		nutrition: {
			Calories: 52,
			'Total Fat': '0.2 g',
			Cholesterol: '0 mg',
			Sodium: '1 mg',
			Potassium: '107 mg',
			'Total Carbohydrate': '14 g',
			Protein: '0.3 g'
		}
	},
	{
		name: 'strawberries',
		image: '/images/olga-kudriavtseva-CL26_lT3Ygg-unsplash.jpg',
		amountPer: '100 grams',
		nutrition: {
			Calories: 33,
			'Total Fat': '0.3 g',
			Cholesterol: '0 mg',
			Sodium: '1 mg',
			Potassium: '153 mg',
			'Total Carbohydrate': '8 g',
			Protein: '0.7 g'
		}
	},
	{
		name: 'grapes',
		image: '/images/gunter-hoffmann-LYaW8eq3mjs-unsplash.jpg',
		amountPer: '100 grams',
		nutrition: {
			Calories: 67,
			'Total Fat': '0.4 g',
			Cholesterol: '0 mg',
			Sodium: '2 mg',
			Potassium: '191 mg',
			'Total Carbohydrate': '17 g',
			Protein: '0.6 g'
		}
	},
	{
		name: 'oranges',
		image: '/images/mae-mu-9002s2VnOAY-unsplash.jpg',
		amountPer: '100 grams',
		nutrition: {
			Calories: 47,
			'Total Fat': '0.1 g',
			Cholesterol: '0 mg',
			Sodium: '0 mg',
			Potassium: '181 mg',
			'Total Carbohydrate': '12 g',
			Protein: '0.9 g'
		}
	},
	{
		name: 'watermelon',
		image: '/images/floh-maier-aFUHu9WNO3Q-unsplash.jpg',
		amountPer: '100 grams',
		nutrition: {
			Calories: 30,
			'Total Fat': '0.2 g',
			Cholesterol: '0 mg',
			Sodium: '1 mg',
			Potassium: '112 mg',
			'Total Carbohydrate': '8 g',
			Protein: '0.6 g'
		}
	},
	{
		name: 'blueberries',
		image: '/images/davies-designs-studio-34lgO8_OO-o-unsplash.jpg',
		amountPer: '100 grams',
		nutrition: {
			Calories: 57,
			'Total Fat': '0.3 g',
			Cholesterol: '0 mg',
			Sodium: '1 mg',
			Potassium: '77 mg',
			'Total Carbohydrate': '14 g',
			Protein: '0,7 g'
		}
	}
];

export const get = function () {
	return {
		body: {
			items: fruits
		}
	};
};

export { fruits };
