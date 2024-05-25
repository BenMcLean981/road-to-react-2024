import { useState } from "react";
import { List, Story } from "./list";
import { Search } from "./search";
import { useStorageState } from "./useStorageState";

const defaultStories: ReadonlyArray<Story> = [
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

export function App() {
  const [searchTerm, onSearch] = useStorageState("search", "React");
  const [stories, setStories] = useState<ReadonlyArray<Story>>(defaultStories);

  const filteredStories = stories.filter((s) =>
    s.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function deleteStory(story: Story): void {
    setStories(stories.filter((s) => s.objectID !== story.objectID));
  }

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search searchTerm={searchTerm} onSearch={onSearch} />
      <hr />
      <List stories={filteredStories} onDelete={deleteStory} />
    </div>
  );
}
