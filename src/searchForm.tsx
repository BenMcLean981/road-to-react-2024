import { FormEvent } from "react";
import { InputWithLabel } from "./inputWithLabel";

export type SearchFormProps = {
  searchTerm: string;
  onSearchInput: (s: string) => void;
  onSearchSubmit: (e: FormEvent) => void;
};

export function SearchForm(props: SearchFormProps) {
  const { searchTerm, onSearchInput, onSearchSubmit } = props;

  return (
    <form onSubmit={onSearchSubmit}>
      <InputWithLabel
        value={searchTerm}
        onChange={(s) => onSearchInput(s.trim())}
      >
        <strong>Search:</strong>
      </InputWithLabel>
      <button type="submit" disabled={searchTerm === ""}>
        Submit
      </button>
    </form>
  );
}
