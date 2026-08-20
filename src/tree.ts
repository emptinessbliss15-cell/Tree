export interface TreeNode {
  id: string
  label: string
  icon?: string
  children?: TreeNode[]
}

export interface TreeProps {
  nodes: TreeNode[]
  selectedId?: string
  onSelect?: (node: TreeNode) => void
}

export function createTreeModel(nodes: TreeNode[]): TreeNode[] {
  return nodes
}
