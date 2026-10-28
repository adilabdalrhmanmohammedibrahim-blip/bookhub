

   import Button from "./Button";

   function BookCard({ title, author, category, image, buttonLabel }) {
     return (
       <div className="book-card">
         <img src={image} alt={title} />
         <h3>{title}</h3>
         <p>{author}</p>
         <a href="#">{category}</a>
         <Button label={buttonLabel} />
       </div>
     );
   }

   export default BookCard;