document.addEventListener('DOMContentLoaded', function () {
    // Lắng nghe sự kiện DOMContentLoaded để đảm bảo tất cả các phần tử đã được tải trước khi thực hiện thao tác

    var giftBox = document.querySelector('.gift-box');
    var balloonsFireworks = document.getElementById('balloons-fireworks');
    var greetingCard = document.getElementById('greeting-card');
    var cardContent = document.getElementById('card-content');

    giftBox.addEventListener('click', function () {
        // Ẩn hộp quà và hiển thị bong bóng và pháo hoa
        giftBox.style.display = 'none';
        balloonsFireworks.style.display = 'block';
    });

    greetingCard.addEventListener('click', function () {
        // Ẩn thiệp chúc mừng và hiển thị nội dung trong thiệp
        greetingCard.style.display = 'none';
        cardContent.style.display = 'block';
    });
});
