function average(scores)
    {
        //Add all scores together

        var total = 0;
        scores.forEach(function(score){
            total += score;
        });
        //device by total number of scores
        var avg = total/scores.length
        //round average
        return Math.round(avg);
        

        //consolelog
        //console.log(total);
        //console.log(avg);
        //console.log(scores.length);
    
    }

var scores =[90, 98, 89, 100, 100, 86, 94]

console.log(average(scores));
