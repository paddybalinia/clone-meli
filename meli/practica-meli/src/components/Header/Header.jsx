import FormSeach from "../FormSeach/FormSeach";
import IconSearch from "../Icons/Seach";
import IconLocation from "../Icons/Location";
import IconCart from "../Icons/Cart";

import {
  HeaderStyle,
  StyledInput,
  StyledButton,
  BoxLocation,
  TextLocation,
  NavPrimary,
  NavPrimaryText,
  NavSecondary,
  NavSecondaryText,
  LinkCart,
  IconLogoStyle,
  IconLogoDesktopStyle,
} from "./HeaderStyle";

import FilteredRow from "../Row/FilteredRow";

export default function Header() {
  return (
    <>
      <HeaderStyle>
        <FilteredRow flexDirection="row" gap="70px" justifyContent="flex-start">
          <IconLogoStyle width={45} height={45}></IconLogoStyle>
          <IconLogoDesktopStyle width={158} height={46} />

          <FormSeach>
            <StyledInput placeholder="Buscar productos, marcas y más..."></StyledInput>
            <StyledButton>
              <IconSearch width={17} height={18} fill="#707070"></IconSearch>
            </StyledButton>
          </FormSeach>
        </FilteredRow>
        <FilteredRow justifyContent="space-between">
          <BoxLocation>
            <IconLocation width={12} height={17} fill="black"></IconLocation>
            <TextLocation>Enviar a Capital Federal</TextLocation>
          </BoxLocation>
          <NavPrimary>
            <NavPrimaryText href="#" title="Categorías">
              Categorías
            </NavPrimaryText>
            <NavPrimaryText href="#" title="Ofertas">
              Ofertas
            </NavPrimaryText>
            <NavPrimaryText href="#" title="Historial">
              Historial
            </NavPrimaryText>
            <NavPrimaryText href="#" title="Supermercado">
              Supermercado
            </NavPrimaryText>
            <NavPrimaryText href="#" title="Moda">
              Moda
            </NavPrimaryText>
            <NavPrimaryText href="#" title="Moda">
              Moda
            </NavPrimaryText>
            <NavPrimaryText href="#" title="Vender">
              Vender
            </NavPrimaryText>
            <NavPrimaryText href="#" title="Ayuda">
              Ayuda
            </NavPrimaryText>
          </NavPrimary>

          <NavSecondary>
            <NavSecondaryText href="#" title="Creá tu cuenta">
              Creá tu cuenta
            </NavSecondaryText>
            <NavSecondaryText href="#" title="Ingresá">
              Ingresá
            </NavSecondaryText>
            <NavSecondaryText href="#" title="Mis compras">
              Mis compras
            </NavSecondaryText>
            <LinkCart href="#" title="ir a carrito">
              <IconCart fill="black"></IconCart>
            </LinkCart>
          </NavSecondary>
        </FilteredRow>
      </HeaderStyle>
    </>
  );
}
