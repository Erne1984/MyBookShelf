import style from "./ReviewsSection.module.css";

import FiltersComment from "../../../ReviewsSection/components/FilterComment/FiltersComment";
import Comment from "../../../ReviewsSection/components/Comment/Comment";
import { FormattedReview } from "../../../../../../interfaces/Book";
import { useEffect } from "react";

interface ReviewSectionProps {
    bookReviews: FormattedReview[] | undefined;
}

export default function ReviewSection(props: ReviewSectionProps) {

    return (
        <section className={style["reviews-content"]}>

            <FiltersComment />


            {props.bookReviews && props.bookReviews.map((review) => {
                return (
                    <Comment
                    key={review._id} // ID da review como chave única
                    username={review.username} // Nome do usuário
                    userImg={review.imgUserUrl} // URL da imagem do usuário
                    score={review.score} // Pontuação da avaliação
                    content={review.content} // Conteúdo da review
                    createdAt={review.createdAt} // Data da criação
                />
                )
            })}

        </section>
    )
}