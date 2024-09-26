const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector("name"); // comillas dobles 
const $b = document.querySelector("blog"); // no usar #
const $l = document.querySelector("location"); // tampoco puntos

async function displayUser(username) { // faltaba async para poder usar tambien await
  $n.textContent = 'cargando...';
  try {
    const response = await fetch(`${usersEndpoint}/${username}`); // se implementa un try para validar info de API
    
    if (!response.ok) {// se implementa un if para saber la respuesta de Api
      throw new Error('Error en la respuesta de la API');
    }
    const data = await response.json();//Asegurar la respuesta de JSON
    
  $n.textContent = `${data.name}`;//va con backticks
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
} catch (err) {//se implenta catch para el error
  handleError(err);
}
}

function handleError(err) {
  console.log("OH NO!"); //doble comillas
  console.log(err);
  $n.textContent = `Algo salió mal: ${err.message}`//faltaba el simbolo $ en n
}

displayUser('stolinski').catch(handleError);