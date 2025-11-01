import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema:
    "https://eu-west-2.cdn.hygraph.com/content/cmhd9jw3y00x807uq4v9zfesn/master",
  documents: ["lib/queries.ts"],
  generates: {
    "./lib/generated/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
