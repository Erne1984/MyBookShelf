interface Identifiers {
    isbn_10: string[];
    isbn_13: string[];
    openlibrary?: string[];
    google?: string[];
    goodreads?: string[];
    oclc?: string[];
}

interface Cover {
    small: string;
    medium: string;
    large: string;
}

export interface Author {
    key: string;
    url: string;
    bio: string;
    name: string;
    personal_name: string;
    birth_date: string;
    death_date: string;
    photo: string;
    followers: string[];
}

export interface Edition {
    coverUrl: string,
    title: string
}

export interface Subject {
    name: string;
    url: string;
}

export default interface Book {
    bookDescri: string;
    reviews: [],
    ratings: [],
    scoresReferance: [],
    title: string;
    authors: Author[];
    identifiers: Identifiers;
    publishers: string[];
    subjects: string[];
    publish_date: string;
    cover?: Cover;
    number_of_pages?: number;
    publish_places?: { name: string }[];
    format: string | undefined;
    language?: string | undefined;
    score: number;
    editions?: [];
    authorImg: string;
    authorBio: string;
}