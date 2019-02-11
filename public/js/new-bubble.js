let MAX_BUBBLES = 10;
let numBubbles   = 0;

AFRAME.registerComponent('new-bubble', {
    schema: {},
    init : function () {
        //set component context to button
        const Context_AF = this;
        
        Context_AF.soundElA = document.querySelector('#button-true');
        Context_AF.soundElB = document.querySelector('#button-false');

        Context_AF.el.addEventListener('click', function(event) {
            //console.log("<button>");

            if (numBubbles < MAX_BUBBLES) {
                //stop playing sounds, play Ssound A
                Context_AF.soundElA.components['sound'].stopSound();
                Context_AF.soundElA.components['sound'].playSound();
                
                //create new bubble
                Context_AF.createBubble();
            } else {
                //stop playing sounds, play Sound B
                Context_AF.soundElB.components['sound'].stopSound();
                Context_AF.soundElB.components['sound'].playSound()
                
                console.log("<bubble limit reached>")
            }
        });
    },
    createBubble : function() {
        const Context_AF = this;
        
        let bubbleEl = document.createElement('a-entity');
        
        bubbleEl.setAttribute('mixin', 'mBubble');
        bubbleEl.setAttribute('position', {x: (Math.random() * 1) - 0.5, y: (Math.random() * 1) + 1.5, z: -3});
        //bubbleEl.setAttribute('material', {color:});
        
        let container = document.querySelector('#bubbleBin');
        container.appendChild(bubbleEl);
        
        numBubbles++;
        console.log("<bubble #: " + numBubbles +">");
    }
});