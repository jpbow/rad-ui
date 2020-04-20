import { newE2EPage } from '@stencil/core/testing';

describe('rad-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rad-input></rad-input>');

    const element = await page.find('rad-input');
    expect(element).toHaveClass('hydrated');
  });
});
