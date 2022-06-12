import authenticatedRoute from "components/AuthenticatedRoute";
import type { NextPage } from "next";
import Head from "next/head";
import { useAuth } from "utils/Auth";

const Home: NextPage = (props) => {
  const auth = useAuth()
  return (
    <div>
      <Head>
        <title>Solana Scaffold</title>
        <meta
          name="description"
          content="Solana Scaffold"
        />
      </Head>
      <h1>Hello {auth.user}</h1>
    </div>
  );
};

export default Home;
