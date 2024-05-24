import GlobalStyle from "../styles";
import useSWR from "swr";
import { Layout } from "../components/Layout";
import React, { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {
  const [artPieces, setArtPieces] = useState([]);

  const fetcher = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      const error = new Error("An error occurred while fetching the data.");
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

  useEffect(() => {
    if (data) {
      setArtPieces(data);
    }
  }, [data]);

  if (error) return <div>There was an error fetching the art pieces...</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <GlobalStyle />
      {artPieces.length > 0 ? (
        <Component {...pageProps} pieces={artPieces} />
      ) : (
        <div>Loading...</div>
      )}

      <Layout />
    </>
  );
}
