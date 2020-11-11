class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}
let iceland = new Country("Iceland", "Icelandic", "Halló heimur", ["red", "white", "blue"]);
let kenya = new Country("Kenya", "Swahili", "Salamu, Dunia", ["red", "black", "green"]);
let bolivia = new Country("Bolivia", "Spanish", "Hola Mundo", ["green", "yellow", "red"]);
let sweden = new Country("Sweden", "Swedish", "Hej världen", ["blue", "yellow"]);
let brazil = new Country("Brazil", "Portuguese", "Olá Mundo", ["green", "yellow", "blue"])

    function SwitchCountry() {
        let input = document.getElementById("CountryList").value;;
    let country;

    if (input === "Iceland") {
        country = iceland;
    }
    else if (input === "Kenya") {
        country = kenya;
    }
    else if (input === "Bolivia") {
        country = bolivia;
    }
    else if (input === "Sweden") {
        country = sweden;
    }
    else if (input === "Brazil") {
        country = brazil;
    }

    document.getElementById("CountryName").innerText = country.name;
    document.getElementById("OfficialLanguage").innerText = country.lang;
    document.getElementById("HelloWorld").innerText = country.greeting;

    document.getElementById("Color1").style.backgroundColor = country.colors[0];
    document.getElementById("Color2").style.backgroundColor = country.colors[1];
    if (country.colors.length > 2) {
        document.getElementById("Color3").style.backgroundColor = country.colors[2];
    }
    else {
        document.getElementById("Color3").style.backgroundColor = country.colors[1];
    }


}