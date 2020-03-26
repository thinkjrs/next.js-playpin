/*
 * index.js
 * Sample index page from the nextjs.org/learn tutorials.
 *
 */

import Link from 'next/link'; // Client-side navigation
import Header from '../comps/Header';

export default function Index() {
    return (
        <div>
          <Header />
          <h1>Hello, world!</h1>
          <p><small><code>With Next.js.</code></small></p>
        </div>
    );
}
