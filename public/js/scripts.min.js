/*!
    * undefined v1.2.2 (https://www.famoussodaco.com)
    * Copyright 2020-2020 Alberto bebbo Capponi
    * Licensed under MIT
    */
    "use strict"; // Start of use strict

// script(src='https://rawgithub.com/soulwire/sketch.js/master/js/sketch.min.js')
!function(e,t){"object"==typeof exports?module.exports=t(e,e.document):"function"==typeof define&&define.amd?define(function(){return t(e,e.document)}):e.Sketch=t(e,e.document)}("undefined"!=typeof window?window:this,function(e,t){"use strict";function n(e){return"[object Array]"==Object.prototype.toString.call(e)}function o(e){return"function"==typeof e}function r(e){return"number"==typeof e}function i(e){return"string"==typeof e}function u(e){return C[e]||String.fromCharCode(e)}function a(e,t,n){for(var o in t)!n&&o in e||(e[o]=t[o]);return e}function c(e,t){return function(){e.apply(t,arguments)}}function l(e){var t={};for(var n in e)"webkitMovementX"!==n&&"webkitMovementY"!==n&&(o(e[n])?t[n]=c(e[n],e):t[n]=e[n]);return t}function s(e){function t(t){o(t)&&t.apply(e,[].splice.call(arguments,1))}function n(e){for(_=0;_<ee.length;_++)B=ee[_],i(B)?S[(e?"add":"remove")+"EventListener"].call(S,B,N,!1):o(B)?N=B:S=B}function r(){I(A),A=R(r),K||(t(e.setup),K=o(e.setup)),U||(t(e.resize),U=o(e.resize)),e.running&&!q&&(e.dt=(z=+new Date)-e.now,e.millis+=e.dt,e.now=z,t(e.update),Z&&(e.retina&&(e.save(),e.autoclear&&e.scale(V,V)),e.autoclear&&e.clear()),t(e.draw),Z&&e.retina&&e.restore()),q=++q%e.interval}function c(){S=J?e.style:e.canvas,D=J?"px":"",Y=e.width,j=e.height,e.fullscreen&&(j=e.height=v.innerHeight,Y=e.width=v.innerWidth),e.retina&&Z&&V&&(S.style.height=j+"px",S.style.width=Y+"px",Y*=V,j*=V),S.height!==j&&(S.height=j+D),S.width!==Y&&(S.width=Y+D),Z&&!e.autoclear&&e.retina&&e.scale(V,V),K&&t(e.resize)}function s(e,t){return L=t.getBoundingClientRect(),e.x=e.pageX-L.left-(v.scrollX||v.pageXOffset),e.y=e.pageY-L.top-(v.scrollY||v.pageYOffset),e}function f(t,n){return s(t,e.element),n=n||{},n.ox=n.x||t.x,n.oy=n.y||t.y,n.x=t.x,n.y=t.y,n.dx=n.x-n.ox,n.dy=n.y-n.oy,n}function d(e){if(e.preventDefault(),G=l(e),G.originalEvent=e,G.touches)for(Q.length=G.touches.length,_=0;_<G.touches.length;_++)Q[_]=f(G.touches[_],Q[_]);else Q.length=0,Q[0]=f(G,$);return a($,Q[0],!0),G}function p(n){for(n=d(n),M=(X=ee.indexOf(W=n.type))-1,e.dragging=!!/down|start/.test(W)||!/up|end/.test(W)&&e.dragging;M;)i(ee[M])?t(e[ee[M--]],n):i(ee[X])?t(e[ee[X++]],n):M=0}function g(n){F=n.keyCode,H="keyup"==n.type,te[F]=te[u(F)]=!H,t(e[n.type],n)}function m(n){e.autopause&&("blur"==n.type?E:y)(),t(e[n.type],n)}function y(){e.now=+new Date,e.running=!0}function E(){e.running=!1}function k(){(e.running?E:y)()}function P(){Z&&e.clearRect(0,0,e.width*V,e.height*V)}function T(){O=e.element.parentNode,_=b.indexOf(e),O&&O.removeChild(e.element),~_&&b.splice(_,1),n(!1),E()}var A,N,S,O,L,_,D,z,B,G,W,F,H,M,X,Y,j,q=0,Q=[],U=!1,K=!1,V=v.devicePixelRatio||1,J=e.type==w,Z=e.type==h,$={x:0,y:0,ox:0,oy:0,dx:0,dy:0},ee=[e.eventTarget||e.element,p,"mousedown","touchstart",p,"mousemove","touchmove",p,"mouseup","touchend",p,"click",p,"mouseout",p,"mouseover",x,g,"keydown","keyup",v,m,"focus","blur",c,"resize"],te={};for(F in C)te[C[F]]=!1;return a(e,{touches:Q,mouse:$,keys:te,dragging:!1,running:!1,millis:0,now:NaN,dt:NaN,destroy:T,toggle:k,clear:P,start:y,stop:E}),b.push(e),e.autostart&&y(),n(!0),c(),r(),e}for(var f,d,p="E LN10 LN2 LOG2E LOG10E PI SQRT1_2 SQRT2 abs acos asin atan ceil cos exp floor log round sin sqrt tan atan2 pow max min".split(" "),g="__hasSketch",m=Math,h="canvas",y="webgl",w="dom",x=t,v=e,b=[],E={fullscreen:!0,autostart:!0,autoclear:!0,autopause:!0,container:x.body,interval:1,globals:!0,retina:!1,type:h},C={8:"BACKSPACE",9:"TAB",13:"ENTER",16:"SHIFT",27:"ESCAPE",32:"SPACE",37:"LEFT",38:"UP",39:"RIGHT",40:"DOWN"},k={CANVAS:h,WEB_GL:y,WEBGL:y,DOM:w,instances:b,install:function(e){if(!e[g]){for(var t=0;t<p.length;t++)e[p[t]]=m[p[t]];a(e,{TWO_PI:2*m.PI,HALF_PI:m.PI/2,QUARTER_PI:m.PI/4,random:function(e,t){return n(e)?e[~~(m.random()*e.length)]:(r(t)||(t=e||1,e=0),e+m.random()*(t-e))},lerp:function(e,t,n){return e+n*(t-e)},map:function(e,t,n,o,r){return(e-t)/(n-t)*(r-o)+o}}),e[g]=!0}},create:function(e){return e=a(e||{},E),e.globals&&k.install(self),f=e.element=e.element||x.createElement(e.type===w?"div":"canvas"),d=e.context=e.context||function(){switch(e.type){case h:return f.getContext("2d",e);case y:return f.getContext("webgl",e)||f.getContext("experimental-webgl",e);case w:return f.canvas=f}}(),(e.container||x.body).appendChild(f),k.augment(d,e)},augment:function(e,t){return t=a(t||{},E),t.element=e.canvas||e,t.element.className+=" sketch",a(e,t,!0),s(e)}},P=["ms","moz","webkit","o"],T=self,A=0,N="AnimationFrame",S="request"+N,O="cancel"+N,R=T[S],I=T[O],L=0;L<P.length&&!R;L++)R=T[P[L]+"Request"+N],I=T[P[L]+"Cancel"+N];return T[S]=R=R||function(e){var t=+new Date,n=m.max(0,16-(t-A)),o=setTimeout(function(){e(t+n)},n);return A=t+n,o},T[O]=I=I||function(e){clearTimeout(e)},k});

function getViewport () {
	const width = Math.max( document.documentElement.clientWidth, window.innerWidth || 0 )
	if (width <= 576) return 'xs'
	if (width <= 768) return 'sm'
	if (width <= 992) return 'md'
	if (width <= 1200) return 'lg'
	return 'xl'
}
function menuSize() {
	if (getViewport().match(/(lg|xl)/)) return '35%';
	return '100%';
}

(function ($) {

	/*
	1600 x 925 -> 1.72972972973
	1300 x 650 -> 2
	375 x 812 -> 0.46
	*/
	var sizing = 'sm';
	if ( (window.innerWidth / window.innerHeight) >=1.9) {
		sizing = 'xl';
	} else if ( (window.innerWidth / window.innerHeight) >=1) {
		sizing = 'lg';
	}
	$('img.sizing').each(function() {
		var value = $(this).attr('src');
		$(this).attr('src', value.replace('-sm','-'+sizing));
	});
	$('source.sizing').each(function() {
		this.src = this.src.replace(/\-(sm|lg|xl)\.mp4/,'-'+sizing+'.mp4')
		this.parentElement.load();
	});
	$('#openMenu').click(function() {
		document.getElementById("sideMenu").style.width = menuSize();
		$(this).blur();
	})
	$('#sideMenu .closebtn').click(function() {
		document.getElementById("sideMenu").style.width = "0px";
	})
	var timerInt;
	$(".btn-gold").hover(function(){
		clearInterval(timerInt)
		var butt = $(this)
		var x = parseInt(butt.data('movedX'));
		var y = parseInt(butt.data('movedY'));
		if (isNaN(x)) x = 120;
		if (isNaN(y)) y = 30;
		timerInt = setInterval(function() {
			butt.css({ "border-image-source": "linear-gradient("+x+"deg, rgba(97,65,39,1) 0%, rgba(114,81,45,1) 8%, rgba(161,128,61,1) 16%, rgba(234,204,142,1) 26%, rgba(234,204,142,1) 38%, rgba(136,103,53,1) 45%, rgba(208,175,106,1) 52%, rgba(139,90,53,1) 64%, rgba(198,164,120,1) 75%, rgba(164,135,80,1) 84%, rgba(172,140,75,1) 93%, rgba(97,65,39,1) 99%)" });
			butt.css({ "background-image": "linear-gradient("+y+"deg, rgba(97,65,39,1) 0%, rgba(114,81,45,1) 8%, rgba(161,128,61,1) 16%, rgba(234,204,142,1) 26%, rgba(234,204,142,1) 38%, rgba(136,103,53,1) 45%, rgba(208,175,106,1) 52%, rgba(139,90,53,1) 64%, rgba(198,164,120,1) 75%, rgba(164,135,80,1) 84%, rgba(172,140,75,1) 93%, rgba(97,65,39,1) 99%)" });
			++x
			if (x>=360) x = 0
			--y
			if (y<=0) y = 360
			butt.data('movedX',x)
			butt.data('movedY',y);
		}, 10);
	}, function(){
		clearInterval(timerInt)
	});

})(jQuery); // End of use strict


/*****************************************************
 * SHOP START
 *****************************************************/
