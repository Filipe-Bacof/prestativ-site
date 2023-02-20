function verifyLanguageAndRedirect() {
    const language = window.navigator.language;
    console.log(language);
    if (language == "pt-BR" || "pt") {
        window.location.href = "./portuguese.html";
    } else {
        window.location.href = "./english.html";
    }
}

verifyLanguageAndRedirect();
