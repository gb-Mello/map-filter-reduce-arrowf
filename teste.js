const animals = [
    {
        "name": "cat",
        "size": "small",
        "weight":5
    },
    {
        "name": "dog",
        "size": "small",
        "weight":10
    },
    {
        "name": "lion",
        "size": "medium",
        "weight": 150,

    },
    {

        "name": "elephant",
        "size": "big",
        "weight": 5000,
    }
];

    let animal_names = [];

    for(let i = 0; i < animals.length; i++){
        animal_names.push(animals[i].name);
    }
    // UTILIZANDO MAP
    // criar array só com os nomes de animais 
    let animal_names1 = animals.map((animal, index, animals) => {
        return animal.name;
    });
    
    console.log(animal_names1);
    //colocar apenas animals pequenos "size = small" na array
    let small_animals = [];
    for(let i = 0; i < animals.length; i++){
        if(animals[i].size === "small"){
            small_animals.push(animals[i])
        }
    }
    // UTILIZANDO FILTER
    let small_animals1 = animals.filter((animal)=> {
        return animal.size === "small";
    });
    console.log(small_animals1);
    //Somando os pesos dos animais
    let total_weight = 0;
    for(let i = 0; i< animals.length; i++){
        total_weight += animals[i].weight;      
    }
    console.log(total_weight);
    //Utilizando reduce
    let total_weight1 = animals.reduce((weigth, animal, index, animals) => {
        return weigth += animal.weight;
    }, 0);

    console.log(total_weight1);
