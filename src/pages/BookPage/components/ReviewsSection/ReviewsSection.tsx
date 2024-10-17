import style from "./ReviewsSection.module.css";

import FiltersComment from "./components/FilterComment/FiltersComment";
import Comment from "./components/Comment/Comment";

export default function ReviewSection() {

    return(
        <section className={style["reviews-content"]}>

            <FiltersComment/>

            <Comment/>



        </section>
    )
}