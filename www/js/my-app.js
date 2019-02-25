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
  // Theme force to ios
  // theme: 'ios',
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
var jg1 = '';
var jg2 = '';
var p1 = 0;
var p2 = 0;

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function () {
  //console.log("Device is ready!");
  $$("#init").on('click', function () {
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


  // Introduce los nombres del equipo al doom.
  jg1 = $$('#jug1').val();
  jg2 = $$('#jug2').val();
  $$('#jg1').html(jg1);
  $$('#jg2').html(jg2);
  var selectElements = document.querySelectorAll('.toque');

  // Determina si es el equipo 1 o 2 segun los ids.
  function equipo(eq) {
    if (eq % 2 == 0) {
      return 2;
    } else {
      console.log("Equipo 1");
      return 1;
    }
  }

  // Multiplica
  function mult(op, id) {
    var p = 0
    var val = id.charAt(0);
    switch (op) {
      case '1':
        console.log(parseInt(val))
        p = parseInt(val)
        console.log(p);
        return p;
        break;
      case '2':
        console.log("Caso 2");
        p = (parseInt(val) * 2)
        console.log(p);
        return p;
        break;
      case '3':
        console.log("Caso 3");
        p = (parseInt(val) * 3);
        console.log(p);
        return p;
        break;
      case '4':
        console.log("Caso 4");
        p = (parseInt(val) * 4)
        console.log(p);
        return p;
        break;
      case '5':
        console.log("Caso 5");
        p = (parseInt(val) * 5)
        console.log(p);
        return p;
        break;
      case '6':
        console.log("Caso 6");
        p = (parseInt(val) * 6)
        console.log(p);
        return p;
        break;
    }
  }

  function changeSelect() {
    selectElements.forEach((selectElement) => {
      selectElement.addEventListener('change', () => {

        var id = selectElement.id;
        var op = id.charAt(0);
        var val = selectElement.value;
        console.log(equipo(id));
        // console.log(mult(val, id))

        if(equipo(id) === 1){
          p1 += mult(val, id);
          console.log(p1);
          $$('#p1').html(p1);
        } else {
          p2 += mult(val, id);
          console.log(p2);
          $$('#p2').html(p2);
        }
      })
    })
  }
  changeSelect();


})
// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="about"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  console.log(e);
})

