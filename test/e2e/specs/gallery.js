module.exports = {
  'gallery': function (browser) {
    browser
    .url('http://localhost:8080/examples/gallery/')
      .waitForElementVisible('#app', 1000)
      .assert.elementNotPresent('.vgs')
      .waitFor(500)
      .keys([browser.Keys.RIGHT_ARROW], () => {
        browser.assert.elementNotPresent('.vgs')
      })
      .waitFor(500)
      .click('img:nth-child(1)')
      .waitFor(500)
      .assert.elementPresent('.vgs')
      .assert.cssClassPresent('.vgs__gallery__container__img:nth-child(1)', 'vgs__gallery__container__img--active')
      .assert.cssClassNotPresent('.vgs__gallery__container__img:nth-child(2)', 'vgs__gallery__container__img--active')
      .assert.containsText('.vgs__gallery__title', '1 / 10')
      .click('.vgs__next')
      .waitFor(500)
      .assert.cssClassPresent('.vgs__gallery__container__img:nth-child(2)', 'vgs__gallery__container__img--active')
      .assert.containsText('.vgs__gallery__title', '2 / 10')
      .click('.vgs__container__img')
      .waitFor(500)
      .assert.cssClassPresent('.vgs__gallery__container__img:nth-child(3)', 'vgs__gallery__container__img--active')
      .assert.containsText('.vgs__gallery__title', '3 / 10')
      .click('.vgs__prev')
      .waitFor(500)
      .assert.cssClassPresent('.vgs__gallery__container__img:nth-child(2)', 'vgs__gallery__container__img--active')
      .assert.containsText('.vgs__gallery__title', '2 / 10')
      .click('.vgs__gallery__container__img:nth-child(4)')
      .waitFor(500)
      .assert.cssClassPresent('.vgs__gallery__container__img:nth-child(4)', 'vgs__gallery__container__img--active')
      .assert.containsText('.vgs__gallery__title', '4 / 10')
      .waitFor(500)
      // .keys([browser.Keys.RIGHT_ARROW], () => {
      //   browser.assert.containsText('.vgs__gallery__title', '5 / 10')
      // })
      .click('.vgs__close')
      .waitFor(500)
      .assert.elementNotPresent('.vgs')
      .end()
  },
  // TODO: Fix key events
  // 'gallery closes with esc': function (browser) {
  //   browser
  //   .url('http://localhost:8080/examples/gallery/')
  //     .waitForElementVisible('#app', 1000)
  //     .waitFor(500)
  //     .click('img:nth-child(1)')
  //     .waitFor(500)
  //     .assert.elementPresent('.vgs')
  //     .keys(browser.Keys.ESC)
  //     .waitFor(500)
  //     .assert.elementNotPresent('.vgs')
  //     .end()
  // }
}
