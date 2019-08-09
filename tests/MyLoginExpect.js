module.exports={

'BDD Expect' : function(client){
    client
    .url("http://localhost:8888/login");
    client.expect.element("input[name=user_name]").to.be.present;
    client.expect.element("input[name=password]").to.be.present;
    client.expect.element("input[type=submit]").to.be.present;
    client.click("input[type=submit]");
    client.expect.element("#errormessage").text.to.contain("User name or password is not correct.");
}

}