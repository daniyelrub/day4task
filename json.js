
//resume data in JSON format 




const resumeData = {
    "name": "Danielruban",
    "age": 23,
    "gender": "male",
    "10th-mark":"460",
    "10th-persentage": 92,
    "12th-persentage": 977,
    "12th-persentage": 81,
    "u.g-degree":"b.sc-mathematics",
    "height": "1.72cm",
    "weight": 56,
    "color": "white",
    "date_of_birth": "10.10.2000",
    "education": "MSc (Mathematics)",
    "university": "Alagappa University (Karaikudi)",
    "location": "Rameswaram",
    "college_name": "Govt Arts and Science College",
    "study_skills": ["HTML", "CSS", "JavaScript", "Excel"],
    "sports_skills": ["cricket", "football", "basketball"]
  };
  



  //  for the above the JSON  format  iterate over all for loops(for,for in ,for of,for each)



  //for loop
  for (let key in resumeData) {
    console.log(key + ': ' + resumeData[key]);
  }
  


//for in loop
  for (const key in resumeData) {
    if (resumeData.hasOwnProperty(key)) {
      console.log(key + ': ' + resumeData[key]);
    }
  }
  



//for of loop
const keys = Object.keys(resumeData);
for (const key of keys) {
  console.log(key + ': ' + resumeData[key]);
}




//for each loop
Object.entries(resumeData).forEach(([key, value]) => {
    console.log(key + ': ' + value);
  });
  




