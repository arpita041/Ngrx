import { counterReducer } from "src/state/counter.reducer";
import { counterState } from "src/state/counter.state";
import { postsReducer } from "src/state/post.reducer";
import { PostState } from "src/state/post.state";




export interface AppState {
    counter : counterState;
    posts : PostState;
}

export const AppReducer ={
   counter: counterReducer,
   posts: postsReducer
}