import { newSpecPage } from '@stencil/core/testing';
import { RadLoadingDots } from './rad-loading-dots';

describe('rad-loading-dots', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RadLoadingDots],
      html: `<rad-loading-dots></rad-loading-dots>`,
    });
    expect(page.root).toEqualHtml(`
      <rad-loading-dots>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rad-loading-dots>
    `);
  });
});
