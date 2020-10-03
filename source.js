const transform = (event) => {
        
  event.preventDefault();

  const cssLine = event.target[0].value;

  const cssLineSpan = document.querySelector('#css-line');
  cssLineSpan.append(cssLine);

  const hoverSpan = document.querySelector('#hover');

  const focusSpan = document.querySelector('#focus');

  const activeSpan = document.querySelector('#active');

  // Breakpoints
  
  // SM
  const smCssLineSpan = document.querySelector('#sm-css-line');
  smCssLineSpan.append('.sm\\:' + cssLine.replace('.', ''));

  const smHoverCssLineSpan = document.querySelector('#sm-hover');
  const smFocusCssLineSpan = document.querySelector('#sm-focus');
  const smActiveCssLineSpan = document.querySelector('#sm-active');

  // MD
  const mdCssLineSpan = document.querySelector('#md-css-line');
  mdCssLineSpan.append('.md\\:' + cssLine.replace('.', ''));

  const mdHoverCssLineSpan = document.querySelector('#md-hover');
  const mdFocusCssLineSpan = document.querySelector('#md-focus');
  const mdActiveCssLineSpan = document.querySelector('#md-active');

  // LG
  const lgCssLineSpan = document.querySelector('#lg-css-line');
  lgCssLineSpan.append('.lg\\:' + cssLine.replace('.', ''));

  const lgHoverCssLineSpan = document.querySelector('#lg-hover');
  const lgFocusCssLineSpan = document.querySelector('#lg-focus');
  const lgActiveCssLineSpan = document.querySelector('#lg-active');

  // XL
  const xlCssLineSpan = document.querySelector('#xl-css-line');
  xlCssLineSpan.append('.xl\\:' + cssLine.replace('.', ''));

  const xlHoverCssLineSpan = document.querySelector('#xl-hover');
  const xlFocusCssLineSpan = document.querySelector('#xl-focus');
  const xlActiveCssLineSpan = document.querySelector('#xl-active');



  const hover = () => {
    let cssSelector = cssLine.substr(0,cssLine.indexOf(' '));
    cssSelector = cssSelector.replace('.', '');
    const cssDeclaration = cssLine.substr(cssLine.indexOf(' ') + 1); 
    cssSelector = `.hover\\:${cssSelector}:hover`;
    hoverSpan.append(cssSelector + cssDeclaration);
  }
  hover();

  const focus = () => {
    let cssSelector = cssLine.substr(0,cssLine.indexOf(' '));
    cssSelector = cssSelector.replace('.', '');
    const cssDeclaration = cssLine.substr(cssLine.indexOf(' ') + 1); 
    cssSelector = `.focus\\:${cssSelector}:focus`;
    focusSpan.append(cssSelector + cssDeclaration);
  }
  focus();

  const active = () => {
    let cssSelector = cssLine.substr(0,cssLine.indexOf(' '));
    cssSelector = cssSelector.replace('.', '');
    const cssDeclaration = cssLine.substr(cssLine.indexOf(' ') + 1); 
    cssSelector = `.active\\:${cssSelector}:active`;
    activeSpan.append(cssSelector + cssDeclaration);
  }
  active();


  // Breakpoints

  // SM
  const smHover = () => {
    let cssSelector = cssLine.substr(0,cssLine.indexOf(' '));
    cssSelector = cssSelector.replace('.', '');
    const cssDeclaration = cssLine.substr(cssLine.indexOf(' ') + 1); 
    cssSelector = `.sm\\:hover\\:${cssSelector}:hover`;
    smHoverCssLineSpan.append(cssSelector + cssDeclaration);
  }
  smHover();

  const smFocus = () => {
    let cssSelector = cssLine.substr(0,cssLine.indexOf(' '));
    cssSelector = cssSelector.replace('.', '');
    const cssDeclaration = cssLine.substr(cssLine.indexOf(' ') + 1); 
    cssSelector = `.sm\\:focus\\:${cssSelector}:focus`;
    smFocusCssLineSpan.append(cssSelector + cssDeclaration);
  }
  smFocus();

  const smActive = () => {
    let cssSelector = cssLine.substr(0,cssLine.indexOf(' '));
    cssSelector = cssSelector.replace('.', '');
    const cssDeclaration = cssLine.substr(cssLine.indexOf(' ') + 1); 
    cssSelector = `.sm\\:active\\:${cssSelector}:active`;
    smActiveCssLineSpan.append(cssSelector + cssDeclaration);
  }
  smActive();


  // MD
  const mdHover = () => {
    let cssSelector = cssLine.substr(0,cssLine.indexOf(' '));
    cssSelector = cssSelector.replace('.', '');
    const cssDeclaration = cssLine.substr(cssLine.indexOf(' ') + 1); 
    cssSelector = `.md\\:hover\\:${cssSelector}:hover`;
    mdHoverCssLineSpan.append(cssSelector + cssDeclaration);
  }
  mdHover();

  const mdFocus = () => {
    let cssSelector = cssLine.substr(0,cssLine.indexOf(' '));
    cssSelector = cssSelector.replace('.', '');
    const cssDeclaration = cssLine.substr(cssLine.indexOf(' ') + 1); 
    cssSelector = `.md\\:focus\\:${cssSelector}:focus`;
    mdFocusCssLineSpan.append(cssSelector + cssDeclaration);
  }
  mdFocus();

  const mdActive = () => {
    let cssSelector = cssLine.substr(0,cssLine.indexOf(' '));
    cssSelector = cssSelector.replace('.', '');
    const cssDeclaration = cssLine.substr(cssLine.indexOf(' ') + 1); 
    cssSelector = `.md\\:active\\:${cssSelector}:active`;
    mdActiveCssLineSpan.append(cssSelector + cssDeclaration);
  }
  mdActive();


  // LG
  const lgHover = () => {
    let cssSelector = cssLine.substr(0,cssLine.indexOf(' '));
    cssSelector = cssSelector.replace('.', '');
    const cssDeclaration = cssLine.substr(cssLine.indexOf(' ') + 1); 
    cssSelector = `.lg\\:hover\\:${cssSelector}:hover`;
    lgHoverCssLineSpan.append(cssSelector + cssDeclaration);
  }
  lgHover();

  const lgFocus = () => {
    let cssSelector = cssLine.substr(0,cssLine.indexOf(' '));
    cssSelector = cssSelector.replace('.', '');
    const cssDeclaration = cssLine.substr(cssLine.indexOf(' ') + 1); 
    cssSelector = `.lg\\:focus\\:${cssSelector}:focus`;
    lgFocusCssLineSpan.append(cssSelector + cssDeclaration);
  }
  lgFocus();

  const lgActive = () => {
    let cssSelector = cssLine.substr(0,cssLine.indexOf(' '));
    cssSelector = cssSelector.replace('.', '');
    const cssDeclaration = cssLine.substr(cssLine.indexOf(' ') + 1); 
    cssSelector = `.lg\\:active\\:${cssSelector}:active`;
    lgActiveCssLineSpan.append(cssSelector + cssDeclaration);
  }
  lgActive();


  // XL
  const xlHover = () => {
    let cssSelector = cssLine.substr(0,cssLine.indexOf(' '));
    cssSelector = cssSelector.replace('.', '');
    const cssDeclaration = cssLine.substr(cssLine.indexOf(' ') + 1); 
    cssSelector = `.xl\\:hover\\:${cssSelector}:hover`;
    xlHoverCssLineSpan.append(cssSelector + cssDeclaration);
  }
  xlHover();

  const xlFocus = () => {
    let cssSelector = cssLine.substr(0,cssLine.indexOf(' '));
    cssSelector = cssSelector.replace('.', '');
    const cssDeclaration = cssLine.substr(cssLine.indexOf(' ') + 1); 
    cssSelector = `.xl\\:focus\\:${cssSelector}:focus`;
    xlFocusCssLineSpan.append(cssSelector + cssDeclaration);
  }
  xlFocus();

  const xlActive = () => {
    let cssSelector = cssLine.substr(0,cssLine.indexOf(' '));
    cssSelector = cssSelector.replace('.', '');
    const cssDeclaration = cssLine.substr(cssLine.indexOf(' ') + 1); 
    cssSelector = `.xl\\:active\\:${cssSelector}:active`;
    xlActiveCssLineSpan.append(cssSelector + cssDeclaration);
  }
  xlActive();

}