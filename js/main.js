
(() => {
  
  const model = document.querySelector("#divij_buds");
  const buds = document.querySelectorAll(".button");


  //there is two earbuds,so each earbud have a specific hotspot
  const infoBoxes = [
    { title: 'play/pause button',
      text: 'The play/pause button on earbuds lets you start or stop your music or videos with just a tap. It’s a simple way to control your audio without needing to touch your phone. Some earbuds also use this button to answer calls or activate voice assistants.', 
      image: 'images/play_.png' },
    { title: 'soft buds', 
      text: 'Soft ear buds are gentle on the ear canal, preventing irritation and reducing the risk of injury. They clean earwax safely without pushing it deeper, which helps avoid blockages or discomfort.', 
      image: 'images/hear.png' },
    { title: 'Charging port', 
      text: 'The charging port on earphones is where you plug in the charger to power them. It keeps the earphones charged and ready for use.', 
      image: 'images/battery.png' },
    { title: 'sleek body design', 
      text: 'The sleek design of earbuds is compact and stylish, with smooth curves and a lightweight build. This minimalist look ensures they fit comfortably and discreetly, making them perfect for everyday use and easy to carry around.', 
      image: 'images/smile.png' },

  ];

  
  function loadInfo() {
    infoBoxes.forEach((infoBox, index) => {
      let selected = document.querySelector(`#button-${index + 1}`);

      const buttonTitle = document.createElement('h2');
      buttonTitle.textContent = infoBox.title;
      
      const buttonImage = document.createElement('img');
      buttonImage.src = infoBox.image;
      buttonImage.style.width = "100%";

      const buttonText = document.createElement('p');
      buttonText.textContent = infoBox.text;

      
    
      selected.appendChild(buttonTitle);
      selected.appendChild(buttonText);
      selected.appendChild(buttonImage);


    });
  }

  

  function modelLoaded() {
    loadInfo();
  }

  function showInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

 
  function hideInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }


  model.addEventListener("load", modelLoaded);

  buds.forEach(function (bud, index) {
    bud.slot = `hotspot-${index + 1}`;

    bud.addEventListener("mouseenter", showInfo);
    bud.addEventListener("mouseleave", hideInfo);
  });
})();

//earbud scroll animation

(() => {
  const canvas = document.querySelector("#explode-view");
  const ctx = canvas.getContext("2d");

  canvas.width = 1920;
  canvas.height = 1080;

  const frameCount = 76; 
  const images = []; 

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = `images/case_solo${(i + 1).toString().padStart(4, '0')}.webp`;
    images.push(img);
  }

  const buds = { frame: 0 };

  gsap.to(buds, {
    frame: frameCount - 1,
    snap: "frame",
    scrollTrigger: { 
      trigger: "#explode-view",
      pin: true,
      scrub: 2,
    },
    onUpdate: render
  });

 
  images[0].addEventListener("load", render);


  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(images[buds.frame], 0, 0);
  }
})();

//xray

(() => {
  const divisor = document.querySelector("#divisor");
  const slider = document.querySelector("#slider");

  function moveDivisor() {
    console.log(slider.value);
    
    divisor.style.width = `${slider.value}%`;
  }

  slider.addEventListener("input", moveDivisor);
})();











