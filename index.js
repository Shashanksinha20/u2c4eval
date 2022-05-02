// write js code here corresponding to index.html
// You should add submit event on the form
var form = document.getElementById('masaiForm')
var masaiLeague = JSON.parse(localStorage.getItem('schedule')) || []

form.addEventListener('submit', function(event){
    event.preventDefault()
    var obj = {
        matchNumber : form.matchNum.value,
        teamA : form.teamA.value,
        teamB : form.teamB.value,
        date : form.date.value,
        venue : form.venue.value
    }
    masaiLeague.push(obj);
    localStorage.setItem('schedule', JSON.stringify(masaiLeague));
    window.location.reload();
})