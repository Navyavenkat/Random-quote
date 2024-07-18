document.addEventListener('DOMContentLoaded',function()
{
    const quotes= [
        "The best way to predict the future is to invent it. – Alan Kay",
        "Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll",
        "The only way to do great work is to love what you do. – Steve Jobs",
        "You miss 100% of the shots you don’t take. – Wayne Gretzky",
        "The best time to plant a tree was 20 years ago. The second best time is now. – Chinese Proverb"
    ];
    const quoteDisplay=document.getElementById('demo');
    const button=document.querySelector('.click');
    function generateQuote()
    {
        const randomIndex=Math.floor(Math.random() * quotes.length);
        quoteDisplay.textContent=quotes[randomIndex];
    }
    button.addEventListener('click',generateQuote);
    generateQuote();
});