 var minWindow = function(s, t) {
    let l = 0, r = 0, n = s.length, mapT = {}, map = {}, countT = 0;
       if(n < t.length) {
           return '';
       }
   
       for(let i = 0; i < t.length; i++) {
           let c = t.charAt(i);
           if(mapT[c] === undefined) {
               mapT[c] = 1;
               countT++;
           } else {
               mapT[c]++
           }
       }
       
       
      let formed = 0;
      let min = [0, n-1, Number.MAX_SAFE_INTEGER];
      while(r < n) {
          let c = s.charAt(r);
          if(map[c] === undefined) {
              map[c] = 1;
          } else {
              map[c]++
          }
          if (map[c] && map[c] == mapT[c]) {
              formed++;
          }
          
          while(formed == countT && l<=r) {
              let cL = s.charAt(l);
              if((r-l+1) < min[2]){
                  min = [l, r, r - l + 1]; 
              }
              
              map[cL]--;
              if(mapT[cL] && map[cL] < mapT[cL]){
                  formed--;
              }
              l++;
          }
          r++;
      } 
       if(min[2] == Number.MAX_SAFE_INTEGER){
           return '';
       }
       
       return s.substring(min[0], min[1] + 1);
       
   } 

   module.exports = minWindow;


//    PASS  minimum_sliding_window/sliding.test.js
//    ✓ this answer should be true (2 ms)
 
//  Test Suites: 1 passed, 1 total
//  Tests:       1 passed, 1 total
//  Snapshots:   0 total
//  Time:        0.436 s