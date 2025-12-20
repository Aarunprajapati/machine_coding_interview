import { useCallback, useEffect, useState } from "react";
import useDebounce from "./hooks/useDebounce";

const BASE_URL = "https://dummyjson.com/products/search";
const getPosts = async (search) => {
  const postList = await fetch(`${BASE_URL}?q=${search}`);
  const res = await postList.json();

  return res;
};
const App = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (!searchQuery.trim()) return;
    const fetchPosts = async () => {
      const res = await getPosts(searchQuery);
      setData(res?.products);
    };

    fetchPosts();
  }, [searchQuery]);

  const handleSearch = useCallback((searchQuery) => {
    setSearchQuery(searchQuery);
  }, []);

  const debounceSearch = useDebounce(handleSearch, 500);

  return (
    <div className="flex justify-center w-full flex-col items-center">
      <h1 className="text-2xl">Debounce Search Functionality</h1>
      <div className="my-2">
        <input
          className="border border-blue-300 px-4 py-2"
          onChange={(e) => debounceSearch(e.target.value)}
          placeholder="Search here..."
        />
      </div>
      <div>
        {data?.length > 0 &&
          data?.map((item) => (
            <div className="flex flex-col  gap-2" key={item.id}>
              {item.title}
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
