import { useEffect, useState } from "react";
import Book from "../interfaces/Book";

// TO IMPLEMENTING YET

export default function searchQuery() {
    const [data, setData] = useState<Book[] | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    function fetchData() {
        useEffect(() => {
            try {

            } catch (err) {

            } finally {

            }
        }, [data])
    }

}