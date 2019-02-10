let numBubbles = 0

AFRAME.registerComponent('new-bubble', {
    schema: {},
    init : function () {
        //set component context to button
        const Context_AF = this;
        
        Context_AF.soundElA = document.querySelector('#button-true');
        Context_AF.soundElB = document.querySelector('#button-false');
        Context_AF.soundElC = document.querySelector('#button-false');

        Context_AF.el.addEventListener('click', function(event) {
            console.log("<BUTTON>");

            if (numBubbles < 10) {
                //stop playing sounds, play Ssound A
                Context_AF.soundElA.components['sound'].stopSound();
                Context_AF.soundElA.components['sound'].playSound();
                
                //create new bubble
                Context_AF.createBubble();
            } else {
                //stop playing sounds, play Sound B
                Context_AF.soundElB.components['sound'].stopSound();
                Context_AF.soundElB.components['sound'].playSound()
            }
        });
    },
    createBubble : function() {
        const Context_AF = this;
        
        let bubbleEl = document.createElement('a-entity');
        
        bubbleEl.setAttribute('mixin', 'mBubble');
        bubbleEl.setAttribute('position', {x: 0, y: 2, z: -4});
        //bubbleEl.setAttribute('material', {color:});
        
        let container = document.querySelector('#bubbleBin');
        container.appendChild(bubbleEl);       
    }
});