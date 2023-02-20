document.getElementById("contact-email").addEventListener("submit", function () {
    var nome = this.querySelector("input[name=nome]"),
        nome = nome.value;
    var email = this.querySelector("input[name=email]"),
        email = email.value;
    var texto = "Olá destinatário, \nMeu nome é " + nome + " e meu email é " + email;
    this.querySelector("input[name=Body]").setAttribute("value", texto);
});

const language = window.navigator.userLanguage;
console.log(language);