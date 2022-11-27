const profile = document.getElementById("profile");
const skill = document.getElementById("skill");
const price = document.getElementById("price");
const policy = document.getElementById("policy");

const profileY = profile.getBoundingClientRect().top + window.pageYOffset;
const skillY = skill.getBoundingClientRect().top + window.pageYOffset;
const priceY = price.getBoundingClientRect().top + window.pageYOffset;
const policyY = policy.getBoundingClientRect().top + window.pageYOffset;

const profileBtn = document.getElementById("header-profile");
const skillBtn = document.getElementById("header-skill");
const priceBtn = document.getElementById("header-price");
const policyBtn = document.getElementById("header-policy");

const offset = ( window.innerWidth > 840 ) ? 80 : 50;

profileBtn.addEventListener('click', () => {
    window.scroll({
        top: profileY - offset,
        behavior: "smooth"
    });
});

skillBtn.addEventListener('click', () => {
    window.scroll({
        top: skillY - offset,
        behavior: "smooth"
    });
});

priceBtn.addEventListener('click', () => {
    window.scroll({
        top: priceY - offset,
        behavior: "smooth"
    });
});

policyBtn.addEventListener('click', () => {
    window.scroll({
        top: policyY - offset,
        behavior: "smooth"
    });
});