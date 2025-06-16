const images={landschap:["landschap1.jpg","landschap2.jpg"],portret:["portret1.jpg","portret2.jpg"],steden:["steden1.jpg","steden2.jpg"],natuur:["natuur1.jpg","natuur2.jpg"],nacht:["nacht1.jpg","nacht2.jpg"]};

document.querySelectorAll('nav button').forEach(btn=>{
  btn.onclick=()=>{
    document.querySelector('nav button.active').classList.remove('active');
    btn.classList.add('active');
    const cat=btn.dataset.cat;
    document.querySelector('section.tab.active').classList.remove('active');
    document.getElementById(cat).classList.add('active');
  };
});

Object.keys(images).forEach(cat=>{
  let idx=0;
  const sec=document.getElementById(cat);
  const img=sec.querySelector("img");
  sec.querySelector(".prev").onclick=()=>{ idx=(idx-1+images[cat].length)%images[cat].length; img.src=`images/${images[cat][idx]}`; };
  sec.querySelector(".next").onclick=()=>{ idx=(idx+1)%images[cat].length; img.src=`images/${images[cat][idx]}`; };
});