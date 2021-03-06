function openNav() {
  document.getElementById('mobileSidebar').style.width = '250px';
  document.getElementById('main').style.marginLeft = '250px';
}

function closeNav() {
  document.getElementById('mobileSidebar').style.width = '0';
  document.getElementById('main').style.marginLeft = '0';
}

const openBtn = document.getElementById('open-btn');
openBtn.addEventListener('click', openNav);

const closeBtn = document.getElementById('close-btn');
closeBtn.addEventListener('click', closeNav);

const speackersContainer = document.querySelector('#speackersContainer');

const speackersArray = [
  {
    name: 'Elon Musk',
    position: 'Chief Engineer, Space X',
    about: 'Elon Reeve Musk FRS is an entrepreneur and business magnate.',
    image: './img/speackerone.png',
  },
  {
    name: 'Mark Zuckerberg',
    position: 'Co-founder, Chairperson and CEO Facebook',
    about: 'Mark Elliot Zuckerberg is a media magnate, internet entrepreneur, and philanthropist.',
    image: './img/speackertwo.jpg',
  },
  {
    name: 'Amina Mohammed',
    position: 'Deputy Secretary-General United Nations',
    about: 'Ms. Amina J. Mohammed is the Deputy Secretary-General of the United Nations and Chair of the United Nations.',
    image: './img/speackerthree.jpg',
  },
  {
    name: 'Cher Wang',
    position: 'Co-founder and Chairperson, HTC corporation',
    about: 'Cher Wang is an entrepreneur and philanthropist. As co-founder and chairperson.',
    image: './img/speackerfour.jpg',
  },
  {
    name: 'Satya Nadella',
    position: 'CEO Microsoft',
    about: 'He is the executive chairman and CEO of Microsoft, succeeding Steve Ballmer in 2014.',
    image: './img/speacker6.jpg',
  },
  {
    name: 'Reed Hastings',
    position: 'CEO Netflix',
    about: 'Is a businessman. He is the co-founder, chairman, and co-chief executive officer (CEO) of Netflix.',
    image: './img/speackerfive.jpg',
  },
];

for (let i = 0; i < speackersArray.length; i += 1) {
  speackersContainer.innerHTML += `
        <div class="speacker">
            <div class="speackerImg">
                <img class="speackerimg" src="${speackersArray[i].image}" alt="">
            </div>
            <div class="musk">
                <h2 class="speackerName">${speackersArray[i].name}</h2>
                <h4 class="speackerPosition">${speackersArray[i].position}</h4>
                <p class="speackerAbout">${speackersArray[i].about}</p>
            </div>
        </div>
`;
}
