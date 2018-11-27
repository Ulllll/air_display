function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }

const baseUrl = 'https://api.rasp.yandex.net/v3.0/schedule/?'
const apikey = 'b1f9bae6-848a-42a1-b7cd-3b9790ac360f'
var k=[]
Data = new Date();
dateNow=Data.getFullYear()+'-'+ (Data.getMonth()+1)+'-'+Data.getDate();
$(document).on('click', '#out', function(){
    $('#go').remove()
$('main').append(`<section id=\'go\'></section>`)
$('#go').append(`<article id=\'table_name\'><p>Рейс</p><p>Время отправления</p><p>Компания перевозчик</p><p>Номер рейса</p></article>`)
$('#come').removeClass('active')
$('#delay').removeClass('active')
$('#out').addClass('active')


//запрос на вылетающие рейсы
$.ajax({
    
          url: `${baseUrl}apikey=${apikey}&station=s9600213&transport_type=plane&event=departure&data=${dateNow}&limit=2200`,
          success: function(data) { 
            t1=data.pagination.limit
            t2=data.pagination.total
            if(t1>=t2){
                total=t2
                    }
              else total=t1
            for(i=0;i<total;i++)
            {   
                $('#go').append(`<article id=\'goArticle${i}\'></article>`)
                time=data.schedule[i].departure
                hour = time.substring(0,2)
                min=time.substring(3)
                hour1=Data.getHours()
                min1=Data.getMinutes()
                if((hour>=hour1)&(min>=min1)){
                oneElement = [
                time,
                company=data.schedule[i].thread.carrier.title,
                fromTo=data.schedule[i].thread.title,
                number=data.schedule[i].thread.number
                ]
                k[i] = number
                if ((k[i] == 0)&(k[i] ==1)){
                    $(`#goArticle${i}`).append(`<p>${fromTo}</p>`)
                    $(`#goArticle${i}`).append(`<p>${time}</p>`)
                    $(`#goArticle${i}`).append(`<p>${company}</p>`)
                    $(`#goArticle${i}`).append(`<p>${number}</p>`)
                }
                if((k[i]!=k[i-1])&(k[i]!=k[i-2])){
                    $(`#goArticle${i}`).append(`<p>${fromTo}</p>`)
                    $(`#goArticle${i}`).append(`<p>${time}</p>`)
                    $(`#goArticle${i}`).append(`<p>${company}</p>`)
                    $(`#goArticle${i}`).append(`<p>${number}</p>`)
                }
                }
                
            
            }
          }
        })
})
$(document).on('click', '#come', function(){
$('#go').remove()
$('main').append(`<section id=\'go\'></section>`)
$('#go').append(`<article id=\'table_name\'><p>Рейс</p><p>Время прибытия</p><p>Компания перевозчик</p><p>Номер рейса</p></article>`)
$('#out').removeClass('active')
$('#delay').removeClass('active')
$('#come').addClass('active')

//запрос на прилетающие рейсы

$.ajax({
    
          url: `${baseUrl}apikey=${apikey}&station=s9600213&transport_type=plane&event=arrival&limit=2200`,
          success: function(data) { 

            t1=data.pagination.limit
            t2=data.pagination.total
            if(t1>=t2){
                total=t2
                    }
              else total=t1
            for(i=0;i<total;i++)
            {   
                $('#go').append(`<article id=\'goArticle${i}\'></article>`)
                time=data.schedule[i].arrival
                hour = time.substring(0,2)
                min=time.substring(3)
                hour1=Data.getHours()
                min1=Data.getMinutes()
                if((hour>=hour1)&(min>=min1)){
                oneElement = [
                time,
                company=data.schedule[i].thread.carrier.title,
                fromTo=data.schedule[i].thread.title,
                number=data.schedule[i].thread.number
                ]
                k[i] = number
                if ((k[i] == 0)&(k[i] ==1)){
                    $(`#goArticle${i}`).append(`<p>${fromTo}</p>`)
                    $(`#goArticle${i}`).append(`<p>${time}</p>`)
                    $(`#goArticle${i}`).append(`<p>${company}</p>`)
                    $(`#goArticle${i}`).append(`<p>${number}</p>`)
                }
                if((k[i]!=k[i-1])&(k[i]!=k[i-2])){
                    $(`#goArticle${i}`).append(`<p>${fromTo}</p>`)
                    $(`#goArticle${i}`).append(`<p>${time}</p>`)
                    $(`#goArticle${i}`).append(`<p>${company}</p>`)
                    $(`#goArticle${i}`).append(`<p>${number}</p>`)
                }
                }
                
            
            }
          }
        })
})
$(document).on('click', '#delay', function(){
$('#go').remove()
$('main').append(`<section id=\'go\'></section>`)
$('#go').append(`<article id=\'table_name\'><p>Рейс</p><p>Ожидаемое время прибытия</p><p>Компания перевозчик</p><p>Номер рейса</p></article>`)
$('#out').removeClass('active')
$('#come').removeClass('active')
$('#delay').addClass('active')

//запрос на задержанные рейсы

$.ajax({
    
          url: `${baseUrl}apikey=${apikey}&station=s9600213&transport_type=plane&event=departure&limit=2200`,
          success: function(data) { 

            t1=data.pagination.limit
            t2=data.pagination.total
            if(t1>=t2){
                total=t2
                    }
              else total=t1
            for(i=0;i<total;i++)
            {   
                $('#go').append(`<article id=\'goArticle${i}\'></article>`)
                schet=2
                time=data.schedule[i].departure
                hour = time.substring(0,2)
                min=time.substring(3)
                hour1=Data.getHours()
                hour2=Data.getHours()-1
                min1=Data.getMinutes()
                delay = randomInteger(3,40)
                hourDelay=parseInt(hour)
                minDelay=parseInt(min)+delay
                forZero=minDelay.toString()
                if(forZero.length==1){
                    schet=1
                    console.log(time)
                    console.log(forZero.length)
                }
   
                if (minDelay >= 60){
                    hourDelay = parseInt(hourDelay)+1
                    minDelay = parseInt(minDelay)-60
                    forZero=minDelay.toString()
                    if(forZero.length==1){
                    schet=1

                }
                }
                if(schet==1){
                    time = `${hourDelay}:0${minDelay}`
                }
                else time = `${hourDelay}:${minDelay}`
                
                if((hour<=hour1)&(hour>=hour2)&(min>=min1)){
                oneElement = [,
                
                company=data.schedule[i].thread.carrier.title,
                fromTo=data.schedule[i].thread.title,
                number=data.schedule[i].thread.number
                ]
                k[i] = number
                if ((k[i] == 0)&(k[i] ==1)){
                    $(`#goArticle${i}`).append(`<p>${fromTo}</p>`)
                    $(`#goArticle${i}`).append(`<p>${time}</p>`)
                    $(`#goArticle${i}`).append(`<p>${company}</p>`)
                    $(`#goArticle${i}`).append(`<p>${number}</p>`)
                }
                if((k[i]!=k[i-1])&(k[i]!=k[i-2])){
                    $(`#goArticle${i}`).append(`<p>${fromTo}</p>`)
                    $(`#goArticle${i}`).append(`<p>${time}</p>`)
                    $(`#goArticle${i}`).append(`<p>${company}</p>`)
                    $(`#goArticle${i}`).append(`<p>${number}</p>`)
                }
                }
                
            
            }
          }
        })
})
$(document).on('click', 'button', function(){
$('#go').remove()
$('main').append(`<section id=\'go\'></section>`)
val=$('input').val()
val = val.toUpperCase()
console.log(val)
$('#out').removeClass('active')
$('#come').removeClass('active')
$('#delay').removeClass('active')

//поиск рейса

$.ajax({
        
          url: `${baseUrl}apikey=${apikey}&station=s9600213&transport_type=plane&limit=2400`,
          success: function(data) { 
              q=0
              t1=data.pagination.limit
            t2=data.pagination.total
            if(t1>=t2){
                total=t2
                    }
              else total=t1
            for(i=0;i<total;i++)
            {   
                
                if(data.schedule[i].thread.number==val){
                    $('#go').append(`<article id=\'goArticle${i}\'></article>`)
                    console.log('yes')
                    company=data.schedule[i].thread.carrier.title,
                    fromTo=data.schedule[i].thread.title,
                    time=data.schedule[i].departure
                    number=data.schedule[i].thread.number
                    console.log(time)
                    $(`#goArticle${i}`).append(`<p>${fromTo}</p>`)
                    $(`#goArticle${i}`).append(`<p>${time}</p>`)
                    $(`#goArticle${i}`).append(`<p>${company}</p>`)
                    $(`#goArticle${i}`).append(`<p>${number}</p>`)
                    q=1;
                    
                }
            
            }
            if (q==0) {
                $.ajax({
        
          url: `${baseUrl}apikey=${apikey}&station=s9600213&transport_type=plane&limit=2400&event=arrival`,
          success: function(data) { 
              q=0
              t1=data.pagination.limit
            t2=data.pagination.total
            if(t1>=t2){
                total=t2
                    }
              else total=t1
            for(i=0;i<total;i++)
            {   
                
                if(data.schedule[i].thread.number==val){
                    $('#go').append(`<article id=\'goArticle${i}\'></article>`)
                    console.log('yes')
                    company=data.schedule[i].thread.carrier.title,
                    fromTo=data.schedule[i].thread.title,
                    time=data.schedule[i].arrival
                    number=data.schedule[i].thread.number
                    console.log(time)
                    $(`#goArticle${i}`).append(`<p>${fromTo}</p>`)
                    $(`#goArticle${i}`).append(`<p>${time}</p>`)
                    $(`#goArticle${i}`).append(`<p>${company}</p>`)
                    $(`#goArticle${i}`).append(`<p>${number}</p>`)
                    q=1;
                    
                }
            
            }
            if (q==0) {
                
                $('#go').addClass(`start`).append(`<p>К сожалению рейс не найден</p>`)
            }
            }
            })
            }
            }
        })

})