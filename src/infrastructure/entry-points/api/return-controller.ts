import {Mapping, Post, Body} from "@tsclean/core";

@Mapping('api/v1/return')
export class ReturnController {
    constructor() {
    }

    @Post()
    async returnBook(@Body() returnRequest: any): Promise<any> {
        return 'Book returned successfully';
    }
}
