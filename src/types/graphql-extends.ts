import { Node } from './graphql-types';

export interface INode extends Node {
  frontmatter: {
    path: string;
    title: string;
    date: string;
    excerpt: string;
    cover: string;
  };
  fields: {
    slug: string;
  };
}
