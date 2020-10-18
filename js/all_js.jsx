function first_run(){
    //untuk pengendali theme 
    if(sessionStorage.getItem('color_atas_bc') != "null")
    {
        document.getElementById('atas').style.backgroundColor = sessionStorage.getItem('color_atas_bc');
        document.getElementById('main_section').style.backgroundColor = sessionStorage.getItem('color_main_section_bc');
        document.getElementById('main_section').style.color = sessionStorage.getItem('color_main_section_c');
    }
    //kembali ke home.html jika telah melakukan login di register page
    if( window.location.href.split(/(\\|\/)/g).pop() == "register.html" && sessionStorage.getItem("userLogin") == "true"){
        window.location.href = "home.html";
    } else
    if( window.location.href.split(/(\\|\/)/g).pop() == "user_setting.html" && sessionStorage.getItem("userLogin") == "null"){
        window.location.href = "home.html";
    }
    if( window.location.href.split(/(\\|\/)/g).pop() == "user_setting.html" && sessionStorage.getItem("userLogin") == "null"){
        window.location.href = "home.html";
    }
    //load menu bagian kiri dan tengah
    $('#menu_kiri').load("https://kevinchandrah.github.io/itzypad/template_menu_kiri.html");
    $('#menu_search').load("https://kevinchandrah.github.io/itzypad/template_menu_search.html");
    feather.replace();

    //load menu bagian kanan
    if (sessionStorage.getItem('userLogin') == "true")  {
        $('#menu_account').load("https://kevinchandrah.github.io/itzypad/template_menu_user.html");
    } else {
        $('#menu_account').load("https://kevinchandrah.github.io/itzypad/template_menu_login_register.html");
    }

    //load buku
    ambil_buku();
}
document.addEventListener('DOMContentLoaded',first_run);

//========================================================================================
//                         pada saat login button bekerja ( ketika login )


function login(){
    var nama = document.getElementById('login_username').value;
    var password = document.getElementById('login_password').value;
    if(sessionStorage.getItem("userName") != null && sessionStorage.getItem("userPassword") != null)
    {
        sessionStorage.setItem("loginNama",nama);
        sessionStorage.setItem("loginPassword",password);
    }
    if ( sessionStorage.getItem("userName") == sessionStorage.getItem("loginNama") && sessionStorage.getItem("userPassword") == sessionStorage.getItem("loginPassword") &&
         sessionStorage.getItem("userName") != null && sessionStorage.getItem("userPassword") != null){
        alert('login success');
        sessionStorage.setItem("userLogin","true");
    } else {
        alert('login fail');
    }
    location.reload();
}

//========================================================================================
//                    pada saat register button bekerja ( ketika registrasi)

function register(){
    var nama = document.getElementById('register_username').value;
    var password = document.getElementById('register_password').value;
    var password_confirm = document.getElementById('register_password_confirm').value;
    var nickname = document.getElementById('register_Nickname').value;
    var email = document.getElementById('register_e-mail').value;
    if (password != password_confirm)
    {
        alert('Those password didn\'t match. Try Again!!');
    } else {
        sessionStorage.setItem("userName",nama);
        sessionStorage.setItem("userPassword",password);
        sessionStorage.setItem("userNickname",nickname);
        sessionStorage.setItem("userEmail",email);
        
        document.getElementById('pop1').style.display = "block";
    }
}

//========================================================================================
//                                  menu button (link)

function pop_up_back(){
    document.getElementById('pop1').style.display = "none";
}

function home_button(){
    window.location.href = "home.html";
}
function list_button(){
    window.location.href = "list.html";
}

function search_button(){
    sessionStorage.setItem("search_data", document.getElementById('input_search').value);
    if(window.location.href.split(/(\\|\/)/g).pop() == "home.html"){
        location.reload();
    } else {
        window.location.href="home.html";
    }
}
function register_button(){
    window.location.href = "register.html";
}
function user_button(){
    if(window.getComputedStyle(document.querySelector('#menu_user')).display == "none"){
        document.getElementById('menu_user').style.display = "block";
    } else if(window.getComputedStyle(document.querySelector('#menu_user')).display == "block"){
        document.getElementById('menu_user').style.display = "none";
    }
}
function about_button(){
    window.location.href ="about.html";
}
//========================================================================================
//                                 Event Key Press Button

$("#login_username").keypress(function(event) { 
    if (event.keyCode === 13) { 
        $("#login_button").click(); 
    } 
}); 
$("#login_password").keypress(function(event) { 
    if (event.keyCode === 13) { 
        $("#login_button").click(); 
    } 
}); 
$("#input_search").keypress(function(event) { 
    if (event.keyCode === 13) { 
        $("#search_button").click(); 
    } 
}); 


//========================================================================================
//                                 Menu Account button

function setting_button(){
    window.location.href = "user_setting.html";
}
function change_password(){
    var old_pas = document.getElementById('register_password').value;
    var new_pas = document.getElementById('register_password_new').value;
    var new_pas_confirm = document.getElementById('register_password_new_confirm').value;
    if(old_pas == sessionStorage.getItem("userPassword") && new_pas == new_pas_confirm){
        alert('Your password has been changed');
        sessionStorage.setItem('userPassword',new_pas)
    } else {
        alert('Your enter password incorrectly');
    }
    document.getElementById('register_password').value = '';
    document.getElementById('register_password_new').value = '';
    document.getElementById('register_password_new_confirm').value = '';
    location.reload();
}
function change_nickname(){
    sessionStorage.setItem('userNickname',document.getElementById('new_nickname').value)
    alert("Your nickname has been changed");
    location.reload();
}
function change_theme_light(){
    //bc = background-color c = color
    sessionStorage.setItem('color_atas_bc', "null");
    sessionStorage.setItem('color_main_section_bc', "null");
    sessionStorage.setItem('color_main_section_c', "null");
    location.reload();
}
function change_theme_dark(){
    //bc = background-color c = color
    sessionStorage.setItem('color_atas_bc', "#171717");
    sessionStorage.setItem('color_main_section_bc', "#323232");
    sessionStorage.setItem('color_main_section_c', "#F5F5F5");
    location.reload();
}

function log_out_button(){
    sessionStorage.setItem("loginNama", "null");
    sessionStorage.setItem("loginPassword","null");
    sessionStorage.setItem("userLogin","null");
    sessionStorage.setItem('color_atas_bc', "null");
    sessionStorage.setItem('color_main_section_bc', "null");
    sessionStorage.setItem('color_main_section_c', "null");
    alert("You have been logged out from session");
    document.close();
    location.reload();
}
