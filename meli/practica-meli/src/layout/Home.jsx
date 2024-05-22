import BlockHome from "../components/BlockHome/BlockHome";

import { Head } from "../components/Head/Head";

export default function Home() {
  // const location = useLocation();
  return (
    <>
      <Head
        title="Home | Meli"
        description="Encontrá las mejores Ofertas en Electrodomésticos Celulares, Zapatillas y más para Hot Sale 2024."
      />
      <BlockHome />
    </>
  );
}
