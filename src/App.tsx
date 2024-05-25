import { useEffect, useState } from "react";
import { List } from "./list";
import { Search } from "./search";

function useStorageState(
  key: string,
  initialState: string
): [string, (s: string) => void] {
  const [value, setValue] = useState(localStorage.getItem(key) ?? initialState);

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  function onSearch(s: string) {
    setValue(s);
  }

  return [value, onSearch];
}

export function App() {
  const stories = [
    {
      title: "React",
      url: " https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const [searchTerm, onSearch] = useStorageState("search");

  const filteredStories = stories.filter((s) =>
    s.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search searchTerm={searchTerm} onSearch={onSearch} />
      <hr />
      <List stories={filteredStories} />
    </div>
  );
}
