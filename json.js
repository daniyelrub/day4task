
//resume data in JSON format 



const resumeData = {
  name: "Danielruban",
  age: 23,
  gender: "male",
  state: "Tamil Nadu",
  district: "Ramanathapuram",
  landmark: "Thondi",
  education: [
    {
      year: "2021-2023",
      institution: "Alagappa University, Karaikudi",
      degree: "MSc (Mathematics)",
      percentage: "77.10"
    },
    {
      year: "2017-2020",
      institution: "Alagappa University, Karaikudi",
      degree: "BSc (Mathematics)",
      percentage: "70.40"
    },
    {
      year: "2017",
      institution: "De Britto Hr. Sec. School",
      degree: "HSC",
      percentage: "64.25"
    }
  ]
};



//  for the above the JSON  format  iterate over all for loops(for,for in ,for of,for each)

// Using this (for loop)
for (let key in resumeData) {
  if (Array.isArray(resumeData[key])) {
    console.log(key + ": ");
    for (let i = 0; i < resumeData[key].length; i++) {
      for (let prop in resumeData[key][i]) {
        console.log("  " + prop + ": " + resumeData[key][i][prop]);
      }
    }
  } else {
    console.log(key + ": " + resumeData[key]);
  }
}


//using this (for in loop)
for (let key in resumeData) {
  if (Array.isArray(resumeData[key])) {
    console.log(key + ": ");
    resumeData[key].forEach((item) => {
      for (let prop in item) {
        console.log("  " + prop + ": " + item[prop]);
      }
    });
  } else {
    console.log(key + ": " + resumeData[key]);
  }
}

  
//using this (for of loop)
for (let key in resumeData) {
  if (Array.isArray(resumeData[key])) {
    console.log(key + ": ");
    for (let item of resumeData[key]) {
      for (let prop in item) {
        console.log("  " + prop + ": " + item[prop]);
      }
    }
  } else {
    console.log(key + ": " + resumeData[key]);
  }
}



//using this(for each loop)
for (let key in resumeData) {
  if (Array.isArray(resumeData[key])) {
    console.log(key + ": ");
    resumeData[key].forEach((item) => {
      for (let prop in item) {
        console.log("  " + prop + ": " + item[prop]);
      }
    });
  } else {
    console.log(key + ": " + resumeData[key]);
  }
}

  


// //this is below here simple loop method in JSON format

// //for in loop
//   for (const key in resumeData) {
//     if (resumeData.hasOwnProperty(key)) {
//       console.log(key + ': ' + resumeData[key]);
//     }
//   }
  



// //for of loop
// const keys = Object.keys(resumeData);
// for (const key of keys) {
//   console.log(key + ': ' + resumeData[key]);
// }




// //for each loop
// Object.entries(resumeData).forEach(([key, value]) => {
//     console.log(key + ': ' + value);
//   });
  


