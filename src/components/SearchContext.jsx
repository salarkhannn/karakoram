import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export function useSearch() {
    return useContext(SearchContext);
}

export function SearchProvider({ children }) {
    const [searchQuery, setSearchQuery] = useState('');

    function showResults(search) {
        setSearchQuery(search);
    }

    return (
        <SearchContext.Provider value={{ searchQuery, showResults }}>
            {children}
        </SearchContext.Provider>
    )
}