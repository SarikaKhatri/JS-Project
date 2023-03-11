const songDiv=document.getElementById('song-div');
async function createDomDynamically()
{
    // console.log(songLength);
    // console.log(localStorage.length);
    
    await createDom();
}
window.onload= function createDom()
{
    // console.log(songDiv);
    var length=localStorage.getItem('songLength');
    for(var i=0;i<length;i++)
    {
        let x=document.createElement("a");
        x.style.height="400px";
        x.style.width="400px";
        x.style.margin="10px";
        x.style.backgroundColor="red";
        let img=document.createElement("img");
        var imgUrl=localStorage.getItem(`songPoster-${i+1}`);
        var songUrl=localStorage.getItem(`songUri-${i+1}`);
        x.href=songUrl;
        img.src= imgUrl;
        img.style.height="400px";
        img.style.width="400px";
        x.appendChild(img);
        songDiv.appendChild(x);
    }
};