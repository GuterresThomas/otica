const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");


let idx = 0;

function carrossel (){
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }

    const containerWidth = imgs.offsetWidth;
    imgs.style.transform = `translateX(${-idx * containerWidth}px)`;

}

setInterval(carrossel, 5000);

document.addEventListener('DOMContentLoaded', function() {
    var modelosBotao = document.querySelector('.modelos a');
  
    modelosBotao.addEventListener('click', function(e) {
      e.preventDefault();
  
      var modelosSecao = document.getElementById('modelos-baixo');
  
      modelosSecao.scrollIntoView({
        behavior: 'smooth'
      });
    });
  })
  
document.addEventListener('DOMContentLoaded', function() {
    var modelosBotao = document.querySelector('.sobre a');
  
    modelosBotao.addEventListener('click', function(e) {
      e.preventDefault();
  
      var modelosSecao = document.getElementById('sobre-baixo');
  
      modelosSecao.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });


document.addEventListener('DOMContentLoaded', function() {
    var modelosBotao = document.querySelector('.fale a');
  
    modelosBotao.addEventListener('click', function(e) {
      e.preventDefault();
  
      var modelosSecao = document.getElementById('fale-baixo');
  
      modelosSecao.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var modelosBotao = document.querySelector('.lojass a');
  
    modelosBotao.addEventListener('click', function(e) {
      e.preventDefault();
  
      var modelosSecao = document.getElementById('lojas-baixo');
  
      modelosSecao.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  const bannerContainer = document.querySelector(".banner-container");
  const firstImage = bannerContainer.querySelector("img");
  const clonedImage = firstImage.cloneNode(true);
  bannerContainer.appendChild(clonedImage);
  
  // Calcular a largura total do carrossel
  const carouselWidth = bannerContainer.offsetWidth * 2;
  
  // Definir a largura total do carrossel e iniciar a animação
  bannerContainer.style.width = carouselWidth + "px";
  bannerContainer.style.animationDuration = carouselWidth / 100 + "s";

const bannerContainerHeader = document.querySelector(".banner-container-header");
const firstImageHeader = bannerContainerHeader.querySelector(".carousel-image-header");
const clonedImageHeader = firstImageHeader.cloneNode(true);
bannerContainerHeader.appendChild(clonedImageHeader);

// Calcular a largura total do carrossel
const carouselWidthHeader = bannerContainerHeader.offsetWidth * 2;

// Definir a largura total do carrossel e iniciar a animação
bannerContainerHeader.style.width = carouselWidthHeader + "px";
bannerContainerHeader.style.animationDuration = carouselWidthHeader / 100 + "s";