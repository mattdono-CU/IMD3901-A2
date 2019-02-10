AFRAME.registerComponent('delete-component', {
    schema: {},
    init : function() {
        const Context_AF = this;

        Context_AF.soundEl = document.querySelector('#bubble-pop');

        Context_AF.el.addEventListener('click', function(event) {
            console.log("<POP>");
            
            Context_AF.soundEl.components['sound'].stopSound();
            Context_AF.soundEl.components['sound'].playSound();
            
            Context_AF.deleteSelf();
        });
    },
    deleteSelf : function() {
        const Context_AF = this;
        
        Context_AF.el.parentNode.removeChild(Context_AF.el);
    }
});