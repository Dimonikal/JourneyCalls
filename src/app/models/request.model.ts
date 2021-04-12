export class Request {
    constructor(
      public authorId:number = 0,
      public postId: number = 0,
      public date = "",
      public id?: number
    ) {}
  
    buildPost({authorId, postId, date}): Request {
      this.authorId = authorId;
      this.postId = postId;
      this.date = date;
  
      return this;
    }
  
    buildPut({authorId, postId, date, id}): Request {
        this.authorId = authorId;
        this.postId = postId;
        this.date = date;
        this.id = id;
    
        return this;
      }
  }
  