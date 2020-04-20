import { newE2EPage } from '@stencil/core/testing';

describe('rad-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rad-button></rad-button>');

    const element = await page.find('rad-button');
    expect(element).toHaveClass('hydrated');
  });
});
