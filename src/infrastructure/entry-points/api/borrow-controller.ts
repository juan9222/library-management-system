import {Mapping, Post, Body} from "@tsclean/core";

@Mapping('api/v1/borrow')
export class BorrowController {
    constructor() {
    }

    @Post()
    async borrowBook(@Body() borrowRequest: any): Promise<any> {
        return 'Book borrowed successfully'; 
    }
}