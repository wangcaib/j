         // 当页面完成加载后，隐藏加载动画
      window.addEventListener("load", function () {
        const loader = document.querySelector(".cssload-main");
        const section = document.querySelector("section");
        loader.style.display = "none";
        section.style.display = "";
      });
