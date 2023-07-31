let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Diseñadora industrial interesada en diseño de espacios comerciales y mobiliario.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
