function generatePlan() {
    var age = parseInt(document.getElementById('age').value);
    var gender = document.getElementById('gender').value;
    var goal = document.getElementById('goal').value;
  
    var plan = document.getElementById('plan');
    plan.innerHTML = '';
  
    var recommendation = '';
  
    if (gender === 'male') {
      if (age < 30) {
        recommendation = 'Recommendation for male under 30';
      } else {
        recommendation = 'Recommendation for male over 30';
      }
    } else {
      if (age < 30) {
        recommendation = 'Recommendation for female under 30';
      } else {
        recommendation = 'Recommendation for female over 30';
      }
    }
  
    switch (goal) {
      case 'lose':
        recommendation += ' to lose weight.';
        break;
      case 'maintain':
        recommendation += ' to maintain weight.';
        break;
      case 'gain':
        recommendation += ' to gain muscle.';
        break;
    }
  
    plan.innerHTML = recommendation;
  }