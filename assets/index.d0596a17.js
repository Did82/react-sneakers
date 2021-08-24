var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,n=(e,n)=>{for(var s in n||(n={}))a.call(n,s)&&o(e,s,n[s]);if(t)for(var s of t(n))r.call(n,s)&&o(e,s,n[s]);return e};import{R as s,L as l,T as c,r as i,a as m,C as d,b as g,c as f,B as u}from"./vendor.f478e47a.js";const p=s.createContext({}),x=()=>{const{goods:e,goodsInCart:t,setGoodsInCart:a}=s.useContext(p),r=e.filter((e=>!!t.find((t=>t.good===e.id)))).reduce(((e,t)=>e+t.price),0);return{goodsInCart:t,setGoodsInCart:a,totalPrice:r}},h=e=>{const{totalPrice:t}=x();return s.createElement("header",{className:"flex justify-between p-4 border-b"},s.createElement(l,{to:"/"},s.createElement("div",{className:"group flex gap-3 m-4 items-center"},s.createElement("img",{src:"/img/logo.png",alt:"logo",className:"w-10 h-10 transition ease-in-out duration-200 transform group-hover:scale-125"}),s.createElement("div",null,s.createElement("h3",{className:"font-bold uppercase text-xl"},"React Sneakers"),s.createElement("p",{className:"text-sm text-gray-500"},"Магазин лучших кроссовок")))),s.createElement("div",{className:"flex items-center m-4"},s.createElement("ul",{className:"flex gap-6 items-center"},s.createElement("li",{className:"group flex gap-2 items-center cursor-pointer",onClick:e.onClickCart},s.createElement("img",{src:"/img/cart.svg",alt:"Cart",className:"transition ease-in-out duration-200 transform group-hover:scale-125"}),s.createElement("span",null,t," руб.")),s.createElement("li",{className:"cursor-pointer transition ease-in-out duration-200 transform hover:scale-125"},s.createElement(l,{to:"/favorites"},s.createElement("img",{src:"/img/favorites.svg",alt:"Favorites"}))),s.createElement("li",{className:"cursor-pointer transition ease-in-out duration-200 transform hover:scale-125"},s.createElement(l,{to:"/orders"},s.createElement("img",{src:"/img/user.svg",alt:"User"}))))))},E=({title:e,description:t,img:a,onClose:r})=>s.createElement("div",{className:"flex flex-col items-center gap-4 flex-grow justify-center"},s.createElement("img",{src:a,alt:"Empty"}),s.createElement("h3",{className:"font-bold text-xl"},e),s.createElement("span",{className:"text-center w-52 text-sm"},t),r?s.createElement("button",{className:"flex flex-none group justify-center items-center text-center border-0 bg-btn relative h-14 w-56 text-white rounded-xl active:bg-green-700 hover:opacity-90 focus:outline-none",onClick:r},s.createElement("img",{className:"absolute left-6 transition duration-500 ease-in-out transform group-hover:-translate-x-1",src:"/img/arrow-left.svg",alt:"Arrow"}),s.createElement("span",{className:"pl-4"},"Вернуться назад")):s.createElement(l,{to:"/"},s.createElement("button",{className:"flex flex-none group justify-center items-center text-center border-0 bg-btn relative h-14 w-56 text-white rounded-xl active:bg-green-700 hover:opacity-90 focus:outline-none"},s.createElement("img",{className:"absolute left-6 transition duration-500 ease-in-out transform group-hover:-translate-x-1",src:"/img/arrow-left.svg",alt:"Arrow"}),s.createElement("span",{className:"pl-4"},"Вернуться назад")))),v=({onClose:e,onRemove:t})=>{const[a,r]=s.useState(!1),[o,n]=s.useState(),{goods:l,goodsInCart:d,setGoodsInCart:g,isCartOpen:f}=s.useContext(p),{totalPrice:u}=x();return s.createElement(c.Root,{appear:!0,show:f,as:i.exports.Fragment},s.createElement("aside",{className:"fixed inset-0 overflow-y-hidden z-10"},s.createElement("div",{className:"absolute inset-0 overflow-hidden"},s.createElement(c.Child,{as:i.exports.Fragment,enter:"ease-in-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0"},s.createElement("div",{onClick:e,className:"absolute inset-0 bg-black bg-opacity-50 transition-opacity"})),s.createElement(c.Child,{as:i.exports.Fragment,enter:"transform transition ease-in-out duration-300",enterFrom:"translate-x-full",enterTo:"translate-x-0",leave:"transform transition ease-in-out duration-300",leaveFrom:"translate-x-0",leaveTo:"translate-x-full"},s.createElement("div",{className:"absolute inset-y-0 right-0 bg-white w-96 shadow-2xl p-6 flex flex-col gap-4"},s.createElement("div",{className:"flex justify-between flex-none"},s.createElement("h2",{className:"text-xl font-bold mb-2"},"Корзина"),s.createElement("button",{onClick:e,className:"border-0 opacity-60 hover:opacity-100 transition-opacity focus:outline-none"},s.createElement("img",{src:"/img/delete.svg",alt:"Close"}))),d.length>0?s.createElement(i.exports.Fragment,null,s.createElement("div",{className:"flex flex-col gap-4 flex-grow overflow-auto"},l.filter((e=>!!d.find((t=>t.good===e.id)))).map((e=>s.createElement("div",{key:e.id,className:"flex items-center justify-between gap-4 border rounded-xl p-4"},s.createElement("img",{className:"",src:e.imgUrl,alt:"Sneakers",height:70,width:70}),s.createElement("div",{className:"flex flex-col gap-2"},s.createElement("p",{className:"text-sm"},e.name),s.createElement("p",{className:"font-bold"},e.price," руб.")),s.createElement("button",{className:"border-0 opacity-60 hover:opacity-100 transition-opacity focus:outline-none"},s.createElement("img",{onClick:()=>t(d.find((t=>t.good===e.id))),src:"/img/delete.svg",alt:"Delete",className:"w-14"})))))),s.createElement("div",{className:"flex flex-col gap-2 flex-none"},s.createElement("div",{className:"flex justify-between"},s.createElement("span",null,"Итого:"),s.createElement("div",{className:"border-b-2 border-dashed flex-grow mx-1.5 mb-1.5"}),s.createElement("span",{className:"font-bold"},u," руб.")),s.createElement("div",{className:"flex justify-between"},s.createElement("span",null,"Включая налог 5%:"),s.createElement("div",{className:"border-b-2 border-dashed flex-grow mx-1.5 mb-1.5"}),s.createElement("span",{className:"font-bold"},u-Math.round(.95*u)," руб."))),s.createElement("button",{onClick:()=>{m.post("https://60f0071af587af00179d3cf2.mockapi.io/orders",{goods:d}).then((e=>n(e.data.id))).catch((e=>console.log(e))),r(!0),d.forEach((e=>{m.delete(`https://60f0071af587af00179d3cf2.mockapi.io/cart/${e.id}`).then((e=>console.log(e.data.id,e.statusText))).catch((e=>console.log(e)))})),g([])},className:"flex flex-none group justify-center items-center text-center border-0 bg-btn relative h-14 text-white rounded-xl active:bg-green-700 hover:opacity-90 focus:outline-none"},"Оформить заказ",s.createElement("img",{className:"absolute right-8 transition duration-500 ease-in-out transform group-hover:translate-x-1",src:"/img/arrow.svg",alt:"Arrow"}))):s.createElement(E,{title:a?"Заказ оформлен!":"Корзина пустая",description:a?`Ваш заказ #${o} скоро будет передан курьерской доставке`:"Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.",img:a?"/img/order.jpg":"/img/cart-empty.jpg",onClose:e}))))))},b=({isLoading:e,id:t,name:a,imgUrl:r,price:o,onClickPlus:n,onClickFavorite:l})=>{const{isGoodsInCart:c,isGoodsInFavorites:m}=s.useContext(p);return s.createElement("div",{className:"border rounded-2xl w-56 p-6 flex flex-col gap-4 relative hover:shadow-xl transition ease-in-out duration-200 transform hover:-translate-y-1"},e?s.createElement(d,{speed:2,width:200,height:235,viewBox:"0 0 210 260",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb"},s.createElement("rect",{x:"0",y:"0",rx:"10",ry:"10",width:"175",height:"130"}),s.createElement("rect",{x:"0",y:"170",rx:"4",ry:"4",width:"93",height:"15"}),s.createElement("rect",{x:"0",y:"230",rx:"0",ry:"0",width:"70",height:"32"}),s.createElement("rect",{x:"143",y:"230",rx:"0",ry:"0",width:"32",height:"32"}),s.createElement("rect",{x:"0",y:"150",rx:"4",ry:"4",width:"175",height:"15"})):s.createElement(i.exports.Fragment,null,l&&s.createElement("button",{className:"absolute border-0  focus:outline-none transition ease-in-out duration-200 transform hover:scale-125",onClick:()=>{l({good:t})}},s.createElement("img",{src:m(t)?"/img/heart-active.svg":"/img/heart.svg",alt:"Heart"})),s.createElement("img",{className:"place-self-center",src:r,alt:"sneakers",width:133,height:113}),s.createElement("h5",{className:"font-normal"},a),s.createElement("div",{className:"flex justify-between items-center"},s.createElement("div",null,s.createElement("p",{className:"uppercase text-sm text-gray-400"},"цена:"),s.createElement("b",null,o," руб.")),n&&s.createElement("button",{className:"border-0 focus:outline-none transition ease-in-out duration-200 transform hover:scale-125",onClick:()=>{n({good:t})}},s.createElement("img",{src:c(t)?"/img/checked.svg":"/img/plus.svg",alt:"Plus"})))))},y=({goods:e,searchValue:t,onChangeSearchValue:a,onAddToCart:r,onAddToFavorites:o,setSearchValue:l,isLoading:c})=>s.createElement(i.exports.Fragment,null,s.createElement("div",{className:"flex items-center justify-between m-4"},s.createElement("h1",{className:"font-bold text-3xl"},t?`Поиск по запросу: "${t}"`:"Все кроссовки"),s.createElement("div",{className:"flex border rounded-lg items-center w-76"},s.createElement("img",{src:"/img/search.svg",alt:"Search",className:"mx-2"}),s.createElement("input",{onChange:a,value:t,className:"border-0 outline-none rounded-lg h-10 text-gray-700",type:"text",placeholder:"Поиск..."}),t&&s.createElement("img",{onClick:()=>l(""),src:"/img/delete.svg",alt:"Clear",className:"mr-2 justify-self-end w-6"}))),s.createElement("div",{className:"flex p-4 flex-wrap gap-10 justify-start"},(()=>{const a=e.filter((e=>e.name.toLowerCase().includes(t.toLowerCase())));return(c?[...Array(8)]:a).map(((e,t)=>s.createElement(b,n({isLoading:c,key:e?e.id:t,onClickFavorite:o,onClickPlus:r},e))))})())),N=({onAddToCart:e,onAddToFavorites:t})=>{const{goods:a,goodsInFavorites:r}=s.useContext(p);return s.createElement(i.exports.Fragment,null,s.createElement("div",{className:"flex items-center justify-between m-4"},s.createElement("h1",{className:"font-bold text-3xl"},"Мои закладки")),r.length>0?s.createElement("div",{className:"flex p-4 flex-wrap gap-8 justify-start"},a.filter((e=>!!r.find((t=>t.good===e.id)))).map((a=>s.createElement(b,n({key:a.id,onClickFavorite:t,onClickPlus:e,favorites:r},a))))):s.createElement("div",{className:"my-36"},s.createElement(E,{title:"Закладок нет :(",description:"Вы ничего не добавляли в закладки",img:"/img/empty-smile.svg"})))},w=({onAddToCart:e,onAddToFavorites:t})=>{const[a,r]=s.useState([]),{goods:o,isLoading:l,setIsLoading:c}=s.useContext(p);return s.useEffect((()=>{c(!0),m.get("https://60f0071af587af00179d3cf2.mockapi.io/orders").then((e=>{const t=e.data.reduce(((e,t)=>[...e,...t.goods]),[]).map((e=>o.find((t=>t.id===e.good))));r(t),c(!1)})).catch((e=>console.log(e)))}),[]),s.createElement(i.exports.Fragment,null,s.createElement("div",{className:"flex items-center justify-between m-4"},s.createElement("h1",{className:"font-bold text-3xl"},"Ваши заказы")),a.length>0?s.createElement("div",{className:"flex p-4 flex-wrap gap-8 justify-start"},(l?[...Array(8)]:a).map(((e,t)=>s.createElement(b,n({isLoading:l,key:t},e))))):s.createElement("div",{className:"my-36"},s.createElement(E,{title:"У вас нет заказов",description:"Оформите хотя бы один заказ.",img:"/img/orders-empty.svg"})))},C=()=>{const[e,t]=s.useState([]),[a,r]=s.useState([]),[o,n]=s.useState([]),[l,c]=s.useState(!1),[i,d]=s.useState(""),[f,u]=s.useState(!0);s.useEffect((()=>{Promise.all([m.get("https://60f0071af587af00179d3cf2.mockapi.io/cart"),m.get("https://60f0071af587af00179d3cf2.mockapi.io/favorites"),m.get("https://60f0071af587af00179d3cf2.mockapi.io/goods")]).then((e=>{u(!1),r(e[0].data),n(e[1].data),t(e[2].data)}))}),[]);const x=e=>a.some((t=>t.good===e)),E=e=>o.some((t=>t.good===e)),b=e=>{const t=a.find((t=>t.good===e.good));x(e.good)?m.delete(`https://60f0071af587af00179d3cf2.mockapi.io/cart/${t.id}`).catch((e=>console.error(e))).then((()=>r((t=>t.filter((t=>t.good!==e.good)))))):m.post("https://60f0071af587af00179d3cf2.mockapi.io/cart",e).then((e=>r((t=>[...t,e.data])))).catch((e=>console.error(e)))},C=e=>{const t=o.find((t=>t.good===e.good));E(e.good)?m.delete(`https://60f0071af587af00179d3cf2.mockapi.io/favorites/${t.id}`).catch((e=>console.error(e))).then((()=>n((t=>t.filter((t=>t.good!==e.good)))))):m.post("https://60f0071af587af00179d3cf2.mockapi.io/favorites",e).then((e=>n((t=>[...t,e.data])))).catch((e=>console.error(e)))};return s.createElement(p.Provider,{value:{goods:e,goodsInCart:a,goodsInFavorites:o,isGoodsInCart:x,isGoodsInFavorites:E,isCartOpen:l,setGoodsInCart:r,isLoading:f,setIsLoading:u}},s.createElement("div",{className:"bg-white rounded-3xl shadow-lg max-w-wrapper my-12 mx-auto flex flex-col"},s.createElement(h,{onClickCart:()=>{c(!0),document.body.style.overflow="hidden"}}),s.createElement(v,{onClose:()=>{c(!1),document.body.style.overflow="auto"},onRemove:e=>{m.delete(`https://60f0071af587af00179d3cf2.mockapi.io/cart/${e.id}`).catch((e=>console.error(e))).then((()=>r((t=>t.filter((t=>t.id!==e.id))))))}}),s.createElement("main",{className:"p-4 flex flex-col flex-grow"},s.createElement(g,{path:"/",exact:!0},s.createElement(y,{goods:e,searchValue:i,setSearchValue:d,onChangeSearchValue:e=>{d(e.target.value)},onAddToCart:b,onAddToFavorites:C,goodsInFavirites:o,isLoading:f})),s.createElement(g,{path:"/favorites",exact:!0},s.createElement(N,{onAddToCart:b,onAddToFavorites:C})),s.createElement(g,{path:"/orders",exact:!0},s.createElement(w,{onAddToCart:b,onAddToFavorites:C})))))};f.render(s.createElement(s.StrictMode,null,s.createElement(u,null,s.createElement(C,null))),document.getElementById("root"));
