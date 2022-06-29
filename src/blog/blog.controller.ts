import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Query, Put, Delete } from '@nestjs/common'; 
import { BlogService } from './blog.service'; 
import { CreatePostDTO } from './dto/create-post.dto'; 
import { ValidateObjectId } from '../blog/shared/pipes/validate-object-id.pipes';   
@Controller('blog') 
export class BlogController {
[x: string]: any;constructor(private blogService: BlogService) { }      
@Get('posts')    
 async getPosts(@Res() res) 
{const posts = await this.blogService.getPosts();         
return res.status(HttpStatus.OK).json(posts);}
@Get('post/:postID')
async getPost(@Res() res, @Param('postID', new ValidateObjectId()) postID) 
{         
const post = await this.blogService.getPost(postID);
if (!post) throw new NotFoundException('Post does not exist!');  
return res.status(HttpStatus.OK).json(post);}
