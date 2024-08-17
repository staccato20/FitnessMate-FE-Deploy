import type { StorybookConfig } from "@storybook/react-vite"

const config: StorybookConfig = {
  core: {
    builder: "@storybook/builder-vite",
  },
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-viewport",
    "storybook-addon-theme-provider",
    "@storybook/addon-themes",
    "@storybook/addon-storysource",
  ],
  framework: "@storybook/react-vite",
}
export default config
