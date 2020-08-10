export default class BookstoreService {
  getBooks() {
    return [
      {
        id: 1,
        title: "The Subtle Art of Not Giving a Fuck",
        author: "Mark Manson",
        img: "https://images-na.ssl-images-amazon.com/images/I/71QKQ9mwV7L.jpg",
        price: 14,
      },
      {
        id: 2,
        title: "Everything Is Fucked",
        author: "Mark Manson",
        img: "https://images-na.ssl-images-amazon.com/images/I/7195f4cdAVL.jpg",
        price: 15,
      },
    ];
  }
}
