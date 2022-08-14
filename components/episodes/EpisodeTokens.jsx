import {Scheduled} from "./EpisodeScheduled";

import style from "./EpisodeTokens.module.css";

export const EpisodeTokens = ({episode}) => {
  return (
    <ul className={style.tokens}>
      {episode?.status === "scheduled" && (
        <li>
          <Scheduled episode={episode} />
        </li>
      )}
      {episode?.status === "draft" && (
        <li>
          <span>Draft</span>
        </li>
      )}
    </ul>
  );
};
