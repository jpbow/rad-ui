import { newSpecPage } from '@stencil/core/testing';
import { RadInput } from './rad-input';

describe('rad-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RadInput],
      html: `<rad-input></rad-input>`,
    });
    expect(page.root).toEqualHtml(`
      <rad-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rad-input>
    `);
  });
});
