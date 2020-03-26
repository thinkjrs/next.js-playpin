/*
 * post.js
 * 
 * Sample posts page from the nextjs.org tutorials.
 *
 */
import { useRouter } from 'next/router';
import Layout from '../components/DefaultLayout';
import fetch from 'isomorphic-unfetch';

// Hot tip!
// You can't define the router outside the body
// of a function component!

//const Page = () => {
//  const router = useRouter();
//  const postContent = 
//  <div>
//    <h1>{router.query.title}</h1>
//    <p>
//      <strong>
//        Fantastic 
//      </strong> blog post content!
//    </p>
//  </div>;
//  return (
//    <Layout content={postContent} />
//  );
//};
//
//export default Page;

// better from later in tutorial
//const Content = props => {
//  const router = useRouter();
//  return (
//    <>
//      <h1>{router.query.title}</h1>
//    <p>
//      <strong>
//        Fantastic 
//      </strong> blog post content!
//    </p>
//    </>
//  );
//};
//
//Content.getInitialProps = async function(context) {
//  const { id } = context.query;
//  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
//  const show = await res.json();
//
//  console.log(`Fetched show: ${show.name}`);
//
//  return { show };
//};
//
//const Page = () => {
//  return (
//    <Layout content={<Content />} />
//  );
//};
//
//export default Page;
const Post = props => (
  <Layout>
    <h1>{props.shows.name}</h1>
    <p>{props.shows.summary.replace(/<[/]?[pb]>/g,'')}</p>
    {props.show.image ? <img src={props.show.image.medium} /> : null}
  </Layout>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Post;