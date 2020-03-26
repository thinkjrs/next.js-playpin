import { useRouter } from 'next/router';
import useSWR from 'swr';


function fetcher(url) {
  return fetch(url).then(r => r.json());
}


export default function Index() {
  const query = useRouter();
  const { data, error } = useSWR(
    `/api/randomQuote${query.author ? '?author=' + query.author : ''}`, 
    fetcher
  );
  // The following line has optional chaining, added in Next.js v9.1.5,
  // is the same as `data && data.author`
  const author = data?.author;
  let quote = data?.quote;

  if (!data) quote = 'Loading...';
  if (error) quote = "Well that's embarrasing, we failed to fetch a quote. Sorry!";
  return (
    <main className="center">
      <div className="quote">{quote}</div>
      {author && <span className="author"> - {author} </span>}

      <style jsx>{`
        main {
          width: 90%;
          max-width: 900px;
          margin: 300px auto;
          text-align: center;
        }
        .quote {
          font-family: cursive;
          color: #ff0000;
          font-size: 48px;
          padding-bottom: 10px;
        }
        .author {
          font-family: sans-serif;
          color: rgba(155,155,155);
          font-size: 30px;
        }
      `}</style>
    </main>
  )
}
