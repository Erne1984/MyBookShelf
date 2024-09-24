import { useEffect, useState } from "react";
import Book from "../interfaces/Book";

export default function getAuthorWorks() {
    const [data, setData] = useState<Book>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {

            } catch (err) {

            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [data, error])
}