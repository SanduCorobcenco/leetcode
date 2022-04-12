// O(N) time | O(k) space where N is the number of competitions, k is the number of teams

function tournamentWinner(competitions, results) {
    // Write your code here.
      let currentBestTeam = '';
      const scores = {[currentBestTeam]: 0};
      for(let idx = 0; idx < competitions.length; idx++) {
          const result = results[idx];
          const [homeTeam, awayTeam] = competitions[idx];
          
          const winningTeam = result === 1 ? homeTeam : awayTeam;
          updateScores(winningTeam, 3, scores);
          if(scores[winningTeam] > scores[currentBestTeam]) {
              currentBestTeam = winningTeam;
          }
      }
      
    return currentBestTeam;
  }
  
  function updateScores(team, points, scores) {
      if(!(team in scores)) scores[team] = 0;
      scores[team] += points;
  }

  module.exports = tournamentWinner;
  


//  PASS  tournamentWinner/winner.test.js
//  ✓ this answer should be true (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.464 s