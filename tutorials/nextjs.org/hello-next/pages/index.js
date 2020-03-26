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
import Layout from '../components/ContentPropLayout';
import Link from 'next/link'


const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const blogPageContent = 
<div>
  <h1>
    Hello, blog world!
  </h1>
  <ul>
    <PostLink title="Hello Next.js!" />
    <PostLink title="Why nextjs.org/learn is awesome." />
    <PostLink title="Musicfox is the best." />
  </ul>
</div>;

const indexPageContent = 
<div>
  <h1>
    Hello, world!
  </h1>
  <p>
    <small>
      <code>
        Using Next.js.
      </code>
    </small>
  </p>
</div>;

//export default function Index() {
//  return <Layout content={indexPageContent} />;
//}

export default function Blog() {
  return <Layout content={blogPageContent} />;
}