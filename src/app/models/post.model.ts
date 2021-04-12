export class Post {
  constructor(
    public title: string = "",
    public src: string = "",
    public desc: string = "",
    public id?: number
  ) {}

  buildPost({title, src, desc}): Post {
    this.title = title;
    this.src = src;
    this.desc = desc;

    return this;
  }

  buildPut({idEdit, titleEdit, srcEdit, descEdit}): Post {
    this.title = titleEdit;
    this.src = srcEdit;
    this.desc = descEdit;
    this.id = idEdit;

    return this;
  }
}
