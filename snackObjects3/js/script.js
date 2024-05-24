// Un oggetto rappresenta una finestra di un browser e contiene due campi: un array di tab aperte e un numero che indica l'indice della tab aperta nell'array:

// {
//     "tab": ["Facebook", "GitHub", "Gmail"],
//     "activeTab": 0
// }
// {
//     "tab": ["Twitter", 'Facebook', "GitHub", "Gmail"],
//     "activeTab": 0
// }

// Il software deve guardare se c'è un social aperto ed eliminarlo dalle tab.
// Nel caso la tab fosse attiva, deve attivare la successiva.

const window = {
    tab: ["Facebook", "GitHub", "Gmail"],
    activeTab: 0,
    }

const browserWindow = [
    {
    tab: ["Facebook", "GitHub", "Gmail"],
    activeTab: 0,
    },
    {
    tab: ["Twitter", 'Facebook', "GitHub", "Gmail"],
    activeTab: 0,
    },
];

const socialsList = ["Twitter", "Facebook"];

// browserWindow.forEach((window) => {
//     for(let i = 0; i < window.tab.length; i++){
//         if(window.tab.includes(...socialsList)){
//             window.tab.splice(i, 1)
//         }
//     }    
// });

// console.log(browserWindow);

const newTabs = windowObj.tab.filter((tab, index) => {
    let isFound = false;
    socialsList.forEach((social) => {
        if(social === tab){
            isFound = true;
        }
    });
    return !isFound;
});

if