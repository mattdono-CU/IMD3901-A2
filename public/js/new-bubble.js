AFRAME.registerComponent('new-bubble', {
    schema: {},
    init : function() {
        //set component context to button
        const Context_AF    = this;
        //Sound A: played when there are available objects in the Pool
        Context_AF.soundA   = document.querySelector('#button-true');
        //Sound B: played when all objects in the Pool are in use
        Context_AF.soundB   = document.querySelector('#button-false');

        const Pool        = this.el.sceneEl.components.pool__bubbles;
        
        let Pool_size     = 10;
        let Pool_used     = 0;

        Context_AF.el.addEventListener('click', function(event) {
            console.log("button clicked");
            console.log("Available Bubbles: " + (Pool_size - Pool_used));

            if (Pool_used < Pool_size) {
                //stop playing sounds, play Ssound A
                Context_AF.soundA.components['sound'].stopSound();
                Context_AF.soundB.components['sound'].stopSound();
                Context_AF.soundA.components['sound'].playSound();
                //request new bubble from Pool
                requestBubble();
                //increment number of used objects in Pool
                Pool_used++;
            } else {
                //stop playing sounds, play Sound B
                Context_AF.soundA.components['sound'].stopSound();
                Context_AF.soundB.components['sound'].stopSound();
                Context_AF.soundB.components['sound'].playSound()
                //decrement number of used objects in Pool
            }
        });
    },
    requestBubble : function() {
        const Context_AF = this;

        let el = sceneEl.components.pool__bubbles.requestEntity();
    }
});