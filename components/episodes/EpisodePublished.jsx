import {Player} from "../../pages/episodes/[[...slug]]";

export const Published = ({episode: {id}}) => <Player episodeId={id} />;
