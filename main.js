
function kiemtra(){
    
    event.preventDefault(); // Ngăn chặn form gửi dữ liệu
    const email = document.getElementById('emailForm').value;
    const password = document.getElementById('passwordForm').value;
    const school =document.getElementById('SchoolForm').value;
    // Kiểm tra xem đăng nhập có thành công hay khôn
    
    if ((email === 'Trương Văn Hào' && password === '18082008') || (email==='Hồ Lê Bảo Trân' && password==='01092008')) {
      // Chuyển hướng người dùng sang trang khác
      window.location.assign('http://127.0.0.1:5500/nammoi.html', '_blank');
      //lấy tên
      localStorage.setItem("name",email);
      localStorage.setItem("schoolit",school);
    } else {
      // In ra thông báo lỗi
      document.querySelector('.error-message').innerHTML = 'Email hoặc mật khẩu không chính xác';
    }
  }
function admin(){  
    window.open('https://www.facebook.com/haof08', '_blank');
}
function password(){
    
    const iconElement = document.querySelector('.form-item-icon2');
    const iconElementan = document.querySelector('.form-item-icon3');
    const passwordInput = document.querySelector('#passwordForm');
    iconElement.style.display = 'none';
    iconElementan.style.display= 'block';
    passwordInput.type='text';
}
function password2(){
    
    const iconElement = document.querySelector('.form-item-icon2');
    const iconElementan = document.querySelector('.form-item-icon3');
    const passwordInput = document.querySelector('#passwordForm');
    iconElement.style.display = 'block';
    iconElementan.style.display= 'none ';
    passwordInput.type='password';
}
function thongbao(){
document.getElementById("thong-bao2").innerHTML = 'Hiện tại website không hỗ trợ cho tính năng này';
document.getElementById("thong-bao").style.display = "block";
document.getElementById("lammo").style.display="block";
document.getElementById("close-btn").style.display = 'block';

}
function tatthongbao(){
    document.getElementById("thong-bao").style.display = "none";
document.getElementById("lammo").style.display="none";
document.getElementsByClassName("close-btn").style.display="none";
}
// JS web 2
var ok = false;
function nhac(){
document.getElementById("audio-player").play();
setTimeout(function() {
  if(ok===true){
    document.querySelector('#notification3').classList.remove('show');  
  }
  if(ok===false){
  document.querySelector('#notification3').classList.add('show');
  console.log('Hello, world!');
  ok=true; 
}
}, 5000);


}
function bell(){
    const iconElement = document.querySelector('#notification3');
    const iconElementan = document.querySelector('#notification2');
    iconElement.style.display = 'block';
    iconElementan.style.display= 'block';
}
  

function bell2(){
  const iconElement = document.querySelector('#notification3');
    const iconElementan = document.querySelector('#notification2');
    iconElement.style.display = 'block';
    iconElementan.style.display= 'none';
}

