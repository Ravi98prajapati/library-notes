// if a user add a note add it in local storage

let addBtn = document.getElementById('addBtn') ;
// let notesObj;
addBtn.addEventListener("click" ,function(e){
    let addTxt = document.getElementById("addTxt") ;
    let notes    =  localStorage.getItem("notes") ;
    if(notes== null){
        notesObj = [] ;
    }else{
        notesObj = JSON.parse(notes )
    }
    // console.log(notes);
    notesObj.push(addTxt.value) ;
    localStorage.setItem("notes" , JSON.stringify(notesObj)) ;
    addTxt.value = "" ;
    console.log(notesObj) ;
    showNotes()

})
 // function to show elements from local storage
function showNotes(){
    let notes    =  localStorage.getItem("notes") ;
    if(notes== null){
        notesObj = [] ;
    }else{
        notesObj = JSON.parse(notes)
    }


    let html= '';
    notesObj.forEach(function(element,index){
html += `
<div class=" noteCards card mx-2 my-2" style="width: 18rem;">
            
<div class="card-body">
  <h5 class="card-title">Note ${index +1}</h5>
  <p class="card-text">${element +1}</p>
  <button id="${index}" onclick= "deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
</div>
</div> 
`
    })

    let notesElm = document.getElementById('notes')
    if(notesObj.length !=0){
        notesElm.innerHTML = html 
    }else{
        notesElm.innerHTML = `Nothing to show ! use "Add  a Note section above to add notes."  `
    }
}
showNotes() ;

// Function to delete a note 
function deleteNote(index){

    let notes    =  localStorage.getItem("notes") ;
    if(notes== null){
        notesObj = [] ;
    }else{
        notesObj = JSON.parse(notes )
    }
    notesObj.splice(index,1) ;
    localStorage.setItem("notes" , JSON.stringify(notesObj)) ;
    showNotes() ;
}

let search = document.getElementById("searchtxt")  ; 
search.addEventListener("input", function(e){
    let inputVal = search.value.toLowerCase() ;
    let noteCards = document.getElementsByClassName('noteCards') ;
    Array.from(noteCards).forEach(function(element){
let cardTxt = element.getElementsByTagName("p")[0].innerText ;
if(cardTxt.includes(inputVal)){
    element.style.display = "block" ;
}else{
    element.style.display = "none" ;
}
    }) 
    console.log('input event fired',inputVal) ;
})
