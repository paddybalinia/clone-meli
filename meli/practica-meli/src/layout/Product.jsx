//todo
import { useParams } from "react-router-dom";
import { Head } from "../components/Head/Head";
import { SingleProduct } from "../components/SingleProduct/SingleProduct";
import { useFetchData } from "../services/fetchData";

export function Product() {
  let param = useParams();
  const { data: data } = useFetchData(`items/${param.id}`);
  const { data: data2 } = useFetchData(`items/${param.id}/description`);

  return (
    <>
      {data && (
        <Head
          title={data.title}
          description={`Envíos gratis en el día ✓ ${data.title}`}
        />
      )}
      <SingleProduct product={data} desc={data2} />
    </>
  );
}
