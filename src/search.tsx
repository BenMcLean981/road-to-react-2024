import { useState } from "react";

export function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  return (
    <div>
      <label>
        Age
        <input onChange={handleChange} />
      </label>
      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
    </div>
  );
}
