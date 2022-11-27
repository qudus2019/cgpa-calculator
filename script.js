let addCourse = document.querySelectorAll('.add-icon');
let cancel = document.querySelectorAll('.cancel');
let table = document.querySelector('table');
let addSemester = document.querySelector('.add-semester');
let outputs  = document.querySelector('.outputs');
 let container = document.querySelector('.container');
 const inputs = document.querySelector('.inputs');

//add course functionality
    container.addEventListener('click',function(e){
        //add course functionality
      if(e.target.classList.contains('add-icon') || e.target.tagName == 'SVG'){
        console.log('clicked')
let semester = e.target.parentElement.parentElement;
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
    
    console.log(count)

    let newSection = 'section';
    let div = 'div';
    add(count,outputs,inputs,div, newSection);
    count++;
    console.log(count)
 })

 //function that adds a semester in inputs section and report section
 function add(count, container_1,container_2,elementOne,elementTwo){
    
    let content_1 = `<h3 class='sub-heading'>Semester ${count}</h3>
    <ul>
        <li>
            <h4>Weight:</h4>
            <span class="output">00</span>
        </li>
        <li>
            <h4>Total Units:</h4>
            <span class="output">00</span>
        </li>
        <li>
            <h4>GPA:</h4>
            <span class="output">0.00</span>
        </li>
    </ul>`

    let content_2 = `<div class="header">
    <h1 class="main-heading">Semester ${count}</h1>
    <div class="add-icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
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