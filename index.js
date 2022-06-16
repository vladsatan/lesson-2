const root = document.getElementById('root');

//Создание основной формы

const createForm = (windowName, formName, h1) => {
    const container = document.createElement('div');
    container.classList.add(windowName);

    const form = document.createElement('form');
    form.classList.add(formName);


    

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = h1;

    container.append(form);
    form.append(title);

    root.append(container);

   const checkBoxContainer = document.createElement('div');
   checkBoxContainer.classList.add('checkBoxContainer');
   const checkbox = createInput('', 'checkbox', '', 'checkbox', '');
   

   const a = document.createElement('a');
   a.textContent = 'Пользовательское соглашение';
   checkBoxContainer.append(checkbox,a);

   
const nameInput = createInput('Введите имя', 'text', 'Имя', 'inputs', 'name')
const sernameInput = createInput('Введите фамилию', 'text', 'Фамилия', 'inputs', 'sername')
const ageInput = createInput('Введите ваш возраст', 'text', 'Возраст', 'inputs', 'age')
const mailInput = createInput('Введите email', 'email', 'E-mail', 'inputs', 'email')
const telInput = createInput('Введите телефон', 'tel', 'Номер телефона', 'inputs', 'phone')
const countryInput = createInput('Введите вашу страну', 'text', 'Страна', 'inputs', 'contry')
const buttonInput = createButton('Зарегистрироваться');

form.append(nameInput, sernameInput, ageInput, mailInput, telInput, countryInput, checkBoxContainer,buttonInput);


//Запуск проверки инпутов

inputChecks()





//Проверка формы для submit



form.addEventListener('submit', (e) => {
    e.preventDefault()
    const errormassage = Array.from(document.querySelectorAll('.errormassage'))
    const ckeckbox = document.getElementsByClassName('checkbox')
    const checkboxArray = Array.from(ckeckbox)
    const inputs = Array.from(document.querySelectorAll('.inputs'))
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    // Проверка полей Inputs

    if (inputs[0].value.length === 0 || inputs[0].value.length < 5){
        errormassage[0].textContent = 'Поле должно содержать не менее 5 символов'
        return
    }

    if (inputs[1].value.length === 0 || inputs[1].value.length < 5){
        errormassage[1].textContent = 'Поле должно содержать не менее 5 символов'
        return
    }

    if (inputs[2].value.length === 0 || !inputs[2].value.match(/\d/) || isFinite(Number(inputs[2].value)) === false){
        errormassage[2].textContent = 'Поле должно содержать только целые числа'
        return
    }

    if (inputs[3].value.length === 0 || re.test(inputs[3].value) === false){
        errormassage[3].textContent = 'Неверный формат записи Email'
        return
    }

    if (inputs[4].value.length === 0 || !inputs[4].value.match(/^\d+/) || inputs[4].value.length < 10 || inputs[4].value.length > 10 || isFinite(Number(inputs[4].value)) === false){
        errormassage[4].textContent = 'Номер должен состоять из 10 цифр!'
        return
    }

    if (inputs[5].value.length === 0 || inputs[5].value.length < 5){
        errormassage[5].textContent = 'Поле должно содержать не менее 5 символов'
        return
    }







    //Проверка Checkbox
    
    if(checkboxArray[0].checked === false){
        alert('Необходимо принять пользовательское соглашение')
        return
    };
    

   
     

     
       
        

        const userInfo = {};

        let info = document.getElementsByClassName('inputs')
        let infoArray = Array.from(info)

        userInfo.name = infoArray[0].value
        userInfo.sername = infoArray[1].value
        userInfo.age = infoArray[2].value
        userInfo.email = infoArray[3].value
        userInfo.number = infoArray[4].value
        userInfo.country = infoArray[5].value
        console.log(userInfo);
    
})
    
    
    return container
}



//Функция создания инпутов

