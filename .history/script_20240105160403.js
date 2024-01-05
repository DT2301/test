// Các hằng số
const GIFT_OPENED = 'giftOpened';
const CARD_OPENED = 'cardOpened';

// Hàm mở hộp quà
function handleOpenGift() {

  // Thêm hiệu ứng cho bong bóng, pháo hoa
  const balloon = document.querySelector('.balloon');
  balloon.classList.add('fly-up');

  const firework = document.querySelector('.firework');
  firework.classList.add('fly-up');

  // Hiển thị chữ Happy Birthday
  const text = document.querySelector('.text');
  text.style.display = 'block';

  showPopup(); // Hiển thị pop-up

  // Phát âm thanh pop
  const audio = new Audio('pop.mp3');
  audio.play();

  // Lưu trạng thái
  localStorage.setItem(GIFT_OPENED, true);

}

// Hàm mở thiệp
function handleOpenCard() {

  // Phát âm thanh pop
  const audio = new Audio('pop.mp3');
  audio.play();

  // Lưu trạng thái
  localStorage.setItem(CARD_OPENED, true);

}

// Hàm hiển thị pop-up
function showPopup() {
  const popup = document.getElementById('gift-popup');
  popup.style.display = 'block'; 
}

// Đóng pop-up
const closeBtn = document.getElementById('close-popup');
closeBtn.addEventListener('click', () => {
  const popup = document.getElementById('gift-popup');
  popup.style.display = 'none';
})

// Hàm khởi tạo  
function init() {

  // Lấy trạng thái từ localStorage
  const isGiftOpened = localStorage.getItem(GIFT_OPENED);
  const isCardOpened = localStorage.getItem(CARD_OPENED);

  if (isGiftOpened) {
    // Ẩn hộp quà, hiển thị bong bóng    
    document.querySelector('.gift__box').style.display = 'none';
    document.querySelector('#balloons-fireworks').style.display = 'flex';
  }

  if (isCardOpened) {
    // Ẩn bìa thiệp, hiển thị nội dung
    document.querySelector('.card__cover').style.display = 'none'; 
    document.querySelector('#card-content').style.display = 'block';
  }

  // Gán sự kiện click
  const giftBox = document.querySelector('.gift__box');
  const cardCover = document.querySelector('.card__cover');

  giftBox.addEventListener('click', handleOpenGift);
  cardCover.addEventListener('click', handleOpenCard);  

}

// Khởi tạo sau khi load trang
document.addEventListener('DOMContentLoaded', init);