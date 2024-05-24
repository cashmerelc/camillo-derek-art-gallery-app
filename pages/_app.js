import GlobalStyle from "../styles";
import useSWR from "swr";
import { Layout } from "../components/Layout";
import useState from "use-react-state";

export default function App({ Component, pageProps }) {
  const fetcher = async (url) => {
    const res = await fetch(url);

    // If the status code is not in the range 200-299,
    // we still try to parse and throw it.
    if (!res.ok) {
      const error = new Error("An error occurred while fetching the data.");
      // Attach extra info to the error object.
      error.info = await res.json();
      error.status = res.status;
      throw error;
    }

    return res.json();
  };

  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  // console.log("data", data);

  if (error) return <div>There was an error fetching the art pieces...</div>;
  if (isLoading) return <div>Loading...</div>;

  const [artPieces, setArtPieces] = useState(data);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} pieces={artPieces} />
      <Layout></Layout>
    </>
  );
}
