import { StoryItem } from "./Item";

export type Story = {
  title: string;
  url: string;
  author: string;
  num_comments: number;
  points: number;
  objectID: number;
};

export type ListProps = {
  stories: ReadonlyArray<Story>;
  onDelete: (s: Story) => void;
};

export function List(props: ListProps) {
  const { stories, onDelete } = props;

  return (
    <ul>
      {stories.map((s) => (
        <li key={s.objectID}>
          <StoryItem story={s} />{" "}
          <button onClick={() => onDelete(s)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
