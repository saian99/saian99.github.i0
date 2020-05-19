$( async () => {
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
    let name = $(event.target).attr('id')
  console.log(name);


    // console.log(newData);
    const specificCharactor = newData.filter(object => object.name == name)
    console.log(specificCharactor);
    // console.log(newData);
    const bio = document.createElement('div')
    // bio.addClass('bio')
    bio.innerText = specificCharactor[0].episode;
    console.log(bio);

    $('.bottomContainer').append(bio)
})



const link = `https://rickandmortyapi.com/api/character/`
const newData = await $.ajax({
  url: link,
  type: 'GET'
}).then(xavier => {
  return xavier.results;
})
.catch(err=>{
  console.log(err);
})


})
