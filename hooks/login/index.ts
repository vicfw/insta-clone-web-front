export const useSlider = () => {
  if (typeof window !== 'undefined') {
    let slideIndex = 0;
    const imageSlider = () => {
      const images = document.querySelectorAll(
        '.image'
      )! as NodeListOf<HTMLDivElement>;

      let i;

      for (i = 0; i < images.length; i++) {
        images[i].classList.remove('show');
      }

      slideIndex++;

      if (slideIndex > images.length) {
        slideIndex = 1;
      }

      images[slideIndex - 1].classList.add('show');

      setTimeout(imageSlider, 3000);
    };
    imageSlider();
  }

  return {};
};
