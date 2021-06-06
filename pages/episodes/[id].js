export default function Episode({ title }) {
  return <div>episode {title}</div>;
}

export async function getStaticPaths() {
  const paths = Array.from({ length: 10 }, (_, i) => ({
    params: { id: String(i) }
  }));
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  return {
    props: {
      title: params.id
    }
  };
}
