import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { useFetchData } from "../services/fetchData";
import Header from "../components/Header/Header";
import SearchResult from "../components/SeachResult/SeachResult";

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
      <Helmet>
        <title>Restado de busqueda para: {searchValue}</title>
        <meta property="og:url" content={`/items?search=${searchValue}`} />
        <link rel="canonical" href="/items" />
      </Helmet>

      <SearchResult
        query={searchValue}
        data={data}
        isLoading={isLoading}
        error={error}
      ></SearchResult>
    </>
  );
}
