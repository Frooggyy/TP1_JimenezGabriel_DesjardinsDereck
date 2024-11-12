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
}