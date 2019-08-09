module.exports={


   

before: function(){
    console.log("starting suite");
},
after: function() {

    console.log("stopping suite");
},



beforeEach: function(){
console.log("starting test");
},
'verify invalid un and pass login is unsuucessful with error message' : function(client){
        var login= client.page.LoginSectionObject();

        login.navigate();

        var logininputsection = login.section.logininput;

        logininputsection.assert.elementPresent('@username');
        logininputsection.assert.elementPresent('@password');
        logininputsection.assert.elementPresent('@submit');
      //  logininputsection.setValue('@username','anagha');
        //logininputsection.click('@username');
        logininputsection.pause(2000);
        //logininputsection.setValue('@password','pass');
        logininputsection.pause(2000);
        logininputsection.click('@submit',function(){

           console.log('---->' +logininputsection.getValue('@username'));
        });
        logininputsection.pause(2000);
        logininputsection.assert.elementPresent('@error');
        logininputsection.assert.containsText('@error','User name or password is not correct.');

    }


}