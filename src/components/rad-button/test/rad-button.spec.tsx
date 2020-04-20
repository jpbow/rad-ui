import { newSpecPage } from '@stencil/core/testing';
import { RadButton } from './rad-button';

describe('rad-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RadButton],
      html: `<rad-button></rad-button>`,
    });
    expect(page.root).toEqualHtml(`
      <rad-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rad-button>
    `);
  });
});
