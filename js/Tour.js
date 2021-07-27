AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards()
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "taj-mahal",
        title: "Taj Mahal",
        url: "./assets/thumbnails/taj_mahal.png",
      },
      {
        id: "budapest",
        title: "Budapest",
        url: "./assets/thumbnails/budapest.jpg",
      },

      {
        id: "eiffel-tower",
        title: "Eiffel Tower",
        url: "./assets/thumbnails/eiffel_tower.jpg",
      },
      {
        id: "new-york-city",
        title: "New York City",
        url: "./assets/thumbnails/new_york_city.png",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.createborder(position,item.id)
      // Thumbnail Element
      const Thumbnail = this.createthumbnail(item)
      borderEl.appendChild(Thumbnail)
      // Title Text Element
      const titleEl=this.createtitle(position,item)
      borderEl.appendChild(titleEl)
      
      this.placesContainer.appendChild(borderEl);
    }
  },
  createborder:function(position,id){
    const entityel=document.createElement('a-entity')
    entityel.setAttribute('id',id)
    entityel.setAttribute('position',position)
    entityel.setAttribute('geometry',{
      primitive:'ring',
      radiusInner:9,radiusOuter:10
    })
    entityel.setAttribute('material',{
      color:'#00bcd4',
      opacity:0.4
    })
    return entityel
  },
  createthumbnail:function(item){
    const entityel=document.createElement('a-entity')
    entityel.setAttribute('visible',true)
    entityel.setAttribute('geometry',{
      primitive:'circle',
      radius:9
    })
    entityel.setAttribute('material',{src:item.url})
    return entityel
  },
  createtitle:function(position,item){
    const entityel=document.createElement('a-entity')
    entityel.setAttribute('text',{
      font:'exo2bold',
      align:'center',
      width:60,
      color:'orange',
      value:item.title
    })
    const elementPosition=position
    elementPosition.y=-20
    entityel.setAttribute('position',elementPosition)
    entityel.setAttribute('visible',true)
    return entityel
  }
});
