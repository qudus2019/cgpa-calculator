let addCourse = document.querySelectorAll('.add-icon');
let cancel = document.querySelectorAll('.cancel');
let table = document.querySelector('table');
let addSemester = document.querySelector('.add-semester');
let outputs  = document.querySelector('.outputs');
 let container = document.querySelector('.container');
 const inputs = document.querySelector('.inputs');
 let calculateButton = document.querySelector('#calculate');
 let allUnitsSum = 0;
 let allWeightsSum = 0;

//add course functionality
    document.addEventListener('click',function(e){
        //add course functionality
        //console.log('clicked the document')
      if(e.target.classList.contains('icon')){
        console.log('clicked the icon')
let semester = e.target.parentElement.parentElement.parentElement;
console.log(semester)
let tableBody = semester.querySelector('tbody');
console.log(tableBody);
let newCourse = document.createElement('tr');
let count = tableBody.querySelectorAll('tr').length + 1;
newCourse.innerHTML = `<td>
<label for="course-${count}">
    <input type="text" name="course" id="course-${count}" required class="course" placeholder="Code">
</label>
</td>
<td>
<label for="unit-${count}">
    <input type="number" name="unit" id="unit-${count}" min="1" max="9" required class="unit">
</label>
</td>
<td>
<label for="grade-${count}">
    <select name="Grade" id="grade-${count}">                     
        <option disabled selected>Grade</option>
        <option value="5">A</option>
        <option value="4">B</option>
        <option value="3">C</option>
        <option value="2">D</option>
        <option value="1">E</option>
        <option value="0">F</option>
    </select>
</label>
</td>
<td>  
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cancel">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
  
</td>`

count++

tableBody.appendChild(newCourse);
}else{
    //console.log('Not clicked!')
}
});

//Cancel a course out in a semester
 document.addEventListener('click',function(e){
     if(e.target.classList.contains('cancel')){
         e.target.parentElement.parentElement.remove();
     } 
    
 })

//current number of semesters
 let count = document.querySelectorAll('.semester').length + 1;
 //add a semester
 addSemester.addEventListener('click',function(e){
    
    //console.log(count)

    let newSection = 'section';
    let div = 'div';
    add(count,outputs,inputs,div, newSection);
    count++;
    //console.log(count)
 })

 //function that adds a semester in inputs section and report section
 function add(count, container_1,container_2,elementOne,elementTwo){
    
    let content_1 = `<h3 class='sub-heading'>Semester ${count}</h3>
    <ul>
                <li>
                    <h4>Weight:</h4>
                    <span class="output" id="semester-weight-${count}">00</span>
                </li>
                <li>
                    <h4>Total Units:</h4>
                    <span class="output" id="semester-unit-${count}">00</span>
                </li>
                <li>
                    <h4>GPA:</h4>
                    <span class="output" id="semester-gpa-${count}">0.00</span>
                </li>
            </ul>`

    let content_2 = `<div class="header">
    <h1 class="main-heading">Semester ${count}</h1>
    <div class="add-icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
    </div>
</div>
<form action="#" name="Semester-1">
    <table>
        <thead>
            <tr>
                <th>Course Code</th>
                <th>Unit</th>
                <th>Grade</th>
            </tr>
        </thead>
        <tbody>
             <!--Course one-->
            <tr>
                <td>
                    <label for="course-one">
                        <input type="text" name="course" id="course-one" required class="course" placeholder="Code">
                    </label>
                </td>
                <td>
                    <label for="unit-one">
                        <input type="number" name="unit" id="unit-1" min="1" max="9" required class="unit">
                    </label>
                </td>
                <td>
                    <label for="grade-one">
                        <select name="Grade" id="grade-one">                     
                            <option disabled selected>Grade</option>
                            <option value="5">A</option>
                            <option value="4">B</option>
                            <option value="3">C</option>
                            <option value="2">D</option>
                            <option value="1">E</option>
                            <option value="0">F</option>
                        </select>
                    </label>
                </td>
                <td>  
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cancel">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      
                </td>
            </tr>
             <!--Course two-->
            <tr>
                <td>
                    <label for="course-two">
                        <input type="text" name="course" id="course-two" required class="course" placeholder="Code">
                    </label>
                </td>
                <td>
                    <label for="unit-two">
                        <input type="number" name="unit" id="unit-two" min="1" max="9"  class='unit' required>
                    </label>
                </td>
                <td>
                    <label for="grade-two">
                        <select name="Grade" id="grade-two">                     
                            <option disabled selected>Grade</option>
                            <option value="5">A</option>
                            <option value="4">B</option>
                            <option value="3">C</option>
                            <option value="2">D</option>
                            <option value="1">E</option>
                            <option value="0">F</option>
                        </select>
                    </label>
                </td>
                <td>  
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cancel">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      
                </td>
            </tr>
             <!--Course three-->
            <tr>
                <td>
                    <label for="course-3">
                        <input type="text" name="course" id="course-3" required class="course" placeholder="Code">  
                    </label>
                </td>
                <td>
                    <label for="unit-3">
                        <input type="number" name="unit" id="unit-3" min="1" max="9" required class="unit">
                    </label>
                </td>
                <td>
                    <label for="grade-3">
                        <select name="Grade" id="grade-3">                     
                            <option disabled selected>Grade</option>
                            <option value="5">A</option>
                            <option value="4">B</option>
                            <option value="3">C</option>
                            <option value="2">D</option>
                            <option value="1">E</option>
                            <option value="0">F</option>
                        </select>
                    </label>
                </td>
                <td>  
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cancel">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      
                </td>
            </tr>
        </tbody>
    </table>
</form>`


let element_1 = document.createElement(elementOne);
element_1.classList.add('gpa');

let element_2 = document.createElement(elementTwo);
elementTwo.className = `semester semester-${count}`;

element_1.innerHTML = content_1;
element_2.innerHTML = content_2;

container_1.insertBefore(element_1,document.querySelector('.cgpa'));
container_2.insertBefore(element_2, addSemester);

 }

 //reset button functionality
 document.querySelector('.reset').addEventListener('click',(e)=>{
    document.location.reload(true);
 })

