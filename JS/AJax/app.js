var links = document.querySelectorAll('.meteo')
var result = document.getElementById('result')
for (var i = 0; i < links.length; i++) {
    var link = links[i]
    link.addEventListener('click',
        function(e) {
            e.preventDefault()
            result.innerHTML = 'Chargement...'
            var httpRequest = new XMLHttpRequest()
            httpRequest.onreadystatechange = function() {
                //debugger
                if (httpRequest.readyState === 4) {

                    if (httpRequest.status === 200) {
                        result.innerHTML = httpRequest.responseText

                        // JSON 

                        /*
                        var results = Json.parse(httRequest.responseText)
                        result.innerHTML = ''
                        var ul = document.createElement('ul')
                        result.appendChild(ul)
                        for (var i = 0 ; i<results.length;i++){
                            var li = document.createElement('li')
                            li.innerHTML = results[i].name
                            ul.appendChild(li)
                        }
                        */
                    } else {
                        alert('Impossible de Contacter le serveur')
                    }
                }
            }
            httpRequest.open('GET', this.getAttribute('href'), true)

            httpRequest.send()

            return

        })
}

// Utiliser jsonPlaceholder pour faire les series de Test avec des documents Json

// POST 
/*
form = document.getElementById('form')
httpRequest.open('POST', '/demo.php', true)
data = new FormData() // joindre les donnees d'un formulaire en precisant leur nom
httpRequest.send(data)
result.innerHTML = httpRequest.responseText*/