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


let imagearr = ['IMG-20241012-WA0049.jpg','WhatsApp Image 2026-01-03 at 10.59.03 AM.jpeg',
    'IMG-20230616-WA0041.jpg','1000059659-01.jpg'];
let questionarr = ["Hey! I heard you're looking for a Rockstar Developer?","My code is clean, my coffee is strong. Should we talk?"
    ,"I don't just fix bugs, I prevent them. Ready to sign the offer?","Is a 12 LPA package a fair deal for a genius?"];

let background = ['https://media.istockphoto.com/id/122204403/photo/binary-code.jpg?s=2048x2048&w=is&k=20&c=VGwAYQC57ocTfmxsiebDjlEZymC_rM7HKmvdonG8qmg=',
    'https://images.unsplash.com/photo-1629233321694-62ee7a57a775?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://media.istockphoto.com/id/1267593738/photo/successful-partnership.jpg?s=2048x2048&w=is&k=20&c=83F0AREuJp6uCoRrQOvpb2vMea7xosbkLsljtryG8_4=',
    'https://images.unsplash.com/photo-1724754202864-164ab53de85e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']

let step = 0;
pic.src = imagearr[step];
question.textContent = questionarr[step];
maincontainer.style.backgroundImage = `url('${background[step]}')`;


sub_button.addEventListener('click', () => {
    ++step;
    question.classList.add('hidden-bottom');
    pic.classList.add('hidden-left');
   setTimeout(()=>{ 
    if (step < imagearr.length) {
    
        pic.src = imagearr[step];
        question.textContent = questionarr[step];
        maincontainer.style.backgroundImage = `url('${background[step]}')`;
        
    }
    else {
        pic.src = 'WhatsApp Image 2026-01-03 at 10.12.16 AM.jpeg';
        pic.style.scale = '1.5';
        question.textContent = "Great! See you at stand-up tomorrow morning! 🚀";
        question.style.color = '#ff1515';
        question.style.textShadow = '1px -1px 1px #000';
        question.style.scale = '2';
        answer.style.display = 'none';
        maincontainer.style.backgroundImage = `url('https://images.unsplash.com/photo-1712188767260-f4ffcfa7f308?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`;
    }

        question.classList.remove('hidden-bottom');
        pic.classList.remove('hidden-left');
},600)
})