document.addEventListener("DOMContentLoaded", function () {
    const text = `
Chúc mừng sinh nhật, bạn yêu dấu!
Chúc mọi ngày của cuộc đời cậu tràn đầy niềm vui, hạnh phúc, và thành công.
Từ ngày tớ biết cậu có vẻ như cuộc sống tớ đã thêm 1 màu sắc mới vui cũng có mà buồn cũng có 
không biết sau này như nào nhưng trước mắt tớ cảm thấy rất vui vì quen biết Thảo
Cậu hãy nhớ rằng
Dù cả thế giới có quay lưng lại với cậu
thì tớ vẫn sẽ luôn bên cậu lắng nghe và chê bai
Bớt thức khuya lại và dành thời gian nhiều học tập và bạn bè
Chúc cậu tuổi mới ngày càng xinh đẹp và luôn giữ được nụ cười trên môi nhé
Chúc Thảo sinh nhật tuổi 20 vui vẻ.

                                   _22/10/2023_wuyi-Thành cảm xúc_
lớp du '<3'`;

    const textContainer = document.getElementById("text");
    const videoContainer = document.getElementById("video-container");

    let currentIndex = 0;

    function typeText() {
        if (currentIndex < text.length) {
            textContainer.textContent += text[currentIndex];
            currentIndex++;
            setTimeout(typeText, 50);
        } 
    }

    typeText();
});
