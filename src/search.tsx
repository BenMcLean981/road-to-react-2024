export type SearchProps = {
  searchTerm: string;
  onSearch: (s: string) => void;
};

export function Search(props: SearchProps) {
  const { searchTerm, onSearch } = props;

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    onSearch(event.target.value);
  }

  return (
    <div>
      <label>
        <input onChange={handleChange} value={props.searchTerm} />
      </label>
      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
    </div>
  );
}
