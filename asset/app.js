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

//search and show match 3funcs (refactored by AI)
function create_matches(img, titre, date, heure, abonné) {
    return `<div class="flex column white v-center raduis shadow-black p-top m backdrop">
        <img class="img" src="${img}" alt="">
        <div class="text-white font">
            <h2>${titre}</h2>
            <ul>
                <li>date: ${date}</li>
                <li>heure: ${heure}</li>
                <li>abonné: ${abonné}</li>
            </ul>
        </div>
        <div class="flex column m center w-100">
            <button class="show" value="${img},${titre},${date},${heure},${abonné}">Voir</button>
        </div>
    </div>`;
}

function create_show_page(img, titre, date, heure, abonné) {
    return `<div class="flex bg-white raduis p w">
        <img src="${img}">
        <div class="flex column gap m font">
            <h1>${titre}</h1>
            <ul>
                <li>date: ${date}</li>
                <li>heure: ${heure}</li>
                <li>abonné: ${abonné}</li>
            </ul>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum consequuntur placeat nostrum provident, delectus libero hic aliquid deserunt corrupti quibusdam eos inventore minima dolore ullam doloremque qui! Velit, perspiciatis ipsum.</p>
            <div class="flex w-100 right">
                <button id="close">Fermer</button>
            </div>
        </div>
    </div>`;
}

let search_data = [
    { "img": "../ressource/image (11).jpeg", "titre": "Barça vs Real", "date": "10/11/25", "heure": "20h 45min", "abonné": 100 },
    { "img": "../ressource/image (19).jpeg", "titre": "Cote d'ivoire vs Burkina Faso", "date": "5/5/25", "heure": "10h 15min", "abonné": 50 },
    { "img": "../ressource/image (15).jpeg", "titre": "Liverpool vs PSG", "date": "6/3/25", "heure": "9h 00min", "abonné": 70 }
];

let search = document.getElementById("search");
let matches = document.getElementById("matches");
let show_container = document.getElementById("show_container");

function render_matches(filter = "") {
    matches.innerHTML = "";

    for (const element of search_data) {
        if (element.titre.toLowerCase().includes(filter.toLowerCase()) || filter === "") {
            matches.innerHTML += create_matches(element.img, element.titre, element.date, element.heure, element.abonné);
        }
    }

    if (matches.innerHTML === "") {
        matches.innerHTML = `<div class="bg-blue w-100 p raduis font">Matche introuvable</div>`;
    }
}
render_matches();

// search input
search.oninput = () => {
    render_matches(search.value);
};

// match show
matches.addEventListener("click", (event) => {
    if (event.target.classList.contains("show")) {
        const [img, titre, date, heure, abonné] = event.target.value.split(",");
        show_container.innerHTML = create_show_page(img, titre, date, heure, abonné);
        show_container.classList.remove("hidden-2");

        document.getElementById("close").onclick = () => {
            show_container.classList.add("hidden-2");
            show_container.innerHTML = "";
        };
    }
});


//total functions: 19







