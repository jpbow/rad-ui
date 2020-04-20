import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "rad-button",
  styleUrl: "rad-button.scss",
  shadow: true,
})
export class RadButton {
  @Prop() color: "primary" | "secondary" | "transparent" | "success";
  @Prop() disabled: boolean;
  @Prop() fullWidth: boolean;
  @Prop() loading: boolean;
  @Prop() width: number;
  @Prop() shadow: boolean;
  @Prop() size: "medium" | "small";
  @Prop() type: string = "button";

  render() {
    return (
      <button
        class={{
          disabled: this.disabled,
          "full-width": this.fullWidth,
          loading: this.loading,
          medium: this.size === "medium",
          secondary: this.color === "secondary",
          shadow: this.shadow,
          success: this.color === "success",
          small: this.size === "small",
          transparent: this.color === "transparent",
        }}
        disabled={this.disabled || this.loading}
        type={this.type}
      >
        {this.loading ? (
          <rad-loading-dots />
        ) : (
          [
            <span class="icon start">
              <slot name="icon-start" />
            </span>,
            <slot />,
            <span class="icon end">
              <slot name="icon-end" />
            </span>,
          ]
        )}
      </button>
    );
  }
}
