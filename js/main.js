var contactForm = document.querySelector('#contact-form');
var contactInputs = document.querySelector('#contact-form').elements
var contactValues = [];
//para pegar valores dos checkbox do form:
//var contactCheckbox = document.querySelector('input[name="marketing"]:checked').value
console.log(contactForm);


let nome = document.querySelector('input[name="nome"]');
let email = document.querySelector('input[name="email"]');
let mensagem = document.querySelector('textarea[name="mensagem"]');
let marketing = document.querySelector('input[name="marketing"]');
let newsletter = document.querySelector('input[name="newsletter"]');


// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     
//     for ( let i = 0; i < contactInputs.length; i++ ){
//         console.log(contactInputs[i].nodeName);
//         console.log(contactInputs[i].ckecked);
//         if (contactInputs[i].nodeName === 'INPUT' || contactInputs[i].nodeName ==="TEXTAREA" ){
//           contactValues.push(contactInputs[i].value);
//         }
//     }
//     console.log(contactValues);
// });

//FormData 

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let data = {
        'nome': nome.value,
        'email': email.value,
        'mensagem': mensagem.value,
        'marketing': marketing.value,
        'newsletter': newsletter.value,
    }
    
    // transformando em Array para adicionar objeto:  ("ou" de if ternário em caso de null)
    let contatos = JSON.parse(localStorage.getItem('contatos')) || []; // 'contatos' = key

    //adicionando item dentro do Array:
    contatos.push(data);

    //enviando o Array com novo item para localStoragem como String:
    localStorage.setItem('contatos', JSON.stringify(contatos));

    console.log(data);

    exibeMensagem();

});

const exibeMensagem = (mensagem) => {
    let mensagem = document.querySelector('.message-contact');
    
    mensagem.classList.remove('d-none');
    mensagem.innerHTML = "Mensagem enviada com sucesso!";
    
    setTimeout( () => {
        mensagem.classList.add('d-none');
    },1500);
};

//forEach usando innerHTML