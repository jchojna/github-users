import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchUsers } from "../utils/fetch";

const useUsers = (searchValue: string, itemsPerPage: number) => {
  return useInfiniteQuery({
    queryKey: ["users", searchValue, itemsPerPage],
    queryFn: fetchUsers,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const maxPages = Math.floor(lastPage.total_count / itemsPerPage);
      const nextPage = allPages.length + 1;
      return nextPage <= maxPages ? nextPage : undefined;
    },
    enabled: !!searchValue,
  });
};

export default useUsers;
