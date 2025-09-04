// Toggle dropdown + close on outside click, plus hover open on desktop
(function(){
  const dd = document.getElementById('nav-cat');
  const btn = dd.querySelector('.navbtn');

  btn.addEventListener('click', (e)=>{
    e.stopPropagation();
    dd.classList.toggle('open');
  });

  document.addEventListener('click', (e)=>{
    if(!dd.contains(e.target)) dd.classList.remove('open');
  });

  // Open on hover (desktop)
  let t;
  dd.addEventListener('mouseenter', ()=>{ clearTimeout(t); dd.classList.add('open'); });
  dd.addEventListener('mouseleave', ()=>{ t = setTimeout(()=> dd.classList.remove('open'), 120); });
})();