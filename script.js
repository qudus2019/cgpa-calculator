let addCourse = document.querySelectorAll('.add-icon');




addCourse.forEach(function(each,index){
    console.log((index + 1) + each);
    let semester = each.parentElement.parentElement;
    console.log(semester);
})