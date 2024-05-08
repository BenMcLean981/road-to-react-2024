import { Item } from "./Item";

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
};

export function List(props: ListProps) {
  const { stories } = props;

  return (
    <ul>
      {stories.map((s) => (
        <Item key={s.objectID} story={s} />
      ))}
    </ul>
  );
}
