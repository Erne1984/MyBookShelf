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
    _id: string;
    key: string;
    url: string;
    bio: string;
    name: string;
    personal_name: string;
    birth_date: string;
    death_date: string;
    imageUrl: string;
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
    realname: string,
    username: string,
    email: string,
    imgUserUrl: string,
    toReadList: [],
    readingList: [],
    readedList: [],
    lists: [],
    reviews: [],
    ratingsReference: [],
    friendsReference: [],
    followingUsersReference: [],
    followingAuthorsReference: [],
    creationDate: string,
    dateBirth: string | undefined,
    country: string | undefined,
    city: string | undefined,
    gender: string | undefined,
    aboutMe: string | undefined,
    isModerator: boolean| undefined,
}

export interface Rating {
    _id: string, 
    userId: string,
    bookId: string,
    reviewId: string | undefined,
    score: number,
    createdAt: string
}

export interface Review {
    _id: string, 
    userId: string,
    bookId: string,
    ratingId: string,
    content: string, 
    createdAt: string,
}

export interface FormattedReview {
    _id: string, 
    reviewId: string;
    userId: string | null;
    username: string;
    imgUserUrl: string | null;
    ratingId: string | null;
    score: number;
    content: string;
    createdAt: string;
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

export interface List {
    _id: string;
    userId: string;
    name: string;
    books: string[];
    public: boolean;
    createdAt: string;
}