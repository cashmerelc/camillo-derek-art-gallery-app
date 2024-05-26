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
  useEffect(() => {
    if (data) {
      setArtPieces(data);
    }
  }, [data]);

  if (error) return <div>There was an error fetching the art pieces...</div>;
  if (isLoading) return <div>Loading...</div>;

  function handleToggleFavorite(slug) {
    console.log("Favorited slug:", slug);

    // See if the art piece is already in the array
    const info = artPiecesInfo.find((art) => art.slug === slug);
    if (info) {
      // If the art piece is already in the array, toggle the isFavorite value
      const newInfo = artPiecesInfo.map((pieceInfo) =>
        pieceInfo.slug === slug
          ? { ...pieceInfo, isFavorite: !pieceInfo.isFavorite }
          : pieceInfo
      );
      console.log("newInfo when already favorited: ", newInfo);
      setArtPiecesInfo(newInfo);
    } else {
      // If the art piece is not in the array already, add it with the favorite as true
      const newInfo = [...artPiecesInfo, { slug, isFavorite: true }];
      console.log("newInfo when first time favoriting: ", newInfo);
      setArtPiecesInfo(newInfo);
    }
  }

  console.log("artPiecesInfo: ", artPiecesInfo);

  return (
    <Layout>
      <GlobalStyle />
      {artPieces.length > 0 ? (
        <Component
          {...pageProps}
          pieces={artPieces}
          artPiecesInfo={artPiecesInfo}
          onToggleFavorite={handleToggleFavorite}
        />
      ) : (
        <div>Loading...</div>
      )}
    </Layout>
  );
}
