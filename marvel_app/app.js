$(() => {
  let currentImgIndex = 0
  const numOfImages = $('.carousel-images').children().length - 1;

  $('.next').on('click', () => {
    $('carousel-images').children().eq(currentImgIndex).css('display', 'none')
    if(currentImgIndex < numOfImages) {
      currentImgIndex ++;
    } else {
      currentImgIndex = 0;
    }
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'block')
  })

  $('.previous').on('click', () => {
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')
    if(currentImgIndex > 0) {
      currentImgIndex --;
    } else {
      currentImgIndex = numOfImages
    }
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'block')
  })

  $('.button').on('click', event => {
    event.preventDefault()



  })

//   let character = $(event.target).
// console.log(character);
const link = "https://rickandmortyapi.com/api/character/"

$.ajax({
  url: link,
  type: 'GET'
}).then(reports => {
  console.log(reports);
})
.catch(err=>{
  console.log(err);
})
})
