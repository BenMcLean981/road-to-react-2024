import { Story } from "./list";

export type StoriesState = {
  stories: ReadonlyArray<Story>;
  isLoading: boolean;
  isError: boolean;
};

export type StoriesAction =
  | {
      type: "STORIES_FETCH_INIT";
    }
  | {
      type: "STORIES_FETCH_SUCCESS";
      payload: ReadonlyArray<Story>;
    }
  | { type: "STORIES_FETCH_FAILURE" }
  | {
      type: "REMOVE_STORY";
      payload: Story;
    };

export function storiesReducer(
  state: StoriesState,
  action: StoriesAction
): StoriesState {
  switch (action.type) {
    case "STORIES_FETCH_INIT":
      return { ...state, isLoading: true, isError: false };
    case "STORIES_FETCH_SUCCESS":
      return { stories: action.payload, isLoading: false, isError: false };
    case "STORIES_FETCH_FAILURE":
      return { ...state, isLoading: false, isError: true };
    case "REMOVE_STORY":
      return removeStory(state, action.payload);
  }
}

function removeStory(state: StoriesState, story: Story) {
  const stories = state.stories.filter((s) => s.objectID !== story.objectID);

  return {
    ...state,
    stories: stories,
  };
}
