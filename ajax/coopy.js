
$.ajax({
    
          url: `https://api.rasp.yandex.net/v3.0/copyright/?apikey=${apikey}`,
          success: function(data) { 
            src = data.copyright.url
            logo = data.copyright.logo_hm
            text = data.copyright.text
            console.log(data)
            $(`#copy`).append(`<div>${logo}</div><a href="${src}">Яндекс.Расписание</a>
<p>${text}</p>`)
            findSrc = $('iframe').attr("src")
            logoSrc = "https:"+findSrc
            $('iframe').attr("src",`${logoSrc}`)
        }
})