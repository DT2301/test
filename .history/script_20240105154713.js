const giftBox = document.querySelector('.gift-box');
const openGiftBtn = document.querySelector('#open-gift');
const card = document.querySelector('.card');
const openCardBtn = document.querySelector('#open-card');

// Xử lý click mở hộp quà 
openGiftBtn.addEventListener('click', () => {
  giftBox.classList.toggle('open'); // Thêm class open vào gift-box
  
  // Tạo hiệu ứng pháo hoa
  createFireworks(); 
  
  // Tạo hiệu ứng bong bóng 
  createBubbles();
})

// Xử lý click mở thiệp
openCardBtn.addEventListener('click', () => {
  card.classList.toggle('open');
})

// Hàm tạo pháo hoa
function createFireworks() {

    for(let i = 0; i < 30; i++) {
  
      const firework = document.createElement('div');
      firework.classList.add('fireworks');
  
      // Thiết lập ngẫu nhiên vị trí ban đầu
      firework.style.left = Math.random() * window.innerWidth + 'px';
      firework.style.top = Math.random() * window.innerHeight + 'px';
  
      // Thiết lập ngẫu nhiên thời gian delay
      firework.style.animationDelay = Math.random() * 5 + 's'; 
      
      document.body.appendChild(firework);
  
    }
  
  }
  
  
  // Hàm tạo bong bóng 
  function createBubbles() {
  
    for(let i = 0; i < 20; i++) {
  
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      
      bubble.style.left = Math.random() * window.innerWidth + 'px';
      bubble.style.top = Math.random() * window.innerHeight + 'px';
  
      bubble.style.animationDelay = Math.random() * 5 + 's';
  
      document.body.appendChild(bubble);
      
    }
  
  }