const ulTag = document.querySelector("ul");
const sliderTag = document.querySelector(".slider");

const tabs = [ "home" , "services" , "about us" , "contact us" , "login"];

const handelTabChange = (event) => {
    const clickTabId = event.target.id;
    const clickLiTag = document.getElementById(clickTabId);
    const clickLiTagWidth = clickLiTag.offsetWidth;
    const clickLiTagOffsetLeft = clickLiTag.offsetLeft;
    sliderTag.style.width = clickLiTagWidth + "px";
    sliderTag.style.transform = `translateX(${clickLiTagOffsetLeft}px)`;
};
for ( let i = 0; i < tabs.length; i ++ ) {
    const liTag = document.createElement("li");
    liTag.append(tabs[i].toUpperCase());
    liTag.id = i; // id ကို သုံးပြီး ဘယ် tag ကို click လိုက်တယ်ဆိုတာကို ရှာနိုင်ဖို့ liTag ရဲ့ id ကို i ပေးတာ
    liTag.addEventListener("click" , handelTabChange);
    ulTag.append(liTag);
    if ( i === 0 ) {
        sliderTag.style.width = liTag.offsetWidth + "px";
    }
};