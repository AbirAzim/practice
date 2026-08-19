export class Magazine {
	someFun(): string {
		return '17';
	}
}

declare module '../lib/registry' {
	export interface DataTypeRegistry {
		magazine: Magazine;
	}
}
