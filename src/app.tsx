import { FormEvent, useCallback, useEffect, useReducer, useState } from "react";
import { List, Story } from "./list";
import { useStorageState } from "./useStorageState";
import { storiesReducer, StoriesState } from "./storiesReducer";
import { InputWithLabel } from "./inputWithLabel";
import axios from "axios";
import { SearchForm } from "./searchForm";

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?query=";

type ApiResult = {
  hits: ReadonlyArray<Story>;
};

const initialState: StoriesState = {
  stories: [],
  isLoading: false,
  isError: false,
};

export function App() {
  const [searchTerm, setSearchTerm] = useStorageState("search", "React");
  const [url, setUrl] = useState(`${API_ENDPOINT}${searchTerm}`);

  const [state, dispatch] = useReducer(storiesReducer, initialState);

  const handleFetchStories = useCallback(async () => {
    dispatch({ type: "STORIES_FETCH_INIT" });

    try {
      const result = await axios.get<ApiResult>(url);

      dispatch({ type: "STORIES_FETCH_SUCCESS", payload: result.data.hits });
    } catch {
      dispatch({ type: "STORIES_FETCH_FAILURE" });
    }
  }, [url]);

  useEffect(() => {
    handleFetchStories();
  }, [handleFetchStories]);

  function deleteStory(story: Story): void {
    dispatch({ type: "REMOVE_STORY", payload: story });
  }

  function getContent() {
    if (state.isLoading) {
      return <span>Loading</span>;
    } else if (state.isError) {
      return <span>Error</span>;
    } else {
      return (
        <>
          <List stories={state.stories} onDelete={deleteStory} />
        </>
      );
    }
  }

  const handleSearchSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();

      setUrl(`${API_ENDPOINT}${searchTerm}`);
    },
    [searchTerm]
  );

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <SearchForm
        searchTerm={searchTerm}
        onSearchInput={setSearchTerm}
        onSearchSubmit={handleSearchSubmit}
      />
      <hr />
      {getContent()}
    </div>
  );
}
