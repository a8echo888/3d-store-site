let postCount = 60;

let postsdownloads = [];
let postsviews = [];
let postscost = [];


for (let index = 0; index < postCount; index++) {
 
  let postDownloads = Math.floor(randomIntFromInterval(0, 500));

 postsdownloads.push(Math.floor(postDownloads));
 postsviews.push(Math.floor(randomIntFromInterval(postDownloads, 3000)));

 let randomprice = randomIntFromInterval(0, 4);
 if(randomprice>1){
  postscost.push(randomprice + "$");
 }
 else{
  postscost.push("Free");
 }
}







function randomIntFromInterval(min, max) { // min and max included 
    return (Math.random() * (max - min + 1) + min).toFixed(2);
  }

function Showpostinfo(postnumber,postimgsource){ // get clicked img src & postn°. assign random values
  document.getElementById("postViews").textContent = postsviews[postnumber] + " views";
  document.getElementById("postDownloads").textContent = postsdownloads[postnumber] + " downloads";
  document.getElementById("postCost").textContent = postscost[postnumber];

  document.getElementById("postImg").src = postimgsource;
  document.getElementById("posttitle").textContent = convertText(postimgsource);;
}

function convertText (src){ // convert src to title.

  let postTitlearray = src.split('\\').pop().split('/').pop();
  postTitlearray = postTitlearray.split('.');
  postTitlearray =postTitlearray[0].replaceAll("%20", " ");

return postTitlearray;
}

function Scrolltotop(){
  window.scrollTo({ top: 0, behavior: 'smooth' });
}