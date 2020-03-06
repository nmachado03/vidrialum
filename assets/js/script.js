
//Nav: Aparece en scroll up
let ubicacionInicial = window.pageYOffset
window.onscroll = function(){
    let desplazamiento = window.pageYOffset
    if(ubicacionInicial >= desplazamiento){
        document.getElementById('nav').style.top = '0'
        document.getElementById('nav').style.background = 'rgba(0, 0, 0, .5)'
    }else{
        document.getElementById('nav').style.top = '-100px'
    }
    ubicacionInicial = desplazamiento
}




// Nav:Responsive
let icono = document.getElementById('icono')
let enlaces = document.getElementById('enlaces')
let contador = false

icono.addEventListener("click", function(){
    if(contador == false){
        enlaces.className = ('enlaces dos')
        contador=true
    }else{
        enlaces.classList.remove('dos')
        enlaces.className = ('enlaces uno')
        contador = false
    }
})



let defFilters = () => {
    let arr = document.getElementsByClassName('filter')
    let attrs = [];
    for(i = 0; i < arr.length; i++){
        let attr = arr[i].getAttributeNode('data-filter').value
        attrs.push(attr)
    }
    return attrs
}

console.log(defFilters())

// let filter = document.getElementsByClassName('filter')[0].getAttributeNode('data-filter').value
// let filter = document.getElementsByClassName('filter')[1].getAttributeNode('data-filter').value
// let filter = document.getElementsByClassName('filter')[2].getAttributeNode('data-filter').value
// let filter = document.getElementsByClassName('filter')[3].getAttributeNode('data-filter').value
// let filter = document.getElementsByClassName('filter')[4].getAttributeNode('data-filter').value



// filterSelection("all") // Execute the function and show all columns
// function filterSelection(c) {
//   var x, i;
//   x = document.getElementsByClassName("column");
//   if (c == "all") c = "";
//   // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
//   for (i = 0; i < x.length; i++) {
//     w3RemoveClass(x[i], "show");
//     if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
//   }
// }

// // Show filtered elements
// function w3AddClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) == -1) {
//       element.className += " " + arr2[i];
//     }
//   }
// }

// // Hide elements that are not selected
// function w3RemoveClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1) {
//       arr1.splice(arr1.indexOf(arr2[i]), 1);
//     }
//   }
//   element.className = arr1.join(" ");
// }

// // Add active class to the current button (highlight it)
// var btnContainer = document.getElementById("myBtnContainer");
// var btns = btnContainer.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function(){
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }