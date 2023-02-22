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
    });
}

$(document).ready(function() {
    $('#contact-email').submit(function(e) {
        e.preventDefault(); // Previne o comportamento padrão do formulário (redirecionamento)

        // Captura os dados do formulário
        var nome = $('input[name="name"]').val();
        var email = $('input[name="email"]').val();
        var mensagem = $('input[name="message"]').val();

        // Cria um objeto com os dados do formulário
        var formData = {
            'name': nome,
            'email': email,
            'message': mensagem
        };

        // Envia a requisição AJAX
        $.ajax({
            type: 'POST',
            url: 'enviar.php',
            data: formData,
            dataType: 'json',
            encode: true
        })
        .done(function(data) {
            console.log(data);
            alert('Mensagem enviada com sucesso!');
        })
        .fail(function(data) {
            console.log(data);
            alert('Ocorreu um erro ao enviar a mensagem.');
        });
    });
});