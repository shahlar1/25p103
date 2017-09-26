var image=document.getElementById("aaa");
var img=["img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg"];
var index=0;
function slide()
{
    image.setAttribute("src",img[index]);
    index++;
    if(index>=img.length)
    {
    index=0;
    }
}
setInterval("slide()",2000);
