import { useRouter } from 'next/router';

const ArticlePage = (): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <h1>Ce qui lisez est l'article {router.query.articleId}</h1>
      <h2>Qu'est-ce qu'un compilateur ?</h2>
    </>
  );
};

export default ArticlePage;
