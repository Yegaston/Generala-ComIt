// Initialize app
var myApp = new Framework7();
  
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

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
      {
        path: '/anotador/',
        url: 'anotador.html',
      },
      {
        path: '/index/',
        url: 'index.html',
      },
    ]
    // ... other parameters
  });

var mainView = app.views.create('.view-main');
var jg1='';
var jg2='';

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    //console.log("Device is ready!");
    $$("#init").on('click',function() {
       // jugar(jg1,jg2);
    });
});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
    // Do something here when page loaded and initialized
    //console.log(e);
    
    
})
// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="anotador"]', function (e) {
    // Do something here when page with data-name="anotador" attribute loaded and initialized
    console.log(e);
           jg1=$$('#jug1').val();
           jg2=$$('#jug2').val();
           $$('#j1').html(jg1);
           $$('#j2').html(jg2);
           
           var nro=['UNO','DOS','TRES','CUATRO','CINCO','SEIS'];
           function listado()
           {
             		for(var i=0;i<nro.length;i++)
			          {
				          
			          }
		            
           }
            
})
// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="about"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log(e);
})