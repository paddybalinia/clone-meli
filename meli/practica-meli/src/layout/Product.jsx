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
      <Helmet>{data && <title>{data.title}</title>}</Helmet>
      <SingleProduct product={data} desc={data2} />;
    </>
  );
}
