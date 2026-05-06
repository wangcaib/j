// 当前图片序号
var currentImageIndex = 2;

// 切换图片
function changeImage() {
  // 替换第一个图片的路径
  var image = document.getElementById("myImage");
  image.src = "log/image" + currentImageIndex + ".jpg";

  // 替换第二个图片的路径
  var secondImage = document.getElementById("mySecondImage");
  secondImage.src = "log/t" + currentImageIndex + ".png";

  // 递增当前图片序号
  currentImageIndex++;

  // 如果当前图片序号超过总数，重置为1
  if (currentImageIndex > 5) {
    currentImageIndex = 1;
  }
}

// 页面加载完成后执行
window.onload = function () {
  // 获取密码输入框元素
  var passwordInput = document.getElementById("password");

  // 监听密码输入框的键盘按下事件
  passwordInput.addEventListener("keyup", function (event) {
    // 判断按下的键是否为回车键（keyCode为13）
    if (event.keyCode === 13) {
      // 模拟点击登录按钮
      document.getElementById("btn").click();
    }
  });
};

// 检查密码
function checkPassword() {
  var password = document.getElementById("password").value;
  var count = parseInt(document.getElementById("count").value);

  // 此处为了简单起见，假设正确密码是 "password"
  if (password !== "517620") {
    count++;
    document.getElementById("count").value = count;

    // 根据错误次数显示不同的提示消息
    if (count === 1) {
      document.getElementById("message").innerHTML =
        "<span>(ಡωಡ)密码是一个六位数</span>";
    } else if (count === 4) {
      document.getElementById("message").innerHTML =
        "<span>(ง •̀_•́)ง密码由两个三位数日期组成</span>";
    } else if (count === 6) {
      document.getElementById("message").innerHTML = "<span>wrong</span>";
    } else if (count === 7) {
      document.getElementById("message").innerHTML =
        "<span>٩( 'ω' )و 还记得你们领红本本的日期吗</span>";
    } else if (count === 9) {
      document.getElementById("message").innerHTML =
        "<span>wrong</span>";
    } 
     else if (count === 10) {
      document.getElementById("message").innerHTML =
        "<span>ruang</span>";
    }  else if (count === 11) {
      document.getElementById("message").innerHTML =
        "<span>wrong again</span>";
    }
    else if (count === 12) {
            document.getElementById("message").innerHTML =
              "<span>✺（∗❛ัᴗ❛ั∗)◞✺试过结婚的日期吗</span>";
     }
    else if (count === 13) {
      document.getElementById("message").innerHTML =
        "<span>| ू•ૅω•́)！！！还没进去呀</span>";
    } 
     else if (count === 18) {
      document.getElementById("message").innerHTML =
        "<span>ԅ(¯ㅂ¯ԅ)不是吧，还没进去呢,密码是由51开头的哦</span>";
    } else if (count === 21) {
      document.getElementById("message").innerHTML =
        "<span>。。。</span>";
    } else if (count === 24) {
      document.getElementById("message").innerHTML =
        "<span>|ω・）密码是由20结尾的哦</span>";
    }  else if (count === 36) {
      document.getElementById("message").innerHTML =
        "<span>ԅ(¯ㅂ¯ԅ)应该不会蠢到这吧</span>";
    }
     else {
      document.getElementById("message").innerHTML =
        "<span>密码错误</span>";
    }

    // 设置密码提示消息的渐变色
    var message = document.getElementById("message");
    message.style.background =
      "linear-gradient(135deg, #ff6b9d, #ff8a80, #ffab91)";
    message.style.webkitBackgroundClip = "text";
    message.style.webkitTextFillColor = "transparent";
  } else {
    window.location.href = "i/index.html"; // 跳转到受保护的页面
  }
}
 window.addEventListener("load", function () {
        const loader = document.querySelector(".cssload-main");
        const section = document.querySelector("section");
        loader.style.display = "none";
        section.style.display = "";
      });
