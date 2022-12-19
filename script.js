const form = document.querySelector("form"),
fileInput = form.querySelector(".file-input"),
progressArea = document.querySelector(".progress-area"),
uploadArea = document.querySelector("upload-area");

form.addEventListener("click", ()=>{
    fileInput.click();
});
fileInput.onchange = ({target}) =>{
    let file = target.files[0]; //this means that when user select multiple files, then getb onltm the first one.
    if(file){// if file is selected
        let fileName = file.name;
        uploadFile(fileName);//calling uploadFile with passing file name as an argument

    }
}
function uploadFile(name){
    
}


