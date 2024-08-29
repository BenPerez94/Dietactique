// components/SearchBar.tsx
"use client";
import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import Link from "next/link";

const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (keyword.trim() === "") {
      setResults([]);
      return;
    }

    const delayDebounceFn = setTimeout(() => {
      handleSearch();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);

  const handleSearch = async () => {
    setIsSearching(true);
    try {
      const response = await fetch(
        `/api/search?keyword=${encodeURIComponent(keyword)}`
      );
      const data = await response.json();
      console.log("Search results:", data); // Vérifiez les résultats
      setResults(data);
    } catch (error) {
      console.error("Error searching articles:", error);
    }
    setIsSearching(false);
  };

  const resetSearch = () => {
    setKeyword("");
    setResults([]);
  };

  return (
    <div className="relative">
      <div className="flex">
        <Search size={18} className="absolute left-2 top-2" color="#8c8c8c" />
        <input
          type="search"
          placeholder="Rechercher..."
          className="pl-8 w-72"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>
      {isSearching && (
        <div className="absolute p-2 bg-white shadow-md mt-0 w-full z-50">
          Searching...
        </div>
      )}
      {results.length > 0 && (
        <div className="absolute bg-white shadow-md mt-0 w-full z-50">
          <ul className=" search-li">
            {results.map((article: any) => (
              <li
                key={article.id}
                className="p-3 border-b hover:bg-accent transition-all duration-300 "
              >
                <Link
                  href={`/article/${article.id}`}
                  onClick={resetSearch}
                  className="text-blue-500"
                >
                  <div className="font-bold">{article.title}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
