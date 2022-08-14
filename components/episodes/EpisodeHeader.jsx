import {Published} from "./EpisodePublished";
import {EpisodeTokens} from "./EpisodeTokens";

export const EpisodeHeader = ({episode, episode: {title, status}}) => {
  const published = status === "published" || status === "draft"; // showing drafts temporarily
  return (
    <header>
      {published && <Published episode={episode} />}
      <h1>{title}</h1>
      <EpisodeTokens episode={episode} />
    </header>
  );
};
