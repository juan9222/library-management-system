export type BookEntity = {
    // Attributes
}

export type AddBookParams = Omit<BookEntity, 'id'>
