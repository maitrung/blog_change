import { Injectable } from '@nestjs/common'; 
import { Model } from 'mongoose'; 
import { InjectModel } from '@nestjs/mongoose'; 
import { Post } from './interfaces/post.interface';
 import { CreatePostDTO } from './dto/create-post.dto'; 
  @Injectable() export class BlogService {
    constructor(@InjectModel('Post') private readonly postModel: Model<Post>) { }      
        async getPosts(): Promise<Post[]> {         
            const posts = await this.postModel.find().exec();         
            return posts;
    }      
        async getPost(postID): Promise<Post> {
            const post = await this.postModel.findById(postID).exec();         
            return post;}  
        async addPost(title:string,description:string,body:string,author:string,date_posted:string): Promise<Post> 
            {   const newPost = new this.postModel({title,description,body,date_posted,author});         
                return newPost.save();     
            }     
