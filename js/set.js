// 背景图片 Cookies 
function setBgImg(bg_img) {
    if (bg_img) {
        Cookies.set('bg_img', bg_img, {
            expires: 36500
        });
        return true;
    }
    return false;
}

// 获取背景图片 Cookies
function getBgImg() {
    var bg_img_local = Cookies.get('bg_img');
    if (bg_img_local && bg_img_local !== "{}") {
        return JSON.parse(bg_img_local);
    } else {
        setBgImg(bg_img_preinstall);
        return bg_img_preinstall;
    }
}

var bg_img_preinstall = {
    "type": "1", // 1:默认背景 2:每日一图 3:随机风景 4:随机动漫
    "path": "", //自定义图片
};


// 更改背景图片
function setBgImgInit() {
    var bg_img = getBgImg();
    $("input[name='wallpaper-type'][value=" + bg_img["type"] + "]").click();

    switch (bg_img["type"]) {
        case "1":
            var pictures = new Array();
            pictures[0] = './img/background1.webp';
            pictures[1] = './img/background2.webp';
            pictures[2] = './img/background3.webp';
            pictures[3] = './img/background4.webp';
            pictures[4] = './img/background5.webp';
            pictures[5] = './img/background6.webp';
            pictures[6] = './img/background7.webp';
            pictures[7] = './img/background8.webp';
            pictures[8] = './img/background9.webp';
            pictures[9] = './img/background10.webp';
            var rd = Math.floor(Math.random() * 10);
            $('#bg').attr('src', pictures[rd]) //随机默认壁纸
            break;
        case "2":
            $('#bg').attr('src', 'https://api.dujin.org/bing/1920.php'); //必应每日
            break;
        case "3":
            $('#bg').attr('src', 'https://api.ixiaowai.cn/gqapi/gqapi.php'); //随机风景
            break;
        case "4":
            $('#bg').attr('src', 'https://api.btstu.cn/sjbz/api.php?lx=dongman&format=images&method=zsy'); //随机动漫(https://api.ixiaowai.cn/api/api.php)
            break;
    }
}

$(document).ready(function () {
    // 壁纸数据加载
    setBgImgInit();
    // 设置背景图片
    $("#wallpaper").on("click", ".set-wallpaper", function () {
        var type = $(this).val();
        var bg_img = getBgImg();
        bg_img["type"] = type;

        if (type === "1") {
            setBgImg(bg_img);
            var pictures = new Array();
            pictures[0] = './img/background1.webp';
            pictures[1] = './img/background2.webp';
            pictures[2] = './img/background3.webp';
            pictures[3] = './img/background4.webp';
            pictures[4] = './img/background5.webp';
            pictures[5] = './img/background6.webp';
            pictures[6] = './img/background7.webp';
            pictures[7] = './img/background8.webp';
            pictures[8] = './img/background9.webp';
            pictures[9] = './img/background10.webp';
            var rd = Math.floor(Math.random() * 10);
            $('#bg').attr('src', pictures[rd]) //随机默认壁纸
            iziToast.show({
                icon: "fa-solid fa-image",
                timeout: 2500,
                message: '壁纸设置成功',
            });
        }

        if (type === "2") {
            setBgImg(bg_img);
            $('#bg').attr('src', 'https://api.dujin.org/bing/1920.php'); //必应每日
            iziToast.show({
                icon: "fa-solid fa-image",
                timeout: 2500,
                message: '壁纸设置成功',
            });
        }

        if (type === "3") {
            setBgImg(bg_img);
            $('#bg').attr('src', 'https://api.ixiaowai.cn/gqapi/gqapi.php'); //随机风景
            iziToast.show({
                icon: "fa-solid fa-image",
                timeout: 2500,
                message: '壁纸设置成功',
            });
        }

        if (type === "4") {
            setBgImg(bg_img);
            $('#bg').attr('src', 'https://api.btstu.cn/sjbz/api.php?lx=dongman&format=images&method=zsy'); //随机动漫(https://api.ixiaowai.cn/api/api.php)
            iziToast.show({
                icon: "fa-solid fa-image",
                timeout: 2500,
                message: '壁纸设置成功',
            });
        }
    });
});

//刷新缓存
$(function(){
    //监听".play_video"标签的点击事件
    $(".set-cache-settings").click(function(){
        //获取触发点击事件的标签。"$(this)"代表触发点击事件的标签
        //获取id值
        //var play_video_id = $(this).attr("id");
        //var play_video_url = "http://www.test.com/player.html?play_video_id=" + play_video_id;
        //window.open(play_video_url , 'dfq', 'height=400, width=600');
        iziToast.show({
            icon: "fa-solid fa-check",
            timeout: 2500,
            message: '清除成功,即将刷新页面！',
        });
        $.ajax({
            url:'',
            dataType:'document',
            data:{},
            cache:false, 
            ifModified :true ,
            success:function(response){
                //操作
                //window.location.reload();
            },
            async:false
         });
        window.setTimeout(function () {
            window.location.reload();
        },2500)
    });
});