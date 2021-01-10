class NewsCompany {
  constructor(url, parameter) {
    this.url = url + "/" + parameter;
  }

  async get() {
    let posts = await fetch(this.url)
      .then((response) => response.json())
      .then((json) => json);
    return posts;
  }
}

class Writer {
  constructor(news) { ///Dependency injection 
    this.news = news; //inject the object to writer 
  }
//The only writer's responsabilty is to write the post
  async showPosts() {
    this.posts = await this.news.get(); //through news we get the data 
    console.log(this.posts);
  }
}

const idUser=2;
let news = new NewsCompany("https://jsonplaceholder.typicode.com/todos/", idUser);//Get posts from this user


let writer = new Writer(news);
writer.showPosts();


/*
 Real example in Angular 
 let news = container.get("news")


*/