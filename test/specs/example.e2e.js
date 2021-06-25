describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`);

        await (await $('#username')).setValue('tomsmith');
        await (await $('#password')).setValue('SuperSecretPassword!');
        await (await $('button[type="submit"]')).click();

        await expect($('#flash')).toBeExisting();
        await expect($('#flash')).toHaveTextContaining(
            'You logged into a secure area!');
    });
});

