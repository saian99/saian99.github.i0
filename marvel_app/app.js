$(() => {
  console.log($);
const link = "https://rickandmortyapi.com/api/character/"

$.ajax({
  Url: link,
  type: 'GET',
}). then(reports => {
  console.log(reports);
})
.catch(err=>{
  console.log(eer);
})
})
