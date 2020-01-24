describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have loading screen', async () => {
    // await new Promise((resolve) => setTimeout(() => resolve(), 10000))
    await expect(element(by.id('LoadingViewContainer'))).toBeVisible();
  });

  // it('should show hello screen after tap', async () => {
  //   await element(by.id('hello_button')).tap();
  //   await expect(element(by.text('Hello!!!'))).toBeVisible();
  // });

  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
});
