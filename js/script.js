const countriesList = document.getElementById('countries-list')
let countries;
let clic = 1;

const getCountries = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3/all');
      if (!response.ok) {
        throw new Error('ha surgifo un error', response.status);
      }
      const data = await response.json();
      countries = data.sort((a,b) => a.name.common.localeCompare(b.name.common))
      console.log(countries)
      return countries;
    } catch (error) {
      console.log('Error al obtener los datos', error);
    }
};
const divLogin = () => {
    if(clic==1){
        document.getElementById("moreInformation").style.display = "flex";
        clic = clic + 1;
    } else{
         document.getElementById("moreInformation").style.display = "none";      
         clic = 1;
    }   
}

setTimeout(() => {
    countries.forEach((data) => {
        let template = `<div class="globalContainer">
                            <div class="minContainer" onclick="divLogin()">
                                <img src="${data.flags[0]}" alt="Flag of ${data.name.common}">
                                <p class="countrieName">${data.name.common}</p>
                            </div>
                            <div class="maxContainer" id="moreInformation">
                                <img src=${data.flags[0]}>
                                <p>${data.name.common}</p>
                                <p>Capital: ${data.capital}</p>
                                <p>Población: ${data.population}</p>
                                <p>Lado por dnde conducen: ${data.car.side}</p>
                                <input type="button" value="Cerrar" onclick="ocultarDatos(this)">
                            </div>
                        </div>`;
        countriesList.innerHTML += template;
    });
    //countries.forEach(element => {
       // print(element.name.common, element.flags[0])              
      //});
},10)

const print = (name, img) => {
    countriesList.innerHTML+='';
    countriesList.innerHTML+=`
    <div class="countries">
    <img src="${img}" alt="Flag of ${name}">
    <p>${name}</p>
    </div>
    `;
}

getCountries()
  