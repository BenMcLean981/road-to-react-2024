import { Story } from "./list";

export type ItemProps = {
  story: Story;
};

export function StoryItem(props: ItemProps) {
  const { story } = props;

  return (
    <>
      <span>
        <a href={story.url}>{story.title}</a>
      </span>{" "}
      <span>{story.author}</span> <span>{story.num_comments}</span>{" "}
      <span>{story.points}</span> {story.title} {story.author}
    </>
  );
}
