const {Builder, By, Key, until} = require('selenium-webdriver');

let driver = new Builder()
    .forBrowser('firefox')
    .build();
//设置地址
driver.get('http://localhost:3000/index/index');
driver
    .findElement(By.id('thumb'))
    .click();
const _animation = driver.findElement(By.id('animation'))
driver.wait(_animation.isDisplayed(), 1000);
// driver.quit(); //为了看到效果将关闭浏览器的行为暂时注释掉
