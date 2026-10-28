
   import Button from "./Button";

   function Navbar({ brand, links, searchPlaceholder, buttonLabel }) {
     return (
       <nav className="navbar">
         <span className="navbar-brand">{brand}</span>
         <ul className="navbar-links">
           {links.map((link) => (
             <li key={link.id}>
               <a href={link.href}>{link.label}</a>
             </li>
           ))}
         </ul>
         <input type="search" placeholder={searchPlaceholder} />
         <Button label={buttonLabel} />
       </nav>
     );
   }

   export default Navbar;