$(() => {
  let currentImgIndex = 0
  const numOfImages = $('.carousel-images').children().length - 1;

  $('.next').on('click', () => {

    $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')
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

  $('.info').on('click', event => {
    event.preventDefault()
    console.log(newData);

    let name = $(event.target).attr('id')
  console.log(name);

})

const link = `https://rickandmortyapi.com/api/character/`
const newData = null;

$.ajax({
  url: link,
  type: 'GET'
}).then(xavier => {
  console.log(xavier);
  return xavier;
})
.catch(err=>{
  console.log(err);
})


})
