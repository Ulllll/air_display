
const baseUrl = 'https://api.rasp.yandex.net/v3.0/schedule/?'
const apikey = 'b1f9bae6-848a-42a1-b7cd-3b9790ac360f'
var oneElement
$.ajax({
    
          url: `${baseUrl}apikey=${apikey}&station=s9600213&transport_type=plane`,
          success: function(data) {
            oneElement = [
                fromTo=data.schedule.[0].days,
                nameCompany=data.schedule.0.thread.title,
                fromTo=data.schedule.0.days
                ]
            console.log(data)
          }
        })
