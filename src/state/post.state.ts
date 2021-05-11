import {Post} from  './../app/model/post.model';


export interface PostState {
    posts: Post[];
}


export const initialState : PostState ={
    posts: [
        {id:'1' , title: 'Sample 1' ,description : ' des 1'},
        {id:'2' , title: 'Sample 2' ,description : ' des 2'}
    ],
};

 