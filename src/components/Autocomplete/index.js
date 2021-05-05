import React, { useEffect, useState, useCallback } from "react"

import { fetchSuggestions } from "./../../utils/api"
import Suggestion from "../Suggestion"
import "./style.css"

function Autocomplete({ onClickProduct }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [suggestions, setSuggestions] = useState([])

  const handleChange = useCallback(
    (e) => {
      setSearchTerm(e.target.value)
    },
    [setSearchTerm]
  );

  const onClickSuggestion = useCallback(
    (e) => {
      const id = e && e.target && e.target.getAttribute("data-id")
      initStatus()
      id && onClickProduct && onClickProduct(id)
    },
    [onClickProduct]
  );

  const initStatus = () => {
    setSearchTerm("")
    setSuggestions([])
  };

  const preview = useCallback(
    (term) => {
      fetchSuggestions(term)
        .then((suggestions) => {
          if (suggestions.length > 10) suggestions.length = 10
          setSuggestions(suggestions)
        })
        .catch((err) => {
          console.log({ err })
        })
    },
    [setSuggestions]
  );

  useEffect(() => {
    const term = searchTerm.trim()

    if (term.length) {
      preview(term);
    } else {
      setSuggestions([]);
    }
  }, [preview, searchTerm]);

  const displaySuggestions = () => (
    <div
      className="search-suggestion-list"
      data-testid={`Autocomplete-suggestion-list`}
      title="Choose one"
    >
      {suggestions.map((item) => (
        <Suggestion
          key={item.id}
          id={item.id}
          title={item.title}
          onClick={onClickSuggestion}
        />
      ))}
    </div>
  );

  return (
    <div className="search-container">
      <input
        type="text"
        value={searchTerm}
        className="search-box"
        placeholder="Search for a product"
        onChange={handleChange}
      />
      {suggestions && displaySuggestions()}
    </div>
  );
}

export default Autocomplete;
