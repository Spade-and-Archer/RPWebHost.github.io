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
