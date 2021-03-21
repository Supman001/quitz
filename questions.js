let questions =[ 
    {
        number: 1,
        question : '....is a name of a person things or place?',
        options:{
            a:'School',
            b: 'Church',
            c: 'A noun',
            d:' Market'
        },
        number: 2, 
        question: 'Obi is a......?',
        answer: 'Boy',
        options: {
            a: 'Girl',
            b:'Car',
            c: 'Child',
            d: 'Boy'
        },
        number: 3, 
        question: '....., ....and....makes up a family?',
        answer: 'Father, Mother and Children',
        options: {
             a: 'Beans, Rice and Yam',
             b: 'Father, Mother and Children',
             c: 'Teacher, School and Students',
             d: 'Pastor, User and Members'   
        },
        number: 4, 
            question: 'Aba is a commercial city in which state?',
            answer: 'Abia',
            options: {
                a: 'Nigeria',
                b: 'Togo',
                c: 'Abia',
                d: 'Enugu'
            },
            number: 5, 
                question: '......and......are good examples of input device?',
                answer: 'Keyboard and Mouse',
                options: {
                    a: 'Cat and Rat',
                    b: 'Aki and Paw-paw',
                    c: 'Data and Paper',
                    d: 'Keyboard and Mouse'
                },
                number: 6, 
                    question: '......is a former VP during Goodluck Johnathan regim?',
                    answer: 'Sambo',
                    options: {
                        a: 'Asari Dokubo',
                        b: 'Nnamdi Kalu',
                        c: 'Bukola Saraki',
                        d: 'Atiku Abubakar'
                    },
                    number: 7, 
                        question: '.....is one of the deadly islamic terrorist group in the world?',
                        answer: 'Boko Haram',
                        options: {
                            a: 'Boko Haram',
                            b: 'Ipob',
                            c: 'Oduduwa',
                            d: 'Amoeketon'
                        },
                        number: 8, 
                            question: 'Anything that has weight and occupies space is called.....?',
                            answer: 'Matter',
                            options: {
                                a: 'Air',
                                b: 'Motor',
                                c: 'Aeroplane',
                                d: 'Matter'
                            },
                            number: 9, 
                                question: 'Joe Biden is the name of newly elected president of which country?',
                                answer: 'USA',
                                options: {
                                    a: 'USSR',
                                    b: 'USA',
                                    c: 'UNN',
                                    d: 'UBA'
                                },
                                number: 10, 
                                    question: '.....is an innovating Tech Hub in Eastern part of Nigeria?',
                                    answer: 'Rad5',
                                    options: {
                                        a: 'Rad5',
                                        b: 'Chicken Republic',
                                        c: 'Crunches',
                                        d: 'Abia Poly'
                                    },
    }
]
let mainAnswer;
let counter = 0;

function newQuestion(){
	if(counter < 10){
	    // console.log(totalQuestions[counter])
	    const keys = Object.keys(questions);
	    const randomIndex = keys[Math.floor(Math.random() * keys.length)];
	    const item = questions[randomIndex];
	    mainAnswer = item.answer;
	    console.log(mainAnswer);
	    // console.log(allAnswers)

	    document.getElementById('questionBox').innerHTML = item.question;
	    document.getElementById('optiona').innerHTML = item.options.a;
	    document.getElementById('optionb').innerHTML = item.options.b;
	    document.getElementById('optionc').innerHTML = item.options.c;
	    document.getElementById('optiond').innerHTML = item.options.d;
	}else{
	    document.getElementById('holder').innerHTML = "<h1 class='center'> Thank You for Completing Quizzer 1.0 <br> Your Total Point is : " + point + "</h1>";
	}
}
newQuestion()