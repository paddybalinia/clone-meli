import styled from "styled-components";

// TO DO : Que sea proporcional
const ImageStyled = styled.img`
  height: auto;
  width: 100%;
`;

export default function Image({ src, height, width, title, alt }) {
  return (
    <>
      <ImageStyled
        src={src}
        width={width}
        height={height}
        title={title}
        alt={alt}
      />
    </>
  );
}
