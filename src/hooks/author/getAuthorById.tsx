import { useEffect, useState } from 'react';
import { Author } from '../../interfaces/Book';

interface UseGetAuthorByIdResult {
  author: Author | null;
  loading: boolean;
  error: string | null;
}

export default function useGetAuthorById(authorId: string): UseGetAuthorByIdResult {
  const [author, setAuthor] = useState<Author | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!authorId) return;

    const fetchAuthor = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch(`http://localhost:8080/findAuthorById?authorId=${authorId}`);
        
        if (!response.ok) {
          throw new Error('Erro ao buscar o autor');
        }

        const data = await response.json();
        setAuthor(data);
      } catch (err: any) {
        setError(err.message || 'Erro ao buscar o autor');
      } finally {
        setLoading(false);
      }
    };

    fetchAuthor();
  }, [authorId]);

  return { author, loading, error };
}