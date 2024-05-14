import BlockHome from "../components/BlockHome/BlockHome";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Mi Título</title>
        <meta name="description" content="Descripción de mi página" />
      </Helmet>
      <BlockHome />;
    </>
  );
}
