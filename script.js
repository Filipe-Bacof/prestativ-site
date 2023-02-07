document.getElementById("contact-email").addEventListener("submit", function () {
    var nome = this.querySelector("input[name=nome]"),
        nome = nome.value;
    var email = this.querySelector("input[name=email]"),
        email = email.value;
    var texto = "Olá destinatário, \nMeu nome é " + nome + " e meu email é " + email;
    this.querySelector("input[name=Body]").setAttribute("value", texto);
});

const contato = document.getElementById("contact-us");
const positionOfElement = contato.getBoundingClientRect();

function scrollContact() {
    window.scrollTo({
        top: positionOfElement.bottom,
        left: 0,
        behavior: "smooth",
    })
}

// https://tableless.com.br/utilizando-navigator-language/