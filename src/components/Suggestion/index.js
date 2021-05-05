import React from "react";
import './style.css'

function Suggestion({ id, title, onClick }) {
  return (
    title && <button
      className="search-suggestion"
      data-id={id}
      data-testid="Autocomplete-suggestion"
      type="button"
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default React.memo(Suggestion);
