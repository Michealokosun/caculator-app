
const keypad = document.getElementById("keypad")
const result = document.getElementById("result")
const submit = document.querySelector(".submit")
const form_screen = document.querySelector(".form-screen")

// theme-------------------------------------------
const theme_form = document.querySelector(".theme-form")
const theme_1 = document.getElementById("theme1")
const theme_2 = document.getElementById("theme2")
const theme_3 = document.getElementById("theme3")



// window event ============
window.onload =  function () {
    if(localStorage.getItem("theme") == "theme1"){
        dark()

    }else if(localStorage.getItem("theme") == "theme2"){
        light()
    }else {
        purple()
    }


}

// 

const them1_checked = ()=>{
    const check_1 = document.getElementById("check1")
    check_1.setAttribute("checked","checked")
    
}
const them2_checked = ()=>{
    const check_2 = document.getElementById("check2")
  check_2.setAttribute("checked" ,"checked")
}
const them3_checked = ()=>{
    const check_3 = document.getElementById("check3")
    check_3.setAttribute("checked","checked")
}




const  dark = ()=>{
    localStorage.setItem("theme", "theme1")
    them1_checked()
    let link = document.createElement("link")
    link.rel= "stylesheet"
    document.getElementsByTagName("head")[0].appendChild(link)
    link.href= "./css/Main.css"

    

}
const light = ()=>{
    localStorage.setItem("theme", "theme2")
    them2_checked()
    let link = document.createElement("link")
    link.rel= "stylesheet"
    document.getElementsByTagName("head")[0].appendChild(link)
    link.href= "./css/theme1.css"
    

}
const purple  =() =>{
    localStorage.setItem("theme", "theme3")
    them3_checked()
    let link = document.createElement("link")
    link.rel= "stylesheet"
    document.getElementsByTagName("head")[0].appendChild(link)
    link.href= "./css/theme2.css"


}

// -------------------------------------
theme_form.addEventListener("click", (e)=>{
    
    if(e.target.classList.contains("theme1")){
        dark()
       
    }
    if(e.target.classList.contains("theme2")){
        light()
       
        // ===================
    }
    if(e.target.classList.contains("theme3")){
        purple()

    }
})


// ------------------------------------------------

let display = result.innerHTML


keypad.addEventListener("click", (e)=>{
    if(e.target.classList.contains("button")){
        let target = e.target.innerHTML

        result.innerHTML += target
        


    }

    if(e.target.classList.contains("submit")){

        try {
            result.innerHTML = eval(result.innerHTML)
            
        } catch (error) {
            let matherror = "invalid calculation"
            result.innerHTML = matherror;
            
        }
    }



    if (e.target.classList.contains("reset")) {
        result.innerHTML = ""
        
    }


    if(e.target.classList.contains("delete")){
       result.innerText = result.innerHTML.slice(0, -1)
     

    }
})


form_screen.addEventListener("submit", (e)=>{
    e.preventDefault()
})







