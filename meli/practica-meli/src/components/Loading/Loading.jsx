import styled from "styled-components";

export const LoadingStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  height: 50vh;
`;
export const LoadingStyledSpan = styled.span`
  width: 48px;
  height: 48px;
  border: 5px solid ${(props) => props.theme.colors.colorText200};
  border-bottom-color: ${(props) => props.theme.colors.colorPrimary};
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export default function Loading() {
  return (
    <LoadingStyled>
      <LoadingStyledSpan></LoadingStyledSpan>
    </LoadingStyled>
  );
}
