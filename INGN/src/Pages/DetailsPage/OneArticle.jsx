import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { GetOneArticle } from "../../Queries/GetOneArticle";
import { useNavigate, useParams } from "react-router-dom";
import style from "./OneArticle.module.scss"
import { Link } from "react-router-dom"




export const OneArticle = () => {

    const { id } = useParams();
    console.log("id", id);


    const { data, isLoading, error } = useQuery({
      queryKey: ["SetOneArticle"],
      queryFn: async () =>
        request(
          "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clnit0eub12dv01uf46e6euqo/master",
          GetOneArticle,
          { id: id }
        ),
    });

    console.log("Data", data);

    if (isLoading) {
        return <span>Loading...</span>;
    }
  
    if (error) {
        return <span>Error: {error.message}</span>;
    }

    if (!data.newsfeed) {
        return useNavigate("/404");
    }


    return (
        <section className={style.articlesite}>
           <article className={style.details}>
                <img src={data.newsfeed.image.url} alt={data.newsfeed.descriptionOfImage} />
                <div className={style.headtitle}>
                    <h2>{data.newsfeed.title}</h2>
                    <p className={style.beskrivelse}>{data.newsfeed.description}</p>
                    <p>D. {data.newsfeed.date} - af {data.newsfeed.author}</p>
                </div>
                <p className={style.content} dangerouslySetInnerHTML={{__html:data.newsfeed.content.html}}/>
                <Link to="/">Tilbage</Link>
            </article> 
        </section>
        

    )
}