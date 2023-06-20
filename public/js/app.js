let i = document.querySelector("#file");
let div_action = document.querySelector("#div-action");
let progresbar_vilain = document.querySelectorAll("progress")[0];
let progresbar_hero = document.querySelectorAll("progress")[1];
let div_attaque = document.querySelector("#div_attaque");
let audio = document.querySelector("#audio");
let audio_raichu = document.querySelector("#audio_raichu");
let audio_vilain = document.querySelector("#audio_vilain");
let damaged = document.querySelector("#damaged");
let vilain = document.querySelector(".vilain");
let hero = document.querySelector(".hero")
let thunder_animation = document.querySelector(".thunder");
let sparcle = document.querySelector(".sparcle");
let flame = document.querySelector(".flame")
// audio.play();
audio.volume = 0.3;
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
let raicho = new Perssonage("raicho",200,100,35)
let charizard = new Perssonage("charizard",150,90,27);
progresbar_hero.max = raicho.pv
progresbar_vilain.max = charizard.pv
progresbar_hero.value = raicho.pv
progresbar_vilain.value = charizard.pv

function name(params) {
    
}
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
let tab_vilain_attaque = ["Fire Fang","Fire Spin","Flame Charge","Tera Blast"]
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
                        thunder_animation.classList.remove("d-none");
                        sparcle.classList.remove("d-none");
                        audio_raichu.play();
                        setTimeout(() => {
                            sparcle.classList.add("d-none")
                            thunder_animation.classList.add("d-none")
                            damaged.play()
                            vilain.classList.add("vilain-key")
                            setTimeout(() => {
                                vilain.classList.remove("vilain-key")
                            }, 1000);
                        }, 2000);
                        
                        setTimeout(() => {
                            div_attaque.lastElementChild.remove()
                            div_action.style.display ="block"
                        },5000);
                        setTimeout(() => {
                            random_attque_vilain=tab_vilain_attaque[Math.round(Math.random()*4)]
                        console.log(random_attque_vilain);
                        switch (random_attque_vilain) {
                            case "Fire Fang":
                                raicho.pv -= 50;
                                progresbar_hero.value -= 50;
                                div_action.style.display ="none"
                                div_attaque.insertAdjacentHTML("beforeend",`
                        <p class="text-dammage">${charizard.nom} used Fire fang he did 50 dammage to raicho with neutral attaque </p>
                        `)
                        flame.classList.remove("d-none");
                        sparcle.classList.remove("d-none");
                        audio_vilain.play();
                        setTimeout(() => {
                            sparcle.classList.add("d-none")
                            flame.classList.add("d-none")
                            damaged.play()
                            hero.classList.add("hero-key")
                            setTimeout(() => {
                                hero.classList.remove("hero-key")
                            }, 1000);
                        }, 2000);
                        
                        setTimeout(() => {
                            div_attaque.lastElementChild.remove()
                            div_action.style.display ="block"
                        },5000);
                                break;
                                case "Fire Spin":
                                raicho.pv -= 25;
                                progresbar_hero.value -= 25;
                                charizard.pv += 25
                                progresbar_vilain.value += 25
                                div_action.style.display ="none"
                                div_attaque.insertAdjacentHTML("beforeend",`
                        <p class="text-dammage">${charizard.nom} used Fire Spin he did 25 dammage to raicho with fire  attaque and gaind 25 health </p>
                        `)
                        flame.classList.remove("d-none");
                        sparcle.classList.remove("d-none");
                        audio_vilain.play();
                        setTimeout(() => {
                            sparcle.classList.add("d-none")
                            flame.classList.add("d-none")
                            damaged.play()
                            hero.classList.add("hero-key")
                            setTimeout(() => {
                                hero.classList.remove("hero-key")
                            }, 1000);
                        }, 2000);
                        
                        setTimeout(() => {
                            div_attaque.lastElementChild.remove()
                            div_action.style.display ="block"
                        },5000);
                                break;
                                case "Flame Charge":
                                raicho.pv -= charizard.attaque;
                                progresbar_hero.value -= charizard.attaque;
                                charizard.attaque += 2
                                div_action.style.display ="none"
                                div_attaque.insertAdjacentHTML("beforeend",`
                        <p class="text-dammage">${charizard.nom} used flame Charge he did ${charizard.attaque} dammage to raicho with flame  attaque and gaind 2 point attaque </p>
                        `)
                        flame.classList.remove("d-none");
                        sparcle.classList.remove("d-none");
                        audio_vilain.play();
                        setTimeout(() => {
                            sparcle.classList.add("d-none")
                            flame.classList.add("d-none")
                            damaged.play()
                            hero.classList.add("hero-key")
                            setTimeout(() => {
                                hero.classList.remove("hero-key")
                            }, 1000);
                        }, 2000);
                        
                        setTimeout(() => {
                            div_attaque.lastElementChild.remove()
                            div_action.style.display ="block"
                        },5000);
                                break;
                                case "Tera Blast":
                                raicho.pv -= charizard.attaque;
                                progresbar_hero.value -= charizard.attaque;
                                charizard.pv -= charizard.attaque/2
                                div_action.style.display ="none"
                                div_attaque.insertAdjacentHTML("beforeend",`
                        <p class="text-dammage">${charizard.nom} used Tera Blast he did ${charizard.attaque} dammage to raicho with terra  attaque and recieved ${charizard.attaque/2} </p>
                        `)
                        flame.classList.remove("d-none");
                        sparcle.classList.remove("d-none");
                        audio_vilain.play();
                        setTimeout(() => {
                            sparcle.classList.add("d-none")
                            flame.classList.add("d-none")
                            damaged.play()
                            hero.classList.add("hero-key")
                            setTimeout(() => {
                                hero.classList.remove("hero-key")
                            }, 1000);
                        }, 2000);
                        
                        setTimeout(() => {
                            div_attaque.lastElementChild.remove()
                            div_action.style.display ="block"
                        },5000);
                                break;
                        
                        
                            default:
                                break;
                        }
                        }, 5200);
                        
                        break;
                        // -----
                        case thunder.nom:
                        console.log("d");
                        charizard.pv -= 75
                        progresbar_vilain.value -=75
                        raicho.attaque -= 50
                        div_action.style.display ="none"
                        div_attaque.insertAdjacentHTML("beforeend",`
                        <p class="text-dammage">${raicho.nom} gaind 50 damage for this turn and lose 10 damage  </p>
                        `)
                        setTimeout(() => {
                            div_attaque.lastElementChild.remove()
                            div_action.style.display ="block"
                        },5000);
                        break;
                    default:
                        break;
                }
            } 
        }
            })
    }

combat()
