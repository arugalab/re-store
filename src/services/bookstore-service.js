export default class BookstoreService {
  data = [
    {
      id: 1,
      title:
        '"Surely You’re Joking, Mr. Feynman!": Adventures of a Curious Character',
      author: "Richard P. Feynman",
      img: "https://images-na.ssl-images-amazon.com/images/I/71YlE9HRIQL.jpg",
      price: 14,
    },
    {
      id: 2,
      title: "Martin Eden",
      author: "Jack London",
      img: "https://images-na.ssl-images-amazon.com/images/I/61tUmj1uhKL.jpg",
      price: 15,
    },
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.9) {
          reject(new Error("BookstoreService Error!"));
        }
        resolve(this.data);
      }, 700);
    });
  }
}
