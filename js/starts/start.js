var intro;'spanish'===localStorage.getItem('language')?($('[data-translate]').jqTranslate('json/index',{defaultLang:'en',forceLang:'es',asyncLangLoad:!1}),document.getElementById('placeholder').placeholder='Buscar',document.getElementById('suggestions').placeholder='Sugerencias',intro='Consideraciones fundamentales antes de ir, iniciar o enviar.'):($('[data-translate]').jqTranslate('json/index',{defaultLang:'es',forceLang:'en',asyncLangLoad:!1}),document.getElementById('placeholder').placeholder='Search',document.getElementById('suggestions').placeholder='Suggestions',intro='Foundational Considerations Before Going, Starting or Sending.'),window.loading_screen=window.pleaseWait({logo:'https://dewey.tailorbrands.com/production/brand_version_mockup_image/374/1615352374_cdb7367a-d0ae-4cae-8e3a-b3bc58b765c6.png?cb=1548269368',backgroundColor:'rgb(128,0,0)',loadingHtml:`<div class='sk-folding-cube'><div class='sk-cube1 sk-cube'></div><div class='sk-cube2 sk-cube'></div><div class='sk-cube4 sk-cube'></div><div class='sk-cube3 sk-cube'></div></div><p class='loading-message' data-translate='intro'>${intro}</p>`}),setTimeout(()=>{window.loading_screen.finish()},4e3);