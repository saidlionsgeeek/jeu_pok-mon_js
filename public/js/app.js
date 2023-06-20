let i = document.querySelector("#file");
let div_action = document.querySelector("#div-action");
let progresbar_vilain = document.querySelectorAll("progress")[0];
let progresbar_hero = document.querySelectorAll("progress")[1];
let div_attaque = document.querySelector("#div_attaque")
console.log(progresbar_hero);
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
let charizard = new Perssonage("charizard",150,90,27);
progresbar_hero.max = raicho.pv
progresbar_vilain.max = charizard.pv
progresbar_hero.value = raicho.pv
progresbar_vilain.value = charizard.pv


class Objet {
    constructor(nom,nombre){
        this.nom = nom;
        this.nombre = nombre;
    }
}
const removeClickHandlers = () => {
    const clonedDivGame = div_action.cloneNode(true);
    div_action.parentNode.replaceChild(clonedDivGame, div_action);
    div_action = clonedDivGame;
};
let take_Down = new Objet("take down",8);
    
let thunder = new Objet("thunder",6);
let Wild_Charge= new Objet("Wild Charge",7);
let volt_switch  = new Objet("volt switch",7)
const combat =()=>{
        
            div_action.addEventListener("click",(event)=>{
                if (raicho.intiative > charizard.intiative) {
                if (charizard.pv < 0 && progresbar_hero.value > 0) {
                        alert(`  ${charizard.nom} dead`)
                }if(charizard.pv > 0 && progresbar_hero.value > 0){
                switch (event.target.textContent) {
                    case take_Down.nom:
                        console.log("d");
                        charizard.pv -= 25
                        progresbar_vilain.value -=25
                        div_action.style.display ="none"
                        div_attaque.insertAdjacentHTML("beforeend",`
                        <p class="text-dammage">${raicho.nom} used Take down he did 25 dammage to charizard with neutral attaque ${charizard.pv} </p>
                        `)
                        setTimeout(() => {
                            div_attaque.lastElementChild.remove()
                            div_action.style.display ="block"
                        },2000);
                        break;
                        case thunder.nom:
                        console.log("d");
                        charizard.pv -= 75
                        progresbar_vilain.value -=75
                        raicho.attaque -= 50
                        div_action.style.display ="none"
                        div_attaque.insertAdjacentHTML("beforeend",`
                        <p class="text-dammage">${raicho.nom} gaind 50 damage and lose for this turn and lose it from his nuter attaque </p>
                        `)
                        setTimeout(() => {
                            div_attaque.lastElementChild.remove()
                            div_action.style.display ="block"
                        },2000);
                        break;
                
                    default:
                        break;
                }
            } 
        }
            })
       
    }

combat()
