import styled from "styled-components";

// TO DO : Que sea proporcional

const ImageDivStyled = styled(({ proportion, ...rest }) => <div {...rest} />)`
  width: 100%;
  padding-top: ${(props) => props.proportion + "%" || "flex-start"};
`;
const ImageStyled = styled.img`
  height: 100%;
  position: absolute;
  top: 0;
  object-fit: cover;
  width: 100%;
`;

function getImageSize(width, height) {
  let imageWidth = width;
  let imageHeight = height;
  let proportion =
    imageWidth * 1 > 0 && imageHeight * 1 > 0
      ? (imageHeight / imageWidth) * 100
      : false;

  return {
    imageWidth,
    imageHeight,
    proportion,
  };
}

export default function Image({ src, height, width, title, alt }) {
  const { proportion } = getImageSize(width, height);
  proportion;
  return (
    <>
      <ImageDivStyled proportion={proportion} />
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
