import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { GetAllCategories } from "../../Queries/GetCategories";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom"
import style from "../AllHomePage/HomePage.module.scss"



export const NationalPage = () => {

    const { category } = useParams();
    console.log("category", category);


    // const { data, isLoading, error } = useQuery({
    //   queryKey: ["SetAllNational"],
    //   queryFn: async () =>
    //     request(
    //       "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clnit0eub12dv01uf46e6euqo/master",
    //       GetAllCategories,
    //       { category_contains: "Indland", }
    //     ),
    // });

    const { data, isLoading, error } = useQuery({
      queryKey: ["SetAllNational"],
      queryFn: async () =>
        request(import.meta.env.VITE_PUBLIC_URL_ID, GetAllCategories, {
          category_contains: "Indland",
        }),
    });

    
    // console.log("Data", data);

    const gridClass = [
      style.news1,
      style.news2,
      style.news3,
      style.news4,
      style.news5,
      style.news6,
      style.news7,
      style.news8,
      style.news9,
    ];
    

    if (isLoading) {
      return <span>Loading...</span>;
    }

    if (error) {
      return <span>Error: {error.message}</span>;
    }



    return (
      <section className={style.newswrapper}>
      {data.newsfeeds.slice(0, 9).map((item, index) => {
        const className = gridClass[index % gridClass.length];

        return (
          <article
            key={index}
            className={className}
            style={{ gridArea: "news" + (index + 1) }}
          >
            <div>
              <h2>{item.title}</h2>
              <p className={style.beskrivelse}>{item.description}</p>
              <p>D. {item.date} - af {item.author}</p>
              <span className={style.read}><NavLink to={`/article/${item.id}`}>Læs mere</NavLink></span>
            </div>
            <img src={item.image.url} alt={item.imagedescription} />
          </article>
        );
      })}
    </section>
    )

}