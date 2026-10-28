
   import Button from "./Button";

   function Hero({ welcome, headline, tagline, buttonLabel, image, imageAlt }) {
     return (
       <section className="hero">
         <div className="hero-text">
           <p>{welcome}</p>
           <h1>{headline}</h1>
           <p>{tagline}</p>
           <Button label={buttonLabel} />
         </div>
         <img src={image} alt={imageAlt} />
       </section>
     );
   }

   export default Hero;