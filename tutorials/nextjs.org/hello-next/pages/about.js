import Layout from '../components/ContentPropLayout';


const aboutPageContent =
  <div>
  <h1><strong>This</strong> is the about page</h1>
  <p><small><code>Using Next.js.</code></small></p>
  </div>;

export default function About() {
    return (
      <Layout content={aboutPageContent}>
      </Layout>
    );
}
