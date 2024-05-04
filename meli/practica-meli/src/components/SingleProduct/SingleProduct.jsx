//todo
import Data from "../../mocks/singleProduct.json";
import DataInfo from "../../mocks/singleProductDesc.json";

export function SingleProduct() {
  const { title, pictures, condition } = Data;
  const { plain_text } = DataInfo;

  const conditionText = condition == "new" ? "Nuevo" : "Usado";

  return (
    <div>
      <div>
        <div>
          {pictures && pictures[0] && <img src={pictures[0].url} alt={title} />}
        </div>
        <div>
          <span>{conditionText}</span>
          <h2>{title}</h2>
          <button type="button">Comprar</button>
        </div>
      </div>

      {plain_text && (
        <div>
          <h3>Detalle del producto</h3>
          {plain_text}
        </div>
      )}
    </div>
  );
}