var SodaShop = function() {

	/*
	var priceList = [];
	var client = ShopifyBuy.buildClient({ domain: 'famous-soda.myshopify.com', storefrontAccessToken: '2ed1d1856c010aba54fe1805828744ac' });
	client.product.fetchAll().then( (products) => {
		products.forEach( (item) => {
			priceList.push({
				id: item.id,
				type: item.productType,
				title: item.title,
				variantId: item.variants[0].attrs.id.value,
				price: parseFloat(item.variants[0].price),
				qty: 0
			});
		})
	})
	*/
	
	var priceList = [
		{
			"code":"pink-lemonade",
			"name":"Pink Lemonade",
			"id":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQ0MjcyMjM5OTAzMTU=",
			"type":"Pink Lemonade",
			"title":"Pink Lemonade 330ml Bottles x 12",
			"variantId":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMTY1NTU4OTAxOTY5MQ==",
			"price":44.99,
			"qty":0
		},{
			"code":"passion-fruit",
			"name":"Passion Fruit",
			"id":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQ0MjcyMjczOTgxODc=",
			"type":"Passionfruit Soda",
			"title":"Passionfruit 330ml Bottles x 12",
			"variantId":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMTY1NTYwMjk3ODg1OQ==",
			"price":44.99,
			"qty":0
		},{
			"code":"ginger-beer",
			"name":"Ginger Beer",
			"id":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQ0MjcyMjc3NTg2MzU=",
			"type":"Ginger Beer Soda",
			"title":"Ginger Beer 330ml Bottles x 12",
			"variantId":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMTY1NTYwMzUwMzE0Nw==",
			"price":44.99,
			"qty":0
		},{
			"code":"lemon",
			"name":"Lemon Soda",
			"id":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQ0MjcyMjc5ODgwMTE=",
			"type":"Lemon Soda",
			"title":"Lemon Soda 330ml Bottles x 12",
			"variantId":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMTY1NTYwMzg5NjM2Mw==",
			"price":44.99,
			"qty":0
		},{
			"code":"blood-orange",
			"name":"Blood Orange",
			"id":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQ0MjcyMjg3NDE2NzU=",
			"type":"Blood Orange",
			"title":"Blood Orange 330ml Bottles x 12",
			"variantId":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMTY1NTYwNzc5NTc1NQ==",
			"price":44.99,
			"qty":0
		}
	];

	function loadPrevious() {
		var prev = localStorage.getItem('checkoutItems');
		if (!prev) return;
		prev = JSON.parse(prev);
		var tot = 0;
		priceList.forEach( function(item,idx) {
			if (prev[item.code]) {
				priceList[idx].qty = parseInt(prev[item.code]);
				tot = tot + priceList[idx].qty;
			}
		})
		renderCart();
	}

	function initForms() {

		// open close side menu
		$('#openCart').click(openSideCart)
		$('#sideShop .closebtn').click(function() { document.getElementById("sideShop").style.width = "0px"; })
		
		$('section .cart-menu .rem').click(function() {
			updateCart( $(this).closest('.cart-menu').data('uuid'), 'rem' );
		})
		$('section .cart-menu .add').click(function() {
			updateCart( $(this).closest('.cart-menu').data('uuid'), 'add' );
		})
		$('section .cart-menu .btn-gold').click(function() {
			updateCart( $(this).closest('.cart-menu').data('uuid'), 'open' );
		})

		$("#goToShopify").click(function() {
			$("#goToShopify").prop('disabled',true);
			completeCheckout(function(error,webUrl) {
				$("#goToShopify").prop('disabled',false);
				if (error) return console.log(error);
				window.open(webUrl);
			})
		})
		
	}

	function updateCart(itemCode,mode) {
		var cartMenu = $('.cart-menu[data-uuid="'+itemCode+'"]')[0];
		if (!cartMenu) return false;
		cartMenu = $(cartMenu);
		var got = parseInt(cartMenu.find('.total').text());
		if (isNaN(got)) got = 1;
		if (mode=='add') ++got;
		if (mode=='rem' && got>1) --got;
		$('.cart-menu[data-uuid="'+itemCode+'"] .total').text(got);
		priceList.forEach( (item,idx) => {
			if (item.code==itemCode) {
				priceList[idx].qty = got;
			}
		})
		if (mode=='open') {
			$('#openCart').click();
		}
		updateStorage();
		renderCart();
	}

	function updateStorage() {
		var toSave = {};
		var tot = 0;
		priceList.forEach( (item) => {
			if (item.qty>0) {
				toSave[item.code] = item.qty;
				tot = tot + item.qty;
			}
		})
		if (tot>0) {
			$('#openCart .itemsInCart').text(tot)
			localStorage.setItem('checkoutItems', JSON.stringify(toSave));
		} else {
			$('#openCart .itemsInCart').text('')
			localStorage.removeItem('checkoutItems');
		}
	}

	function renderCart() {
		$('#cartItems').html('');
		var subTotal = 0;
		var qtys = 0;
		priceList.forEach( (item,idx) => {
			if (item.qty<1) return;
			subTotal = subTotal + ( item.price * item.qty );
			qtys = qtys + item.qty;
			var block = $('#cartTemplate .itemLine').clone();
			block.removeClass('hidden');
			$('#cartItems').append(block);
			block.find('.product .col').text(item.name);
			block.find('.price').text(item.price);
			block.find('.total').text(item.qty);
			block.find('.cart-menu').attr('data-uuid',item.code);
			$('.cart-menu[data-uuid="'+item.code+'"] .total').text(item.qty);

			block.find('.remove').click(function() {
				priceList[idx].qty = 0;
				block.remove();
				$('.cart-menu[data-uuid="'+item.code+'"] .total').text(1);
				SodaShop.updateStorage();
				renderCart();
			});
			block.find('.rem').click(function() {
				SodaShop.updateCart( item.code, 'rem' );
			});
			block.find('.add').click(function() {
				SodaShop.updateCart( item.code, 'add' );
			});
		})
		if (subTotal>0) {
			$('#openCart img').attr('src','/assets/images/shopping-star-on.gif');
			$('#openCart img').addClass('active');
			$('#openCart .itemsInCart').text(qtys)
		} else {
			$('#openCart img').attr('src','/assets/images/shopping-star-off.gif');
			$('#openCart img').removeClass('active');
			$('#openCart .itemsInCart').text('')
		}
		$('#sideShop .subTotal .amount').text('$ '+subTotal);
		$("#goToShopify").css({ 'width': ($(".subTotal h2").width() + 'px') });
	}

	function openSideCart() {
		$(this).blur();
		var inCart = 0;
		priceList.forEach( (item) => {
			if (item.qty>0) {
				inCart = inCart + item.qty;
				// $('#cartItems') TODO: clone here
			}
		});
		if (inCart<1) {
			// cart is empty, close it
			$('#openCart .itemsInCart').text('')
			document.getElementById("sideShop").style.width = "0";
		} else {
			// cart is full, open it
			document.getElementById("sideShop").style.width = menuSize();
			$('#openCart .itemsInCart').text(inCart)
			setTimeout(function() { $("#goToShopify").css({ 'width': ($(".subTotal h2").width() + 'px') }); },300)

		}
		renderCart();
	}

	function completeCheckout(cb) {
		var toPush = [];
		priceList.forEach(function(item) {
			if ( item.qty > 0 ) toPush.push( { variantId: item.variantId , quantity: item.qty } )
		});
		if (toPush.length<1) return cb("no items");

		var client = ShopifyBuy.buildClient({
			domain: 'famous-soda.myshopify.com',
			storefrontAccessToken: '2ed1d1856c010aba54fe1805828744ac'
		});

		function getCheckout(checkoutId) {
			if (!checkoutId) {
				client.checkout.create()
					.then(addItems)
					.catch( () => {
						return cb("unable to create a checkout")
					})
			} else {
				client.checkout.fetch(checkoutId)
					.then(addItems)
					.catch(() => {
						localStorage.removeItem('checkoutId');
						getCheckout()
					})
			}
		}

		function addItems(checkout) {
			localStorage.setItem('checkoutId', checkout.id);
			client.checkout.addLineItems(checkout.id,toPush)
				.then( (checkout) => {
					cb(false,checkout.webUrl)
				})
				.catch( () => {
					return cb("unable add items for checkout")
				})
		}

		getCheckout(localStorage.getItem('checkoutId'))

	}
	
	/*

		
		let check = localStorage.getItem('checkoutId')
		if (!check) return;
		client.checkout.fetch(check)
			.then(loadProducts)
			.catch(() => {
				localStorage.removeItem('checkoutId')
			})
	*/
	function addItem(uuid,qty) {
		client.checkout.addLineItems(checkoutId,[{ variantId: btoa('gid://shopify/ProductVariant/'+uuid) , quantity: qty }] )
		.then( (checkout) => { checkoutObj = checkout });
		$('#openCart img').attr('src','/assets/images/shopping-star-on.gif');
	}

	function listCart() {
		var out = []
		checkoutObj.lineItems.forEach( (item) => {
			out.push({
				id: item.id,
				qty: item.quantity,
				title: item.title
			})
		})
		return {cart: checkoutObj, list: out};
	}

	function cart(cb) {
		if (checkoutObj) {
			cb(checkoutObj);
		} else {
			client.checkout.create().then((checkout) => {
				localStorage.setItem('checkoutId', checkout.id);
				loadProducts(checkout);
				cb(checkout);
			});
		}
	}

	return {
		init: function() {
			initForms();
			loadPrevious();
		},
		updateCart: updateCart,
		updateStorage: updateStorage
	}
}()

jQuery(document).ready(function() {
	SodaShop.init();
});
/*****************************************************
 * SHOP STOP
 *****************************************************/

/*

// Create an empty checkout
client.checkout.create().then((checkout) => {
//checkout.id = "Z2lkOi8vc2hvcGlmeS9DaGVja291dC9iZDQ4OGFiNmRkNmIzMTcwYmJhZTEwZGQzYmE4ODI3Mj9rZXk9ZmQ0MjE3NzY0MDMyZDkzODFmZTU1OTZkOTcxZjg5MDE="
// then send it to: checkout.webUrl
// Do something with the checkout
window.bebbo = checkout;
console.log(checkout);
});

*/


/*****************************************************
 * BUBBLES START
 *****************************************************/
window.bubbleConf = {
	maxCount: 200,
	maxSize: 25,
	lenseDistance: 150
};

(function () {
	// General Variables
	var Particle, particleCount, particles, sketch;
	
	sketch = Sketch.create({
		  container: document.getElementById( 'bubblesContainer' ),
		  retina: 'auto'
		});
  
	particles = [];
  
	particleCount = window.bubbleConf.maxCount;
  
	sketch.mouse.x = sketch.width / 2;
	sketch.mouse.y = sketch.height / 2;
  
	// sketch.strokeStyle = 'hsla(200, 50%, 50%, .4)';
	sketch.strokeStyle = 'hsla(52, 83%, 47%, 0.4)';
  
	sketch.globalCompositeOperation = 'lighter';
  
  
	// Particle Constructor
	Particle = function () {
	  this.x = random(sketch.width);
	  this.y = random(sketch.height, sketch.height * 2);
	  this.vx = 0;
	  this.vy = -random(1, 10) / 5;
	  this.radius = this.baseRadius = random(1,4);
	  this.maxRadius = window.bubbleConf.maxSize;
	  this.threshold = window.bubbleConf.lenseDistance;
	  this.alp = random(10, 30)/100;
	  this.hue = random(24, 60);
	  return
	};
  
	// Particle Prototype
	Particle.prototype = {
	  update: function () {
		var dist, distx, disty, radius;
		// Determine Distance From Mouse
		distx = this.x - sketch.mouse.x;
		disty = this.y - sketch.mouse.y;
		dist = sqrt(distx * distx + disty * disty);
  
		// Set Radius
		if (dist < this.threshold) {
		  radius = this.baseRadius + (this.threshold - dist) / this.threshold * this.maxRadius;
		  this.radius = radius > this.maxRadius ? this.maxRadius : radius;
		} else {
		  this.radius = this.baseRadius;
		}
  
		// Adjust Velocity
		this.vx += (random(100) - 50) / 1000;
		this.vy -= random(1, 20) / 10000;
  
		// Apply Velocity
		this.x += this.vx;
		this.y += this.vy;

		// Check Bounds
		if (this.upTo) {
			this.radius = this.radius - 0.5;
			if (this.radius<=1) {
				this.radius = 1;
				this.alive = false;
			}
		} else if (this.x < -this.maxRadius || this.x > sketch.width + this.maxRadius || this.y < -this.maxRadius) {
		  this.x = random(sketch.width);
		  this.y = random(sketch.height + this.maxRadius, sketch.height * 2);
		  this.vx = 0;
		  this.vy = -random(1, 10) / 5;
		}

	  },
	  render: function () {
		sketch.beginPath();
		sketch.arc(this.x, this.y, this.radius, 0, TWO_PI);
		sketch.closePath();
		sketch.fillStyle = 'hsla(' + this.hue + ', 60%, 40%, 0.1 )';
		sketch.strokeStyle = 'hsla(' + this.hue + ', 60%, 40%, '+this.alp+')';
		sketch.fill();
		sketch.stroke();
		return
	  } };
  
  
	// Create Particles
	var z = particleCount;
	while (z--) {
	  particles.push(new Particle());
	}
  
	// Sketch Clear
	sketch.clear = function () {
	  return sketch.clearRect(0, 0, sketch.width, sketch.height);
	};
  
  
	// Sketch Update
	sketch.update = function () {
	  var i;
	  i = particles.length;
	  while (i--) {
		particles[i].update();
	  }
	  return;
	};
  
	// Sketch Draw
	sketch.draw = function () {
	  var i, results;
	  i = particles.length;
	  results = [];
	  while (i--) {
		results.push(particles[i].render());
	  }
	};

	wrap.addEventListener('mousemove', mousemoveHandler, false);

	function mousemoveHandler(e) {
		sketch.mouse.x = e.clientX;
		sketch.mouse.y = e.clientY;
    	// sketch.update(e)
	}
  }).call(this);

/*****************************************************
 * BUBBLES STOP
 *****************************************************/

/*****************************************************
 * GOOGLE MAP START
 *****************************************************/
