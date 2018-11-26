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
$('#out').addClass('active')
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
$('#come').addClass('active')
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

