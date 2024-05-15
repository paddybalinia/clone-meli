//todo
import { useParams } from "react-router-dom";
import { SingleProduct } from "../components/SingleProduct/SingleProduct";
import { Helmet } from "react-helmet";
import { useFetchData } from "../services/fetchData";

export function Product() {
  let param = useParams();

  const { data: data } = useFetchData(`items/${param.id}`);
  const { data: data2 } = useFetchData(`items/${param.id}/description`);
  return (
    <>
      <Helmet>
        {data && <title>{data.title}</title>}
        {data && (
          <meta
            name="description"
            content={`Envíos gratis en el día ✓ ${data.title}`}
          />
        )}

        <meta property="og:url" content={window.location.origin} />
        <link
          rel="canonical"
          href={window.location.origin + location.pathname}
        />
      </Helmet>
      <SingleProduct product={data} desc={data2} />;
    </>
  );
}
