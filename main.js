function showResults(questions, quizContainer, resultsContainer){ 	
    var answerContainers = quizContainer.querySelectorAll('.answers'); 	
              var userAnswer = ''; 	var numCorrect = 0; 	
                   for(var i=0; i<questions.length; i++){ 	
           userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value; 
                                    if(userAnswer===questions[i].correctAnswer){ 		
                                                         numCorrect++; 			 	
                                           answerContainers[i].style.color = 'lightgreen'; 		} 	
                                                       else{ 		                                                                				

answerContainers[i].style.color = 'red'; 
   } 	} 	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;}