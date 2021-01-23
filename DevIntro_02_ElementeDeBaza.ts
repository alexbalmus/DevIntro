function DevIntro_02_ElementeDeBaza()
{
    // Afișare mesaj (șir de caractere):
    basic.showString("MICRO:BIT");

    // Afișare număr:
    basic.showNumber(42)

    // Afișare pictogramă ("inimă")
    basic.showIcon(IconNames.Heart)

    // Altă pictogramă ("vesel")
    basic.showIcon(IconNames.Happy)

    // Controlul individual al LED-urilor: "." -> oprit, "#" -> pornit
    basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `);

    // --------- Variabile --------- //

    // Declarare variabilă fără tip de date specificat 
    // (similar cu o cutie în care putem introduce orice):
    let x;

    // Introducerea unei valori în variabila noastră:
    x = "Ciao!";
    
    // Afișare mesaj din variabilă folosind basic.showString:
    basic.showString(x);

    // Introducerea unei valori numerice în variabilă:
    x = 5;

    // Afișarea valorii numerice din variabilă folosind basic.showNumber;
    basic.showNumber(x);

    // Ce se întâmplă dacă încercăm să afișăm valoarea numerică folosind
    // basic.showString? 
    // Dacă de-comentăm următoare linie vom vedea un mesaj de eroare:
    // basic.showString(x);

    // Declararea unei variabile specificând un tip de date:
    let y: string; 
    
    // Variabila va putea reține doar șiruri de caractere:
    y = "text";

    // Vom avea o eroare dacă încercăm să introducem o valoare numerică:
    // y = 7;

    // Recomandarea e să precizăm tipul de date al variabilelor 
    // (de altfel, în alte limbaje de programare e obligatoriu).

    
}