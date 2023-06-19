let i = document.querySelector("#file");
let div_action = document.querySelector("#div-action")
console.log(i.value);

class Perssonage{
    constructor(nom,pv,intiative,attaque){
        this.nom = nom ;
        this.pv = pv;
        this.intiative = intiative;
        this.attaque=attaque;
    }
}
let raicho = new Perssonage("raicho",200,100,50)
let charizard = new Perssonage("charizard",150,90,27)

class Objet {
    constructor(nom,nombre){
        this.nom = nom;
        this.nombre = nombre;
    }
}

const combat =()=>{
    // while (raicho.pv > 0 && charizard.pv > 0 ) {
    //     if (raicho.intiative > charizard.intiative) {
            div_action.addEventListener("click",(event)=>{
                console.log(event.target);
                switch (event.target.textContent) {
                    case "sarf9 mo ":
                        alert("3ti lmo")
                        break;
                
                    default:
                        break;
                }
            })
    //     }else{

    //     }
    // }
}
combat()