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
    _id: string,
    name: string;
    url: string;
}

export interface Publishers {
    name: string
}

export interface User {
    _id: string,
    username: string,
    email: string,
    imgUserUrl: string,
    lists: [],
    reviews: [],
    ratingsReference: [],
    creationDate: string,
    dateBirth: string | undefined,
    country: string | undefined,
    city: string | undefined,
    gender: string | undefined,
    aboutMe: string | undefined,
}

export default interface Book {
    _id: string, 
    bookDescri: string;
    reviews: [],
    ratings: [],
    scoresReferance: [],
    title: string;
    authors: Author[];
    identifiers: Identifiers;
    publishers: Publishers[];
    subjects: Subject[];
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