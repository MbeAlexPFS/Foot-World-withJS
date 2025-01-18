//Toogle function - 2funcs
let toggle_btn  = document.getElementById("toggled");
let no_toggle_btn = document.getElementById("no-toggled");
let header = document.getElementById("header")

toggle_btn.onclick = ()=> {
    header.classList.replace("toggled","no-toggled")
    
}

no_toggle_btn.onclick = ()=> {
    header.classList.replace("no-toggled","toggled")   
}

//Score debug function in commentary form - 4funcs
if ( document.getElementById("score") != undefined ) {
    let score_select = document.getElementById("score")
    let score_debug = document.getElementById("score_debug")
    score_select.oninput = () => {
        let score_html = "Score "
        for (let i = 0; i < score_select.value; i++) {
            score_html += `<img class="ico" src="ressource/star-90.png" alt="ico-star">`
        }
        score_debug.innerHTML = score_html
    }
    
}

//Carousel - 2func
if (document.getElementById("c_left") != undefined) {
    let c_left = document.getElementById("c_left")
    let c_right = document.getElementById("c_right")
    let i_carousel = document.getElementById("i_carousel") 
    
    let img_list = ["ressource/image (1).jpeg","ressource/image (12).jpeg","ressource/image (13).jpeg","ressource/image (6).jpeg"]
    let img_selected = 0


    c_left.onclick = () => {
        if (img_selected > 0) {
            img_selected -= 1
        }
        i_carousel.setAttribute("src", img_list[img_selected])
    }

    c_right.onclick = () => {
        if (img_selected < img_list.length-1) {
            img_selected += 1
        }
        i_carousel.setAttribute("src", img_list[img_selected])
    }
}


//login/sign_in alternate form - 4funcs
if (document.getElementById("form1") != undefined) {
    let form_title = document.getElementById("form_title")
    let login_form = document.getElementById("form1")
    let btn_to_sign_in = document.getElementById("to_form2")

    let sign_in_form = document.getElementById("form2")
    let btn_to_login = document.getElementById("to_form1")

    let sign_in = document.getElementById("sign_in")
    let login = document.getElementById("login")

    let f_nom = document.getElementById("nom")
    let f_prenom = document.getElementById("prenom")
    let f_email = document.getElementById("s_email")
    let f_mdp = document.getElementById("s_mdp")

    let form = document.getElementById("sign_in_form")

    btn_to_sign_in.onclick = () => {
        login_form.classList.remove("selected")
        sign_in_form.classList.add("selected")
        form_title.textContent = "S'inscrire"
    }
    
    btn_to_login.onclick = () => {
        sign_in_form.classList.remove("selected")
        login_form.classList.add("selected")
        form_title.textContent = "Se connecter"
    }

    //form save

    form.onsubmit = ()=>{
        sessionStorage.setItem("user_data", [f_nom.value,f_prenom.value,f_email.value,f_mdp.value])
    }

    login.onclick = () => {
        alert("Erreur de connexion")
    }
}

//General profil showing on sign_in 2funcs
let profil_viewer = document.getElementById("profil_viewer")
let s_full_profil = document.getElementById("show_full_profil")
let sign_out_btn = document.getElementById("sign_out")
let profil_name = document.getElementById("profil_name")
if (sessionStorage.getItem("user_data") != undefined) {
    let data = sessionStorage.getItem("user_data").split(",")
    profil_viewer.style = "display: flex;"
    profil_name.textContent =   data[0] + " " + data[1]
    s_full_profil.onclick = () => {
        alert("Nom: "+data[0]+"\n"+"Prenom: "+data[1]+"\n"+"Email: "+data[2]+"\n"+"Password: "+data[3])
    }
    sign_out_btn.onclick = () => {
        sessionStorage.removeItem("user_data")
        alert("Vous venez de vous déconnecter")
        location.reload()
    }
}else{
     profil_viewer.style = "display: none;"
}

//debug profil 2funcs
let profil_btn = document.getElementById("profil_btn")
let user_data = document.getElementById("user_data")
profil_btn.onclick = ()=>{
    if (user_data.classList.contains("hidden")) {
        user_data.classList.remove("hidden")
    }else{
        user_data.classList.add("hidden")
    }
}

//total functions: 16







