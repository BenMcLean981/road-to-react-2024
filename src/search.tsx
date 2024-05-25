import { InputWithLabel } from "./inputWithLabel";

export type SearchProps = {
  searchTerm: string;
  onSearch: (s: string) => void;
};

export function Search(props: SearchProps) {
  const { searchTerm, onSearch } = props;

  return (
    <>
      <InputWithLabel value={searchTerm} onChange={onSearch} />
      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
    </>
  );
}
