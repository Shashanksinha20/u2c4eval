// write js code here corresponding to matches.html
var tbody = document.querySelector('tbody');
var matches  = JSON.parse(localStorage.getItem('schedule'));

var arrFav = JSON.parse(localStorage.getItem('favourites')) || []

// console.log(matches);

// var filterArr = []


function filterbyVenue(){
    document.querySelector('tbody').innerHTML = ''
    var filterVenue = document.getElementById('filterVenue').value;
    console.log(filterVenue);
    if(filterVenue !== 'none'){
        var res = matches.filter(el => {
            return el.venue === filterVenue;
        }
        )
    }else{
        res = matches;
    }
    displayData(res);
}

// console.log(res);


displayData(matches) 


function displayData(data){

    data.forEach(element => {

        var row = document.createElement('tr');

        var td1 = document.createElement('td');
        td1.innerText = element.matchNumber


        var td2 = document.createElement('td');
        td2.innerText = element.teamA


        var td3 = document.createElement('td');
        td3.innerText = element.teamB


        var td4 = document.createElement('td');
        td4.innerText = element.date


        var td5 = document.createElement('td');
        td5.innerText = element.venue


        var td6 = document.createElement('td');
        td6.innerText = 'Add as Favourites'
        td6.style.color = 'green'
        td6.style.cursor = 'pointer'
        td6.addEventListener('click', function(event){
            event.preventDefault();
            var obj = {
                matchNo : element.matchNumber,
                teamA : element.teamA,
                teamB : element.teamB,
                date : element.date,
                venue : element.venue
            }
            arrFav.push(obj)
            localStorage.setItem('favourites', JSON.stringify(arrFav))

        })


        row.append(td1, td2, td3, td4, td5, td6)
        tbody.append(row);
        
    });

}



// localStorage.setItem('venue', filterVenue);