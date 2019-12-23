let NavBarElement;
let mobile = false;
function OnBodyLoad(){
  ShrinkTitleBarOnLoad();
  function ShrinkTitleBarOnLoad(){
    NavBarElement = document.getElementById("desktop-nav-bar");
    console.log(screen.availWidth);
    if(screen.availWidth < 600){
      mobile = true;
      NavBarElement = document.getElementById("mobile-nav-bar");
      document.getElementById("LongTitleBarLogo").classList.add("invisible");
      document.getElementById("ShortTitleBarLogo").hidden = false;
      document.getElementById("navigation-tabs").classList.add("invisible");
      document.getElementById("navigation-tabs-2").classList.add("invisible");
      document.getElementById("mobile-nav-bar").classList.remove("invisible");
    }
  }
  LoadFeatures();
  scrollBy(0, -10000);
}

window.onscroll = function() {scrollFunction()};
let FixedScrollbar = false;
function scrollFunction() {
  try{
    if(NavBarElement.getBoundingClientRect().top <= 0 && !FixedScrollbar){
      FixedScrollbar = true;
      if(!mobile)
        document.getElementById("PageBody").style.paddingTop = NavBarElement.getBoundingClientRect().height + "px";
      NavBarElement.classList.add("fixed-nav-bar");

      let amountToScroll = -1 * NavBarElement.getBoundingClientRect().height - document.getElementById("UpperFeatureIndex").getBoundingClientRect().height;
      if(mobile){
        amountToScroll =-1 * document.getElementById("UpperFeatureIndex").getBoundingClientRect().height + NavBarElement.getBoundingClientRect().height;
      }
      console.log(amountToScroll);
        //amountToScroll += document.getElementById("desktop-nav-bar").getBoundingClientRect().height;

      document.getElementById("UpperFeatureIndex").remove();

      scrollBy(0, amountToScroll);
    }
  }
  catch{

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
  $("#FeaturesBody").load("html/FeatureCard.html");
  for (let i = 0; i < 0; i++) {
    let newElement = document.createElement("div");
    newElement.id = "featurebox-" + i.toString();
    newElement.className = "featurebox";
    fHolder.appendChild(newElement);
    //newElement.addEventListener("load", function(){console.log("yay")});
    //$("#PageBody").add(newElement);
    $("#featurebox-" + i.toString());

  }
}

function LoadFeatures() {
  ClearActiveTabs();
  document.getElementById("features").classList.add("develop-tab--active");
  document.getElementById("features").children[0].hidden = false;
  //$("#PageBody").load("html/Features.html");

  LoadEachFeature();
}
var XMLObj;
function XMLLoading(){
  let xmlhttp = new XMLHttpRequest();

  xmlhttp.open("GET", "Features/Features.xml" , true);
  xmlhttp.send();

  XMLObj = xmlhttp.responseXML;

}
function loadXMLDoc() {

}

Object.fromXML = function( source, includeRoot ) {
  if( typeof source == 'string' )
  {
    try
    {
      if ( window.DOMParser )
        source = ( new DOMParser() ).parseFromString( source, "application/xml" );
      else if( window.ActiveXObject )
      {
        var xmlObject = new ActiveXObject( "Microsoft.XMLDOM" );
        xmlObject.async = false;
        xmlObject.loadXML( source );
        source = xmlObject;
        xmlObject = undefined;
      }
      else
        throw new Error( "Cannot find an XML parser!" );
    }
    catch( error )
    {
      return false;
    }
  }

  var result = {};

  if( source.nodeType == 9 )
    source = source.firstChild;
  if( !includeRoot )
    source = source.firstChild;

  while( source ) {
    if( source.childNodes.length ) {
      if( source.tagName in result ) {
        if( result[source.tagName].constructor != Array )
          result[source.tagName] = [result[source.tagName]];
        result[source.tagName].push( Object.fromXML( source ) );
      }
      else
        result[source.tagName] = Object.fromXML( source );
    } else if( source.tagName )
      result[source.tagName] = source.nodeValue;
    else if( !source.nextSibling ) {
      if( source.nodeValue.clean() != "" ) {
        result = source.nodeValue.clean();
      }
    }
    source = source.nextSibling;
  }
  return result;
};

String.prototype.clean = function() {
  var self = this;
  return this.replace(/(\r\n|\n|\r)/gm, "").replace(/^\s+|\s+$/g, "");
}
function LoadAbout(){
  ClearActiveTabs();
  document.getElementById("about").classList.add("develop-tab--active");
  document.getElementById("about").children[0].hidden = false;
  document.getElementById("PageBody");
}
