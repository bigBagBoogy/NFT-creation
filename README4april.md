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