//calculate functionality
 calculateButton.addEventListener('click', function(e){
    //calculate();
    allUnitsSum = 0;
    allWeightsSum = 0;
   //console.log(document.querySelectorAll('form'))
   document.querySelectorAll('form').forEach((semester , ind)=>{
    let semesterWeight = 0;
    let semesterUnit = 0;
     //get weight container, unit container and gpa container for each semester in the report section
     let count = document.querySelectorAll('.semester').length; //number of current semesters
     
    semester.querySelectorAll('tbody tr').forEach((course,index)=>{
        
         let unit = +(course.querySelector('.unit').value);
        
         let selectGrade = course.querySelector('select');
        // console.log(selectGrade , grades)
         let selectedGrade = +(selectGrade.value);
         //console.log(typeof(selectedGrade)) 
         let weight = calcWeight(selectedGrade,unit);
         //console.log(typeof(weight))
         semesterWeight += weight;
        semesterUnit += unit;    

        //updateGpa()
        
         //console.log(`The unit for semester ${ind+1} course ${index + 1} is ${unit} and grade is ${selectedGrade} and weight is ${weight}`);

    })

    console.log(`Semester ${ind + 1} weight is ${semesterWeight} weights and unit is ${semesterUnit} units`);
        allUnitsSum += semesterUnit;
         allWeightsSum += semesterWeight;
         //console.log(typeof(semesterWeight), typeof(semesterUnit))
         //console.log(allWeightsSum,allUnitsSum);
         count++; //next semester
    let weight_container = document.querySelector(`#semester-weight-${ind + 1}`);
    let unit_container = document.querySelector(`#semester-unit-${ind + 1}`);
    let gpa_container = document.querySelector(`#semester-gpa-${ind + 1}`);

    weight_container.textContent = semesterWeight.toFixed(2);
    unit_container.textContent = semesterUnit.toFixed(2);
         console.log(weight_container, unit_container, gpa_container);
         let gpa = +(semesterWeight / semesterUnit);

         gpa_container.textContent = gpa.toFixed(2);


})



//console.log(`Total weights = ${allWeightsSum}, Total units = ${allUnitsSum} and CGPA = ${allWeightsSum/allUnitsSum}`)
let cgpa = allWeightsSum / allUnitsSum;
updateCGPA(cgpa.toFixed(2));
 })

 function calcWeight(grade,unit){
    return grade * unit 
 };

 function updateCGPA(CGPA){
   let cgpaOutput =  document.querySelector('.cgpa-output');
   cgpaOutput.textContent = CGPA;

    let gradeClass = classOfGrade(CGPA);

    document.querySelector('.grade-class').textContent = gradeClass;
 }

 function classOfGrade(cgpa){
    if(cgpa < 1.50){
        return 'PASS'
    }else if(cgpa >= 1.50 && cgpa <= 2.48){
        return 'Third class'
    }else if(cgpa >=2.49 && cgpa <=3.49){
        return 'Second class lower'
    }else if(cgpa >=3.50 && cgpa <=4.49){
        return 'Second class upper'
    }else if(cgpa >= 4.50 && cgpa <= 5.00){
        return 'First class'
    }else {
        return "NIL"
    }
 }

