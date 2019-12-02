'use strict';
var socket = io();

function MenuItem(n, kC, glu, lac,img,info) {
  this.productName = n;
  this.calories = kC;
  this.gluten = glu;
  this.lactose = lac;
  this.image=img;
  this.information=info;

  this.namekCal = function() {
    return this.productName + ' innehåller ' + this.calories + ' kCal';
  }
}


var jsBurgers =[];
var clicked=false;


//vue för hamburgarloop
var vm = new Vue({
  el: '#menuJS',
  data: {
    burgers:food,
    orders: {},
    order:{
      name:"",
      email:"",
      // street:"",
      // houseno:"",
      gender:"",
      payment:"",
      orderedBurger:[]
    },
    isOpen:false,
    details: {x: 0, y: 0}
  },
  // created: function () {
  //   socket.on('initialize', function (data) {
  //     this.orders = data.orders;
  //   }.bind(this));
  //
  //   socket.on('currentQueue', function (data) {
  //     this.orders = data.orders;
  //   }.bind(this));
  // },

  methods: {
    //  markDone: function()

    //  },
    // getNext: function () {
    //   var lastOrder = Object.keys(this.orders).reduce(function (last, next)
    //   {
    //     return Math.max(last, next);
    //   }, 0);
    //   return lastOrder + 1;
    //                     },
    addOrder: function (event) {
      socket.emit("addOrder", { orderId: this.order.name,
                                details: this.details,
                                orderItems: this.order.orderedBurger,
                                orderName:this.order.name,
                                orderEmail:this.order.email,
                                orderPayment: this.order.payment,
                                orderGender: this.order.gender
                              });
      this.isOpen = true;
    },

    displayOrder: function (event) {
        var offset = {x: event.currentTarget.getBoundingClientRect().left,
                      y: event.currentTarget.getBoundingClientRect().top};
        this.details = {x: event.clientX-10 - event.currentTarget.getBoundingClientRect().left,
                        y: event.clientY-10 - event.currentTarget.getBoundingClientRect().top }
                                  }
              }
});



        //Lägger till hamburgare i arrayen jsBurgers, görs nu i menu.json istället

        // jsBurgers.push(new MenuItem('Fireburger', '450', 'ja', 'nej',
        // 'https://www.mathiaszachau.com/wp-content/uploads/2016/05/saftiga-hamburgare-e1463035643226.jpg',
        // 'Kobebiff av högsta kvalitet! Med ett täcke av riktigt fin ost. Kalljäst surdegsbröd'));
        // jsBurgers.push(new MenuItem('Fried Turkey Burger', '400', 'nej', 'ja','https://files.ellematovin.se/uploads/sites/25/2017/03/IMG_5263-900x600.jpg',
        // 'Friterad Svensk kalkon. Ett lager med gottigheter. Mumsigt glutenfritt bröd'));
        // jsBurgers.push(new MenuItem('Double Cheeseburger', '500', 'ja', 'nej','https://files.ellematovin.se/uploads/sites/25/2017/03/IMG_5263-900x600.jpg',
        // 'Två lager av prima nötkött! Massor av god ost. Ett extra gott bröd'));
        // jsBurgers.push(new MenuItem('Halloumiburger', '550', 'ja', 'ja','https://files.ellematovin.se/uploads/sites/25/2017/03/IMG_5263-900x600.jpg',
        // 'Hamburgaren med Sveriges godaste halloumi och hembakat bröd.'));
        // jsBurgers.push(new MenuItem('Burger Burger', '650', 'ja', 'nej','https://files.ellematovin.se/uploads/sites/25/2017/03/IMG_5263-900x600.jpg',
        // 'Hamburgaren för dig som behöver lite mer än en vanlig burgare. Den är lite extra hamburgig helt enkelt!'));
        // jsBurgers.push(new MenuItem('Gurger Burger', '650', 'ja', 'nej','https://files.ellematovin.se/uploads/sites/25/2017/03/IMG_5263-900x600.jpg',
        // 'En lite extra speciell hamburgare för de stunder du vill äta något som rimmar.'));
