import Post from "../models/post.js";
import Repository from "../models/repository.js";
import Controller from "./Controller.js";

export default class PostController extends Controller{
    constructor(httpContext){
        super(httpContext, new Repository(new Post()))
    }

    listArticles(){
        this.HttpContext.JSON(
            this.repository.getAll(this.HttpContext.path.params)
        )
    }
    listArticlesFiltered(filter){
        let repo = this.repository.getAll(this.HttpContext.path.params);
        let filteredRepo =[];
        for(var post in repo){
            if(post.Title == filter || post.Text == filter || post.Category == filter){
                filteredRepo.push(post);
            }
        }
        this.HttpContext.JSON(filteredRepo);

    }
}