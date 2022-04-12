const tournamentWinner = require('./winner.js');


let competitions = [['HTML', "C#"],
                    ["C#", 'Python'],
                    ['Python', 'HTML']];
let results = [0, 0, 1]



test('this answer should be true', () => {
    expect(tournamentWinner(competitions, results)).toEqual('Python');
});

