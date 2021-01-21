class Form{
    constructor(){

    }
    display(){
        var title= createElement("h2")
        title.html("Car Racing Games")
        title.position(displayWidth/2-80,0)
        var input=createInput("name")
        var button =createButton("Play")
        var greeting=createElement("h3")
        input.position(displayWidth/8,displayHeight/6)
        button.position(displayWidth/8,displayHeight/5)

        button.mousePressed(function () {
            input.hide()
            button.hide()

            var name=input.value()
            playerCount+=1
            player.index=playerCount
            player.update(name)
            player.updateCount(playerCount)

            greeting.html("Hello " + name)
            greeting.position(displayWidth/2,displayHeight/4)
            
        })
    }

}