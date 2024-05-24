import GlobalStyle from "../styles";
import useSWR from "swr";
import { Layout } from "../components/Layout";
import React, { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {
  const [artPieces, setArtPieces] = useState([]);
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

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
  console.log(data);
  useEffect(() => {
    if (data) {
      setArtPieces(data);
    }
  }, [data]);

  if (error) return <div>There was an error fetching the art pieces...</div>;
  if (isLoading) return <div>Loading...</div>;

  function handleToggleFavorite(slug) {
    console.log("Favorite clicked");
    // See if the art piece is already in the array
    const info = artPiecesInfo.find((art) => art.slug === slug);
    if (info) {
      // If the art piece is already in the array, toggle the isFavorite value
      const newInfo = artPiecesInfo.map((info) => {
        info.slug = slug
          ? { ...info, isFavorite: !info.isFavorite }
          : info.isFavorite;
      });
      setArtPiecesInfo(newInfo);
    }
    // If the art piece is not in the array already, add it with the favorite as true
    const newInfo = [...artPiecesInfo, { slug, isFavorite: true }];
    setJokesInfo(newInfo);
  }

  return (
    <>
      <GlobalStyle />
      {artPieces.length > 0 ? (
        <Component
          {...pageProps}
          pieces={artPieces}
          artPiecesInfo={artPiecesInfo}
          isFavorite={artPiecesInfo.isFavorite}
          onToggleFavorite={handleToggleFavorite}
        />
      ) : (
        <div>Loading...</div>
      )}

      <Layout />
    </>
  );
}
