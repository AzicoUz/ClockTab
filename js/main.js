const soatContainer = document.querySelector('.soatContainer');
const fragment = document.createDocumentFragment();
const soatBox = document.createElement('div');
soatBox.classList.add('soatBox');
const minutBox = document.createElement('div');
minutBox.classList.add('minutBox');
const secondBox = document.createElement('div');
secondBox.classList.add('secondBox');
fragment.appendChild(soatBox);
fragment.appendChild(minutBox);
fragment.appendChild(secondBox);
soatContainer.appendChild(fragment);





setInterval(() => {
    soatBox.innerHTML = `${new Date().getHours().toString().padStart(2, '0')}`;
    minutBox.innerHTML = `${new Date().getMinutes().toString().padStart(2, '0')}`;
    secondBox.innerHTML = `${new Date().getSeconds().toString().padStart(2, '0')}`;
    Pm.textContent = soatBox.textContent >= 12 ? 'PM' : 'AM';
}, 1000);


const daysContainer = document.querySelector('.daysContainer');
const daysFragment = document.createDocumentFragment();
const weakBox = document.createElement('div');
weakBox.classList.add('weakBox');
const dateBox = document.createElement('div');
dateBox.classList.add('dateBox');

const Pm = document.createElement('div');
Pm.classList.add('pm');

const day = [
    'Yakshanba',
    'Dushanba',
    'Seshanba',
    'Chorshanba',
    'Payshanba',
    'Juma',
    'Shanba',
];

function updateDay() {
    const date = new Date();
    const dayName = day[date.getDay()]
    weakBox.textContent = dayName;
    dateBox.textContent = `${date.getDate().toString().padStart(2, '0')} / ${ (date.getMonth() + 1).toString().padStart(2, '0')} / ${date.getFullYear().toString().padStart(4, '0')}`;
    
    }
updateDay();
daysFragment.appendChild(weakBox);
daysFragment.appendChild(dateBox);
daysFragment.appendChild(Pm);
daysContainer.appendChild(daysFragment); 