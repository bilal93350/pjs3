/**
 * Created by mohamed on 22/12/2016.
 */

var map = document.querySelector('#map')

var paths = map.querySelectorAll('.map__image a')

var links = map.querySelectorAll('.map__list a')

//Polyfill = rendre le foreach

if(NodeList.prototype.forEach === undefined){
    NodeList.prototype.forEach  = function (callback){
        [].forEach.call(this,callback)
    }
}

var removeSelectedItems= function(){
    map.querySelectorAll('.is-active').forEach((function (item) {
        item.classList.remove(('is-active'))
    }))
}

paths.forEach(function(path){
    
    path.addEventListener('mouseenter',function (e) {
        var ids = this.id.replace('region-','')

        removeSelectedItems()


        document.querySelector('#list-'+ids).classList.add('is-active')
        document.querySelector('#region-'+ids).classList.add('is-active')


    })
})

links.forEach(function(link){

    link.addEventListener('mouseenter',function () {
        var ids = this.id.replace('list-','')

        removeSelectedItems()

        document.querySelector('#list-'+ids).classList.add('is-active')
        document.querySelector('#region-'+ids).classList.add('is-active')


    })
})

map.addEventListener('mouseover',function(){
    removeSelectedItems()
})