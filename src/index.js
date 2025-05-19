
// step one
let mainEL = document.querySelector(".main");
console.log(mainEL);

mainEL.style.backgroundColor = 'var(--main-bg)';

mainEL.innerHTML ='<h1>DOM Manipulation</h1>';
mainEL.classList.add("flex-ctr");

// getElementsByClassName("main")
// step two

const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add("flex-around");

//step three

var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];
// let unorderlist = [];
// for(let i = 0; i < menuLinks.length;i++){
//     let a = document.createElement("a")
//     a.style.href = menuLinks[i].href
//     a = menuLinks[i].text
//     console.log(a)

// }



//console.log(menuLinks);

const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height="100%";
subMenuEl.style.backgroundColor ="var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

//part4
//step1
menuLinks.forEach(link => {
  const a = document.createElement('a');
  a.setAttribute('href', link.href);
  a.textContent = link.text;
  topMenuEl.appendChild(a);
  //a.subLinks = link.subLinks;
})
const topMenuLinks = document.querySelectorAll("a");

topMenuEl.addEventListener("click",(event)=>{
  //step2
  event.preventDefault();
  //step2-1
  //console.dir(event.target)
  if(event.target.localName !== "a"){ 
    //console.log("Test3 " + event.target.localName())
    
    return;
    //step 2-2
  }
  console.log(event.target.textContent);
  //step 2-3
  event.target.classList.toggle("active");
  //topMenuLinks.forEach((el) =>{
    console.log(topMenuLinks)
    for(let el of topMenuLinks){
    
    if (el !== event.target) {
      el.classList.remove("active");
      //console.log("Test")
    }
  }

    let link = menuLinks.filter((menu)=>{
     if(menu.text === event.target.textContent){
      return true
     }
    })[0]
    event.target.classList.toggle("active")
    if(link.subLinks && event.target.classList.toggle("active")){
      subMenuEl.style.top ="100%";
    }else{
      subMenuEl.style.top ="0%"
    }
  
    let buildSubmenu = function(links){
      subMenuEl.innerHTML='';
      console.log(subMenuEl)
      links.forEach((link)=>{
        let element = document.createElement("a");
        element.setAttribute("href", link)
      })

      console.log(link)
      
    }
    buildSubmenu(menuLinks[0].subLinks)
 
    //console.log(link)

    //part 5
    //console.log(event.target.classList.contains("active"))
    // if(!event.target.classList.contains("active")){
    //   console.log(event.target)
    // }

    
//console.log(event.target)

//     if(event.target.matches(".active")){
//       if(event.target.subLinks){
//         subMenuEl.style.top ="100%";
//       }
//       else{
//         subMenuEl.style.top = "0%";
//       }
//     }
})
