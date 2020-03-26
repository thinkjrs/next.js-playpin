/*
* [id].js
* Dynamic page tutorial examplar from nextjs.org Learn tutorial.
*/
import { useRouter } from 'next/router';
import Layout from '../../components/ContentPropLayout';


const Content = () => {
  const router = useRouter();
  return (
    <>
      <h1>{router.query.id}</h1>
      <p>
        <strong>
          Fantastic 
        </strong> blog post content!
      </p>
    </>
  );
};


export default function Post() {
  return (
  <Layout content={<Content />} />
  )
};