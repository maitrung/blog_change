import { Injectable, Delete } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './interfaces/post.interface';
import { CreatePostDTO } from './dto/create-post.dto';

@Injectable()
export class BlogService {

    constructor(@InjectModel('Post') private readonly postModel: Model<Post>) { }

    async getPosts(): Promise<Post[]> {
        const posts = await this.postModel.find().exec();
        return posts;
    }

    async getPost(postID): Promise<Post> {
        const post = await this.postModel.find(postID).exec();
        return post;
    }

    async addPost(createPostDTO: CreatePostDTO): Promise<Post> {
        const newPost = await this.postModel(createPostDTO);
        return newPost.save();
    }

    async editPost(id, createPostDTO: CreatePostDTO): Promise<Post> {
        const editedPost = await this.postModel
            .findOneAndUpdate(id, createPostDTO, { new: true });
        return editedPost;
    }

    async deletePost(id): Promise<Post> {
        const deletedPost = await this.postModel.findOneAndDelete(id);
        
        return deletedPost.save();
    }

}
