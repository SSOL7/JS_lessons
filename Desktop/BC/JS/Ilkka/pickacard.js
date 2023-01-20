`use strict`;

(function(){
    let card;

    document.addEventListener('DOMContentLoaded', init);

    function init(){
        card = document.getElementById('#card');
        document.getElementById('pick').addEventListener('click', update);
    }

    function update(){
        const suite = Math.floor(Math.random()*4);
        const rank = Math.floor(Math.random()*13)+1;

        let suite_symbol;

        switch(suite){
            case 0:
                suite_symbol = '♠';
                break;
            case 1:
                suite_symbol = '♥';
                break;
            case 2:
                suite_symbol = '♦';
                break;
            case 3:
                suite_symbol = '♣';
                break;
        }
    }

        

})();