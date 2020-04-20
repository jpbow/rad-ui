import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "rad-input",
  styleUrl: "rad-input.scss",
  shadow: true,
})
export class RadInput {
  @Prop() disabled: boolean;

  render() {
    return (
      <div class="wrapper">
        <div class="input-wrapper">
          <input />
        </div>
      </div>
    );
  }
}
