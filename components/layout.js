import Head from 'next/head';
import Link from 'next/link';

export default function Layout( { children, home } ) {
  return (
    <div>
      <Head>
        <title>Basic Next.js App</title>
      </Head>
      <header>
        <nav>
          <a href="https://santarosa.edu">SRJC</a>
        </nav>
      </header>
      <main>{children}</main>
      {!home && (
          <Link href="/">
            <a class="btn btn-primary mt-3">← Back to home</a>
          </Link>
        )
      }
      <footer>
        <p>The footer</p>
      </footer>
    </div>
  );
}