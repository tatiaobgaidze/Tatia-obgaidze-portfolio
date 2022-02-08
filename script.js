let home = document.querySelector(".home")
console.log(home)
let hicon = document.querySelector("#homeicon")
console.log(hicon)


hicon.addEventListener("click", () => {
    home.style.display = 'flex'
    homeicon.style.color = '#32333631'

    about.style.display = 'none'
    abouticon.style.color = '#000'

    resume.style = "display: none !important"
    resumeicon.style.color = '#000'

    portfolio.style = "display: none !important"
    portfolioicon.style.color = '#000'

    contact.style = "display: none !important"
    contacticon.style.color = '#000'
})




let about = document.querySelector(".about")
let abouticon = document.querySelector("#abouticon")

abouticon.addEventListener("click", () => {

    about.style.display = 'flex'
    abouticon.style.color = '#32333631'

    home.style.display = 'none'
    homeicon.style.color = '#000'

    resume.style = "display: none !important"
    resumeicon.style.color = '#000'

    portfolio.style = "display: none !important"
    portfolioicon.style.color = '#000'

    contact.style = "display: none !important"
    contacticon.style.color = '#000'
})


let resume = document.querySelector(".resume")
let resumeicon = document.querySelector("#resumeicon")

resumeicon.addEventListener("click", () => {
    resume.style = "display: block !important"
    resumeicon.style.color = '#32333631'

    about.style.display = 'none'
    abouticon.style.color = '#000'

    home.style.display = 'none'
    homeicon.style.color = '#000'

    portfolio.style = "display: none !important"
    portfolioicon.style.color = '#000'

    contact.style = "display: none !important"
    contacticon.style.color = '#000'
})

let portfolio = document.querySelector(".portfolio")
let portfolioicon = document.querySelector("#portfolioicon")

portfolioicon.addEventListener("click", () => {
    portfolio.style = "display: flex !important"
    portfolioicon.style.color = '#32333631'

    resume.style = "display: none !important"
    resumeicon.style.color = '#000'

    about.style.display = 'none'
    abouticon.style.color = '#000'

    home.style.display = 'none'
    homeicon.style.color = '#000'

    contact.style = "display: none !important"
    contacticon.style.color = '#000'

})


let contact = document.querySelector(".contactcontainer")
let contacticon = document.querySelector("#contacticon")

contacticon.addEventListener("click", () => {
    contact.style = "display: block !important"
    contacticon.style.color = '#32333631'

    home.style.display = 'none'
    homeicon.style.color = '#000'

    about.style.display = 'none'
    abouticon.style.color = '#000'

    resume.style = "display: none !important"
    resumeicon.style.color = '#000'

    portfolio.style = "display: none !important"
    portfolioicon.style.color = '#000'

})

console.log(home)

let forall = document.querySelector(".forall")
let closeburger = document.querySelector(".closeburger")
let rescon = document.querySelector(".responsivecontainer")
let openburger = document.querySelector(".openburger")

closeburger.addEventListener("click", () => {
    rescon.style = "display: block !important"
    openburger.style = "display: flex !important"
    closeburger.style = "display: none !important"
    forall.style = "display: none !important"
})

openburger.addEventListener("click", () => {
    rescon.style = "display: none !important"
    closeburger.style = "display: flex !important"
    forall.style = "display: block !important"
})




let responsivehome = document.querySelector("#responsivehome")
console.log(responsivehome)

responsivehome.addEventListener("click", () => {
    forall.style = "display: block !important"
    home.style = "display:flex !important"
    rescon.style = "display: none !important"
    closeburger.style = "display: flex !important"
    about.style.display = 'none'
    resume.style = "display: none !important"
    contact.style = "display: none !important"
})

let responsiveabout = document.querySelector("#responsiveabout")

responsiveabout.addEventListener("click", () => {
    forall.style = "display: block !important"
    about.style.display = 'flex'
    rescon.style = "display: none !important"
    closeburger.style = "display: flex !important"
    home.style = "display:none !important"
    resume.style = "display: none !important"
    portfolio.style = "display: none !important"
    contact.style = "display: none !important"
})

let responsiveresume = document.querySelector("#responsiveresume")
responsiveresume.addEventListener("click", () => {
    forall.style = "display: block !important"
    resume.style = "display: block !important"
    rescon.style = "display: none !important"
    closeburger.style = "display: flex !important"
    home.style = "display:none !important"
    about.style.display = 'none'
    portfolio.style = "display: none !important"
    contact.style = "display: none !important"
})

let responsiveportfolio = document.querySelector("#responsiveportfolio")
responsiveportfolio.addEventListener("click", () => {
    forall.style = "display: block !important"
    rescon.style = "display: none !important"
    portfolio.style = "display: flex !important"
    closeburger.style = "display: flex !important"
    home.style = "display:none !important"
    about.style.display = 'none'
    resume.style = "display: none !important"
    contact.style = "display: none !important"
})

let responsivecontact = document.querySelector("#responsivecontact")

responsivecontact.addEventListener("click", () => {
    forall.style = "display: block !important"
    rescon.style = "display: none !important"
    contact.style = "display: block !important"
    closeburger.style = "display: flex !important"
    home.style = "display:none !important"
    about.style.display = 'none'
    resume.style = "display: none !important"
    portfolio.style = "display: none !important"
})