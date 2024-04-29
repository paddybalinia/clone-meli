export function useGetUrl({ API, SEARCH, LIMIT }) {
  return `${API}${SEARCH}&limit=${LIMIT}`;
}
