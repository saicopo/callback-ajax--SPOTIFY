/*async function ottieniDati() {
    try {
      // Faccio una request di tipo GET all'ENDPOINT di JSONPlaceholder
      let risposta = await fetch("https://catfact.ninja/fact");
  
      // Se la risposta non è ok, genero un errore
      if (!risposta.ok) {
        throw new Error(`Errore HTTP: ${risposta.status}`);
      }
  
      // Se la risposta è ok (200-299), allora converto la risposta in JSON
      let dati = await risposta.json();
  
      // Operazioni con la risposta
      console.log("Dati ricevuti:", dati);
    } catch (error) {
      console.error("Errore durante il fetch", error);
    }
  }*/
  

 // ottieniDati();
  
  let cambia = document.getElementsByName("bottone")
  let copertina = document.getElementById("copertina")
  cambia.addEventListner("click",()=>

    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem")
    .then((response) => response.json())
    .then((data)=>{
        copertina.textContent = data.id
    })
        .catch((error)=>{
    copertina.textContent = "error"
    console.error("errore chiamata",error)
        })

)
/*const endpoint='https://spotify23.p.rapidapi.com/tracks';
const wesPromise = fetch(endpoint);
console.log(wesPromise);


const linkApi = 'https://spotify23.p.rapidapi.com/tracks/?ids=4WNcduiCmDNfmTEz7JvmLv';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'd8e0d1da45mshbdde4fdd487a450p16d763jsnba973de61886',
		'x-rapidapi-host': 'spotify23.p.rapidapi.com'
	}
};

try {
	const response = await fetch(linkApi, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error("Giradischi Rotto",error);
}*/