
const baseUrl = 'https://api.rasp.yandex.net/v3.0/schedule/?'
const apikey = 'b1f9bae6-848a-42a1-b7cd-3b9790ac360f'
var k=[]
$.ajax({
    
          url: `${baseUrl}apikey=${apikey}&station=s9600213&transport_type=plane&event=departure`,
          success: function(data) { 
            for(i=0;i<100;i++)
            {   
                $('#go').append(`<article id=\'goArticle${i}\'></article>`)
                oneElement = [
                time=data.schedule[i].departure,
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
        })
