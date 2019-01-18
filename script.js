//Exercice 1
//Exercice 1.1

let exercice1 = document.createElement("section"); //First screen
exercice1.style.display = "block";


function createPresentation() {

  let title = document.createElement("h1"); //Title
  title.textContent = "Cinéma Le Dauphin";

  let description = document.createElement("p"); //Description
  description.textContent = "Une salle de cinéma grand confort, un restaurant et une sélection de vins de qualité. Des avant premières, des rencontres, des ciné-repas, des débats, des ateliers, des ciné-goûters, de 11h30 à 23h du mardi au dimanche (jusqu’à minuit le vendredi et le samedi).";

  let moviesList = document.createElement("button") //Button for switch to the next screen
  moviesList.textContent = "Voir les films à l’affiche cette semaine"
  moviesList.addEventListener("click", switchScreen, false);

  //Exercice 1.4

  function switchScreen() { // function for switch to the next screen
    tableContainer.style.display = "block";
    exercice1.style.display = "none"
  }
  document.body.appendChild(exercice1);

  exercice1.appendChild(title);
  exercice1.appendChild(description);
  exercice1.appendChild(moviesList)
}

createPresentation();

//Exercice 1.2

let moviesTAB = [
  ["Titre du film", "Réalisateur", "Nationalité", "Année", "Durée", "Version"], //sequence head
  ["IN MY ROOM", "Ulrich Köhler", "Allemagne", "2019", "2h", "vf"], //sequence movie 1
  ["UN VIOLENT DÉSIR DE BONHEUR", "Clément Schneider", "France", "2018", "1h15", "vf"], //sequence movie 2
  ["WHAT YOU GONNA DO WHEN THE WORLD'S ON FIRE ?", "Roberto Minervini", "Etats-Unis/Italie", "2018", "2h03", "vostfr"], //sequence movie 3
  ["GRASS", "Hong Sang-Soo", "Corée du Sud", "2018", "1h06", "vostfr"] //sequence movie 4
]; //sequence movies two-dimensional table


//Exercice 1.3


function displayTABHTML(displayArray) { //function for display the table in setting
  let container = document.createElement("section"); //Second screen
  container.style.display = "none";

  let listTAB = document.createElement("table")
  container.appendChild(listTAB)
  listTAB.style.borderCollapse = "collapse";

  let head = document.createElement("thead"); //head of the table
  listTAB.appendChild(head);

  let headBis = document.createElement("tr");
  head.appendChild(headBis);

  let header;
  let i = 0;
  let elementCurrent;
  while (i < displayArray[0].length) // continuation condition
  {
    elementCurrent = displayArray[0][i]; // recovery of the current element
    i = i + 1;
    header = document.createElement("th");
    header.textContent = elementCurrent;
    header.style.padding = "10px";
    header.style.border = "1px solid black";
    headBis.appendChild(header);
  }

  let body = document.createElement("tbody"); //body of the table
  listTAB.appendChild(body);

  let bodyBis = document.createElement("tr");
  body.appendChild(bodyBis);

  let element;
  i = 1; // intermediate variable of the index
  let j;
  let elementCurrent2;

  while (i < displayArray.length) // continuation condition
  {
    elementCurrent = displayArray[i]; // recovery of the current element
    bodyBis = document.createElement("tr");
    body.appendChild(bodyBis);
    j = 0;
    while (j < elementCurrent.length) // continuation condition
    {
      elementCurrent2 = displayArray[i][j]; // recovery of the current element
      j = j + 1; // mise à jour

      element = document.createElement("td")
      element.textContent = elementCurrent2; // display of current elements
      element.style.padding = "10px";
      element.style.border = "1px solid black";

      bodyBis.appendChild(element);
    }
    i = i + 1; // update
  }
  let back = document.createElement("button")
  container.appendChild(back)
  back.textContent = "Retour"
  back.addEventListener("click", function() {
    exercice1.style.display = "block";
    container.style.display = "none"
  }, false);

;
  return container;
}

let tableContainer = displayTABHTML(moviesTAB);
document.body.appendChild(tableContainer);


//Exercice 2
//Exercice 2.1

let substancesTAB = [
  ["SUBSTANCES", "Température de fusion ou solidification en °C", "Température d’ébullition en °C"], //sequence title
  ["acide acétique", "17", "118"], //sequence substance 1
  ["acide nitrique", "-41", "86"], //sequence substance 2
  ["acide sulfurique", "10", "290"], //sequence substance 3
  ["alcool éthylique", "-114", "78"], //sequence substance 4
  ["aluminium", "660", "2450"] //sequence substance 5
]; //sequence Users Table

//Exercice 2.2

function displayTABLimit(substancesTAB, limitNum) { //function for display the table in settings

  let newArray = []; // creates a new empty array

  let elementCurrent;
  let substanceName; // variables for element current, substances name, and the substances boiling
  let substanceBoiling;
  let i = 1;

  while (i < sequence.length) // continuation condition
  {
    elementCurrent = sequence[i]; // Save element current
    substanceName = elementCurrent[0]; // Save the first element of element current (substance name)
    substanceBoiling = parseInt(elementCurrent[2]); // Transform the last element of element current(limitNum) into a number

    if (substanceBoiling < limitNum) // If the limitNum of the current substance is below degree
    {
      newArray.push(substanceName); // Push current substance name into array
    }
    i = i + 1;
  }

  return newArray; // Returns array
}
