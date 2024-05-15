import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { useFetchData } from "../services/fetchData";
import Header from "../components/Header/Header";
import SearchResult from "../components/SeachResult/SeachResult";
import { Head } from "../components/Head/Head";

export default function Search() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchValue = searchParams.get("search") || "";
  //https://api.mercadolibre.com/sites/MLA/search?q=:searchValue

  const { data, isLoading, error } = useFetchData(
    `sites/MLA/search?q=:${searchValue}`
  );

  return (
    <>
      <Header />

      <Head
        title={`Restado de busqueda para: ${searchValue}`}
        description={`Envíos Gratis en el día ✓ Comprá ${searchValue} en cuotas sin interés! Conocé nuestras increíbles ofertas y promociones en millones de productos.`}
      ></Head>

      <SearchResult
        query={searchValue}
        data={data}
        isLoading={isLoading}
        error={error}
      ></SearchResult>
    </>
  );
}
