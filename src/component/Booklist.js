import Book from "./Book";
import img1 from "../Images/book-1.jpg";
import img2 from "../Images/book-2.jpg";
import img3 from "../Images/book-3.jpg";

const books = [
  {
    author: "Tom Cotton",
    title: "Seven things you can't say abou China",
    img: img1,
    id: 1,
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: img2,
    id: 2,
  },
  {
    author: "Susan Morrison",
    title: "Lorne",
    img: img3,
    id: 3,
  },
];

const Booklist = () => {
  return (
    <>
      <h1 className="heading">Amazon BestSellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return <Book {...book} key={books.id} number={index} />;
        })}
      </section>
    </>
  );
};
export default Booklist;
