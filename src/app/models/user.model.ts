export class User {
    constructor(
      public userName: string = "",
      public email: string = "",
      public password: string = "",
      public messages = [],
      public notifications = [],
      public id?: number
    ) {}
  
    build({userName, email, password}): User {
      this.userName = userName;
      this.email = email;
      this.password = password;

      return this;
    }
  }
  