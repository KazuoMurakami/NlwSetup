const form = document.querySelector('#form-habits');
const button = document.querySelector('header .button');
const nlwSetup = new NLWSetup(form);

button.addEventListener('click',add);

form.addEventListener('change',save);

function save () {
  localStorage.setItem('NlwSetupBackup', JSON.stringify(nlwSetup.data)); //json stringify transforma um objeto em uma string 
}

function add(){
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5);
  const dayExist = nlwSetup.dayExists(today);
  
  if(dayExist){
    window.alert('já existe')
    return;
  }else {
  window.alert('passou')
  } 

  nlwSetup.addDay(today);

}

const data = JSON.parse(localStorage.getItem('NlwSetupBackup')) || {}; // json.parse transforma o arquivo novamente em um objeto
nlwSetup.setData(data);
nlwSetup.load();