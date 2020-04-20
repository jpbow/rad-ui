import { Component, h } from "@stencil/core";

@Component({
  tag: "rad-loading-dots",
  styleUrl: "rad-loading-dots.scss",
  shadow: true,
})
export class RadLoadingDots {
  render() {
    return (
      <span>
        <span />
        <span />
        <span />
      </span>
    );
  }
}
