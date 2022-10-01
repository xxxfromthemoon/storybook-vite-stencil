import type { StorybookViteConfig } from "@storybook/builder-vite";
import { mergeConfig } from "vite";
import babel from "vite-plugin-babel";

const config: StorybookViteConfig = {
  stories: [
    `${__dirname}/../packages/stencil/src/**/*.stories.@(js|jsx|ts|tsx|md|mdx)`.replace(
      /\\/g,
      "/"
    ),
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  staticDirs: ["../packages/core/src/assets"],
  framework: "@storybook/web-components",
  core: {
    builder: "@storybook/builder-vite",
  },
  async viteFinal(config: Record<string, any>) {
    return mergeConfig(config, {
      plugins: [
        babel({
          babelConfig: {
            babelrc: false,
            plugins: [
              "@babel/plugin-syntax-jsx",
              [
                "@babel/plugin-transform-react-jsx",
                {
                  runtime: "automatic",
                  importSource: "jsx-dom",
                },
              ],
            ],
          },
        }),
      ],
    });
  },
};

export default config;
