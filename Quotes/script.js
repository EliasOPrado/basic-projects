const quotes = [{

        name: 'Stephen King',
        quote: 'Get busy living or get busy dying.'
    },
    {
        name: 'Jhon F. Kennedy',
        quote: 'Those who dare to fail miserably can achieve greatly.'

    },
    {
        name: 'Abraham Lincoln',
        quote: 'I am a success today because I had a friend who believed in me and I didn`t have the heart to let him down.'


    },
    {
        name: 'Leonard Da Vinci',
        quote: 'It had long since come to my atttention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.'

    },
    {
        name: 'Leo Tolstoy',
        quote: 'If you want to be happy, be.'

    }
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote); //display the quote when button is clicked.

function displayQuote() { //will get the quotes from quotes const
    let number = Math.floor(Math.random() * quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}
