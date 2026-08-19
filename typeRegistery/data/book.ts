export class Book {
	someFun(): number {
		return 17;
	}
}

declare module '../lib/registry' {
	export interface DataTypeRegistry {
		book: Book;
	}
}
