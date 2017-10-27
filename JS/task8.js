/**
 * Created by kalin on 2017/9/5.
 */
var root = document.getElementById("root");
var df = document.getElementById("depthft");
var bf = document.getElementById("layerft");
var prer = document.getElementById("preroot");
var postr = document.getElementById("postroot");
var orderArray = [];
var timer = null;

//深度优先遍历
function DF(node) {
    (function recurve(node){
        for(var i=0,len = node.children.length;i<len;i++){
            recurve(node.children[i]);
        }
        orderArray.push(node);
    })(node);
}

//广度优先遍历
function BF(node){
    var queue = [];
    orderArray.push(node);
    while(node){
        for(var i=0,len = node.children.length;i<len;i++){
            queue.push(node.children[i]);
            orderArray.push(node.children[i]);
        }
        node = queue.shift();
    }
}

//先根次序遍历
function preRootTraversal(node){
    orderArray.push(node);
    for(var i=0,len = node.children.length;i<len;i++){
        if(node.children[i] != null){
            preRootTraversal(node.children[i]);
        }
    }
}

//后根次序遍历（跟深度优先搜索一样）
function postRootTraversal(node){
    for(var i=0,len = node.children.length;i<len;i++) {
        if (node.children[i] != null) {
            postRootTraversal(node.children[i]);
        }
    }
    orderArray.push(node);
}

//避免不同遍历方法的干扰
function reset(){
    orderArray = [];
    clearInterval(timer);
    var divList = document.getElementsByTagName("div");
    for(var i=0,len=divList.length;i<len;i++){
        divList[i].style.backgroundColor = "#fff";
        divList[i].style.color = "#000";
    }
}

//遍历树，查找搜索词
function search(word){
    var i = 0;
    orderArray[i].style.backgroundColor = "#000fff";

    timer = setInterval(function(){
        if(orderArray[i].innerText.search(word) === 0){
            orderArray[i].style.backgroundColor = "#ff0000";
            orderArray[i].style.color = "#fff";
            alert("找到词："+ word);
            clearInterval(timer);
            return;
        }
        i++;
        if(i<orderArray.length){
            orderArray[i].style.backgroundColor = "#000fff";
            orderArray[i-1].style.backgroundColor = "#fff";
        }else{
            clearInterval(timer);
            orderArray.lastElementChild.style.backgroundColor = "#fff";
            alert("词："+ word +"查找失败！");
        }
    },800);
}


df.onclick = function(){
    var searchWord = document.getElementsByTagName("input")[0].value;
    reset();
    DF(root);
    search(searchWord);
};

bf.onclick = function(){
    var searchWord = document.getElementsByTagName("input")[0].value;
    reset();
    BF(root);
    search(searchWord);
};

prer.onclick = function () {
    var searchWord = document.getElementsByTagName("input")[0].value;
    reset();
    preRootTraversal(root);
    search(searchWord);
}

postr.onclick = function () {
    var searchWord = document.getElementsByTagName("input")[0].value;
    reset();
    postRootTraversal(root);
    search(searchWord);
}