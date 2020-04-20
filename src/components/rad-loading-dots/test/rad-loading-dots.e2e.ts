import { newE2EPage } from '@stencil/core/testing';

describe('rad-loading-dots', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rad-loading-dots></rad-loading-dots>');

    const element = await page.find('rad-loading-dots');
    expect(element).toHaveClass('hydrated');
  });
});
