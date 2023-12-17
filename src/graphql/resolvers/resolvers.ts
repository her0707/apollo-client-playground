import { mergeResolvers } from "@graphql-tools/merge";
import { articleResolvers } from "./article.resolver";

export default mergeResolvers([articleResolvers]);
