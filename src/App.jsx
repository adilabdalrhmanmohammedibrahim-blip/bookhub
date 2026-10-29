
   import Navbar from "./components/Navbar";
   import Hero from "./components/Hero";
   import BookList from "./components/BookList";
   import books from "./data/books";
   import navLinks from "./data/navLinks";

   function App() {
     return (
       <>
       
         <Navbar
            logo="/images/1.png"
            logoAlt="BookHub logo"
           brand="BookHub"
           links={navLinks}
           searchPlaceholder="Search books..."
           buttonLabel="Add Book"
         />
         <Hero
           welcome="Welcome to BookHub"
           headline="Discover Great Books"
           tagline="Read. Learn. Grow."
           buttonLabel="Browse Books"
           image="/images/Gemini_Generated_Image_atsjswatsjswatsj.jpeg"
           imageAlt="Stack of books next to a plant"
         />
         <BookList
           heading="Featured Books"
           books={books}
           buttonLabel="View Details"

           
         />
       </>
     );
   }

   export default App;

   