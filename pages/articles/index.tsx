import Link from 'next/link';

const ArticlesPage = (): JSX.Element => {
  /**
   * doc: https://timmousk.com/blog/typescript-array-of-objects/
   */

  const articles: { id: string; title: string }[] = [
    { id: '1', title: 'blabla1' },
    { id: '2', title: 'blabla2' },
    { id: '3', title: 'blabla3' },
  ];

  return (
    <>
      <h1>Articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link href={`/articles/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ArticlesPage;
