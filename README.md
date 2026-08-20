# Tree

A small reusable React tree component.

## Contract

Apps provide `TreeNode[]` and optionally a selected node id and selection callback. The Tree component renders the hierarchy without knowing anything about the app or its data source.

```ts
interface TreeNode {
  id: string
  label: string
  icon?: string
  children?: TreeNode[]
}
```
