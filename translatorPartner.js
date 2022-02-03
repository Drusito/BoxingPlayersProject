// Obtenir l'idioma de la URL si existeix i executar la funció "changeLanguage"
const querystring = window.location.search; // Si la url és "https://miweb.es?lang=es" , retorna ?lang=es
const urlParams = new URLSearchParams(querystring);
if (urlParams.get('lang')) {
const lang = urlParams.get('lang');
changeLanguage(lang);
}

async function changeLanguage(lang) {
  // Guardar l'idioma a la URL
const newURL = window.location.protocol + '//' + window.location.host + window.location.pathname + '?lang=' + lang;
window.history.replaceState({}, '', newURL);

  // Obtenir el fitxer json corresponent
const response = await fetch(`../${lang}.json`);
const data = await response.json();

//Getelements
var path = window.location.pathname;
var page = path. split("/"). pop();
console.log("Page is:" +page);

//Header
document.getElementById('t-centrosFitness-mobile').innerHTML = data.centroFitness;
document.getElementById('t-actividades-mobile').innerHTML = data.actividades;
document.getElementById('t-horarios-mobile').innerHTML = data.horarios;
document.getElementById('t-hazteSocio-mobile').innerHTML = data.centroFitness;
document.getElementById('t-centrosFitness').innerHTML = data.centroFitness;
document.getElementById('t-actividades').innerHTML = data.actividades;
document.getElementById('t-horarios').innerHTML = data.horarios;
document.getElementById('t-hazteSocio').innerHTML = data.hazteSocio;

//HazteSocioPage
if(page == "haztesocio.html"){
  document.getElementById('t-hazteSocio-title').innerHTML = data.hazteSocio;
  document.getElementById('t-notHuman').innerHTML = data.t_notHuman;
  document.getElementById('t-first-name').innerHTML = data.firstName;
  document.getElementById('t-last-name').innerHTML = data.lastName;
  document.getElementById('t-birthday').innerHTML = data.birthDay;
  document.getElementById('t-morning').innerHTML = data.morning;
  document.getElementById('t-evening').innerHTML = data.evening;
  document.getElementById('t-allday').innerHTML = data.allDay;
  document.getElementById('t-register').innerHTML = data.register;
}
//Horarios Page
else if(page == "horarios.html"){
document.getElementById('t-horarios').innerHTML = data.horarios;
document.getElementById('t-horarios-title').innerHTML = data.horariosTitle;
}
//Actividades Page
else if(page == "actividades.html"){
document.getElementById('t-actividades-title').innerHTML = data.actividadesTitle;
document.getElementById('tp1-boxing').innerHTML = data.p1Boxing;
document.getElementById('tp2-boxing').innerHTML = data.p2Boxing;
document.getElementById('tp3-boxing').innerHTML = data.p3Boxing;
document.getElementById('tp4-boxing').innerHTML = data.p4Boxing;
document.getElementById('tp1-pesas').innerHTML = data.p1_pesas;
document.getElementById('tp2-pesas').innerHTML = data.p2_pesas;
document.getElementById('tp3-pesas').innerHTML = data.p3_pesas;
document.getElementById('tp1-pesas-mobile').innerHTML = data.p1_pesas;    
document.getElementById('tp2-pesas-mobile').innerHTML = data.p2_pesas;
document.getElementById('tp3-pesas-mobile').innerHTML = data.p3_pesas;
}
//Main Page
else if(page == "index.html"){
document.getElementById('t-bannerTitle').innerHTML = data.bannerTitle;
document.getElementById('t-cuota').innerHTML = data.bannerCuota;
document.getElementById('t-bannerInput').innerHTML = data.hazteSocio;
}
else if(page == "centros.html") document.getElementById('t-centrosFitness-title').innerHTML = data.centros;
//Footer
// document.getElementById("t-centrosFitness-title").innerHTML = data.centroFitness;
document.getElementById('t-contact').innerHTML = data.contact;
document.getElementById('t-direction').innerHTML = data.direction;
}