# verslag 4 april

Vandaag bezig geweest met de connectie tussen een frontend
button en backend script functionaliteit

p5 toegevoegd.

nieuw test script cons.js toegevoegd.

-het relatieve pad naar cons.js (view/cons.js) kun je niet gebruiken
bij je script src-verwijzing. Dan krijg je een 404. gebruik: cons.js en zorg
dat dit script in dezelfde root zit als index.js

ook moet erbij: type="text/javascript"></script>
Anders gaat "MIME" "strict" foutmeldingen geven.

Ik heb het uiteindelijk werkend gekregen door in index.html
DOM elementen te voorzien van een ID
in je script kun je dan (nu met p5) verwijzen naar dit element
en dan er een funtie aan vasthangen

Die functie gaan we dan morgen dus handleTokenUris() laten zijn.
en dan verwijzen we niet naar cors.js, maar naar pinata.js
die file moet dan nog wel naar /view
Pinata.js verwijs op zijn beurt ook weer naar: utils/uploadToPinata.js
dus daar moeten we ook even naar kijken

# 5 april

de switch naar het pinata-script geeft foutmeldingen op de require
statements. De manier waarop we dit script benaderen
(direct vanuit de frontend) (en niet via de server(index.js))
maakt dat de browser dit behandeld (als frontend script dus!)

Ofwel trekken we dus dit hele pinata script naar de frontend
(wat niet werkt), of we moeten een post request doen via de server.

Wat we NU al doen is een img posten naar de server via een
"submit"-POST-form.
The endpoint for the img upload is now /upload
upon receipt of the data(img) in index.js is described that the
img will be saved in a folder

We now want a second endpoint /dopinata so:
app.post("/dopinata", _run script_, (req, res) => {
res.send("pinata stuff done!")
})

Wat we kunnen doen mss is een eventListener toevoegen die
== when event received POST request "doPinataStuff" is received,==
het pinata script in de backend start.
