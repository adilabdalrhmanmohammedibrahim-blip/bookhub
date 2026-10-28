   import BookCard from "./BookCard";

   function BookList({ heading, books, buttonLabel }) {
     return (
       <section className="book-list">
         <h2>{heading}</h2>
         <div className="book-grid">
           {books.map((book) => (
             <BookCard
               key={book.id}
               title={book.title}
               author={book.author}
               category={book.category}
               image={book.image}
               buttonLabel={buttonLabel}
             />
           ))}
         </div>
       </section>
     );
   }

   export default BookList;