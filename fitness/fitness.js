// function generatePlan() {
//     var age = parseInt(document.getElementById('age').value);
//     var gender = document.getElementById('gender').value;
//     var goal = document.getElementById('goal').value;
  
//     var plan = document.getElementById('plan');
//     plan.innerHTML = '';
  
//     var recommendation = '';
  
//     if (gender === 'male') {
//       if (age < 30) {
//         recommendation = 'Recommendation for male under 30';
//       } else {
//         recommendation = 'Recommendation for male over 30';
//       }
//     } else {
//       if (age < 30) {
//         recommendation = 'Recommendation for female under 30';
//       } else {
//         recommendation = 'Recommendation for female over 30';
//       }
//     }
  
//     switch (goal) {
//       case 'lose':
//         recommendation += ' to lose weight.';
//         break;
//       case 'maintain':
//         recommendation += ' to maintain weight.';
//         break;
//       case 'gain':
//         recommendation += ' to gain muscle.';
//         break;
//     }
  
//     plan.innerHTML = recommendation;
//   }



// script.js
function getRecommendations() {
  const ageInput = document.getElementById("ageInput");
  const age = parseInt(ageInput.value);

  //   if (isNaN(age) || age < 0) {
  //     document.getElementById("recommendations").textContent =
  //       "Please enter a valid age.";
  //   }
  let recommendations = "";
  if (age < 14) {
    recommendations = "Please enter valid age !!";
  } else {
    if (age >= 14 && age <= 20) {
      recommendations =
        "Engage in 60 minutes or more of moderate-to-vigorous intensity physical activity daily. Participate in a variety of enjoyable physical activities, including sports, dancing, and strength training.";
    } else if (age >= 21 && age <= 28) {
      recommendations =
        "Aim for at least 150 minutes per week of moderate-intensity activity, such as brisk walking. Incorporate activities that strengthen muscles at least 2 days a week.";
    } else if (age >= 29 && age <= 37) {
      recommendations =
        "Continue with at least 150 minutes per week of moderate-intensity aerobic activity. Include muscle-strengthening exercises on 2 or more days per week.";
    } else if (age >= 38 && age <= 45) {
      recommendations =
        "Maintain at least 150 minutes per week of moderate-intensity aerobic activity. Focus on muscle-strengthening exercises to maintain overall fitness.";
    } else if (age >= 46 && age <= 55) {
      recommendations =
        "Aim for at least 150 minutes per week of moderate-intensity aerobic activity (e.g., brisk walking). Include muscle-strengthening exercises on 2 or more days per week.";
    } else if (age >= 56 && age <= 61) {
      recommendations =
        "Continue with at least 150 minutes per week of moderate-intensity aerobic activity. Engage in muscle-strengthening exercises regularly.";
    } else if (age >= 62) {
      recommendations =
        "Maintain at least 150 minutes per week of moderate-intensity aerobic activity (e.g., brisk walking). Include muscle-strengthening exercises on 2 or more days per week.";
    }
    document.getElementById("recommendations").textContent = recommendations;
  }
}