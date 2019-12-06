let NavBarElement;
function OnBodyLoad(){
  ShrinkTitleBarOnLoad();
  function ShrinkTitleBarOnLoad(){
    NavBarElement = document.getElementById("desktop-nav-bar");
    console.log(screen.availWidth);
    if(screen.availWidth < 600){
      NavBarElement = document.getElementById("mobile-nav-bar");
      document.getElementById("LongTitleBarLogo").hidden = true;
      document.getElementById("ShortTitleBarLogo").hidden = false;
      document.getElementById("navigation-tabs").classList.add("invisible");
      document.getElementById("navigation-tabs-2").classList.add("invisible");
      document.getElementById("mobile-nav-bar").classList.remove("invisible");
    }
  }
  LoadFeatures();
}

window.onscroll = function() {scrollFunction()};
let FixedScrollbar = false;
function scrollFunction() {
  if(NavBarElement.getBoundingClientRect().top <= 0 && !FixedScrollbar){
    FixedScrollbar = true;
    document.getElementById("PageBody").style.paddingTop = NavBarElement.getBoundingClientRect().height + "px";
    NavBarElement.classList.add("fixed-nav-bar");
    let amountToScroll = -1 * NavBarElement.getBoundingClientRect().height - document.getElementById("UpperFeatureIndex").getBoundingClientRect().height;
    document.getElementById("UpperFeatureIndex").remove();
    scrollBy(amountToScroll, 0);


  }
  // if (document.body.scrollTop > NavBarElement. || document.documentElement.scrollTop > 20) {
  //   document.getElementById("navbar").style.top = "0";
  // } else {
  //   document.getElementById("navbar").style.top = "-50px";
  // }
}

function ClearActiveTabs() {
  let TabElements = document.getElementsByClassName("develop-tab");
  for(var i = 0; i < TabElements.length; i++){

    TabElements[i].classList.remove("develop-tab--active");
    if(TabElements[i].children.length > 0){
      if(TabElements[i].children[0].className == "develop-tab__nav-indicator")
        TabElements[i].children[0].hidden = true;
    }

  }
}

const features = [
  {FeatureTitle : "Painting!",
    FeatureImg : "img/LayerOfDetail 1.jpg",
    FeatureDescription : "Allows you to create paintings from image files in under 5 minutes",
    FeatureStatus : "done"},

  {FeatureTitle : "Custom Map Markers",
    FeatureImg : "img/LayerOfDetail 1.jpg",
    FeatureDescription : "Records the position of your screenshots and allows you to add notes to your map that will be overlayed on your regular map whenever you hit G",
    FeatureStatus : "soon"},

  {FeatureTitle : "Loot Highlighting",
    FeatureImg : "img/LayerOfDetail 1.jpg",
    FeatureDescription : "Will highlight red any loot in your inventory that is lower value than the loot chest you are looking at and highlight green any high-value loot you should prioritize",
    FeatureStatus : "soon"},

  {FeatureTitle : "Guitar Macro",
    FeatureImg : "img/LayerOfDetail 1.jpg",
    FeatureDescription : "Make it so you can jam out to sick tunes on your way to your target",
    FeatureStatus : "soon"},

  {FeatureTitle : "Minimap and Wayfinding",
    FeatureImg : "img/LayerOfDetail 1.jpg",
    FeatureDescription : "Overlaying a small map and compass in the corner of the screen to help you see your immediate surroundings without having to hit G",
    FeatureStatus : "soon"},

  {FeatureTitle : "Player tracking",
    FeatureImg : "img/LayerOfDetail 1.jpg",
    FeatureDescription : "Get alerts when an enemy clan comes online, keep track of your enemies changing usernames, and view trends in your target's online hours so you can attack when they least expect it",
    FeatureStatus : "soon"},

];

function LoadEachFeature() {
  let fHolder = document.createElement("div");
  fHolder.id = "fholder";
  document.getElementById("FeaturesBody").appendChild(fHolder);
  for (let i = 0; i < features.length; i++) {
    let newElement = document.createElement("div");
    newElement.id = "featurebox-" + i.toString();
    newElement.className = "featurebox";
    fHolder.appendChild(newElement);
    //newElement.addEventListener("load", function(){console.log("yay")});
    //$("#PageBody").add(newElement);
    $("#featurebox-" + i.toString()).load("html/FeatureCard.html");

  }
}

function LoadFeatures(){
  ClearActiveTabs();
  document.getElementById("features").classList.add("develop-tab--active");
  document.getElementById("features").children[0].hidden = false;
  //$("#PageBody").load("html/Features.html");

  LoadEachFeature();


  // for(let i = 0; i < features.length; i ++){
  //   let newElement = document.createElement("div")
  //   newElement.id = "featurebox" + i.toString();
  //   $("#PageBody").add(newElement);
  //   $("#featurebox" + i.toString()).load("html/FeatureCard.html");
  //   $("#fc-blank-title").innerText = features[i].FeatureTitle;
  //   $("#fc-blank-title").id = "#fc-title-" + i.toString();
  //
  //   $("#fc-blank-icon").innerText = features[i].FeatureStatus;
  //   $("#fc-blank-icon").id = "#fc-icon-" + i.toString();
  //
  //   $("#fc-blank-description").innerText = features[i].FeatureDescription;
  //   $("#fc-blank-description").id = "#fc-description-" + i.toString();
  //
  //   $("#fc-blank-image").style = "url(" + features[i].FeatureImg + ")";
  //   $("#fc-blank-image").id = "#fc-image-" + i.toString();
  //
  //   document.getElementById("PageBody").appendChild(newElement);
  //}
}
function LoadAbout(){
  ClearActiveTabs();
  document.getElementById("about").classList.add("develop-tab--active");
  document.getElementById("about").children[0].hidden = false;
  document.getElementById("PageBody");
}
