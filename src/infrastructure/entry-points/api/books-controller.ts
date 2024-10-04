import {Mapping, Get} from "@tsclean/core";

@Mapping('api/v1/books')
export class BooksController {
    constructor() {
    }

    @Get()
    async getBooks(): Promise<any> {
        return 'Listing all books'
    }
}
