// Initialize app
var myApp = new Framework7();

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Requiriendo La funcionalidad del contador.

var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [
    {
      path: '/about/',
      url: 'about.html',
    },
  ]
  // ... other parameters
});

var mainView = app.views.create('.view-main');

// Variables
var jug1 = 'Jugador 1';
var jug2 = 'Jugador 2';


// Handle Cordova Device Ready Event
$$(document).on('deviceready', function () {
  console.log("Device is ready!");

  $$("#iniciar").click(function (e) {
    e.preventDefault();
    jug1 = $$('#jug1').val();
    jug2 = $$('#jug2').val();


    console.log(jug1, jug2)
  });

});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
  // Do something here when page loaded and initialized
  console.log(e);
})

// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="about"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  console.log(e);
  console.log("About cargso");
  console.log(jug1, jug2);

  $$('#njug1').html(jug1);
  $$('#njug2').html(jug2);

})