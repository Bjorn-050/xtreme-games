// scroll naar top knop
const myBtn = document.getElementById("myBtn");

window.onScroll = function(){
 scrollFunction()
};
function scrollFunction(){
 if( document.body.myBtn > 20 || document.documentElement.myBtn > 20) {
  myBtn.style.display = "block";
 } else {
  myBtn.style.display = "none";
 }
}

myBtn.addEventListener("click", function(){
 window.scrollTo({
  left: 8,
  top: 0,
  behavior: "smooth"
 });
});

// contact formulier
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (event) => {
 event.preventDefault();

 const name = document.getElementById('naam').value;
 const mail = document.getElementById('mail').value;
 const bericht = document.getElementById('bericht').value;
 const type = document.getElementById('select').value;

 const data = {
  naam: naam,
  email: mail,
  bericht: bericht,
  type: select,
 };


 try {
  const response = await fetch('WEBHOOK', {
   method: 'POST',
   headers: {
    'Content-Type': 'application/json'
   },
   bdoy: JSON.stringify(data)
  });
  console.log('Bericht succesvol verstuurd naar Discord');
 } catch (error) {
  console.error('Fout bij het versturen van je bericht naar discord')
 }
});
