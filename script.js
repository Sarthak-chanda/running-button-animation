const main = document.querySelector('.main');
const main_button = document.querySelector('.main_button');
const sub_button = document.querySelector('.sub_button');
const pic = document.querySelector('.pic img');
const question = document.querySelector('.question h2');
const answer = document.querySelector('.answer');
const question_box = document.querySelector('.question');
const maincontainer = document.querySelector('.maincontainer');


main_button.addEventListener('mouseenter', () => {
    const window_width = window.innerWidth - (main_button.offsetWidth + 60);
    const window_height = window.innerHeight - (main_button.offsetHeight + 60);


    const random_x = Math.floor(Math.random() * window_width);
    const random_y = Math.floor(Math.random() * window_height);

    main_button.style.position = 'absolute';
    main_button.style.transition = ' all 0.3s ease';
    main_button.style.left = random_x + 'px';
    main_button.style.top = random_y + 'px';

})


let imagearr = ['1000194714-removebg-preview.png', "IMG-20230616-WA0041.jpg", "1000194715-removebg-preview.png", 'IMG_20250211_203715_452.jpg']
let questionarr = ['Do you know me ?', 'Do you think i am handsome ?', 'Do you love me now ?', 'Want to marry me ?']
let background = ['https://images.unsplash.com/photo-1707924962886-12ad20367315?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1514519273132-6a1abd48302c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2t5JTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1516414559093-91c1c3d7359c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bG92ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D','https://images.unsplash.com/photo-1517867065801-e20f409696b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvdmUlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww'
]

let step = 1;
sub_button.addEventListener('click', () => {
    question.classList.add('hidden-bottom');
    pic.classList.add('hidden-left');
   setTimeout(()=>{ 
    if (step < imagearr.length) {
        pic.src = imagearr[step];
        question.textContent = questionarr[step];
        maincontainer.style.backgroundImage = `url('${background[step]}')`;
        step++;
    }
    else {
        pic.src = 'IMG-20230616-WA0034.jpg';
        pic.style.scale = '2';
        question.textContent = 'Sry I have a GF !!!';
        question.style.color = '#ff1515';
        question.style.textShadow = '1px -1px 1px #000';
        question.style.scale = '2';
        question_box.style.scale = '2';
        answer.style.display = 'none';
        maincontainer.style.backgroundImage = `url('https://plus.unsplash.com/premium_photo-1730063032585-216d03972ae1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGZpcmUlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww')`;
    }

        question.classList.remove('hidden-bottom');
        pic.classList.remove('hidden-left');
},600)
})