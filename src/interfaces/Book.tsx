interface Author {
    url: string;
    name: string;
}

interface Identifiers {
    isbn_10: string[];
    isbn_13?: string[];
    openlibrary?: string[];
    google?: string[];
    goodreads?: string[];
    oclc?: string[];
}

interface Publisher {
    name: string;
}

interface Cover {
    small: string;
    medium: string;
    large: string;
}

export default interface Book {
    url: string;
    key: string;
    title: string;
    authors: Author[];
    identifiers: Identifiers;
    publishers: Publisher[];
    publish_date?: string;
    cover?: Cover;
    number_of_pages?: number;
    publish_places?: { name: string }[];
}