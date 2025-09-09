import React from "react";
import  CategoriesLoading  from "@/components/categories";
import  FeatureMovieLoading  from "@/components/featured-movie";
import  MoviesSectionLoading  from "@/components/movies-section";

function HomeLoading() {
  return (
    <> 
        <CategoriesLoading />
         <FeatureMovieLoading />
         <MoviesSectionLoading />
      <MoviesSectionLoading />
      <MoviesSectionLoading />
    </>
    );
}
export default HomeLoading;