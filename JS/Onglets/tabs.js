(function() {
    var afficher = function(a, animations) {
        var divParent = a.parentNode.parentNode.parentNode
        var li = a.parentNode
        if (li.classList.contains('active')) {
            return false
        }
        // retirer la classe active sur le lien actuel
        divParent.querySelector('.tabs .active').classList.remove('active')
            //remplacer la classe active sur le lien clique
        li.classList.add('active')

        // retirer active sur l'onglet qu'il est
        //divParent.querySelector('.tab-content.active').classList.remove('active')
        //divParent.querySelector('' + a.getAttribute('href') + '').classList.add('active')

        var activeTab = divParent.querySelector('.tab-content.active');
        var aAfficher = divParent.querySelector('' + a.getAttribute('href') + '')

        if (animations) {

            activeTab.classList.add('fade')
            activeTab.classList.remove('in')
            var transitionend = function(e) {
                this.classList.remove('active')
                this.classList.remove('fade')
                aAfficher.classList.add('active')
                aAfficher.classList.add('fade')
                aAfficher.offsetWidth
                aAfficher.classList.add('in')
                activeTab.removeEventListener('transitionend', transitionend)
            }
            activeTab.addEventListener('transitionend', transitionend)
        } else {

            activeTab.classList.remove('active')
            aAfficher.classList.add('active')
        }



    }

    var tabs = document.querySelectorAll('.tabs a')

    for (var i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click',
            function(e) {
                afficher(this, true)
                    /*                 var divParent = this.parentNode.parentNode.parentNode
                             var li = this.parentNode
                             if (li.classList.contains('active')) {
                                 return false
                             }
                             // retirer la classe active sur le lien actuel
                             divParent.querySelector('.tabs .active').classList.remove('active')
                                 //remplacer la classe active sur le lien clique
                             li.classList.add('active')
 
                             // retirer active sur l'onglet qu'il est
                             divParent.querySelector('.tab-content.active').classList.remove('active')
 
                             divParent.querySelector('' + this.getAttribute('href') + '').classList.add('active')
 
                            */
            })
    }



    var hashChange = function() {
        var hash = window.location.hash
        var a = document.querySelector('a[href= "' + hash + '"]')

        if (a !== null && !a.parentNode.classList.contains('active')) {
            afficher(a, false)
        }
    }
    window.addEventListener('hashchange', hashChange)
    hashChange()
})()