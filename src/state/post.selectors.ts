import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostState } from "./post.state";



const getPostsState= createFeatureSelector<PostState>('posts');
 export const  getPosts= createSelector(getPostsState , (state)=>
 {
     console.log("state.posts"+state.posts);
     return state.posts;
 })