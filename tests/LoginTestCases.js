module.exports= {

    'login page intial render': function(browser){

        var login = browser.page.LoginObject();
        login.navigate()
        .waitForElementVisible('body',1000)
        .assert.elementPresent('@username')
        .verify.visible('@password')
        .verify.value('@submit','Login')
        .click('@submit')
        .assert.containsText('@error','User name or password is not correct.')
        .end()
    }








};