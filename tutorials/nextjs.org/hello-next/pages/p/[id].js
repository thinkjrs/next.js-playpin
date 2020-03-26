/*
* [id].js
* Dynamic page tutorial examplar from nextjs.org Learn tutorial.
*/
import { useRouter } from 'next/router';
import Layout from '../../components/DefaultLayout';
import fetch from 'isomorphic-unfetch';

//const Content = () => {
//  const router = useRouter();
//  return (
//    <>
//      <h1>{router.query.id}</h1>
//      <p>
//        <strong>
//          Fantastic 
//        </strong> blog post content!
//      </p>
//    </>
//  );
//};
//
//
//export default function Post() {
//  return (
//  <Layout content={<Content />} />
//  )
//};

const Post = props => (
    //const router = useRouter();
    <Layout>
      <h1>{props.show.name}</h1>
      <p>{props.show.summary.replace(/<[/]?[pb]>/g,'')}</p>
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