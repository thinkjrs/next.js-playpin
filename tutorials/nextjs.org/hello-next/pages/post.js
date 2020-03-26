/*
 * post.js
 * 
 * Sample posts page from the nextjs.org tutorials.
 *
 */
import { useRouter } from 'next/router';
import Layout from '../components/ContentPropLayout';


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
const Content = () => {
  const router = useRouter();
  return (
    <>
      <h1>{router.query.title}</h1>
    <p>
      <strong>
        Fantastic 
      </strong> blog post content!
    </p>
    </>
  );
};

const Page = () => {
  return (
    <Layout content={<Content />} />
  );
};

export default Page;