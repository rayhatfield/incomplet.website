import Image from "next/image";

export default function AboutPage() {
  return (
    <div>
      <article>
        <h2>about the show</h2>
        <p>
          This is Incomplēt Design History, a podcast that explores topics in
          graphic design history that are often overlooked or ignored, with the
          goal to expand knowledge, understanding, and interpretations of design
          history as well as to include all sides of the story
        </p>
      </article>
      <article>
        <h2>your host</h2>
        <p>
          Amanda (Mandy) Horton holds a BFA in graphic design from Oklahoma
          State University and MFA in Design from the University of Central
          Oklahoma. While she also teaches classes in design technology and
          studio, her specialty lies in design history. Accordingly, she is the
          director of design history minor at UCO. She has been featured on CAA
          podcast where she discussed teaching design history and been published
          in the International Journal of Visual Design. However, Mandy
          recognizes that the world of graphic design history changes each day,
          and is always seeking to learn more about styles, trends, and
          designers from across the globe.
        </p>
        <Image
          src="/images/mandy.jpg"
          width={600}
          height={400}
          objectFit="cover"
        />
      </article>
      <article>
        <h2>our team</h2>
        <p>
          Thank you to our patrons, as well as our story editor, Spencer Gee and
          our research assistants, Kayla Sinclair and Shayne Valencia. Consider
          supporting the show by joining our Patreon.
        </p>
      </article>
    </div>
  );
}
