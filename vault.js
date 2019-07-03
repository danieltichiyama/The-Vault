'use strict';
module.exports = function() {
  
    let myVault = {};

    function setValue (key, value){
        myVault[key] = value;
        // console.log(myVault);
    };

    function getValue (key){
        if (key ===null){
            return null;
        }
        if (!(key in myVault)){
            return null;
        }
        return myVault[key];

    };


    return {
        setValue: setValue,
        getValue: getValue,
    }
};