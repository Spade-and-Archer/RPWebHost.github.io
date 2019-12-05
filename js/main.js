function OnBodyLoad(){
  ShrinkTitleBarOnLoad();
  function ShrinkTitleBarOnLoad(){
    console.log(screen.availWidth);
    if(screen.availWidth < 600){
      document.getElementById("LongTitleBarLogo").hidden = true;
      document.getElementById("ShortTitleBarLogo").hidden = false;
    }
  }
}
function ClearActiveTabs() {
  let TabElements = document.getElementsByClassName("develop-tab");
  for(var i = 0; i < TabElements.length; i++){

    TabElements[i].classList.remove("develop-tab--active");
    if(TabElements[i].children.length > 0)
      TabElements[i].children[0].hidden = true;
  }
}

const features = [
  {FeatureTitle : "Painting!", FeatureImg : "img/LayerOfDetail 1.jpg", FeatureDescription : "Allows you to create paintings from image files in under 5 minutes", FeatureStatus : "Done"},
  {FeatureTitle : "Custom Map Markers", FeatureImg : "img/LayerOfDetail 1.jpg", FeatureDescription : "Allows you to create paintings from image files in under 5 minutes", FeatureStatus : "Done"},
  {FeatureTitle : "Loot Highlighting", FeatureImg : "img/LayerOfDetail 1.jpg", FeatureDescription : "Allows you to create paintings from image files in under 5 minutes", FeatureStatus : "Done"},
  {FeatureTitle : "Guitar Macro", FeatureImg : "img/LayerOfDetail 1.jpg", FeatureDescription : "Allows you to create paintings from image files in under 5 minutes", FeatureStatus : "Done"},
  {FeatureTitle : "Minimap and Wayfinding", FeatureImg : "img/LayerOfDetail 1.jpg", FeatureDescription : "Allows you to create paintings from image files in under 5 minutes", FeatureStatus : "Done"},

];
function LoadEachFeature() {
  for (let i = 0; i < features.length; i++) {
    let newElement = document.createElement("div");
    newElement.id = "featurebox-" + i.toString();
    document.getElementById("PageBody").appendChild(newElement);
    //$("#PageBody").add(newElement);
    $("#featurebox-" + i.toString()).load("html/FeatureCard.html");
    $("#fc-blank-title").innerText = features[i].FeatureTitle;
    $("#fc-blank-title").id = "#fc-title-" + i.toString();

    $("#fc-blank-icon").innerText = features[i].FeatureStatus;
    $("#fc-blank-icon").id = "#fc-icon-" + i.toString();

    $("#fc-blank-description").innerText = features[i].FeatureDescription;
    $("#fc-blank-description").id = "#fc-description-" + i.toString();

    $("#fc-blank-image").style = "url(" + features[i].FeatureImg + ")";
    $("#fc-blank-image").id = "#fc-image-" + i.toString();



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
}
