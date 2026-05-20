// Automatické přenastavení sliderů pro mobilní zobrazení

function adjustSlidersForMobile() {
  const isMobile = window.innerWidth <= 768;
  
  if (isMobile) {
    // Funkce pro nastavení slideru
    function setSlider(functionName, value, labelId) {
      const funcName = functionName.replace('(', '').trim();
      
      // Zavolej funkci
      if (typeof window[funcName] === 'function') {
        try {
          window[funcName](value);
        } catch (e) {
          console.error('Chyba při volání ' + funcName, e);
        }
      }
      
      // Aktualizuj label
      if (labelId) {
        const label = document.getElementById(labelId);
        if (label) {
          label.textContent = value;
        }
      }
    }
    
    // Nastav hodnoty pro všechny samples
    setSlider('updateSize(', 75);
    setSlider('updateSize2(', 60);
    setSlider('updateSize3(', 70);
    setSlider('updateSize4(', 70);
    setSlider('updateSize5(', 70);
    setSlider('updateSize6(', 90);
    setSlider('updateSize7(', 140);
    setSlider('updateSize8(', 130);
    setSlider('updateSize9(', 26, 'sizeLabel9');
    setSlider('updateSize10(', 200);
    setSlider('updateSize11(', 140);
    setSlider('updateSize12(', 26, 'sizeLabel12');
    setSlider('updateSize13(', 120);
    setSlider('updateSize13_1(', 88);
    setSlider('updateSize14(', 70);
    
    // Update slider values so they don't jump when user moves them
    document.querySelectorAll('input.slider').forEach(slider => {
      const oninput = slider.getAttribute('oninput');
      if (!oninput) return;
      if (oninput.includes('updateSize(')) slider.value = 70;
      else if (oninput.includes('updateSize2(')) slider.value = 60;
      else if (oninput.includes('updateSize6(')) slider.value = 90;
      else if (oninput.includes('updateSize7(')) slider.value = 140;
      else if (oninput.includes('updateSize8(')) slider.value = 130;
      else if (oninput.includes('updateSize9(')) slider.value = 26;
      else if (oninput.includes('updateSize10(')) slider.value = 200;
      else if (oninput.includes('updateSize11(')) slider.value = 140;
      else if (oninput.includes('updateSize12(')) slider.value = 26;
      else if (oninput.includes('updateSize13(')) slider.value = 120;
      else if (oninput.includes('updateSize13_1(')) slider.value = 88;
    });
  }
}

// Spustí po načtení stránky s delayem
window.addEventListener('load', function() {
  setTimeout(adjustSlidersForMobile, 1000);
});

// Spustí při změně velikosti okna
let resizeTimer;
window.addEventListener('resize', function() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(adjustSlidersForMobile, 250);
});
