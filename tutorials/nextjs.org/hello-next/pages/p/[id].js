/*
* [id].js
* Dynamic page tutorial examplar from nextjs.org Learn tutorial.
*/
import { useRouter } from 'next/router';
import Layout from '../../components/DefaultLayout';
import fetch from 'isomorphic-unfetch';
import Markdown from 'react-markdown';
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
      <div className="show">
        <div className="show-detail">
          <h1>{props.show.name}</h1>
          <p>{props.show.summary.replace(/<[/]?[pb]>/g,'')}</p>
        </div>
        <div className="show-image">
          {props.show.image ? <img src={props.show.image.medium} /> : null}
        </div>
      </div>
      <style jsx>{`
        h1,
        a {
            font-family: 'Arial';
        }
        
        ul {
            padding: 0;
        }

        li {
            list-style:none;
            margin: 5px 0;
        }

        p {
            font-family: 'Roboto';
        }

        a:hover {
            opacity: 0.6;
        }

        .show-detail {
            max-width: 57vw;
            text-align: left;
        }
        .show-image {
            margin: auto;
        }
        .show-image, img {
            height: 50%;
        }
        img {
            border: 8px solid rgba(100,100,100,.5);
            border-radius: 4px;
        }
        .show {
            display: flex;
        }
      `}</style>
              
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