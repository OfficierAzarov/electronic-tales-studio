import Link from 'next/link';

const HomePage = (): JSX.Element => {
  return (
    <>
      <h1>Electronic Tales : le studio</h1>
      <ul>
        <li>
          <Link href="/articles/create">Je veux écrire un nouvel article</Link>
        </li>
        <li>
          <Link href="/articles">Je veux éditer un article</Link>
        </li>
      </ul>
    </>
  );
};

export default HomePage;
