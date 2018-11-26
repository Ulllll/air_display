
const baseUrl = 'https://api.rasp.yandex.net/v3.0/schedule/?'
const apikey = 'b1f9bae6-848a-42a1-b7cd-3b9790ac360f'
$.ajax({
    
          url: `${baseUrl}apikey=${apikey}&station=s9600213&transport_type=plane&event=departure`,
          success: function(data) {
            oneElement = [
                time=data.schedule[0].departure,
                company=data.schedule[0].thread.carrier.title,
                fromTo=data.schedule[0].thread.title,
                number=data.schedule[0].thread.number
                ]
            console.log(oneElement)
          }
        })
