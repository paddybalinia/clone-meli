import { useLocation } from "react-router-dom";
import { Head } from "../components/Head/Head";
import Header from "../components/Header/Header";
import Loading from "../components/Loading/Loading";
import SearchResult from "../components/SeachResult/SeachResult";
import { useFetchData } from "../services/fetchData";

export default function Search() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchValue = searchParams.get("search") || "";

  const { data, isLoading } = useFetchData(
    `sites/MLA/search?q=:${searchValue}`
  );

  return (
    <>
      <Header />

      <Head
        title={`Restado de busqueda para: ${searchValue}`}
        description={`Envíos Gratis en el día ✓ Comprá ${searchValue} en cuotas sin interés! Conocé nuestras increíbles ofertas y promociones en millones de productos.`}
      ></Head>

      {isLoading ? (
        <Loading />
      ) : (
        <>
          <SearchResult
            query={searchValue}
            data={data}
            isLoading={isLoading}
          ></SearchResult>
        </>
      )}
    </>
  );
}
