/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
 module.exports = function getTimeForEducation(
 	focus = 'family', 
 	knowsProgramming = true,
 	config = {family: 4}
 	) {
 	if(knowsProgramming == true){ 
 		let time = 800;
 		if (focus =='family'){
 			return Math.ceil(time/config.family);
 		}
 		else if (focus =='friends'){
 			return Math.ceil(time/config.friends);
 		}
 		else if (focus =='normal_life'){
 			return Math.ceil(time/config.normal_life);
 		}
 		else if (focus =='profession'){
 			return Math.ceil(time/config.profession);
 		}
 		else if (focus =='carrier'){
 			return Math.ceil(time/config.carrier);
 		}
 		else if (focus =='top_peformance'){
 			return Math.ceil(time/config.top_peformance);
 		} 
 	}
 	else {
 		let time = 1300;
 		if (focus =='family'){
 			return Math.ceil(time/config.family);
 		}
 		else if (focus =='friends'){
 			return Math.ceil(time/config.friends);
 		}
 		else if (focus =='normal_life'){
 			return Math.ceil(time/config.normal_life);
 		}
 		else if (focus =='profession'){
 			return Math.ceil(time/config.profession);
 		}
 		else if (focus =='carrier'){
 			return Math.ceil(time/config.carrier);
 		}
 		else if (focus =='top_peformance'){
 			return Math.ceil(time/config.top_peformance);
 		}
 	}

 };
