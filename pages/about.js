import Image from "next/image";

import { getEpisodes } from "../lib/episodes";
import EpisodeList from "../components/EpisodeList";

import style from "./about.module.css";
import epiodesStyle from "./episodes/episodes.module.css";

export default function AboutPage({ episodes }) {
  return (
    <div className={epiodesStyle.container}>
      <EpisodeList episodes={episodes} />
      <div>
        <article>
          <h2>about the show</h2>
          <p>
            History is, by nature, never “complete” and almost always a little
            messy. New information pops up every day that changes or challenges
            our understanding and interpretations of it. We want to expand our
            knowledge of graphic design history and really dig into the stories.
            We believe that differences are strengths, so we want to be
            inclusive, not only of people but of ideas and technologies that
            make the history of graphic design so rich. Our mission with the
            Incomplete Design History podcast is to explore the overlooked,
            underrepresented, or ignored areas of graphic design history, tell
            those stories, and make graphic design history a little less
            Incomplete.
          </p>
        </article>
        <article>
          <h2>your host</h2>
          <div className={style.image}>
            <Image
              src="/images/mandy.jpg"
              alt="Photo of Mandy"
              width={336}
              height={336}
              objectFit="cover"
            />
          </div>
          <p>
            Mandy became interested in graphic design history while studying
            graphic design at Oklahoma State University. After graduation she
            took a year off to work at a dude ranch in Colorado and contemplate
            life. She decided she wasn’t done with school just yet and immersed
            herself in graphic design history. MFA in hand, she is now a
            professor of graphic design at the University of Central Oklahoma
            where she teaches design theory, criticism, and history of graphic
            design and is the director of the design history minor.
          </p>
          <p>
            The idea for the Incomplete Design History podcast came from Mandy’s
            passion for research into the stories and histories outside of the
            ‘official’ design canon.
          </p>
          <p>
            Mandy is a feminist who lives with her partner Ray, their deaf dog
            Solo, who is a certified therapy dog, two cats Rocky and Gypsy, who
            are certified for nothing, and wishes she lived closer to her two
            horses Rambo and Bogie. In her free time she likes to ride horses,
            go to the dog park, work in the garden and read all the books. For
            stress relief she likes to practice hand lettering and calligraphy
            techniques and has an obsession with buying pens.
          </p>
        </article>
        <article>
          <h2>our team</h2>
          <p>
            Thank you to our patrons, as well as our story editor, Spencer Gee
            and our research assistants, Kayla Sinclair and Shayne Valencia.
            Consider supporting the show by joining our Patreon.
          </p>
        </article>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const episodes = await getEpisodes();
  return {
    props: { episodes },
  };
}
