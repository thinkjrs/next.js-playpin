/*
 * index.js
 * Sample index page from the nextjs.org/learn tutorials.
 *
 */
// basic exemplar
//import Layout from '../components/DefaultLayout';
//
//export default function Index() {
//    return (
//        <Layout>
//          <h1>Hello, world!</h1>
//          <p><small><code>Using Next.js.</code></small></p>
//        </Layout>
//    );
//}

// content as prop exemplar
import Layout from '../components/DefaultLayout';
import Link from 'next/link'
import fetch from 'isomorphic-unfetch';

//const PostLink = props => (
//  <li key={show.id}>
//    <Link href="/p/[id]" as={`/p/${show.id}`}>
//      <a>{show.name}</a>
//    </Link>
//  </li>
//);
//
//const blogPageContent = 
//<div>
//  <h1>
//    Batman TV Breakdown
//  </h1>
//  <ul>
//    {props.shows.map(show => (
//      <PostLink />
//    ))}
//  </ul>
//</div>;
//
//const indexPageContent = 
//<div>
//  <h1>
//    Hello, world!
//  </h1>
//  <p>
//    <small>
//      <code>
//        Using Next.js.
//      </code>
//    </small>
//  </p>
//</div>;

//export default function Index() {
//  return <Layout content={indexPageContent} />;
//}

// export default function Blog() {
//   return <Layout content={blogPageContent} />;
// }
// 
// PostLink.getInitialProps = async function() {
//   const res = await fetch('https://api.tvmae.com/search/show?q=batman');
//   const data = await res.json();
// 
//   console.log(`Data fetched. Count: ${data.length}`)
// 
//   return {
//     shows: data.map(entry => entry.show)
//   };
// };

const Index = props => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link href="/p/[id]" as={`/p/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};

export default Index;