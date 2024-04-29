import PropTypes from "prop-types";

export function useGetUrl({ API, SEARCH, LIMIT }) {
  return `${API}${SEARCH}&limit=${LIMIT}`;
}

useGetUrl.prototype = {
  API: PropTypes.string,
  SEARCH: PropTypes.string,
  LIMIT: PropTypes.number,
};
