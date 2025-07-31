function calculateFinalScore(){
    let totalMark = 0;

    if (scoring.testScore<=50 && scoring.schoolGrade<=30 && scoring.isFFamily == true){
        totalMark = scoring.testScore + scoring.schoolGrade + 20;
    }
    else if (scoring.testScore<=50 && scoring.schoolGrade<=30 && scoring.isFFamily == false){
        totalMark = scoring.testScore + scoring.schoolGrade;
    }
    else {
        return "Provide exact score";
    }

    if (totalMark >= 80){
        return true;
    }
    else {
        return false
    }


}

let scoring = {
    name : "Rakib",
    testScore : 50,
    schoolGrade : 29,
    isFFamily : false 
}

console.log(calculateFinalScore(scoring))