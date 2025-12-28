const dictionary = [
    // --- BASICS & GREETINGS ---
    { de: "Hallo / Guten Tag", ch: "Grüezi", category: "Basics" }, // en = High German, sr = Swiss (mapping for code)
    { de: "Auf Wiedersehen", ch: "Uf Wiederluege", category: "Basics" },
    { de: "Danke", ch: "Merci", category: "Basics" },
    { de: "Entschuldigung", ch: "Exgüsi", category: "Basics" },
    { de: "Ein bisschen", ch: "Es Bitzeli", category: "Basics" },
    { de: "Jemand", ch: "Öpper", category: "Basics" },
    { de: "Niemand", ch: "Niemer", category: "Basics" },
    { de: "Nicht", ch: "Nöd", category: "Basics" },

    // --- FOOD (ESSEN) ---
    { de: "Kartoffel", ch: "Härdöpfel", category: "Food" },
    { de: "Karotte", ch: "Rüebli", category: "Food" },
    { de: "Apfelkerngehäuse", ch: "Bütschgi", category: "Food" }, // A classic Zurich word!
    { de: "Butter", ch: "Anke", category: "Food" },
    { de: "Bonbon", ch: "Täfeli", category: "Food" },
    { de: "Schokolade", ch: "Schoggi", category: "Food" },
    { de: "Brotanschnitt", ch: "Mürgu", category: "Food" }, // Or 'Gupf' depending on exact region
    { de: "Frühstück", ch: "Zmorge", category: "Food" },
    { de: "Abendessen", ch: "Znacht", category: "Food" },
    { de: "Zwischenmahlzeit", ch: "Znüni", category: "Food" }, // 9am snack

    // --- HOUSE & OBJECTS ---
    { de: "Küche", ch: "Chuchi", category: "House" },
    { de: "Schrank", ch: "Chäschtli", category: "House" },
    { de: "Haus", ch: "Huus", category: "House" },
    { de: "Balkon", ch: "Balkon", category: "House" }, 
    { de: "Eimer", ch: "Chübel", category: "House" },
    { de: "Kissen", ch: "Chüssi", category: "House" },
    { de: "Fahrrad", ch: "Velo", category: "Objects" },
    { de: "Handy", ch: "Natel", category: "Objects" },
    { de: "Geldbeutel", ch: "Portemonnaie", category: "Objects" },
    { de: "Fahrkarte", ch: "Billett", category: "Objects" },

    // --- PEOPLE & BODY ---
    { de: "Kind", ch: "Chind", category: "People" },
    { de: "Mädchen", ch: "Meitli", category: "People" },
    { de: "Junge", ch: "Bueb", category: "People" },
    { de: "Beine", ch: "Bei", category: "Body" },
    { de: "Kopf", ch: "Chopf", category: "Body" },
    { de: "Haare", ch: "Haar", category: "Body" },
    { de: "Hals/Nacken", ch: "Gnick", category: "Body" },

    // --- VERBS (ACTIONS) ---
    { de: "Arbeiten", ch: "Schaffe", category: "Verbs" },
    { de: "Einkaufen", ch: "Poschte", category: "Verbs" },
    { de: "Schauen", ch: "Luege", category: "Verbs" },
    { de: "Laufen/Gehen", ch: "Laufe", category: "Verbs" }, // Note: Laufen in CH usually means Walking
    { de: "Fallen", ch: "Gheie", category: "Verbs" },
    { de: "Haben", ch: "Ha", category: "Verbs" },
    { de: "Kommen", ch: "Cho", category: "Verbs" },
    { de: "Gehen", ch: "Gaa", category: "Verbs" },

    // --- ADJECTIVES ---
    { de: "Klein", ch: "Chli", category: "Adj" },
    { de: "Fest/Stark", ch: "Fescht", category: "Adj" },
//    { de: "Schön", ch: "Schön", category: "Adj" },
    { de: "Müde", ch: "Müed", category: "Adj" },
    { de: "Teuer", ch: "Tüür", category: "Adj" },

    // --- PHRASES ---
    { de: "Wie geht es dir?", ch: "Wie gaats?", category: "Phrase" },
    { de: "Ich verstehe nur Bahnhof", ch: "Ich verstah nur Bahnhof", category: "Phrase" },
    { de: "Einen schönen Tag noch", ch: "En schöne Tag na", category: "Phrase" },
    { de: "Es regnet stark", ch: "Es schiffet", category: "Phrase" },
    { de: "Kommst du mit?", ch: "Chunsch mit?", category: "Phrase" },
    { de: "Wir gehen nach Hause", ch: "Mir gönd hei", category: "Phrase" },
    { de: "Hast du Zeit?", ch: "Häsch Ziit?", category: "Phrase" },
// --- GREETINGS & SMALL TALK (BEGRÜSSUNG) ---
    { de: "Wie geht es dir?", ch: "Wie gaats der?", category: "Social" },
    { de: "Wie geht es Ihnen?", ch: "Wie gaats Ihne?", category: "Social" },
    { de: "Mir geht es gut", ch: "Mir gaats guet", category: "Social" },
    { de: "Und dir?", ch: "Und bi dir?", category: "Social" },
    { de: "Schönes Wochenende", ch: "Schöns Wucheänd", category: "Social" },
    { de: "Schönen Tag noch", ch: "En schöne Tag na", category: "Social" },
    { de: "Bis später", ch: "Bis spöter", category: "Social" },
    { de: "Bis bald", ch: "Bis bald", category: "Social" },
    { de: "Gute Nacht", ch: "Guets Nächtle", category: "Social" },
    { de: "Schlaf gut", ch: "Schlaf guet", category: "Social" },
    { de: "Man sieht sich", ch: "Mär gseht sich", category: "Social" },
//    { de: "Viel Spass", ch: "Viel Spass", category: "Social" },
    { de: "Alles Gute", ch: "Alles Gueti", category: "Social" },

    // --- ESSENTIAL PHRASES (WICHTIGES) ---
    { de: "Ich verstehe nicht", ch: "Ich verstah nöd", category: "Essential" },
    { de: "Ich weiss es nicht", ch: "Ich weiss es nöd", category: "Essential" },
    { de: "Keine Ahnung", ch: "Kei Ahnig", category: "Essential" },
    { de: "Das macht nichts", ch: "Das macht nüt", category: "Essential" },
    { de: "Ist mir egal", ch: "Isch mir glich", category: "Essential" },
    { de: "Entschuldigung (beim Durchgehen)", ch: "Exgüsi", category: "Essential" },
    { de: "Können Sie mir helfen?", ch: "Chönd Sie mir hälfe?", category: "Essential" },
    { de: "Einen Moment bitte", ch: "En Momänt bitte", category: "Essential" },
    // { de: "Ja, genau", ch: "Ja, genau", category: "Essential" },
    { de: "Nein, danke", ch: "Nei, merci", category: "Essential" },
    { de: "Vielleicht", ch: "Villicht", category: "Essential" },
    { de: "Selbstverständlich", ch: "Sälbschtverständlich", category: "Essential" },

    // --- SHOPPING (EINKAUFEN) ---
    { de: "Ich hätte gerne...", ch: "Ich hetti gern...", category: "Shop" },
    { de: "Ich schaue mich nur um", ch: "Ich luege nur", category: "Shop" },
    { de: "Was kostet das?", ch: "Was choschtet das?", category: "Shop" },
    { de: "Haben Sie das in Rot?", ch: "Händ Sie das in Rot?", category: "Shop" },
    { de: "Das ist zu teuer", ch: "Das isch z'tüür", category: "Shop" },
    { de: "Brauchen Sie eine Quittung?", ch: "Bruuched Sie e Quittig?", category: "Shop" },
    { de: "Möchten Sie eine Tasche?", ch: "Wänd Sie es Säckli?", category: "Shop" },
    { de: "Zahlen Sie bar oder mit Karte?", ch: "Zahled Sie bar oder mit Charte?", category: "Shop" },
    { de: "Das wäre alles", ch: "Das wär's", category: "Shop" },

    // --- RESTAURANT & FOOD (ESSEN) ---
    { de: "Die Karte bitte", ch: "D'Charte bitte", category: "Food" },
    { de: "Ich nehme ein Bier", ch: "Ich nimm es Bier", category: "Food" },
    { de: "Hahnenwasser", ch: "Hahnewasser", category: "Food" },
    { de: "Ohne Kohlensäure", ch: "Ohni Gas", category: "Food" },
    { de: "Ist hier noch frei?", ch: "Isch da no frei?", category: "Food" },
    { de: "Guten Appetit", ch: "En Guete", category: "Food" },
    { de: "Die Rechnung bitte", ch: "D'Rechnig bitte", category: "Food" },
    { de: "Zahlen bitte", ch: "Zahle bitte", category: "Food" },
    { de: "Es war sehr gut", ch: "Es isch sehr guet gsi", category: "Food" },
    { de: "Ein Kaffee Creme", ch: "En Kafi Creme", category: "Food" },
    { de: "Gipfeli", ch: "Gipfeli", category: "Food" }, // Included because it's iconic

    // --- PUBLIC TRANSPORT (ÖV / TRAM) ---
    { de: "Fährt dieser Zug nach Zürich?", ch: "Fahrt dä Zug uf Züri?", category: "Travel" },
    { de: "Muss ich umsteigen?", ch: "Muesi umstiige?", category: "Travel" },
    { de: "Ist dieser Platz besetzt?", ch: "Isch da no frei?", category: "Travel" },
    { de: "Nächste Haltestelle", ch: "Nöchschti Haltstell", category: "Travel" },
    { de: "Ich habe das Tram verpasst", ch: "Ich ha s'Tram verpasst", category: "Travel" },
    { de: "Bilette bitte vorweisen", ch: "Billet vorwiese", category: "Travel" },
    { de: "Schwarzfahren", ch: "Schwarzfahre", category: "Travel" },

    // --- TIME & APPOINTMENTS (ZEIT) ---
    { de: "Wie spät ist es?", ch: "Wieviel Uhr isch es?", category: "Time" },
    { de: "Hast du Zeit?", ch: "Häsch Ziit?", category: "Time" },
    { de: "Wann treffen wir uns?", ch: "Wänn träffemer eus?", category: "Time" },
    { de: "Heute Abend", ch: "Hüt Abig", category: "Time" },
    { de: "Gestern", ch: "Geschter", category: "Time" },
    { de: "Morgen früh", ch: "Morn am Morge", category: "Time" },
    { de: "Es ist halb acht", ch: "Es isch halbi aachti", category: "Time" },
    { de: "Es ist viertel vor", ch: "Es isch Viertel vor", category: "Time" },

    // --- WEATHER (WETTER) ---
    { de: "Es regnet", ch: "Es rägnet / Es schiffet", category: "Weather" },
    { de: "Es ist kalt", ch: "Es isch chalt", category: "Weather" },
    { de: "Die Sonne scheint", ch: "D'Sunne schiint", category: "Weather" },
    { de: "Es schneit", ch: "Es schneit", category: "Weather" },
    { de: "Mir ist heiss", ch: "Mir isch heiss", category: "Weather" },
    
    // --- WORK & OFFICE (BÜRO) ---
    { de: "Ich bin bei der Arbeit", ch: "Ich bi am schaffe", category: "Work" },
    { de: "Feierabend machen", ch: "Fiirabig mache", category: "Work" },
    { de: "Ich habe viel zu tun", ch: "Ich han viel z'tue", category: "Work" },
    { de: "Kannst du mir das schicken?", ch: "Chasch mer das schicke?", category: "Work" },
    { de: "Wir haben ein Meeting", ch: "Mir händ es Meeting", category: "Work" },
    { de: "Das geht nicht", ch: "Das gaht nöd", category: "Work" },

    // --- COMMON VERB PHRASES (ZÜRI GRAMMAR) ---
    // Note: Züri uses "gsi" instead of "gewesen" (been)
    { de: "Ich bin gewesen", ch: "Ich bi gsi", category: "Grammar" },
    { de: "Wir sind gewesen", ch: "Mir sind gsi", category: "Grammar" },
    // Note: "Sich" often becomes "Sich" or "S"
    { de: "Wir sehen uns", ch: "Mir gsend eus", category: "Grammar" },
    // Note: "Gehen" often becomes "Gaa"
    { de: "Ich gehe nach Hause", ch: "Ich gaa hei", category: "Grammar" },
    { de: "Kommst du?", ch: "Chunsch?", category: "Grammar" }
];
