interface Human {
	see: null;
	walk: string;
	eat: {
		a: string;
		b: number;
		c: true;
	};
}

type something = Human['eat']['b'];

type somethingUnion = Human['eat' | 'walk'];
