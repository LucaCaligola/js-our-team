// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, 
// ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede, potete usare come esempio lo screenshot,  
// ma anche realizzare qualcosa di creativo!!!

const team = 
    [

        {
            name: 'Wayne Barnett',
            position: 'Founder & CEO',
            pic: 'img/wayne-barnett-founder-ceo.jpg'
        },

        {
            name: 'Angela Caroll',
            position: 'Chief Editor',
            pic: 'img/angela-caroll-chief-editor.jpg'
        },

        {
            name: 'Walter Gordon',
            position: 'Office Manager',
            pic: 'img/walter-gordon-office-manager.jpg'
        },

        {
            name: 'Angela Lopez',
            position: 'Social Media Manager',
            pic: 'img/angela-lopez-social-media-manager.jpg'
        },

        {
            name: 'Scott Estrada',
            position: 'Developer',
            pic: 'img/scott-estrada-developer.jpg'
        },

        {
            name: 'Barbara Ramos',
            position: 'Graphic Designer',
            pic: 'img/barbara-ramos-graphic-designer.jpg'
        },

    ]


    const toPrint = document.getElementById('main');

    for (let i = 0; i < team.length; i++){

        const cardElement = document.createElement('p')

        toPrint.appendChild(cardElement);


        const name = (team[i].name);
        const position = (team[i].position);
        const pic = (team[i].pic);
        
        cardElement.append(`${name} ${position} ${pic}`)
        
     
        
    }

    

  