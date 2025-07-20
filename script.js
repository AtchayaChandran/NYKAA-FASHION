/*-------For POP UP--------*/
function closePopup() {
   document.getElementById("entryPopup").style.display = "none";
}

/*---------------for arrow------------------*/
function toggleNykaaSection() {
   const section = document.getElementById('nykaaContent');
   section.classList.toggle('hidden');
}

/*-----------for menubar-------------------*/
function openMenu() {
   document.getElementById('sideMenu').style.left = '0';
   document.getElementById('backdrop').classList.remove('hidden');
}

function closeMenu() {
   document.getElementById('sideMenu').style.left = '-100%';
   document.getElementById('backdrop').classList.add('hidden');
}