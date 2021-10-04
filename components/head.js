import H from "next/head";

export function Head() {
  return (
    <H>
      <title>incomplet</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/1.0.0/modern-normalize.min.css"
        integrity="sha512-ISS7cAi1PEhQ8jnbJpJZMd29NlhNj4AWYyLOSp2CE/CsHxTCu+r+t0D2yoJudVrd0/8fTVPUVDzY5Tvli75u/g=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cloud.typography.com/704534/6723032/css/fonts.css"
      />

      <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
      <meta name="twitter:site" content="@incompletdesign" />
      <meta name="twitter:title" content="incomplet design history podcast" key="twitter:title" />
      <meta name="twitter:description" content="A podcast exploring the overlooked, underrepresented, or ignored areas of graphic design history, telling those stories, and making graphic design history a little less Incomplete." key="twitter:description" />
    </H>
  );
}
