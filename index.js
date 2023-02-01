//the function "randomFunction" exists somehwere else
function receivesAFunction(randomFunction){
    randomFunction();
}

//we create the function within the function
function returnsANamedFunction(){
    return function aRandomFunction(){
    
    }
}

function returnsAnAnonymousFunction(){
    return ()=> [];
}