import Image from "next/image";

import { getEpisodes, getSeasons } from "../lib/episodes";

import style from "./about.module.css";
import epiodesStyle from "./episodes/episodes.module.css";
import SeasonsNav from "../components/SeasonsNav.jsx";

export default function AboutPage({ episodes, seasons }) {
  return (
    <div className={epiodesStyle.container}>
      <SeasonsNav seasons={seasons} />
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
              style={{ objectFit: "cover" }}
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
            interest in researching the stories and histories outside of the
            ‘official’ design canon for class, and her desire to share these
            stories beyond the classroom.
          </p>
          <p>
            Mandy is a feminist who lives in Oklahoma with a deaf dog named
            Solo, who is a (retired) certified therapy dog, two cats Rocky and
            Gypsy, who are certified for nothing, and wishes she lived closer to
            her two horses Rambo and Bogie. In her free time she likes to ride
            horses, go to the dog park, work in the garden and read all the
            books. For stress relief she likes to practice hand lettering and
            calligraphy techniques and has an obsession with buying pens.
          </p>
        </article>
        <article>
          <h2>guest host (season 5)</h2>
          <p>
            Ela Egidy is a typographer, designer, and researcher. She works as a
            Lecturer in Design at the University of Melbourne, Australia, where
            she is also a PhD candidate. Her research emphasises critical
            feminist perspectives to study typography in its varied forms. Her
            research areas span commodity feminism and the fetishisation of
            language, design’s relationship to control and dissent, and
            sixteenth-century bibliography. Her PhD is a historico-theoretical
            enquiry into the prototypographic practices of nuns working in early
            modern Italy. Though these areas may seem disparate, they are
            connected by an unyielding fascination with the materialities of
            language and their socio-political implications.
          </p>
          <p>
            Ela also works as a publication designer and sometimes exhibition
            designer under the collaborative guise of eetm.xyz, collaborating
            with artists and cultural institutions. As guest host for Season 5,
            she presents the story of the Convertite nuns of Venice, reframing
            their printing practice as a form of embodied typographic labour.
            Through a feminist reading, she explores how their work negotiated
            enclosure, institutional control, and gendered forms of penitent
            labour. This reading offers a view of typography as a means through
            which these women remade themselves, inscribing new identities
            through the physical and devotional act of printing.
          </p>
        </article>
        <article>
          <h2>guest host (season 4)</h2>
          <p>
            Sam Washburn is a certifiable obsessive when it comes to
            illustration history. An image maker by training and an educator by
            passion, Sam works out of a studio in Oklahoma making illustrations
            for a variety of clients including newspapers, magazines,
            advertising, and publishing. His work has been recognized by The
            Society of Illustrators New York, The Society of Illustrators of Los
            Angeles, Communication Arts, American Illustration, and CMYK. When
            he&apos;s not drawing pictures or pouring over obscure design
            documents he teaches full time at the University of Central
            Oklahoma, where he is an Associate Professor of Design.
          </p>
          <p>
            At the invitation and encouragement of Professor Mandy Horton, Sam
            took over The Incomplet Design History Podcast for Season 4, dubbing
            the venture &ldquo;The Illustration Files&rdquo;.
          </p>
          <p>
            Sam has no free time but does enjoy the occasional horror movie,
            graphic novel, or fighting video game session when the stars align.
          </p>
        </article>
        <article>
          <h2>our team</h2>
          <Credit title="Research Assistants (Season 1)">
            Kayla Sinclair & Shayne Valencia
          </Credit>
          <Credit title="Additional Guest Contributors (Season 1)">
            Estee Perkins Fioroni
          </Credit>
          <Credit title="Research Assistants (Season 2)">
            Ebony Sayles & Dean Kelly
          </Credit>
          <Credit title="Research Assistants (Season 3)">
            Dean Kelly, Kolby Streller, and Taylor Hill
          </Credit>
          <Credit title="Additional Guest Contributors (Season 3)">
            Jacob Larson, Spencer Gee & Esther Velasco
          </Credit>
          <Credit title="Research Assistants (Season 4)">
            Renee Martin & Youser Kassim
          </Credit>
          <Credit title="Research Assistants (Season 5)">
            Drayeson Swanegan, Gabbi Warriner & Michelle Nguyen
          </Credit>
          <Credit title="Additional Guest Contributors (Season 5)">
            Ela Egidy, Dean Kelly & Spencer Gee
          </Credit>
          <Credit title="Research Assistants (Season 6)">
            Noel Barr, Haley Dawkins, & Chloe Falls
          </Credit>
          <Credit title="Story Editor">
            <div>Spencer Gee</div>
          </Credit>
          <Credit title="Sound Design/Engineering (Seasons 1-6)">
            <div>
              By the University of Central Oklahoma’s Center for eLearning and
              Connected Environments (CeCE)
            </div>
          </Credit>
          <Credit title="Mixing Engineer (Season 6)">
            <div>Tyler Jenkins of Echo Fien Productions</div>
          </Credit>
          <Credit title="Music">
            <div>
              Christina Giacona and Patrick Conlon of{" "}
              <a href="https://onyxlane.com/">Onyx Lane</a>
            </div>
          </Credit>
          <Credit title="Our Thanks">
            All episodes from seasons 1-6 were produced with the aid of a grant
            from the University of Central Oklahoma.
          </Credit>
        </article>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const [episodes, seasons] = await Promise.all([getEpisodes(), getSeasons()]);
  return {
    props: { episodes, seasons },
  };
}

function Credit({ title, ...other }) {
  return (
    <div className={style.credit}>
      {title && <h3>{title}:</h3>}
      <div {...other} />
    </div>
  );
}