window.mapInit = function () {       
	var sodaIcon, infowindow, geocoder, marker, i, myCurrentPosition, mapCenterPosition, markersArray, markersArrayRadius, myCurrentAddress, map, directionsService, directionsDisplay, lastActive, processing;

	// from: https://mapstyle.withgoogle.com/
	var mapStyle=[{elementType:"geometry",stylers:[{color:"#212121"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{elementType:"labels.text.stroke",stylers:[{color:"#212121"}]},{featureType:"administrative",elementType:"geometry",stylers:[{color:"#757575"}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#ffeb3b"},{visibility:"off"}]},{featureType:"administrative",elementType:"labels.text",stylers:[{visibility:"simplified"}]},{featureType:"administrative.country",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"administrative.land_parcel",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"administrative.locality",elementType:"labels.text.stroke",stylers:[{visibility:"simplified"},{weight:1}]},{featureType:"poi",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#181818"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"poi.park",elementType:"labels.text.stroke",stylers:[{color:"#1b1b1b"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#2c2c2c"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#8a8a8a"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#373737"}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#bfb031"},{saturation:-15},{lightness:-30},{visibility:"on"}]},{featureType:"road.arterial",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#3c3c3c"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#ffeb3b"},{visibility:"on"},{weight:1}]},{featureType:"road.highway",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.highway.controlled_access",elementType:"geometry",stylers:[{color:"#4e4e4e"}]},{featureType:"road.local",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"labels.text",stylers:[{visibility:"simplified"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"transit",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#3d3d3d"}]}];

	var shopList = [
		{infoWindow:"SALT MEATS CHEESE BONDI JUNCTION",address:"Shop 1027/500 Oxford Street, Bondi Junction NSW 2022",lat:-33.8928666,lon:151.2503759},
		{infoWindow:"THE LONDON HOTEL",address:"85 Underwood St, Paddington NSW 2021",lat:-33.8852084, long:151.2300373},
		{infoWindow:"QE FOODSTORES - DARLINGHURST",address:"62/64 Oxford St, Darlinghurst NSW 2010",lat:-33.8786252, long:151.2148431},
		{infoWindow:"QE FOODSTORES - CAMPERDOWN",address:"35 Missenden Rd, Camperdown NSW 2050",lat:-33.8876483, long:151.1802402},
		{infoWindow:"QE FOODSTORES - WAVERLEY",address:"235 Bronte Rd, Waverley NSW 2024",lat:-33.901625, long:151.2540345},
		{infoWindow:"QE FOODSTORES - RANDWICK",address:"1/62 Frenchmans Rd, Randwick NSW 2031",lat:-33.9081834, long:151.2487249},
		{infoWindow:"ARTHOUSE KITCHEN",address:"Greens Rd &amp; Oxford Street, Paddington NSW 2021",lat:-33.8838425, long:151.2202687},
		{infoWindow:"GYPSY ESPRESSO",address:"6/81 MacLeay St, Potts Point NSW 2011",lat:-33.8702817, long:151.2249856},
		{infoWindow:"SOUTH DOWLING SANDWICHES DARLINGHURST",address:"377 S Dowling St, Darlinghurst NSW 2010",lat:-33.8831815, long:151.2184239},
		{infoWindow:"DA CAPO COURTYARD CAFE",address:"8 Macquarie Street, Sydney NSW 2000",lat:-33.8681875, long:151.2127485},
		{infoWindow:"SOUTH DOWLING SANDWICHES ALEXANDRIA",address:"110 Bourke Rd, Alexandria NSW 2015",lat:-33.9129568, long:151.1943003},
		{infoWindow:"PADDINGTON ALIMENTARI",address:"2 Hopetoun St, Paddington NSW 2021",lat:-33.8844433, long:151.2303942},
		{infoWindow:"BELLEVUE HILL BOTTLE SHOP",address:"100A Bellevue Rd, Bellevue Hill NSW 2023",lat:-33.88233140000001, long:151.2516626},
		{infoWindow:"NO.1 ESPRESSO BAR",address:"1 Market St, Sydney 2000",lat:-33.8712191, long:151.2045084},
		{infoWindow:"VICOLO MARKET",address:"834 Pittwater Rd, Dee Why NSW 2099",lat:-33.7552077, long:151.2850032},
		{infoWindow:"BOWL.R",address:"Shop 1 / 308 Darling St, Balmain, 2041",lat:-33.8573466, long:151.1802155},
		{infoWindow:"MISS CARTER CAFE",address:"277 Castlereagh St, Sydney NSW 2000",lat:-33.87749489999999, long:151.2083686},
		{infoWindow:"THE GALLEY AT SYDNEY BOATHOUSE",address:"2 Waterways Court, Rozelle NSW 2039",lat:-33.870361, long:151.1747768},
		{infoWindow:"BONDI RD FRUITOLOGIST",address:"151 Bondi Rd, Bondi NSW 2026",lat:-33.8938957, long:151.26357},
		{infoWindow:"CHEMIST WORKS WETHERILL PARK",address:"Shop MM05/561 Polding St, Wetherill Park NSW 2164",lat:-33.8587352, long:150.8986042},
		{infoWindow:"FOODWORKS CLOVELLY",address:"43 Burnie St, Clovelly NSW 2031&nbsp;",lat:-33.9120917, long:151.2624232},
		{infoWindow:"FRUITOLOGIST UNION PLACE",address:"120 Terry St, Rozelle NSW 2039",lat:-33.8607562, long:151.1687622},
		{infoWindow:"GREYSTANES FRUIT MARKET",address:"13-14/665 Merrylands Rd, Merrylands NSW 2160",lat:-33.8296697, long:150.9525769},
		{infoWindow:"IGA LILYFIELD",address:"402 Catherine St, Lilyfield NSW 2040",lat:-33.8747613, long:151.1646258},
		{infoWindow:"IGA UNSW",address:"6/17 High St, Kensington NSW 2031",lat:-33.9154098, long:151.2280781},
		{infoWindow:"KAREELA GROCER",address:"Kareela Village, Kareela NSW 2232",lat:-34.017207, long:151.0802675},
		{infoWindow:"NATURE’S FRESH FOR LESS",address:"92A Wrights Rd, Kellyville NSW 2155",lat:-33.7130814, long:150.9729382},
		{infoWindow:"PLUMER VILLAGE GROCER",address:"30 Plumer Rd, Rose Bay NSW 2029",lat:-33.8755548, long:151.2601069},
		{infoWindow:"COSMOPOLITAN ESPRESSO &amp; FOOD EMPORIUM",address:"64/67 Goulburn St, Liverpool NSW 2170",lat:-33.9200158, long:150.9284128},
		{infoWindow:"THE FRUIT VILLAGE",address:"81 Erskineville Rd, Erskineville NSW 2043",lat:-33.8999668, long:151.1844513},
		{infoWindow:"VICOLO MARKET",address:"15/19 Pacific Parade, Dee Why NSW 2099",lat:-33.7547639, long:151.2855241},
		{infoWindow:"EGGSHELLENT",address:"11 Belmore Rd, Randwick NSW 2031",lat:-33.9132201, long:151.2397638},
		{infoWindow:"BOOTS DARLING",address:"333 S Dowling St, Darlinghurst NSW 2010",lat:-33.8821541, long:151.2187982},
		{infoWindow:"NU HEALTHY CAFE",address:"211 Pacific Hwy, North Sydney NSW 2060",lat:-33.8360626, long:151.2059021},
		{infoWindow:"PUBLIC ESPRESSO",address:"200 Coward St, Mascot NSW 2020",lat:-33.9243847, long:151.1913709},
		{infoWindow:"THE KIOSK, NEWCASTLE BEACH",address:"42 Shortland Esp, Hunter, Newcastle 2300",lat:-32.9300252, long:151.7853629},
		{infoWindow:"GEORGES FRUIT BARN",address:"251 Scenic Hwy, Terrigal 2260",lat:-33.452293, long:151.422824},
		{infoWindow:"J HOUSE NEWSAGENCY",address:"GA-4, G Floor, Northern Beaches Hospital, Frenchs Forest NSW 2086",lat:-33.7511545, long:151.2330275},
		{infoWindow:"COUNTRY GROWERS",address:"Shop 414 / 415 Warringah Mall, Brookvale NSW 2100",lat:-33.7662651, long:151.265418},
		{infoWindow:"ANNIES ICE CREAM",address:"82/86 George St, Bathurst NSW 2795",lat:-33.4167227, long:149.579127},
		{infoWindow:"BATHURST THOROUGHBRED RACING",address:"55 Eleven Mile Dr, Bathurst NSW 2795",lat:-33.3931762, long:149.5904452},
		{infoWindow:"BETEMPTED AT BARNSY'S",address:"26 Bank St, Molong NSW 2866",lat:-33.0927125, long:148.8701539},
		{infoWindow:"CAFE FIFTY ONE EUGOWRA",address:"51 Nanima St, Eugowra NSW 2806",lat:-33.4277353, long:148.3713783},
		{infoWindow:"CALTEX NARRANDERA",address:"Newell Hwy, Narrandera NSW 2700",lat:-34.7412833, long:146.5549444},
		{infoWindow:"CARGO GENERAL STORE",address:"2 Forbes St, Cargo NSW 2800",lat:-33.423939, long:148.8082247},
		{infoWindow:"COACH HOUSE CAFE",address:"108 William St, Bathurst NSW 2795",lat:-33.4185706, long:149.5801298},
		{infoWindow:"COLY ROAD HOUSE",address:"12 Kingfisher Ave, Coleambally NSW 2707",lat:-34.8061088, long:145.8828855},
		{infoWindow:"COOTAMUNDRA NEWS",address:"103 Wallendoon Street, Cootamundra NSW 2590",lat:-34.6388399, long:148.0249985},
		{infoWindow:"DANNY'S STORE",address:"856 Jondaryan Ave, Griffith NSW 2680",lat:-34.2938957, long:146.0494044},
		{infoWindow:"DRIVER FOODWORKS GRIFFITH",address:"4 Sanders Street, Griffith New South Wales, 2680",lat:-34.2801589, long:146.0707337},
		{infoWindow:"GRACIE BURGERS",address:"41 Sale St, Orange NSW 2800",lat:-33.2838065, long:149.0957228},
		{infoWindow:"GRENFELL BOWLING CLUB",address:"Cross St, Grenfell NSW 2810",lat:-33.8910916, long:148.1620086},
		{infoWindow:"HANWOOD VILLAGE STORE",address:"7 Hanwood Ave, Hanwood NSW 2680",lat:-34.3308029, long:146.0410881},
		{infoWindow:"J A AUTO'S",address:"60 Johnson St, Forbes NSW 2871",lat:-33.3756025, long:148.0035053},
		{infoWindow:"KELLYS SUPERMARKET",address:"13 Brolga Pl, Coleambally NSW 2707",lat:-34.8056859, long:145.8810769},
		{infoWindow:"LITTLE SNACK SHACK",address:"Orange City Cntr, Orange NSW 2800",lat:-33.2850816, long:149.1001371},
		{infoWindow:"MARKET STREET TAKEAWAY",address:"95 Market St, Mudgee NSW 2850",lat:-32.5910295, long:149.5865477},
		{infoWindow:"METRO SOUTH BATHURST",address:"45 Bant Street, Crn, Rocket St, Bathurst NSW 2795",lat:-33.4310205, long:149.5783144},
		{infoWindow:"MILLTHORPE CORNER STORE",address:"1 Pym St, Millthorpe NSW 2798",lat:-33.4466726, long:149.183734},
		{infoWindow:"MOBIL NARRANDERA",address:"72-74 Whitton St, Narrandera NSW 2700",lat:-34.7410761, long:146.5560332},
		{infoWindow:"ORANGE BASE HOSPITAL KIOSK",address:"1530 Forest Rd, Orange NSW 2800",lat:-33.3173268, long:149.0939552},
		{infoWindow:"OUTBACK CAFE",address:"280 Neeld St, West Wyalong NSW 2671",lat:-33.9237153, long:147.2191122},
		{infoWindow:"PARKES COFFEE POT",address:"209B Clarinda St, Parkes NSW 2870",lat:-33.1367647, long:148.1748545},
		{infoWindow:"PERRY OVAL PANTRY",address:"3/150 Clinton St, Orange NSW 2800",lat:-33.2712179, long:149.0940649},
		{infoWindow:"PORTLAND NEWS",address:"62 Wolgan Street, Portland NSW 2847",lat:-33.3591516, long:149.9798725},
		{infoWindow:"RED BEND COLLEGE",address:"1482 College Rd, Forbes NSW 2871",lat:-33.4182622, long:148.0211645},
		{infoWindow:"ROSSIES FOODWORKS GRIFFITH",address:"493 Banna Ave, Griffith NSW 2680",lat:-34.2862792, long:146.0378019},
		{infoWindow:"THE LITHGOW TIN SHED",address:"69 Bridge St, Lithgow NSW 2790",lat:-33.48030130000001, long:150.1616961},
		{infoWindow:"TATTERSALLS HOTEL",address:"185 High St, Hillston NSW 2675",lat:-33.485904, long:145.530466},
		{infoWindow:"THE QUICK BROWN FOX",address:"79 Market St, Mudgee NSW 2850",lat:-32.5910731, long:149.5872389},
		{infoWindow:"TRINITY IGA",address:"13 Marsden Ln, Kelso NSW 2795",lat:-33.4057672, long:149.6003468},
		{infoWindow:"VACCARI'S BAKERY",address:"6 Probert Ave, Griffith NSW 2680",lat:-34.283285, long:146.0586321},
		{infoWindow:"WHITE ROSE CAFE",address:"186 Hoskins St, Temora NSW 2666",lat:-34.4465604, long:147.5332486},
		{infoWindow:"APHOTIC CAFE",address:"266 King St, Newcastle NSW 2300",lat:-32.9276972,long:151.7736987},
		{infoWindow:"BLUE DOOR CIVIC",address:"363-365 Hunter St, Newcastle NSW 2300",lat:-32.9271925,long:151.772881},
		{infoWindow:"BLUE DOOR KIOSK",address:"Watkins St, Merewether NSW 2291",lat:-32.9429681,long:151.7581416},
		{infoWindow:"CAFE INU",address:"43 Denison St, Carrington NSW 2294",lat:-32.9169301,long:151.7640355},
		{infoWindow:"DOUGHHEADS",address:"17/200 Union St, The Junction NSW 2291",lat:-32.9381378,long:151.7587359},
		{infoWindow:"HAPPI KITCHEN",address:"3/18 Throsby St, Wickham NSW 2293",lat:-32.9213543,long:151.7587131},
		{infoWindow:"SUSPENSION ESPRESSO",address:"3 Beaumont St, Islington NSW 2296",lat:-32.9189409,long:151.7482057},
		{infoWindow:"THE KIOSK NEWCASTLE BEACH",address:"42 Shortland Esplanade, Newcastle East NSW 2300",lat:-32.9300252,long:151.7853629},
		{infoWindow:"BIRDYS  ESPRESSO",address:"173 Maitland Rd, Tighes Hill NSW 2297",lat:-32.9078491,long:151.7482057},
		{infoWindow:"BLUE DOOR HONEYSUCKLE",address:"363-365 Hunter St, Newcastle NSW 2300",lat:-32.9271925,long:151.772881},
		{infoWindow:"BURWOOD BENCH",address:"1/317 Hunter St, Newcastle NSW 2300",lat:-32.9271544,long:151.7742926},
		{infoWindow:"CAFE ON MITCHELL",address:"42 Mitchell Street, Stockton, NSW, Australia 2295",lat:-32.9166713,long:151.7843528},
		{infoWindow:"EZY MART NEWCASTLE",address:"6/335 Wharf Rd, Newcastle NSW 2300",lat:-32.9256742,long:151.7735961},
		{infoWindow:"MILFORD ESPRESSO",address:"10/14 Milford Street Islington, Newcastle, NSW 2296",lat:-32.9154233,long:151.7530568},
		{infoWindow:"SWEET POISON",address:"Shop 15 Marketown Shopping Centre, Parry Street, Newcastle West NSW 2302",lat:-32.9282077,long:151.7612556},
		{infoWindow:"HARRYS SCHNITZEL JOINT",address:"Shop 10a/136 Parry St, Newcastle West NSW 2302",lat:-32.9280377,long:151.7610431},
		{infoWindow:"BABALINO BAKERY AND SANDWICH BAR",address:"70 River St, Ballina NSW 2478",lat:-28.8717882,long:153.5617541},
		{infoWindow:"BEAN BANK COFFEE HOUSE",address:"77 River St, Ballina NSW 2478",lat:-28.8710247,long:153.5622382},
		{infoWindow:"BEANZ",address:"222 River St, Ballina NSW 2478",lat:-28.8698001,long:153.5579697},
		{infoWindow:"BELLA ROSA GELATERIA",address:"1/11 Jonson St, Byron Bay NSW 2481",lat:-28.6470995,long:153.6132705},
		{infoWindow:"BEXHILL GENERAL STORE",address:"B62, Bexhill, NSW 2480",lat:-28.7586989,long:153.3557012},
		{infoWindow:"BRUNSWICK HEADS HEALTH FOODS",address:"2/20 Fingal St, Brunswick Heads NSW 2483",lat:-28.5408757,long:153.5500556},
		{infoWindow:"BRUNSWICK HOT BREAD",address:"84/86 Sydney Rd, Brunswick VIC 3056",lat:-37.7758457,long:144.9608486},
		{infoWindow:"CAFE EMPIRE",address:"20 Burringbar St, Mullumbimby NSW 2482",lat:-28.5528429,long:153.5000456},
		{infoWindow:"CHINNY STORE",address:"29a/31 Burringbar St, Mullumbimby NSW 2482",lat:-28.5534351,long:153.5001146},
		{infoWindow:"CRYSTAL CASTLE",address:"81 Monet Dr, Montecollum NSW 2482",lat:-28.5889269,long:153.4617822},
		{infoWindow:"FEDERAL GENERAL STORE",address:"3-6 Albert Street, Federal NSW 2480",lat:-28.65172999999999,long:153.455526},
		{infoWindow:"GOOLMANGAR GENERAL STORE",address:"851 Nimbin Rd, Goolmangar NSW 2480",lat:-28.7469837,long:153.2256559},
		{infoWindow:"IGA BRUNSWICK",address:"6/19 Booyun St, Brunswick Heads NSW 2483",lat:-28.5410241,long:153.548096},
		{infoWindow:"YAMAN",address:"62 Stuart St, Mullumbimby NSW 2482",lat:-28.5526411,long:153.5012979},
		{infoWindow:"LOVE YOUR HEALTH",address:"PO Box 519, Byron Bay, NSW 2481",lat:-28.6473671,long:153.601977},
		{infoWindow:"IGA MURWILLUMBAH",address:"Main St, Murwillumbah NSW 2484",lat:-28.3268585,long:153.3961254},
		{infoWindow:"MAIN ARM STORE",address:"174 Main Arm Rd, Mullumbimby NSW 2482",lat:-28.5417512,long:153.480673},
		{infoWindow:"MARTINS HOT BREAK KITCHEN",address:"92 Tamar St, Ballina NSW 2478",lat:-28.8688304,long:153.558527},
		{infoWindow:"MULLUMBIMBY BAKERY",address:"3/57-59 Stuart St, Mullumbimby NSW 2482",lat:-28.5526684,long:153.5007218},
		{infoWindow:"MULLUMBIMBY PRO GOLF",address:"1600 Coolamon Scenic Dr, Mullumbimby NSW 2482",lat:-28.5644838,long:153.4889228},
		{infoWindow:"MUNCH JUICE BAR & TAKE AWAY",address:"8 Bayshore Dr, Byron Bay NSW 2481",lat:-28.6330486,long:153.583167},
		{infoWindow:"QUICK BROWN FOX",address:"College Rd, Lismore, New South Wales 2480",lat:-28.8201454,long:153.2955525},
		{infoWindow:"SASHA'S FINE FOOD",address:"126-128 River St, Ballina NSW 2478",lat:-28.8707698,long:153.560315},
		{infoWindow:"SHELL WOLLONGBAR",address:"1185 Bruxner Hwy, Wollongbar NSW 2477",lat:-28.8159805,long:153.4050426},
		{infoWindow:"SOUL CAFE",address:"85 Cherry St, Ballina NSW 2478",lat:-28.8637609,long:153.5658343},
		{infoWindow:"SOULBOWL",address:"26 James St, Burleigh Heads QLD 4220",lat:-28.089501,long:153.4504879},
		{infoWindow:"SUFFOLK BAKERY",address:"Shop 1/2 Clifford St, Suffolk Park NSW 2481",lat:-28.6902487,long:153.6118875},
		{infoWindow:"THE LANTERN TEAROOM",address:"6/144 River St, Ballina NSW 2478",lat:-28.8706992,long:153.559887},
		{infoWindow:"TINSTENBAR STORE",address:"Tintenbar Rd, Tintenbar NSW 2478",lat:-28.8020721,long:153.500264},
		{infoWindow:"IGA AINSLIE",address:"9/11 Edgar St, Ainslie ACT 2602",lat:-35.2619377,long:149.1450218},
		{infoWindow:"COOK FRIENDLY GROCER",address:"27 Cook Pl, Cook, ACT 2614",lat:-35.2591974,long:149.0633108},
		{infoWindow:"IGA DEAKIN",address:"25-27 Hopetoun Circuit, Deakin ACT 2600",lat:-35.315011,long:149.1080492},
		{infoWindow:"IGA EXPRESS EAST ROW",address:"E Row, Canberra ACT 2601",lat:-35.2796101,long:149.1304583},
		{infoWindow:"TEDDY PICKERS",address:"67 Constitution Ave, Campbell ACT 2612",lat:-35.2911505,long:149.1447761},
		{infoWindow:"PORT BURGER",address:"19 Saltfleet St, Port Noarlunga SA 5167",lat:-35.1486173,long:138.4701384},
		{infoWindow:"TONY & MARKS NEWTON",address:"3 Jan St, Newton SA 5074",lat:-34.8770599,long:138.6727605},
		{infoWindow:"TONY & MARKS GOLDEN GROVE",address:"LOT 1037 The Golden Way, Golden Grove SA 5125",lat:-34.79077230000001,long:138.6941893},
		{infoWindow:"HE CAROUSEL FRUIT BARN",address:"297 Diagonal Rd, Oaklands Park SA 5046",lat:-35.0163841,long:138.5452995},
		{infoWindow:"ADELAIDE CONVENIENCE NORTH TERRACE",address:"Unit 5/136 North Terrace, Adelaide SA 5000",lat:-34.9220048,long:138.5972779},
		{infoWindow:"DRAKE FOODMARKETS - ALDINGA",address:"Aldinga Beach Road &, Pridham Blvd, Aldinga SA 5173",lat:-35.2789222,long:138.4617169},
		{infoWindow:"DRAKE FOODMARKETS - CASTLE PLAZA",address:"992 South Rd, Edwardstown SA 5039",lat:-34.9808167,long:138.5730632},
		{infoWindow:"DRAKE FOODMARKETS - GOLDEN GROVE",address:"Cnr The Golden Way &, The Grove Way, Golden Grove SA 5127",lat:-34.7904986,long:138.6973721},
		{infoWindow:"DRAKE FOODMARKETS - NEWTON",address:"Cnr Gorge Road &, Newton Rd, Newton SA 5074",lat:-34.8763908,long:138.6712096},
		{infoWindow:"DRAKE FOODMARKETS - SEAFORD",address:"Corner Commercial Road and, The Parade, Seaford SA 5169",lat:-35.1913873,long:138.4776143},
		{infoWindow:"DRAKE FOODMARKETS - WALKLEY HEIGHTS",address:"Cnr Wright Road &, Rm Williams Dr, Walkley Heights SA 5098",lat:-34.8358821,long:138.641417},
		{infoWindow:"DRAKE SUPERMARKETS - HOPE VALLEY",address:"1220 Grand Jct Rd, Hope Valley SA 5090",lat:-34.8438972,long:138.7000871},
		{infoWindow:"FOODLAND (ROMEO) NORTH ADELAIDE",address:"71-79 O'Connell St, North Adelaide SA 5006",lat:-34.9067838,long:138.5955025},
		{infoWindow:"FOODLAND (ROMEO) MAWSON LAKES",address:"6/12 Capital St, Mawson Lakes SA 5095",lat:-34.8056546,long:138.6156988},
		{infoWindow:"FOODLAND (ROMEO) NORMANVILLE",address:"85 Main Road, Normanville SA 5204",lat:-35.4466421,long:138.3181711},
		{infoWindow:"FOODLAND (ROMEO) STIRLING",address:"3/5 Johnston St, Stirling SA 5152",lat:-35.0069402,long:138.7179628},
		{infoWindow:"FOODLAND HAPPY VALLEY",address:"19/50 Kenihans Rd, Happy Valley SA 5159",lat:-35.0833608,long:138.5619554},
		{infoWindow:"FOODLAND MT BARKER",address:"2 Victoria Cres, Mount Barker SA 5251",lat:-35.0697971,long:138.8629317},
		{infoWindow:"FOODLAND NORWOOD",address:"161-169 The Parade, Norwood SA 5067",lat:-34.9206442,long:138.6357312},
		{infoWindow:"FOODLAND SEFTON PARK",address:"231 Main N Rd, Sefton Park SA 5083",lat:-34.876339,long:138.602999},
		{infoWindow:"FRESH PRODUCE DIRECT",address:"11 Market Lane, Pooraka SA 5095",lat:-34.8311744,long:138.608873},
		{infoWindow:"RIVERLAND SUNFRESH",address:"246/256 Renmark Ave, Renmark SA 5341",lat:-34.1786442,long:140.7403317},
		{infoWindow:"DRAKES  FOOD MARKET - WAYVILLE",address:"Cnr Goodwood Road &, Young St, Wayville SA 5034",lat:-34.94550700000001,long:138.589196},
		{infoWindow:"DRAKES  FOODLAND EYRE",address:"Cnr Petherton Road &, Stebonheath Rd, Penfield SA 5121",lat:-34.6882713,long:138.6602963},
		{infoWindow:"DRAKE FOODMARKETS - MURRAY BRIDGE",address:"3 Swanport Rd, Murray Bridge SA 5253",lat:-35.1218028,long:139.2739666},
		{infoWindow:"TONY & MARKS GLENUNGA",address:"555 Portrush Rd, Glenunga SA 5064",lat:-34.9491313,long:138.64239},
		{infoWindow:"TONY & MARKS BRICKWORKS",address:"Cnr South Road & Ashwin Parade, Torrensville SA 5031",lat:-34.9152671,long:138.5657493},
		{infoWindow:"GET FRESH FINDON",address:"186 Findon Rd, Findon SA 5023",lat:-34.8946231,long:138.531222},
		{infoWindow:"ADAMS APPLE*",address:"Shop 203/111 W Lakes Blvd, West Lakes SA 5021",lat:-34.8800233,long:138.4909094},
		{infoWindow:"BECKS IGA SUPERMARKET",address:"34 Alfred Terrace Streaky Bay, South Australia 5680</a>",lat:-32.7959987,long:134.2110031},
		{infoWindow:"DRAKE FOODMARKETS - ANGLE VALE",address:"121/129 Heaslip Rd, Angle Vale SA 5117",lat:-34.6471809,long:138.6425787},
		{infoWindow:"DRAKE FOODMARKETS - CLOVERCREST",address:"Cnr Montague Road and Kelly Rd, Modbury SA 5092",lat:-34.82928,long:138.673395},
		{infoWindow:"DRAKE FOODMARKETS - HALLETT COVE",address:"246 Lonsdale Rd, Hallett Cove SA 5158",lat:-35.0787504,long:138.5164176},
		{infoWindow:"DRAKE FOODMARKETS - SALISBURY NORTH",address:"147 Whites Rd, Salisbury North SA 5108",lat:-34.7490248,long:138.6211519},
		{infoWindow:"DRAKE FOODMARKETS - SURREY DOWNS",address:"246 Golden Grove Rd, Surrey Downs SA 5126",lat:-34.8057284,long:138.7027404},
		{infoWindow:"DRAKE GLEN OSMOND ROAD MARKET",address:"297 Glen Osmond Rd, Glenunga SA 5061",lat:-34.952253,long:138.6353939},
		{infoWindow:"FOODLAND (ROMEO) FAIRVIEW",address:"325 Hancock Rd, Fairview Park SA 5126",lat:-34.8020475,long:138.7177306},
		{infoWindow:"FOODLAND (ROMEO) GLENELG",address:"103 Partridge St, Glenelg South SA 5045",lat:-34.9900683,long:138.5179537},
		{infoWindow:"FOODLAND (ROMEO) MCLAREN VALE",address:"130 Main Rd, McLaren Vale SA 5171",lat:-35.2171263,long:138.5425003},
		{infoWindow:"FOODLAND (ROMEO) OLD REYNELLA",address:"221 Old S Rd, Old Reynella SA 5161",lat:-35.089605,long:138.5404703},
		{infoWindow:"FOODLAND IGA BALHANNAH",address:"84 Onkaparinga Valley Rd, Balhannah SA 5242",lat:-34.9909129,long:138.8271344},
		{infoWindow:"FOODLAND LITTLE HAMPTON",address:"85 Princes Hwy, Littlehampton SA 5250",lat:-35.0474229,long:138.8662237},
		{infoWindow:"FOODLAND MUNNO PARA",address:"600 Main N Rd, Smithfield SA 5114",lat:-34.6892722,long:138.6883778},
		{infoWindow:"FOODLAND NURIOOTPA",address:"1 Murray St, Nuriootpa SA 5355",lat:-34.473168,long:138.99495},
		{infoWindow:"FOODLAND TUMBY BAY",address:"5 Spencer St, Tumby Bay SA 5605",lat:-34.3760953,long:136.1020536},
		{infoWindow:"IGA PORT BROUGHTON",address:"27 Harvey St, Port Broughton SA 5522",lat:-33.6007511,long:137.9309999},
		{infoWindow:"SIMPLY FRESH (NU FRESH)",address:"361 Kensington Road, Kensington Gardens 5068",lat:-34.9254951,long:138.6625055},
		{infoWindow:"LUCKY 7 CONVENIENCE ON CURRIE",address:"46 Currie St, Adelaide SA 5000",lat:-34.9241981,long:138.5978322},
		{infoWindow:"WHOLESOME - CENTRAL MARKET",address:"Shop 21/22 Central Market Plaza, Gouger Street, Adelaide SA 5000",lat:-34.9294611,long:138.5976893},
		{infoWindow:"FOODLAND (ROMEO) RUNDLE MALL",address:"71-79 O'Connell St, North Adelaide SA 5006",lat:-34.9067838,long:138.5955025},
		{infoWindow:"GRUMPY MADAM",address:"25 Evelyn St, Newstead QLD 4006",lat:-27.4473632,long:153.0441473},
		{infoWindow:"FARMHOUSE KEDRON",address:"9 Somerset Rd, Kedron QLD 4031",lat:-27.4078792,long:153.0316367},
		{infoWindow:"SALT AND PEPPER CATERING",address:"8 Heussler Terrace, Milton QLD 4064",lat:-27.4645951,long:153.0079284},
		{infoWindow:"FUEL & CO",address:"190 Buckland Rd, Nundah QLD 4012",lat:-27.4028519,long:153.0551867},
		{infoWindow:"HONEY & BEAR CAFE",address:"153 Campbell St, Bowen Hills QLD 4006",lat:-27.4460035,long:153.0300407},
		{infoWindow:"BIRDS AND BEES CAFE AND BAR",address:"5/1-5 Queens Rd, Everton Hills QLD 4053",lat:-27.3912855,long:152.9750604},
		{infoWindow:"THE STANDARD MARKET COMPANY",address:"c4/22 James St, Fortitude Valley QLD 4006",lat:-27.455896,long:153.0393178},
		{infoWindow:"CANTINHO COFFEE",address:"7/19 James St, Fortitude Valley QLD 4006",lat:-27.4565878,long:153.0391798},
		{infoWindow:"THE FISH FOOD WITH A DIFFERENCE",address:"201 Varsity Parade, Varsity Lakes QLD 4227",lat:-28.0784003,long:153.4148418},
		{infoWindow:"THE BAKERS CORNER",address:"4/18 Kenrose St, Carina QLD 4152",lat:-27.48596,long:153.097576},
		{infoWindow:"DO DROP IN DELI",address:"Unit 3/Unit 3 Bloomfield St, Cleveland QLD 4163",lat:-27.5265574,long:153.2667489},
		{infoWindow:"SUMPTUOUS FOOD",address:"2/30-32 Currumbin Creek Rd, Currumbin QLD 4223",lat:-28.1420734,long:153.4728942},
		{infoWindow:"IGA X-PRESS KINGSCLIFF",address:"15 Bells Blvd, Kingscliff NSW 2487",lat:-28.2767462,long:153.5765924},
		{infoWindow:"SONDER ESPRESSO",address:"3 Eccles Blvd, Birtinya QLD 4575",lat:-26.7471185,long:153.1152224},
		{infoWindow:"DA BURGER",address:"876 Brunswick St, New Farm QLD 4005",lat:-27.4667624,long:153.0460102},
		{infoWindow:"BAZ & SHAZ FRUIT & VEG",address:"44 Beech Dr, Suffolk Park NSW 2481",lat:-28.6857663,long:153.6039882},
		{infoWindow:"WICKED BEANS CAFE",address:"7 Trees Rd, Tallebudgera QLD 4228",lat:-28.1410898,long:153.4280517},
		{infoWindow:"ONE STOP CAFE CLEVELAND",address:"78 Middle Street, Cleveland, Brisbane QLD 4163",lat:-27.5255521,long:153.2684485},
		{infoWindow:"FROG N’ TOAD",address:"68 Lang Parade, Auchenflower QLD 4066",lat:-27.4752821,long:152.9986055},
		{infoWindow:"EZY MART",address:"5/113 Oxford St, Darlinghurst NSW 2010",lat:-33.8793762,long:151.2149099},
		{infoWindow:"ROSE CAFE",address:"40 Chasely St, Auchenflower QLD 4066",lat:-27.4766575,long:152.9973985},
		{infoWindow:"POINT LOOKOUT PHARMACY",address:"4-10 Kennedy Dr, Point Lookout QLD 4183",lat:-27.4352658,long:153.5418818},
		{infoWindow:"SHIELD STREET EATS",address:"33 Prince Edward Parade, Redcliffe QLD 4020",lat:-27.2197661,long:153.1154418},
		{infoWindow:"SHORT LIST COFFEE",address:"315 Adelaide St, Brisbane City QLD 4000",lat:-27.4657018,long:153.0290686},
		{infoWindow:"THE NUT MARKET",address:"22 James St, Fortitude Valley QLD 4006",lat:-27.455896,long:153.0393178},
		{infoWindow:"DOWNTOWN DELI",address:"2/24 Musgrave Ave, Southport QLD 4215",lat:-27.9567397,long:153.4018482},
		{infoWindow:"LOCK AND QUAY",address:"179 N Quay, Brisbane City QLD 4000",lat:-27.4684525,long:153.0192189},
		{infoWindow:"SPAR BULIMBA",address:"155 Oxford St, Bulimba QLD 4171",lat:-27.4515347,long:153.0592116},
		{infoWindow:"EIGHTY SIX CAFE",address:"146 Baroona Rd, Paddington QLD 4064",lat:-27.4664269,long:152.9978112},
		{infoWindow:"DALEY'S GOURMET MEAT",address:"Shop 10/135 River St, Ballina NSW 2478",lat:-28.87019549999999,long:153.5603019},
		{infoWindow:"LITTLE LOCO CAFE",address:"121 Merthyr Rd, New Farm QLD 4005",lat:-27.4654648,long:153.048126},
		{infoWindow:"PINCADIA",address:"1/14 Logan Rd, Woolloongabba QLD 4102",lat:-27.4868465,long:153.0367777},
		{infoWindow:"IGA CARDWELL",address:"196-198 Victoria St, Cardwell QLD 4849",lat:-18.2575787,long:146.0191672},
		{infoWindow:"CON VERALA PHARMACY",address:"80 Main St, Murwillumbah NSW 2484",lat:-28.3322568,long:153.3827556},
		{infoWindow:"DRAKES HOLLYWELL ROAD",address:"Shop 2/33 Hollywell Rd, Biggera Waters QLD 4216",lat:-27.932609,long:153.4004473},
		{infoWindow:"FAMILY LIFE ORGANICS",address:"5/238/262 Woolcock St, Currajong QLD 4812",lat:-19.2705336,long:146.7776123},
		{infoWindow:"FOODWORKS FORTITUDE VALLEY",address:"Valley Metro, Shop 43/230 Brunswick St, Fortitude Valley QLD 4006",lat:-27.4562256,long:153.0336498},
		{infoWindow:"IGA GLASSHOUSE MOUNTAINS",address:"4/7 Reed St, Glass House Mountains QLD 4518",lat:-26.898281,long:152.9570889},
		{infoWindow:"GO VITA CAPALABA",address:"38-62 Moreton Bay Rd, Capalaba QLD 4157",lat:-27.523443,long:153.1945744},
		{infoWindow:"HEALTH SQUARED INDOOROOPILLY",address:"1019a/322 Moggill Rd, Indooroopilly QLD 4068",lat:-27.4991355,long:152.972682},
		{infoWindow:"IGA BRENDALE",address:"1/18-22 Kremzow Rd, Brendale QLD 4500",lat:-27.3176142,long:152.9871636},
		{infoWindow:"IGA EAST BRISBANE",address:"33 Lytton Rd, East Brisbane QLD 4169",lat:-27.4796434,long:153.0426295},
		{infoWindow:"IGA MARKETPLACE WISES ROAD",address:"32 Wises Rd, Maroochydore QLD 4558",lat:-26.6722199,long:153.0911531},
		{infoWindow:"IGA NEWFARM",address:"572 Brunswick St, New Farm QLD 4005",lat:-27.4619052,long:153.0397957},
		{infoWindow:"KIAH ORGANIC & WHOLEFOODS",address:"5/1230 Logan Rd, Mount Gravatt East QLD 4122",lat:-27.5298349,long:153.0728049},
		{infoWindow:"MARLIN COAST AMCAL PHARMACY",address:"Shop 1-2  Cnr McGregor Rd &Captain Cook Highway, Smithfield QLD 4878",lat:-16.820183,long:145.69455},
		{infoWindow:"NITTY GRITTY ORGANICS",address:"661 Oxley Rd, Corinda QLD 4075",lat:-27.5394345,long:152.9813259},
		{infoWindow:"NUTRITION DEN",address:"1151 Creek Rd, Carindale QLD 4152",lat:-27.5030925,long:153.1019724},
		{infoWindow:"RENASCENCE HEALTH",address:"8/496 Golden Four Dr, Tugun QLD 4224",lat:-28.1416024,long:153.4924306},
		{infoWindow:"SEASON’S IGA CLONTARF",address:"Elizabeth Ave &, Angus St, Clontarf QLD 4019",lat:-27.2590198,long:153.0804423},
		{infoWindow:"SPAR WOOMBYE",address:"20 Blackall St, Woombye QLD 4559",lat:-26.6609077,long:152.9656924},
		{infoWindow:"STRATFORD VILLAGE PHARMACY",address:"2/1 Kamerunga Rd, Stratford QLD 4870",lat:-16.8754295,long:145.7337463},
		{infoWindow:"RITCHIES IGA SUPA DAISY HILL",address:"1/3 Cupania St, Daisy Hill QLD 4127",lat:-27.6435883,long:153.1541582},
		{infoWindow:"VITALITY HEALTHY FOODS",address:"Shop 20,  The Terrace, North Ipswich QLD 4305",lat:-27.6085753,long:152.7626836},
		{infoWindow:"BELROWES NEWS & MINI MART",address:"49 Bundock St, Belgian Gardens QLD 4810",lat:-19.2455468,long:146.7960312},
		{infoWindow:"KWIK SHOP",address:"23 Palmer St, South Townsville QLD 4810",lat:-19.2604262,long:146.821299},
		{infoWindow:"JAMIES JOINT",address:"3/14 Plume St, South Townsville QLD 4810",lat:-19.2606343,long:146.8218175},
		{infoWindow:"OM CONVENIENCE",address:"1/49 Railway Ave, Railway Estate QLD 4810",lat:-19.275965,long:146.8160487},
		{infoWindow:"EDISON STREET MINI MART",address:"37 Edison St, Wulguru QLD 4811",lat:-19.3237154,long:146.8118387},
		{infoWindow:"JESSE’S CARDWELL PIES",address:"Victoria St, Cardwell 4849, Australia",lat:-18.2628086,long:146.0244344},
		{infoWindow:"GUMVALE STORE",address:"981 Riverway Dr, Rasmussen QLD 4815",lat:-19.3409001,long:146.7276495},
		{infoWindow:"BUSHLAND BEACH CONVENIENCE STORE",address:"361 Mount Low Pkwy, Bushland Beach QLD 4818",lat:-19.1923936,long:146.6769242},
		{infoWindow:"MISS SUSHI",address:"4/103 Duckworth St, Garbutt QLD 4810",lat:-19.2753426,long:146.7577322},
		{infoWindow:"CHEMIST OUTLET",address:"3/12 Deeragun Rd, Deeragun QLD 4818",lat:-19.2485384,long:146.6818317},
		{infoWindow:"AMCAL PLUS CASTLETOWN",address:"Shop 101A Castletown Shoppingworld, 35-47 Kings Rd, Pimlico QLD 4812",lat:-19.2719129,long:146.790654},
		{infoWindow:"CHEMIST OUTLET ROCKDALE",address:"507 Princes Hwy, Rockdale NSW 2216",lat:-33.9523639,long:151.1374156},
		{infoWindow:"SANDWICH EXPRESS",address:"221 Ingham Rd, Garbutt QLD 4814",lat:-19.2657253,long:146.7820226},
		{infoWindow:"BANG AND GRIND",address:"8/14 Spence St, Cairns City QLD 4870",lat:-16.9231612,long:145.7772504},
		{infoWindow:"RAINTREES OF MOSSMAN",address:"2/6 Foxton Ave, Mossman QLD 4873",lat:-16.4589713,long:145.3728832},
		{infoWindow:"YUM YUMS MOSSMAN",address:"20 Front St, Mossman QLD 4873",lat:-16.4604512,long:145.3742883},
		{infoWindow:"KEWARRA BEACH FRIENDLY GROCER",address:"29-33 Poolwood Rd, Kewarra Beach QLD 4879",lat:-16.7903107,long:145.6813416},
		{infoWindow:"THE BAKERS CORNER",address:"4/18 Kenrose St, Carina QLD 4152",lat:-27.48596,long:153.097576},
		{infoWindow:"CAFFEINATION STATION",address:"138 Tingal Rd, Wynnum QLD 4178",lat:-27.4450411,long:153.1704786},
		{infoWindow:"CANDY LAND",address:"147 Brisbane Rd, Biggera Waters QLD 4216",lat:-27.9326891,long:153.3889557},
		{infoWindow:"DOWNTOWN DELI",address:"2/24 Musgrave Ave, Southport QLD 4215",lat:-27.9567397,long:153.4018482},
		{infoWindow:"FITZ + POTTS",address:"1180 (Upstairs) Sandgate Rd, Nundah QLD 4012",lat:-27.409113,long:153.0616173},
		{infoWindow:"ONE STOP EXPRESS MART",address:"7/15 Tribune St, South Brisbane QLD 4101",lat:-27.4807494,long:153.023726},
		{infoWindow:"ROCK AND ROLL DELI",address:"500 Logan Rd, Greenslopes QLD 4120",lat:-27.5044943,long:153.048195},
		{infoWindow:"PIERRE'S GOLDEN CHICKEN WYNNUM",address:"8/89 Bay Terrace, Wynnum QLD 4178",lat:-27.4434463,long:153.1731446},
		{infoWindow:"JOSEPH THE GREEN GROCER",address:"5/15-17 Main St, North Tamborine QLD 4272",lat:-27.9259189,long:153.1855456},
		{infoWindow:"COFFEE CAT ON KINGS BEACH",address:"4/8 Levuka Ave, Kings Beach QLD 4551",lat:-26.8047239,long:153.1400256},
		{infoWindow:"2 DLITE",address:"Shop 3/29 Mintee Street, Point Lookout QLD 4183",lat:-27.4325465,long:153.5428295},
		{infoWindow:"LA FINCA PTY LTD",address:"23/123 Parkyn Parade, Mooloolaba QLD 4557",lat:-26.6838454,long:153.1221251},
		{infoWindow:"SU JAPANESE RESTAURANT",address:"Shop 17/696 New Cleveland Rd, Gumdale QLD 4154",lat:-27.4904421,long:153.1524705},
		{infoWindow:"AMICI DELI",address:"6/725 Gympie Rd, Chermside QLD 4032",lat:-27.390388,long:153.0320386},
		{infoWindow:"BELLE VUE CAFE",address:"119 Palmerin St, Warwick QLD 4370",lat:-28.216552,long:152.032375},
		{infoWindow:"FARM HOUSE KEDRON",address:"9 Somerset Rd, Kedron QLD 4031",lat:-27.4078792,long:153.0316367},
		{infoWindow:"THE BARDON SHED",address:"8 Runic St, Bardon QLD 4065",lat:-27.4677495,long:152.987499},
		{infoWindow:"LITTLE MAY ESPRESSO",address:"1/174 Main St, Montville QLD 4560",lat:-26.6904582,long:152.8932041},
		{infoWindow:"DUST TEMPLE",address:"54 Currumbin Creek Rd, Currumbin Waters QLD 4223",lat:-28.1442199,long:153.4724007},
		{infoWindow:"ALBERTOS SHOT ESPRESSO BAR",address:"462 Montague Rd, West End QLD 4101",lat:-27.4888455,long:153.0000189},
		{infoWindow:"MOKOJI SUSHI",address:"4/7 Lindsay St, Hawthorne QLD 4171",lat:-27.4617868,long:153.0599936},
		{infoWindow:"OTTOS FRESH FOOD MARKET",address:"3/5 Illuka St, Currajong QLD 4812",lat:-19.2752261,long:146.7706049},
		{infoWindow:"THE EVA ST PRIVATEER",address:"3/26 Eva St, Coorparoo QLD 4151",lat:-27.5045503,long:153.0687488},
		{infoWindow:"ZACS BISTRO",address:"28 Metroplex Ave, Murarrie QLD 4172",lat:-27.452743,long:153.0999233},
		{infoWindow:"U&I ESPRESSO",address:"215 Waterworks Rd, Ashgrove QLD 4060",lat:-27.4452264,long:152.9941148},
		{infoWindow:"UNICO ESPRESSO",address:"2/100 Mooroondu Rd, Thorneside QLD 4158",lat:-27.4805114,long:153.2023405},
		{infoWindow:"SPAR LISMORE",address:"Shop 1/62 Wyrallah Rd, East Lismore NSW 2480",lat:-28.8196057,long:153.2852398},
		{infoWindow:"WINE+BEER",address:"Pacific Fair Shopping Centre, 1529B Hooker Blvd, Broadbeach",lat:-28.0363999,long:153.4280301},
		{infoWindow:"BALLINA DELICATESSEN & FOOD STORE",address:"141 River St, Ballina NSW 2478",lat:-28.8700329,long:153.5602851},
		{infoWindow:"CAFE SANTINA",address:"135 Coronation Drive Off, Little Cribb St, Milton QLD 4064",lat:-27.468338,long:153.010276},
		{infoWindow:"THE FLOUR MILL BAKERY",address:"10/111 Queen St, Cleveland QLD 4163",lat:-27.5282807,long:153.268741},
		{infoWindow:"STRADDIE SERVO & HARDWARE",address:"Cnr Cunningham Street and, Fraser St, Dunwich QLD 4183",lat:-27.4993899,long:153.4023284},
		{infoWindow:"CHRIS’S SUPA IGA CARINA",address:"881 Old Cleveland Rd, Carina Heights QLD 4152",lat:-27.4962265,long:153.0948412},
		{infoWindow:"DRAKES ASHMORE",address:"Cnr Currumburra Road &, Southport Nerang Rd, Ashmore QLD 4214",lat:-27.9767379,long:153.3809704},
		{infoWindow:"DRAKES ROCHDALE",address:"549 Underwood Rd, Rochedale QLD 4123",lat:-27.5958669,long:153.1242613},
		{infoWindow:"FOODWORKS BURPENGARY",address:"Shop 10 Northshore Shopping Centre, 161 Station Rd, Burpengary QLD 4505",lat:-27.1551511,long:152.9724456},
		{infoWindow:"GIFT RAPT AND POSTED",address:"38 Capper Street, Gayndah, Queensland 4625",lat:-25.6258569,long:151.610824},
		{infoWindow:"GO VITA BUNDABERG",address:"107 Takalvan St, Bundaberg West QLD 4670",lat:-24.8869846,long:152.3206737},
		{infoWindow:"GO VITA TOOWOOMBA",address:"3/139 Herries St, Toowoomba City QLD 4350",lat:-27.5647175,long:151.9539715},
		{infoWindow:"HOWARD STREET MARKETS",address:"133 Howard St, Nambour QLD 4560",lat:-26.6259138,long:152.9658763},
		{infoWindow:"IGA CLEVELAND",address:"cnr Shore Street West &, Wellington St, Cleveland QLD 4163",lat:-27.5246612,long:153.2655694},
		{infoWindow:"IGA GREENSLOPES",address:"3 Chatsworth Rd, Greenslopes QLD 4120",lat:-27.508232,long:153.052017},
		{infoWindow:"IGA MILTON",address:"23/12 Baroona Rd, Milton QLD 4064",lat:-27.4689473,long:153.0029187},
		{infoWindow:"IGA POTTSVILLE",address:"1/11-13 Coronation Ave, Pottsville NSW 2489",lat:-28.3891086,long:153.5634354},
		{infoWindow:"MARINA MIRAGE PHARMACY",address:"Shop 31/74 Seaworld Dr, Main Beach QLD 4217",lat:-27.9685082,long:153.4260462},
		{infoWindow:"NEWSTEAD ORGANIC GO VITA",address:"1/33 Longland St, Newstead QLD 4006",lat:-27.4514655,long:153.0441013},
		{infoWindow:"NOW HEALTHY",address:"Shop 65, 235 Forest Lake Blvd, Forest Lake QLD 4078",lat:-27.6254923,long:152.9682213},
		{infoWindow:"PRICELINE PHARAMCY AITKENVALE",address:"261A/310 Ross River Rd, Aitkenvale QLD 4814",lat:-19.2992382,long:146.7630756},
		{infoWindow:"SAM COCOS TRADING",address:"310 Ipswich Rd, Annerley QLD 4103",lat:-27.5023142,long:153.0350863},
		{infoWindow:"SEASON’S IGA REDCLIFFE",address:"82-98 Anzac Ave, Redcliffe QLD 4020",lat:-27.2294781,long:153.1069477},
		{infoWindow:"SPROUT GROCERS",address:"36-48 Kings Rd, Townsville QLD 4812",lat:-19.272492,long:146.7936121},
		{infoWindow:"IGA MALENY",address:"26 Maple St, Maleny QLD 4552",lat:-26.7581521,long:152.8520631},
		{infoWindow:"THE NATURAL CITY",address:"DFO, 45/16 Amazons Pl, Jindalee QLD 4074",lat:-27.5311202,long:152.9482378},
		{infoWindow:"WHITES NORTH WARD GROCER",address:"1 Rose St, North Ward QLD 4810",lat:-19.2467673,long:146.805267},
		{infoWindow:"SOUTH TOWNSVILLE TAKE AWAY",address:"49 Bundock St, Belgian Gardens QLD 4810",lat:-19.2455468,long:146.7960312},
		{infoWindow:"FRIENDLY GROCER",address:"56 Abbott St, Oonoonba QLD 4811",lat:-19.2992808,long:146.8184885},
		{infoWindow:"TOWNSVILLE FRUITBARN AND DELI",address:"1 Hammett St, Currajong QLD 4812",lat:-19.2785878,long:146.7799757},
		{infoWindow:"JKS DELICATESSEN",address:"78 Lannercost St, Ingham QLD 4850",lat:-18.65006,long:146.1538344},
		{infoWindow:"BP SEAVIEW DELI CAFE",address:"87 Victoria St, Cardwell QLD 4849",lat:-18.2661686,long:146.0279812},
		{infoWindow:"CALTEX YABULU",address:"Bruce Hway &, Greenvale St, Yabulu QLD 4818",lat:-19.2166563,long:146.6031351},
		{infoWindow:"HEATLEY 5 STAR HANDIMARKET",address:"322 Fulham Rd, Heatley QLD 4814",lat:-19.288327,long:146.7536539},
		{infoWindow:"MALS PIES AND PASTRIES",address:"56/62 Abbott St, Oonoonba QLD 4811",lat:-19.2998315,long:146.8186709},
		{infoWindow:"TROY KEBABS",address:"2b/103 Duckworth St, Garbutt QLD 4814",lat:-19.2753426,long:146.7577322},
		{infoWindow:"ARMI’S IGA",address:"103 Duckworth St, Garbutt QLD 4814",lat:-19.2753426,long:146.7577322},
		{infoWindow:"VIVIA CAFE",address:"135 Victoria St, Cardwell QLD 4849",lat:-18.2636641,long:146.0251507},
		{infoWindow:"FIORI WITH LOVE",address:"80 Cartwright St, Ingham QLD 4850",lat:-18.6481955,long:146.1644398},
		{infoWindow:"ESPIAGO’S FOODLAND",address:"71 Mcilwraith, Ingham, Queensland 4850",lat:-18.6522345,long:146.1527878},
		{infoWindow:"MOSSMAN MEMORIAL BOWLS CLUB",address:"6-8 Johnston Rd, Mossman QLD 4873",lat:-16.4644036,long:145.3721717},
		{infoWindow:"NEWELL BEACH TAKE AWAY AND CAFE",address:"42 Marine Parade, Newell QLD 4873",lat:-16.4256216,long:145.4060897},
		{infoWindow:"MACHANS BEACH STORE AND POST",address:"27 Machans St, Machans Beach QLD 4878",lat:-16.8525389,long:145.7477682},
		{infoWindow:"BRANSFORD TACKLE SHOP",address:"Captain Cook Hwy, Clifton Beach QLD 4879",lat:-16.7692856,long:145.6703814},
		{infoWindow:"PEACHES FRESH FRUIT MARKET",address:"195 Hampton Rd, South Fremantle WA 6162",lat:-32.0705226,long:115.7574734},
		{infoWindow:"BASIL’S FINE FOODS",address:"5/36 Anchorage Dr, Mindarie WA 6030",lat:-31.693088,long:115.7126293},
		{infoWindow:"WATERFORD SUPA IGA",address:"CNR MANNING RD & KENT ST, KARAWARA, 6152",lat:-32.0112954,long:115.8862798},
		{infoWindow:"THE HEALTHY BUNCH",address:"SHOP 1A/259 SCARBOROUGH BEACH ROAD, DOUBLEVIEW, 6018",lat:-31.8967265,long:115.7832533},
		{infoWindow:"SCARBORO SUPER DELI",address:"68 SCARBOROUGH BEACH ROAD, SCARBOROUGH, 6019",lat:-31.8939135,long:115.7638527},
		{infoWindow:"PORT KENNEDY SUPA IGA",address:"49 CHELMSFORD AVE, PORT KENNEDY, 6172",lat:-32.353058,long:115.754526},
		{infoWindow:"MULLALOO IGA",address:"PO BOX 201, QUINN ROCKS, 6030",lat:-31.6605175,long:115.6959328},
		{infoWindow:"BASIL'S FINE FOODS",address:"SHOP 5 - 36 ANCHORAGE DRIVE, MINDARIE, 6030",lat:-31.693088,long:115.7126293},
		{infoWindow:"BRIGHTON RD FOOD MKT - HANSBROOK",address:"111A BRIGHTON ROAD, SCARBOROUGH, 6019, ",lat:-31.89845,long:115.76832},
		{infoWindow:"FARMER JACKS - GWELUP",address:"Wishart St, Gwelup WA 6018",lat:-31.8765102,long:115.7982265},
		{infoWindow:"FARMER JACKS - SPEARWOOD",address:"254 Rockingham Rd, Spearwood WA 6163",lat:-32.0982059,long:115.7837754},
		{infoWindow:"THE NEW BENARA FRESH FOOD MARKET",address:"39 BALIKPAPAN AVENUE, DIANELLA, 6059",lat:-31.86729549999999,long:115.8685808},
		{infoWindow:"THE FOODIES BASKET",address:"90 MOREING ROAD, ATTADALE, 6156",lat:-32.0275968,long:115.7950073},
		{infoWindow:"PRESTON STREET IGA",address:"25 PRESTON STREET, COMO, 6152",lat:-31.9942334,long:115.8587383},
		{infoWindow:"PEACHES FRESH FOOD",address:"SHOP 1 - 195 HAMPTON ROAD, SOUTH FREMANTLE, 6162",lat:-32.0705226,long:115.7574734},
		{infoWindow:"LEEDERVILLE IGA",address:"313 VINCENT STREET, LEEDERVILLE, 6007",lat:-31.9366913,long:115.8405772},
		{infoWindow:"GILBERTS FRESH  WILLETTON",address:"SHOP 78 - 50 SOUTHLANDS S/C, WILLETTON, 6155",lat:-32.0575864,long:115.8796848},
		{infoWindow:"FARMER JACKS - GWELUP",address:"PO BOX 7282, SHENTON PARK, 6008",lat:-31.9588145,long:115.8053226},
		{infoWindow:"DOUBLEVIEW IGA",address:"187 SCARBOROUGH BEACH, DOUBLEVIEW, 6018",lat:-31.8944324,long:115.7772563},
		{infoWindow:"CHROME COFFEE LOUNGE",address:"250 Elizabeth Street, North Hobart TAS 7000",lat:-42.8780464,long:147.3195312},
		{infoWindow:"HILL STREET GROCER BRIGHTON",address:"178 Brighton Rd, Brighton TAS 7030",lat:-42.6983092,long:147.2531288},
		{infoWindow:"IGA EXPRESS HILL ST GROCER DEVONPORT",address:"42/54 Oldaker St, Devonport TAS 7310",lat:-41.1755752,long:146.3562168},
		{infoWindow:"HILL ST GROCER DODGERS FERRY",address:"60 Carlton Beach Rd, Dodges Ferry TAS 7173",lat:-42.858109,long:147.6170126},
		{infoWindow:"HILL ST GROCER LAUDERDALE",address:"528 South Arm Rd, Lauderdale TAS 7021",lat:-42.9140827,long:147.4859875},
		{infoWindow:"HILL ST GROCER LONGFORD SUPA IGA",address:"9 Wellington St, Longford TAS 7301",lat:-41.5886875,long:147.1201156},
		{infoWindow:"BELLE’S PIZZERIA",address:"4 Cascade Rd, South Hobart TAS 7004",lat:-42.8949572,long:147.3084132},
		{infoWindow:"MANING REEF CAFE",address:"479 Sandy Bay Rd, Sandy Bay TAS 7005",lat:-42.9071569,long:147.3425087},
		{infoWindow:"RENDEZVOUS CAFE",address:"4 Salamanca Square, Battery Point TAS 7004",lat:-42.8871898,long:147.3320655},
		{infoWindow:"HILL STREET GROCER DODGES FERRY",address:"60 Carlton Beach Rd, Dodges Ferry TAS 7173",lat:-42.858109,long:147.6170126},
		{infoWindow:"HILL STREET GROCER LAUDERDALE",address:"528 S Arm Rd, Lauderdale TAS 7021",lat:-42.9140827,long:147.4859875},
		{infoWindow:"HILL STREET GROCER NEWTOWN",address:"2 Augusta Rd, New Town TAS 7008",lat:-42.8680466,long:147.3112823},
		{infoWindow:"SALAMANCA FRESH KINGSTON",address:"Channel Court Shopping Centre, Shop 101/29 Channel Hwy, Kingston TAS 7050",lat:-42.9765941,long:147.3098426},
		{infoWindow:"WEST HOBART EXPRESS",address:"12 Hill St, West Hobart TAS 7000",lat:-42.8839604,long:147.3148482},
		{infoWindow:"HILL ST GROCER NEWTOWN",address:"1 Augusta Rd, New Town TAS 7008",lat:-42.8673582,long:147.3102463},
		{infoWindow:"HILL ST GROCER SOUTH HOBART (SALAD BOWL)",address:"362 Macquarie St, South Hobart TAS 7004",lat:-42.89300069999999,long:147.3152125},
		{infoWindow:"HILL STREET GROCER WEST HOBART",address:"109 Hill St, West Hobart TAS 7000",lat:-42.8795925,long:147.311679},
		{infoWindow:"SALAMANCA FRESH KINGSTON",address:"SHOP 101/29 Channel Hwy, Kingston TAS 7050",lat:-42.9765753,long:147.309845},
		{infoWindow:"WEST HOBART EXPRESS",address:"12 Hill St, West Hobart TAS 7000",lat:-42.8839604,long:147.3148482},
		{infoWindow:"AUSTIN’S FERRY STORE",address:"162 Main Rd, Austins Ferry TAS 7011",lat:-42.7803497,long:147.2520173},
		{infoWindow:"MACQUARIE SUPERMARKET",address:"468 Macquarie St, South Hobart TAS 7004",lat:-42.894685,long:147.3092973},
		{infoWindow:"MILANOS PIZZA",address:"102 Augusta Rd, Lenah Valley TAS 7008",lat:-42.8659893,long:147.2968867},
		{infoWindow:"HILL STREET GROCER DEVONPORT",address:"42/54 Oldaker St, Devonport TAS 7310",lat:-41.1755752,long:146.3562168},
		{infoWindow:"HILL STREET GROCER LATROBE",address:"108/114 Gilbert St, Latrobe TAS 7307",lat:-41.2360966,long:146.4107782},
		{infoWindow:"HILL STREET GROCER LONGFORD",address:"7a Wellington St, Longford TAS 7301",lat:-41.5881948,long:147.120256},
		{infoWindow:"HILL STREET GROCER SOUTH HOBART",address:"362 Macquarie St, South Hobart TAS 7004",lat:-42.89300069999999,long:147.3152125},
		{infoWindow:"TCM MARKET",address:"Shop 4/476 S Arm Rd, Lauderdale TAS 7021",lat:-42.9084149,long:147.4835809},
		{infoWindow:"HILL STREET GROCER SANDY BAY",address:"2 Churchill Ave, Sandy Bay TAS 7005",lat:-42.9033541,long:147.3242648},
		{infoWindow:"GILBERTS FRESH HILTON", address: "308 South St, Hilton WA 6163", lat: -32.063093, long: 115.7815706},
		{infoWindow:"A25 PIZZERIA (CITY)",address:"720 Chapel St, South Yarra VIC 3141",lat:-37.8365604,long:144.9964155},
		{infoWindow:"ALTONA FRESH",address:"62-76 Second Ave, Altona North VIC 3025",lat:-37.836538,long:144.853682},
		{infoWindow:"ANDERSON DELI",address:"93 Anderson Rd, Fawkner VIC 3060",lat:-37.695962,long:144.968302},
		{infoWindow:"ANTIPASTI DELI CAFE",address:"3/1 High St, Yarraville VIC 3013",lat:-37.8171443,long:144.8818744},
		{infoWindow:"AROMA DELI CAFE",address:"11 Baker St, Wangaratta VIC 3677",lat:-36.3537873,long:146.3223472},
		{infoWindow:"ASHBURTON TOP SHELF FRUITS",address:"225 High St, Ashburton VIC 3147",lat:-37.86295,long:145.077986},
		{infoWindow:"AUMANNS AT WARRANDYTE",address:"150 Harris Gully Rd, Warrandyte VIC 3113",lat:-37.76421029999999,long:145.199536},
		{infoWindow:"BARKLEY JOHNSON DELICATESSEN & WINE",address:"11 Anderson St, Yarraville VIC 3013",lat:-37.8168526,long:144.8917686},
		{infoWindow:"BELCIBO & CO",address:"87 Benalla Rd, Shepparton VIC 3630",lat:-36.3852622,long:145.4225057},
		{infoWindow:"BERRIES ON THE ROCKS",address:"13 Bluff Rd, Black Rock VIC 3193",lat:-37.974837,long:145.016099},
		{infoWindow:"BOCCACCIO CELLARS-BALWYN IGA",address:"1030/1050 Burke Rd, Balwyn VIC 3103",lat:-37.8017554,long:145.0627963},
		{infoWindow:"BRIGHTON GROCER",address:"112 Were St, Brighton VIC 3186",lat:-37.925707,long:144.9993068},
		{infoWindow:"CAMPANA'S STOCKADE CELLARS",address:"301 Mair St, Ballarat Central VIC 3350",lat:-37.5597802,long:143.856341},
		{infoWindow:"CASTLEMAINE FRUIT SUPPLY",address:"73 Mostyn St, Castlemaine VIC 3450",lat:-37.0656144,long:144.2184199},
		{infoWindow:"CASTLEMAINE IGA",address:"241 Barker St, Castlemaine VIC 3450",lat:-37.0630379,long:144.2167116},
		{infoWindow:"CIBO MT MARTHA",address:"20 Lochiel Ave, Mount Martha VIC 3934",lat:-38.2675346,long:145.0131798},
		{infoWindow:"COLONIAL FRESH MARKET - CHADSTONE",address:"1341 Dandenong Rd, Chadstone VIC 3148",lat:-37.8863855,long:145.0839246},
		{infoWindow:"COLONIAL FRESH MARKET - FOREST HILL",address:"270 Canterbury Rd, Forest Hill VIC 3131",lat:-37.8349628,long:145.1656441},
		{infoWindow:"CONTINENTAL DELI - HAWTHORN",address:"676-680 Glenferrie Rd, Hawthorn VIC 3122",lat:-37.8208768,long:145.0357841},
		{infoWindow:"CREST ON BARKLY HOTEL",address:"47 Barkly St, St Kilda VIC 3182",lat:-37.8588378,long:144.9824782},
		{infoWindow:"DEVOLA'S OF BRIGHTON",address:"616 Hampton St, Brighton East VIC 3186",lat:-37.928714,long:145.004347},
		{infoWindow:"DIRECTORS PURCHASES",address:"Victoria",lat:-37.4713077,long:144.7851531},
		{infoWindow:"EUROPA DELI CAFE",address:"37 Vaughan St, Shepparton VIC 3630",lat:-36.3834695,long:145.4024756},
		{infoWindow:"FOODWORKS ASCOT VALE",address:"181 Union Rd, Ascot Vale VIC 3032",lat:-37.7734386,long:144.9157381},
		{infoWindow:"FOODWORKS BRIGHTON",address:"140/142A Martin St, Brighton VIC 3186",lat:-37.8976046,long:145.0037547},
		{infoWindow:"FOUR COUSINS",address:"Unit 2, Unit 2/363-383 Nepean Hwy, Parkdale VIC 3195",lat:-37.9971054,long:145.0842861},
		{infoWindow:"GISBORNE FRESH",address:"22 Brantome St, Gisborne VIC 3437",lat:-37.4862085,long:144.5888052},
		{infoWindow:"GUSTO DELI N' FINE FOODS",address:"Greenvale Shopping Centre, G15/1 Greenvale Dr, Greenvale VIC 3059",lat:-37.6393698,long:144.8819848},
		{infoWindow:"HAPPY APPLE SEDDON",address:"176-178 Victoria St, Seddon VIC 3011",lat:-37.8060787,long:144.89175},
		{infoWindow:"HARVEY'S OF HIGHTON",address:"9/11 Belle Vue Ave, Highton VIC 3216",lat:-38.172253,long:144.324704},
		{infoWindow:"HENRYS BAYSIDE MERCATO",address:"Shop 152, Bayside Shopping Centre, 28 Beach St, Frankston VIC 3199",lat:-38.1411382,long:145.1246478},
		{infoWindow:"HENRYS MERCATO - STUD PARK",address:"Shop 45, Stud Park Shopping Centre, 1101 Stud Rd, Rowville VIC 3178",lat:-37.9211361,long:145.2367808},
		{infoWindow:"IGA EXPRESS AIRPORT WEST",address:"55-57 McNamara Ave, Airport West VIC 3042",lat:-37.725313,long:144.8810671},
		{infoWindow:"ISTRA SMALLGOODS",address:"36 Wheelers Hill Rd, Musk VIC 3461",lat:-37.3702596,long:144.1845462},
		{infoWindow:"LA MANNA AND SONS SOUTH YARRA",address:"670 Chapel St, South Yarra VIC 3141",lat:-37.8373706,long:144.9967821},
		{infoWindow:"LEAF ELWOOD",address:"111 Ormond Rd, Elwood VIC 3184",lat:-37.8855042,long:144.9880048},
		{infoWindow:"LEO'S FINE FOODS - HARTWELL",address:"2 Summerhill Rd, Glen Iris VIC 3146",lat:-37.8487935,long:145.0761752},
		{infoWindow:"LEO'S FINE FOODS - HEIDELBERG",address:"133-137 Burgundy St, Heidelberg VIC 3084",lat:-37.7562531,long:145.0654184},
		{infoWindow:"LEO'S FINE FOODS - KEW",address:"26 Princess St, Kew VIC 3101",lat:-37.8064219,long:145.0294059},
		{infoWindow:"LITTLE LIPARI CAFE",address:"143 Maude St, Shepparton VIC 3630",lat:-36.3780669,long:145.4015942},
		{infoWindow:"MARKET PLACE CHIRNSIDE PARK",address:"Shop 120/239-241 Maroondah Hwy, Chirnside Park VIC 3116",lat:-37.7561269,long:145.3122971},
		{infoWindow:"MARKET PLACE KNOX CITY",address:"425 Burwood Hwy, Wantirna South VIC 3152",lat:-37.868986,long:145.2410399},
		{infoWindow:"MARKET PLACE WERRIBEE",address:"Pacific Weribee Shopping Centre, Werribee VIC 3030",lat:-37.8744321,long:144.6780659},
		{infoWindow:"MARTHA'S TABLE",address:"Waterfront Pl, Safety Beach VIC 3936",lat:-38.3060417,long:145.0069853},
		{infoWindow:"MASTER OF NONE",address:"57B Station St, Malvern VIC 3144",lat:-37.8660172,long:145.0296481},
		{infoWindow:"MAXI FOODS FERN TREE GULLY",address:"2/1202 Burwood Hwy, Ferntree Gully VIC 3156",lat:-37.8941667,long:145.3080556},
		{infoWindow:"METCASH - CICCONES IGA",address:"Victoria",lat:-37.4713077,long:144.7851531},
		{infoWindow:"METCASH - FLINDERS GENERAL STORE",address:"48 Cook St, Flinders VIC 3929",lat:-38.4737513,long:145.0171667},
		{infoWindow:"METCASH - IGA EXPRESS MILLS ST ALBERT PARK",address:"Mills St, Albert Park VIC 3206",lat:-37.8473964,long:144.9574998},
		{infoWindow:"METCASH - IGA PLUS LIQUOR FAIRFIELD",address:"140 Station St, Fairfield VIC 3078",lat:-37.7762664,long:145.0182573},
		{infoWindow:"METCASH - KINGLAKE COMMUNITY FOODWORKS",address:"Kinglake VIC 3763",lat:-37.518382,long:145.3591263},
		{infoWindow:"METCASH - KNOXFIELD IGA",address:"1579 Ferntree Gully Rd, Knoxfield VIC 3180",lat:-37.8943519,long:145.2497084},
		{infoWindow:"MONACO'S DELI",address:"525 Camberwell Rd, Camberwell VIC 3124",lat:-37.842183,long:145.069532},
		{infoWindow:"MORNINGTON PENINSULA HYDROPONIC CAFE",address:"80 Craigie Rd, Mount Martha VIC 3934",lat:-38.256286,long:145.036637},
		{infoWindow:"MT ELIZA VILLAGE FRUIT",address:"106-108 Mount Eliza Way, Mount Eliza VIC 3930",lat:-38.1847568,long:145.0889193},
		{infoWindow:"NON SOLO PASTA",address:"Victoria",lat:-37.4713077,long:144.7851531},
		{infoWindow:"OLIVERS PATISSERIE & CAFE",address:"364 Keilor Rd, Niddrie VIC 3042",lat:-37.736223,long:144.8899547},
		{infoWindow:"PIER FRONT PIZZERIA",address:"98 Newcombe St, Portarlington VIC 3223",lat:-38.1154259,long:144.6545471},
		{infoWindow:"PLANET FRUIT & VEGETABLE",address:"71 Young St, Frankston VIC 3199",lat:-38.1448634,long:145.1251124},
		{infoWindow:"PRONTO FINE FOOD MERCHANTS",address:"2/765 Raglan Parade, Warrnambool VIC 3280",lat:-38.376992,long:142.4803216},
		{infoWindow:"PROVINCIA FOOD STORE",address:"3/154 Marine Dr, Safety Beach VIC 3936",lat:-38.3114472,long:144.9933709},
		{infoWindow:"RENAISSANCE SUPERMARKET - BURWOOD RD HSQ",address:"Burwood Rd, Melbourne VIC",lat:-37.8228048,long:145.0370366},
		{infoWindow:"RENAISSANCE SUPERMARKET - GLENFERRIE RD H",address:"550 Glenferrie Rd, Hawthorn VIC 3122",lat:-37.828271,long:145.0346411},
		{infoWindow:"RICCARDI MARKET FRESH",address:"5/154 Torquay Rd, Grovedale VIC 3216",lat:-38.1942587,long:144.3432239},
		{infoWindow:"RITCHIES STORES PTY LTD - GRIFFITH",address:"64 Main Hurstbridge Rd, Diamond Creek VIC 3089",lat:-37.674671,long:145.1588368},
		{infoWindow:"RITCHIES STORES PTY LTD - IRYMPLE",address:"2109-2111 Fifteenth St, Irymple VIC 3498",lat:-34.2317537,long:142.1672464},
		{infoWindow:"RITCHIES STORES PTY LTD - MT WAVERLEY",address:"283 Stephensons Rd, Mount Waverley VIC 3149",lat:-37.87638889999999,long:145.1286111},
		{infoWindow:"RITCHIES STORES PTY LTD - RED CLIFFS",address:"1/13 Ilex St, Red Cliffs VIC 3496",lat:-34.3054369,long:142.1884016},
		{infoWindow:"RITCHIES STORES PTY LTD - ROBINVALE",address:"1/12 Latje Rd, Robinvale VIC 3549",lat:-34.5834894,long:142.7718965},
		{infoWindow:"RITCHIES STORES PTY LTD - ROWVILLE",address:"18/1100 Wellington Rd, Rowville VIC 3178",lat:-37.9281899,long:145.2525233},
		{infoWindow:"RITCHIES STORES PTY LTD - SORRENTO",address:"108 Ocean Beach Rd, Sorrento VIC 3943",lat:-38.3391916,long:144.7378979},
		{infoWindow:"RITCHIES STORES PTY LTD - YARRA GLEN",address:"Shop 1/38 Bell St, Yarra Glen VIC 3775",lat:-37.6574333,long:145.3755798},
		{infoWindow:"ROSEBUD PENINSULA FRUIT",address:"Rosebud VIC 3939",lat:-38.356,long:144.918},
		{infoWindow:"SCULLI BROS",address:"55A Main St, Greensborough VIC 3088",lat:-37.7025656,long:145.1036343},
		{infoWindow:"SMITH'S CAKES",address:"297 Smith St, Fitzroy VIC 3065",lat:-37.8000541,long:144.9839112},
		{infoWindow:"STAFF",address:"38 Commercial Pl, Keilor East VIC 3033",lat:-37.7328017,long:144.85306},
		{infoWindow:"STRINGERS STORES SORRENTO",address:"2-8 Ocean Beach Rd, Sorrento VIC 3943",lat:-38.3387333,long:144.7411268},
		{infoWindow:"SUPREME MEATS",address:"85 Punt Rd, Cobram VIC 3644",lat:-35.9204022,long:145.6471651},
		{infoWindow:"THE MERCHANT BEAUMARIS",address:"1 S Concourse, Beaumaris VIC 3193",lat:-37.986142,long:145.03364},
		{infoWindow:"THE OLIVE GROVE DELICATESSEN",address:"1303 Sturt St, Ballarat Central VIC 3350",lat:-37.5603032,long:143.8410671},
		{infoWindow:"THE PANTRY FRESH",address:"693 Clayton Rd, Clayton South VIC 3169",lat:-37.95354469999999,long:145.1136328},
		{infoWindow:"THE SPUD SHED",address:"Princes Hwy, Trafalgar VIC 3824",lat:-38.2097506,long:146.1292389},
		{infoWindow:"THE VILLAGE STORE YARRAVILLE",address:"6 Anderson St, Yarraville VIC 3013",lat:-37.8165204,long:144.8917243},
		{infoWindow:"TULLY'S CORNER PRODUCE STORE MORNINGTON",address:"630 Moorooduc Hwy, Mornington VIC 3931",lat:-38.2248322,long:145.0979476},
		{infoWindow:"TUNSTALL DELI",address:"25 Tunstall Square, Doncaster East VIC 3109",lat:-37.791592,long:145.169714},
		{infoWindow:"URBAN HUB @ ST KILDA ROAD",address:"Ground Floor, 479 St Kilda Rd, Melbourne VIC 3004",lat:-37.8418848,long:144.9783509},
		{infoWindow:"VICTORIA FRUIT PALACE",address:"51/53 Glen Eira Rd, Ripponlea VIC 3185",lat:-37.8766374,long:144.9968199},
		{infoWindow:"VICTORY FRESH FRUIT AND VEGETABLES",address:"Victoria",lat:-37.4713077,long:144.7851531},
		{infoWindow:"VIVA LA FRUIT",address:"291 Doncaster Rd, Balwyn North VIC 3104",lat:-37.7916025,long:145.0938524},
		{infoWindow:"Phat Milk",address:"208 Mt Alexander Rd, Travancore VIC 3032",lat:-37.780876,long:144.932568},
		{infoWindow:"HENRYS MERCATO - MORNINGTON",address:"Shop 152, Bayside Shopping Centre, 28 Beach St, Frankston VIC 3199",lat:-38.1411382,long:145.1246478},
		{infoWindow:"METCASH - FOODWORKS SOUTHBANK",address:"shop 3/180 City Rd, Southbank VIC 3006",lat:-37.8240227,long:144.9619829},
		{infoWindow:"THE DISTRICT DOCKLANDS MARKET",address:"440 Docklands Dr, Docklands VIC 3008",lat:-37.81391259999999,long:144.9382318},
		{infoWindow:"THE NEST EUROA",address:"84 Binney St, Euroa VIC 3666",lat:-36.7508996,long:145.5704412},
		{infoWindow:"TRUEMANS GOLF RANGE",address:"357 Truemans Rd, Boneo VIC 3939",lat:-38.397665,long:144.8586875},
		{infoWindow:"WATTS FRESH",address:"179 Mollison St, Kyneton VIC 3444",lat:-37.2454443,long:144.4537172},
		{infoWindow:"Austins Ferry Store",address:"162 Main Rd, Austins Ferry TAS 7011",lat:-42.780377,long:147.252094},
		{infoWindow:"Macquarie Supermarket",address:"468 Macquarie St, South Hobart TAS 7004",lat:-42.8947221,long:147.3092369},
		{infoWindow:"Manning Reef Cafe",address:"479 Sandy Bay Rd, Sandy Bay TAS 7005",lat:-42.9071216,long:147.3425347},
		{infoWindow:"Hill Street Devonport",address:"42/54 Oldaker St, Devonport TAS 7310",lat:-41.1755752,long:146.3562168},
		{infoWindow:"Hill Street Dodges Ferry",address:"60 Carlton Beach Rd, Dodges Ferry TAS 7173",lat:-42.8580225,long:147.6169838},
		{infoWindow:"Hill Street Latrobe",address:"108/114 Gilbert St, Latrobe TAS 7307",lat:-41.2356098,long:146.4105564},
		{infoWindow:"Hill St Grocer Lauderdale",address:"528 S Arm Rd, Lauderdale TAS 7021",lat:-42.91404120000001,long:147.4859903},
		{infoWindow:"Hill Street Longford",address:"7a Wellington St, Longford TAS 7301",lat:-41.5881639,long:147.1202361},
		{infoWindow:"Hill Street Newtown",address:"2 Augusta Rd, New Town TAS 7008",lat:-42.8681488,long:147.3115076},
		{infoWindow:"Hill Street South Hobart",address:"362 Macquarie St, South Hobart TAS 7004",lat:-42.892941,long:147.315316},
		{infoWindow:"TIR Salamanca Fresh Kingston",address:"Channel Court Shopping Centre, Kingston TAS 7050",lat:-42.9773711,long:147.3095578},
		{infoWindow:"TIR TCM Markets Pty Ltd",address:"Shop 4/476 S Arm Rd, Lauderdale TAS 7021",lat:-42.9084149,long:147.4835809},
		{infoWindow:"TIR West Hobart Express",address:"12 Hill St, West Hobart TAS 7000",lat:-42.88390829999999,long:147.3148393},
		{infoWindow:"Wursthaus Cambridge Pty Ltd",address:"6 Lamb Pl, Cambridge TAS 7170",lat:-42.8373027,long:147.4471756},
		{infoWindow:"Hill Street Sandy Bay",address:"2 Churchill Ave, Sandy Bay TAS 7005",lat:-42.9055388,long:147.326336},
		{infoWindow:"Genobile Tasmania",address:"5 Birdwood Ave, Moonah TAS 7009",lat:-42.842853,long:147.2934393},
		{infoWindow:"Milanos Pizza",address:"102 Augusta Rd, Lenah Valley TAS 7008",lat:-42.8659893,long:147.2968867},
		{infoWindow:"Rendezvous Cafe",address:"4 Salamanca Square, Battery Point TAS 7004",lat:-42.8871898,long:147.3320655},
		{infoWindow:"Hill Street Brighton",address:"70 Arthur St, West Hobart TAS 7000",lat:-42.8779299,long:147.3092527},
		{infoWindow:"Belles Pizzeria",address:"4 Cascade Rd, South Hobart TAS 7004",lat:-42.89495710000001,long:147.3084228}
	]

	// Loop markers
	function radiusFilter(radius){
		hideMarkers(markersArrayRadius);
		markersArrayRadius = [];

		for (i = 0; i < markersArray.length; i++) {

			var distanceInMetres = google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(myCurrentPosition.lat,myCurrentPosition.lng), new google.maps.LatLng(markersArray[i].position.lat(), markersArray[i].position.lng())) ;
			if (distanceInMetres<radius*1000) {
				marker = new google.maps.Marker({
					position: new google.maps.LatLng(markersArray[i].position.lat(), markersArray[i].position.lng()),
					icon: sodaIcon,
					animation: google.maps.Animation.DROP
				});
				marker.idx = markersArray[i].idx;
				
				google.maps.event.addListener(marker, 'click', (function(marker, i) {
					return function() {
						infowindow.setContent(shopList[i].infoWindow);
						infowindow.open(map, marker);
					}
				})(marker, i));
				markersArrayRadius.push(marker);
			}
		}
		
		hideMarkers(markersArray);
		showMarkers(markersArrayRadius);
	}
	
	function hideMarkers(array) {
		setMapOnAll(null, array);
	}
	
	function showMarkers(array) {
		setMapOnAll(map, array);
	}
	
	function setMapOnAll(map, array) {
		for (var i = 0; i < array.length; i++) {
			array[i].setMap(map);
		}
	}
	
	// Marker on click event
	function markerOnClick(marker){
		marker.addListener('click', function() {
			processing = true;
			lastActive = marker.idx;
			setTimeout(function() {
				addStore(marker.idx,'active');
			},600);
		});
	}
		
	infowindow = new google.maps.InfoWindow();
	geocoder = new google.maps.Geocoder();
	marker, i, myCurrentPosition;
	mapCenterPosition = {lat: -33.862295, lng: 151.209981};
	markersArray = [];
	markersArrayRadius = [];
	myCurrentAddress;
	sodaIcon = {url:'/assets/images/cart-star.png', scaledSize: new google.maps.Size(30, 30),origin: new google.maps.Point(0,0),anchor: new google.maps.Point(0, 0) };
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 11,
		center: mapCenterPosition,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		styles: mapStyle
	});
	directionsService = new google.maps.DirectionsService;
	directionsDisplay = new google.maps.DirectionsRenderer;
	
	
	// Add all markers and infoWindows
	for (i = 0; i < shopList.length; i++) {   
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(shopList[i].lat, shopList[i].long),
			icon: sodaIcon,
			map: map
		});
		marker.idx = i;
		google.maps.event.addListener(marker, 'click', (function(marker, i) {
			return function() {
				infowindow.setContent(shopList[i].infoWindow);
				infowindow.open(map, marker);
			}
		})(marker, i));
		markersArray.push(marker);
		markerOnClick(marker, infowindow);
	}
	
	var postal = document.getElementById('searchTextField');
	var options = { types: ['(regions)'], componentRestrictions: {country: 'au'} }
	var autocomplete = new google.maps.places.Autocomplete(postal, options);
	google.maps.event.addListener(autocomplete, 'place_changed', function () {
		var location = autocomplete.getPlace();
		location = autocomplete.getPlace();
		location = autocomplete.getPlace();
		geocoder = new google.maps.Geocoder();
		map.setCenter(location['geometry']['location']);
		myCurrentPosition = {
			lat: location['geometry']['location'].lat(),
			lng: location['geometry']['location'].lng()
		}
		radiusFilter(20)
		infowindow.setPosition(location['geometry']['location']);
		map.setZoom(12);
		
		var latlng = new google.maps.LatLng(myCurrentPosition.lat, myCurrentPosition.lng);
		geocoder.geocode({ 'latLng': latlng }, function (results) {
			for (i = 0; i < results.length; i++) {
				for (var j = 0; j < results[i].address_components.length; j++) {
					for (var k = 0; k < results[i].address_components[j].types.length; k++) {
						if (results[i].address_components[j].types[k] == "postal_code") {
							zipcode = results[i].address_components[j].short_name;
							postal.value = zipcode;
						}
					}
				}
			}
		});
	});
	
	google.maps.event.addListener(map, 'idle', getVisible);
	
	function getVisible() {
		if (processing) return;
		setTimeout( function () {
			storesCleanUp();
			var addedd = 0;
			var bounds = map.getBounds();
			if (!bounds) return;
			for (i = 0; i < markersArray.length; i++) {
				if (bounds.contains(markersArray[i].getPosition()) ){
					if (addedd>=7) continue;
					++addedd;
					addStore(markersArray[i].idx);
				}
			}
		},500);
	}

	function storesCleanUp() {
		$('#renderedLocations').html('');
	}

	function addStore(idx,mode) {
		
		if (mode=='active') {
			$('#renderedLocations .active').removeClass('active');
			$('#location-idx-'+idx).remove();
			lastActive = idx;
		}

		var info = shopList[idx];
		var block = $('#templateLocation').clone();
		block.attr('id','location-idx-'+idx);
		block.addClass('map-location').removeClass('hidden');
		block.find('.golden-text').html(info.infoWindow.toUpperCase())
		block.find('span.address').html(info.address)
		if (idx==lastActive) {
			block.find('img').addClass('active');
			$('#renderedLocations').prepend(block);
			var check = $('#renderedLocations .map-location');
			if (check.length>7) {
				for (var i = 0; i < check.length; i++) {
					if (i>=7) $($('#renderedLocations .map-location')[i]).remove();
				}
			}
		} else {
			$('#renderedLocations').append(block);
		}

		setTimeout(function() {
			processing = false;
		},500);
	}


	/*
	window.allClean = [];
	var checker = 0;

	USAGE:
			var NSW = [{infoWindow: "GILBERTS FRESH HILTON", address: "308 South St, Hilton WA 6163, Australia"]
			window.codeAddress();
			console.log(window.allClean);
	window.codeAddress = function (j) {
		if (window.NSW) {
			if (!window.NSW[ checker ]) return console.log('done');
		}
		j = window.NSW[ checker ];
		var prev = j.address.trim() + '';
		geocoder.geocode( { 'address': j.address}, function(results, status) {
			if (status == 'OK') {
				j.lat = results[0].geometry.location.lat();
				j.long = results[0].geometry.location.lng();
				j.address = prev;
				window.allClean[checker] = j;

				if (window.NSW && checker<=window.NSW.length) {
					++checker;
					setTimeout( window.codeAddress , 250 );
					
				}
			} else {
				j.error = status;
				console.log('done for status '+status)
			}

		});
  	}
	*/

	/*
	USAGE:
			window.NSW = [
				{infoWindow:"Milanos Pizza, tasmania, Australia",address:""},
				{infoWindow:"Rendezvous Cafe, tasmania, Australia",address:""},
			]
			window.codeName();	
			console.log(window.allClean);	
	checker = 0;
	window.allClean = [];
	window.codeName = function (j) {
		if (window.NSW) {
			if (!window.NSW[ checker ]) return console.log('done');
		}
		j = window.NSW[ checker ];
		geocoder.geocode( { 'address': j.infoWindow}, function(results, status) {
			if (status == 'OK' || status == 'ZERO_RESULTS') {
				if (status=='OK') {
					
					j.lat = results[0].geometry.location.lat();
					j.long = results[0].geometry.location.lng();
					j.address = results[0].formatted_address;
					console.log(j)
				} else {
					window.allClean[checker] = j;
				}

				if (window.NSW && checker<=window.NSW.length) {
					++checker;
					setTimeout( window.codeName , 250 );
				}
			} else {
				j.error = status;
				console.log('done for status '+status)
			}

		});
  	}
	*/
}
/*****************************************************
 * GOOGLE MAP STOP
 *****************************************************/