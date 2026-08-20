import type { TreeNode, TreeProps } from './tree'

export function Tree({ nodes, selectedId, onSelect }: TreeProps) {
  return (
    <div role="tree">
      {nodes.map((node) => (
        <TreeNodeView
          key={node.id}
          node={node}
          selectedId={selectedId}
          onSelect={onSelect}
          depth={0}
        />
      ))}
    </div>
  )
}

function TreeNodeView({
  node,
  selectedId,
  onSelect,
  depth,
}: {
  node: TreeNode
  selectedId?: string
  onSelect?: (node: TreeNode) => void
  depth: number
}) {
  return (
    <div>
      <button
        type="button"
        role="treeitem"
        aria-selected={node.id === selectedId}
        style={{ paddingLeft: `${depth * 16 + 8}px` }}
        onClick={() => onSelect?.(node)}
      >
        {node.icon ? `${node.icon} ` : ''}{node.label}
      </button>
      {node.children?.map((child) => (
        <TreeNodeView
          key={child.id}
          node={child}
          selectedId={selectedId}
          onSelect={onSelect}
          depth={depth + 1}
        />
      ))}
    </div>
  )
}
