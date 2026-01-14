// This is your database. 
// You can add new words here without touching the main app code.
const APP_DATA = [
    {
        code: "en-US",
        name: "English",
        datasets: [
            { 
                name: "Animals", 
                items: ["The cat sat on the mat.", "A big elephant.", "The dog barks."] 
            },
            { 
                name: "Nature", 
                items: ["The sun is very bright.", "The grass is green.", "Rain falls from clouds."] 
            }
        ]
    },
    {
        code: "es-ES",
        name: "Español",
        datasets: [
            { 
                name: "Frutas", 
                items: ["Me gusta la manzana.", "La pera es verde.", "Quiero una naranja."] 
            }
        ]
    },
    {
        code: "fr-FR",
        name: "Français",
        datasets: [
            { 
                name: "Base", 
                items: ["Bonjour tout le monde.", "Le chat est noir.", "Il fait beau aujourd'hui."] 
            }
        ]
    }
];
