import PostModel from "../models/post";
import Repository from "../models/repository";
import Controller from "./Controller";

export default class PostController extends Controller{
    constructor(httpContext){
        super(httpContext, new Repository(new PostModel()))
    }

    listArticles(){
        this.HttpContext.JSON(
            this.repository.getAll(this.HttpContext.path.params)
        )
    }
}