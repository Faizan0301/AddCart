const header=document.getElementById('header')
header.innerHTML=`<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container">
	<a class="navbar-brand" href="#">LOGO</a>
	<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
		aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse" id="navbarNav">
		<ul class="navbar-nav">
			<li class="nav-item">
				<a class="nav-link active" aria-current="page" href="index.html">Home</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="addcart.html">Cart</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#">Demo</a>
			</li>
		</ul>
	</div>
	<div class="d-flex ">
		<button class="btn p-0 border-0"><a href="addcart.html" class="btn btn-outline-primary py-0 rounded-pill"><i class="bi bi-bag-fill me-2"></i><span id="count">1</span></a></button>
	</div>
</div>
</nav>`

const products=[
	{img:'https://i.pinimg.com/564x/bd/ab/c4/bdabc47e32d0770253c1899894e30648.jpg',title:'Speaker',price:99},
	{img:'https://i.pinimg.com/736x/93/87/7c/93877caccea6c3a8af001c1738651abb.jpg',title:'Watch',price:299},
	{img:'https://i.pinimg.com/736x/72/7f/50/727f509f866aa64b79d188a9f6c9de59.jpg',title:'Earbuds',price:119},
	{img:'https://i.pinimg.com/564x/17/5a/1c/175a1c862ee9c9942f4b00f6e76f66f6.jpg',title:'Wireless Charger',price:199},
	{img:'https://i.pinimg.com/564x/02/a0/b4/02a0b47654fddd766133f2c98c57f023.jpg',title:'Shoe',price:349},
	{img:'https://i.pinimg.com/564x/4f/99/f0/4f99f0fa210ab54be98a4f0eb3d1a47b.jpg',title:'Mobile Holder',price:49},
	{img:'https://i.pinimg.com/736x/e7/4f/a7/e74fa79edca889e7bc3e83c751a8b782.jpg',title:'Drone Camera',price:499},
]
products.forEach((product,i) => {
	document.getElementById('product-list').innerHTML+=`<div class="col-lg-3 g-4">
	<div class="card">
		<img src="${product.img}" class="card-img-top" alt="...">
		<div class="card-body">
			<h5 class="card-title">${product.title}</h5>
			<p class="card-text">Some quick example text to build on the card title and make up the bulk</p>
			<button class="btn btn-primary" onclick="addCard(${i})">Add Cart</button>
			<span class="float-end fw-bolder">$${product.price}</span>
		</div>
	</div>
</div>`
});
function addCard(id){
	var cart=JSON.parse(localStorage.getItem("cart"))
	var title=products[id].title
	var cartItem={
		img:products[id].img,
		title:title,
		price:products[id].price,
		qnty:1
	}
	if(cart==null){
		cart=[]
		cart.push(cartItem)
	}
	var findIndex=cart.findIndex((item)=>item.title==title)
	if(findIndex!=-1){
		cart[findIndex].qnty++
	}
	else{
		cart.push(cartItem)
		console.log(cart)
	}
	localStorage.setItem('cart',JSON.stringify(cart))
	proCount()
}
function proCount(){
	var cart=JSON.parse(localStorage.getItem("cart"))
	document.getElementById('count').innerHTML=cart.length
}
proCount()