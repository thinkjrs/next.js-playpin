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

const indexPageContent = 
  <div>
    <h1>Hello, world!</h1>
    <p><small><code>Using Next.js.</code></small></p>
  </div>;

export default function Index() {
  return <Layout content={indexPageContent} />;
}