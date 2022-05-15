const peoples = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';


for (people of peoples) {
    if (people === 'Phil' || people === 'Lola') {
        refused.textContent += `${people}, `
    } else {
        admitted.textContent += `${people}, `
    }
}
refused.textContent = refused.textContent.slice(0,        refused.textContent.length - 2) + '.';
admitted.textContent = admitted.textContent.slice(0, admitted.textContent.length - 2) + '.';