export class Message {
  constructor(
    public authorName: string = "",
    public message: string = ""
  ) {}

  build({authorName, message}): Message { //метод построения объекта для формы добавления
    this.authorName = authorName;
    this.message = message;

    return this;
  }

}