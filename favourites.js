// write js code here corresponding to favourites.html

var tbody = document.querySelector('tbody')

var fav = JSON.parse(localStorage.getItem('favourites')) ;
console.log(fav);
displayFavourites(fav);

function displayFavourites(info){
    info.forEach((element, index) => {
     
    var row = document.createElement('tr');


    var td1 = document.createElement('td');
    td1.innerText = element.matchNo


    var td2 = document.createElement('td');
    td2.innerText = element.teamA

    var td3 = document.createElement('td');
    td3.innerText = element.teamB



    var td4 = document.createElement('td');
    td4.innerText = element.date


    var td5 = document.createElement('td');
    td5.innerText = element.venue


    var td6 = document.createElement('td');
        td6.innerText = 'Delete'
        td6.style.color = 'red'
        td6.style.cursor = 'pointer'
        td6.addEventListener('click', function(){
            deleteRow(index);
        })
        row.append(td1, td2, td3, td4, td5, td6)
        tbody.append(row);

    });
}

function deleteRow(index)
{
    fav.splice(index,1);
    localStorage.setItem('favourites', JSON.stringify(fav));
    window.location.reload();
}