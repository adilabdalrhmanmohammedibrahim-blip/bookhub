
   import Button from "./Button";

      function Navbar({ logo, logoAlt, brand, links, searchPlaceholder, buttonLabel }) {
     return (
       <nav className="navbar">
           <img className="navbar-logo" src={logo} alt={logoAlt} />
          <span className="navbar-brand">{brand}</span>
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

   
