import { CreateNodeArgs } from 'gatsby';
// import { createFilePath } from 'gatsby-source-filesystem';

exports.onCreateNode = ({ node, getNode, actions }: CreateNodeArgs) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const { date: timestamp } = node.frontmatter as any;
    const date = new Date(timestamp);
    const datePath = date.toISOString().slice(0, 10).replace(/-/g, '/');

    const path = node.fileAbsolutePath as string;
    const name = path
      .split('/')
      .slice(-1)[0]
      .replace('.md', '');

    createNodeField({
      node,
      name: 'slug',
      value: `blog/${datePath}/${name}`,
    });
  }
};
