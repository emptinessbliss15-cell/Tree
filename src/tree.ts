import type { ReactNode } from 'react'

export interface TreeNode {
  id: string
  label: string
  icon?: ReactNode
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
