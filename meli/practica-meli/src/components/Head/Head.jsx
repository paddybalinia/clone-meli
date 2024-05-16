import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

export function Head(props) {
  const location = useLocation();
  const pageTitle = props ? props.title : "";
  const metaDescription = props.description ? props.description : "";
  //   console.log(props);
  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:url" content={window.location.origin} />
      <link rel="canonical" href={window.location.origin + location.pathname} />
    </Helmet>
  );
}

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
