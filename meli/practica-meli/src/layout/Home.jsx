import BlockHome from "../components/BlockHome/BlockHome";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();
  return (
    <>
      <Helmet>
        <title>Home | Meli</title>
        <meta name="description" content="Descripción de mi página" />
        <meta
          property="og:url"
          content={window.location.origin + location.pathname}
        />
        <link
          rel="canonical"
          href={window.location.origin + location.pathname}
        />
      </Helmet>
      <BlockHome />;
    </>
  );
}
