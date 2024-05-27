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

  function handleToggleFavorite(slug) {
    // See if the art piece is already in the array
    const info = artPieces.find((art) => art.slug === slug);
    if (info) {
      // If the art piece is already in the array, toggle the isFavorite value
      const newInfo = artPieces.map((artPiece) =>
        artPiece.slug === slug
          ? { ...artPiece, isFavorite: !artPiece.isFavorite }
          : artPiece
      );
      setArtPieces(newInfo);
    } else {
      // If the art piece is not in the array already, add it with the favorite as true
      const newInfo = [...artPieces, { slug, isFavorite: true }];
      setArtPieces(newInfo);
      console.log("artPieces:", artPieces);
    }
  }



  function handleSubmitComment(slug, comment) {
    // See if the art piece is already in the array
    const info = artPieces.find((art) => art.slug === slug);
    // If the art piece is in the array, add the submitted comments
    if (info) {
      const newInfo = artPieces.map((artPiece) => {
        if (artPiece.slug === slug) {
          if (artPiece.comments) {
            return {
              ...artPiece,
              comments: [...artPiece.comments, comment],
            };
          } else {
            return { ...artPiece, comments: [comment] };
          }
        }
      });
      setArtPieces(newInfo);
    } else {
      const newInfo = [...artPieces, { slug, comments: [comment] }];
      setArtPieces(newInfo);
    }
  }

  console.log("data: ", data);


  return (
    <Layout>
      <GlobalStyle />
      {artPieces.length > 0 ? (
        <Component
          {...pageProps}
          pieces={artPieces}
          artPieces={artPieces}
          onToggleFavorite={handleToggleFavorite}
          onSubmitComment={handleSubmitComment}
        />
      ) : (
        <div>Loading...</div>
      )}
    </Layout>
  );
}
