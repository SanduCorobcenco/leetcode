function classPhotos(redShirtHeights, blueShirtHeights) {
    redShirtHeights.sort((a,b) => b - a);
      blueShirtHeights.sort((a,b) => b - a);
  
      const firstRowColor = redShirtHeights[0] < blueShirtHeights[0] ? 'RED' : 'BLUE';
      for(let i = 0 ;i < redShirtHeights.length; i++) {
          const redShirtColor = redShirtHeights[i];
          const blueShirtColor = blueShirtHeights[i];
          
              if(firstRowColor === 'RED') {
              if(redShirtColor >= blueShirtColor) return false;
          } else if (blueShirtColor >= redShirtColor) return false;
                  }
      
      return true;
  }
  
module.exports = classPhotos;
  



// PASS  class_photos/photos.test.js
// ✓ this answer should be true (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.424 s