import "../styles/globals.css";
import useSWR from "swr";
import { Layout } from "../components/Layout";
import React, { useState, useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [artPieces, setArtPieces] = useLocalStorageState("art-pieces", {
    defaultValue: [],
  });

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
    if (data && artPieces.length === 0) {
      setArtPieces(data);
    }
  }, [data]);
  // useEffect(() => {
  //   if (data) {
  //     setArtPieces(data);
  //   }
  // }, [data]);

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
      console.log("afterClickIf", artPieces);
    } else {
      // If the art piece is not in the array already, add it with the favorite as true
      const newInfo = [...artPieces, { slug, isFavorite: true }];
      setArtPieces(newInfo);
      console.log("afterClickElse", artPieces);
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
        } else {
          return artPiece;
        }
      });
      setArtPieces(newInfo);
    } else {
      const newInfo = [...artPieces, { slug, comments: [comment] }];
      setArtPieces(newInfo);
    }
  }

  return (
    <Layout>
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