const createInput = (placeholder ='', type, lable, className, name, value) =>{

    const errorBox = document.createElement('div');

    const p = document.createElement('p')
    p.classList.add('errormassage')
    

    const input = document.createElement('input');
    input.classList.add(className);
    input.setAttribute('name', name);
    if(value){
        input.setAttribute('value', value);
    }
    if(type){
        input.setAttribute('type', type);
    } else {
        input.setAttribute('type', 'text');
    }
    input.setAttribute('placeholder', placeholder);
    
   

    const label = document.createElement('label');
    label.classList.add('labels');
    label.setAttribute('name', name);
    label.textContent = lable;

    errorBox.append(label);
    errorBox.append(input);
    errorBox.append(p);
    
    

    
    return errorBox
}


//Функция создания кнопки

const createButton = (text) => {
    const button = document.createElement('button')
    button.classList.add('regBtn')
    button.textContent = text;
    return button;
}



//Проверка и стилизация inputs


function inputChecks(){

const inputs = document.getElementsByClassName('inputs');
const inputsArray = Array.from(inputs)
const p = document.getElementsByClassName('errormassage')
const pArray = Array.from(p)


//Проверка Имени

inputsArray[0].addEventListener('focus', (e) => {
    e.preventDefault()
    inputsArray[0].classList.add('focused')
})
inputsArray[0].addEventListener('blur', () => {
    inputsArray[0].classList.remove('focused')

    if(inputsArray[0].value.length < 5 || inputsArray[0].value.length === ''){
        pArray[0].textContent = 'Поле должно содержать не менее 5 символов'
    } else { pArray[0].textContent = ''}
})


//Проверка Фамилии

inputsArray[1].addEventListener('focus', (e) => {
    e.preventDefault()
    inputsArray[1].classList.add('focused')
})
inputsArray[1].addEventListener('blur', () => {
    inputsArray[1].classList.remove('focused')
    if(inputsArray[1].value.length < 5 || inputsArray[1].value.length === ''){
        pArray[1].textContent = 'Поле должно содержать не менее 5 символов'
    }else { pArray[1].textContent = ''}
})



//Проверка возраста


inputsArray[2].addEventListener('focus', (e) => {
    e.preventDefault()
    inputsArray[2].classList.add('focused')
})
inputsArray[2].addEventListener('blur', () => {
    inputsArray[2].classList.remove('focused')
    if (!inputsArray[2].value.match(/^\d+/) || !inputsArray[2].value.length === ''){
        pArray[2].textContent = 'Поле должно содержать только целые числа'
    }else { pArray[2].textContent = ''}
    
    
})


//Проверка почты


inputsArray[3].addEventListener('focus', (e) => {
    e.preventDefault()
    inputsArray[3].classList.add('focused')
})
inputsArray[3].addEventListener('blur', () => {
    inputsArray[3].classList.remove('focused')
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if ( re.test(inputsArray[3].value) === false || inputsArray[3].value.length === '' ){
        pArray[3].textContent = 'Неверный формат записи Email'
    }else { pArray[3].textContent = ''}
})


//Проверка номера


inputsArray[4].addEventListener('focus', (e) => {
    e.preventDefault()
    inputsArray[4].classList.add('focused')
})
inputsArray[4].addEventListener('blur', () => {
    inputsArray[4].classList.remove('focused')
    if (!inputsArray[4].value.match(/^\d+/) || inputsArray[4].value.length === '' || inputsArray[4].value.length < 10  || inputsArray[4].value.length > 10 ){
        pArray[4].textContent = 'Номер должен состоять из 10 цифр!'
    }else { pArray[4].textContent = ''}
})


//Проверка страны


inputsArray[5].addEventListener('focus', (e) => {
    e.preventDefault()
    inputsArray[5].classList.add('focused')
 
    
})
inputsArray[5].addEventListener('blur', () => {
    inputsArray[5].classList.remove('focused')
    if(inputsArray[5].value.length < 5 || inputsArray[5].value.length === ''){
        pArray[5].textContent = 'Поле должно содержать не менее 5 символов'
    }else { pArray[5].textContent = ''}
})
   

}


const newForm = createForm('conteiner', 'regForm', 'Регестрация' );








