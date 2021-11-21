var documenterSearchIndex = {"docs":
[{"location":"api/#api-internal-dags","page":"API","title":"DirectedAcyclicGraphs","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"Modules = [DirectedAcyclicGraphs]","category":"page"},{"location":"api/#DirectedAcyclicGraphs.DAG","page":"API","title":"DirectedAcyclicGraphs.DAG","text":"A node in a directed acyclic graph (of which it is the root)\n\n\n\n\n\n","category":"type"},{"location":"api/#DirectedAcyclicGraphs.Inner","page":"API","title":"DirectedAcyclicGraphs.Inner","text":"The trait of inner nodes (nodes that have children)\n\n\n\n\n\n","category":"type"},{"location":"api/#DirectedAcyclicGraphs.Leaf","page":"API","title":"DirectedAcyclicGraphs.Leaf","text":"The trait of leaf nodes (nodes without children)\n\n\n\n\n\n","category":"type"},{"location":"api/#DirectedAcyclicGraphs.NodeType","page":"API","title":"DirectedAcyclicGraphs.NodeType","text":"A trait hierarchy denoting types of DAG nodes NodeType defines an orthogonal type hierarchy of node types, so we can dispatch on node type regardless of the graph type. See @ref{https://docs.julialang.org/en/v1/manual/methods/#Trait-based-dispatch-1}\n\n\n\n\n\n","category":"type"},{"location":"api/#DirectedAcyclicGraphs.NodeType-Tuple{DAG}","page":"API","title":"DirectedAcyclicGraphs.NodeType","text":"Get the node type trait of the given Node\n\n\n\n\n\n","category":"method"},{"location":"api/#DirectedAcyclicGraphs.Tree","page":"API","title":"DirectedAcyclicGraphs.Tree","text":"A node in a tree (of which it is the root)\n\n\n\n\n\n","category":"type"},{"location":"api/#Base.filter-Union{Tuple{T}, Tuple{Function, DAG}, Tuple{Function, DAG, Any}, Tuple{Function, DAG, Any, Type{T}}} where T","page":"API","title":"Base.filter","text":"Retrieve list of nodes in DAG matching predicate p\n\n\n\n\n\n","category":"method"},{"location":"api/#Base.foreach","page":"API","title":"Base.foreach","text":"Apply a function to each node in a graph, bottom up\n\n\n\n\n\n","category":"function"},{"location":"api/#Base.in","page":"API","title":"Base.in","text":"Is the node contained in the DAG?\n\n\n\n\n\n","category":"function"},{"location":"api/#Base.parent-Tuple{Tree}","page":"API","title":"Base.parent","text":"Get the parent of a given tree node (or nothing if the node is root)\n\n\n\n\n\n","category":"method"},{"location":"api/#DirectedAcyclicGraphs.children","page":"API","title":"DirectedAcyclicGraphs.children","text":"Get the children of a given inner node\n\n\n\n\n\n","category":"function"},{"location":"api/#DirectedAcyclicGraphs.depth-Tuple{Tree, Function}","page":"API","title":"DirectedAcyclicGraphs.depth","text":"Compute the length of the path from a tree node to the leaf following the branching function\n\n\n\n\n\n","category":"method"},{"location":"api/#DirectedAcyclicGraphs.find_inode-Tuple{Any, Any, Function}","page":"API","title":"DirectedAcyclicGraphs.find_inode","text":"Find a binary inner node that has left in its left subtree and right in its right subtree. Supports nothing as a catch-all for either left or right. Returns nothing if no such node exists.\n\n\n\n\n\n","category":"method"},{"location":"api/#DirectedAcyclicGraphs.find_leaf-Tuple{Tree, Function}","page":"API","title":"DirectedAcyclicGraphs.find_leaf","text":"Find the leaf in the tree by follwing the branching function\n\n\n\n\n\n","category":"method"},{"location":"api/#DirectedAcyclicGraphs.foldup-Union{Tuple{T}, Tuple{DAG, Function, Function, Type{T}}, Tuple{DAG, Function, Function, Type{T}, Nothing}} where T","page":"API","title":"DirectedAcyclicGraphs.foldup","text":"foldup(node::DAG, \n    f_leaf::Function, \n    f_inner::Function, \n    ::Type{T})::T where {T}\n\nCompute a function bottom-up on the graph.  f_leaf is called on leaf nodes, and f_inner is called on inner nodes. Values of type T are passed up the circuit and given to f_inner as a function on the children.\n\n\n\n\n\n","category":"method"},{"location":"api/#DirectedAcyclicGraphs.foldup_aggregate-Union{Tuple{T}, Tuple{DAG, Function, Function, Type{T}}, Tuple{DAG, Function, Function, Type{T}, Nothing}} where T","page":"API","title":"DirectedAcyclicGraphs.foldup_aggregate","text":"Compute a function bottom-up on the circuit.  f_leaf is called on leaf nodes, and f_inner is called on inner nodes. Values of type T are passed up the circuit and given to f_inner in aggregate  as a vector from the children.\n\n\n\n\n\n","category":"method"},{"location":"api/#DirectedAcyclicGraphs.foreach_down-Tuple{Function, DAG}","page":"API","title":"DirectedAcyclicGraphs.foreach_down","text":"Apply a function to each node in a graph, top down\n\n\n\n\n\n","category":"method"},{"location":"api/#DirectedAcyclicGraphs.groupby-Union{Tuple{E}, Tuple{Function, Union{Set{E}, Vector{E}}}} where E","page":"API","title":"DirectedAcyclicGraphs.groupby","text":"Group the elements of list by their values according to function f\n\n\n\n\n\n","category":"method"},{"location":"api/#DirectedAcyclicGraphs.has_children-Tuple{DAG}","page":"API","title":"DirectedAcyclicGraphs.has_children","text":"Does the DAG node have children?\n\n\n\n\n\n","category":"method"},{"location":"api/#DirectedAcyclicGraphs.has_parent-Tuple{Tree}","page":"API","title":"DirectedAcyclicGraphs.has_parent","text":"Does the node have a parent?\n\n\n\n\n\n","category":"method"},{"location":"api/#DirectedAcyclicGraphs.innernode_stats-Tuple{DAG}","page":"API","title":"DirectedAcyclicGraphs.innernode_stats","text":"innernode_stats(c::DAG)\n\nGive count of types and fan-ins of inner nodes in the graph\n\n\n\n\n\n","category":"method"},{"location":"api/#DirectedAcyclicGraphs.innernodes-Tuple{DAG}","page":"API","title":"DirectedAcyclicGraphs.innernodes","text":"Get the list of inner nodes in a given graph\n\n\n\n\n\n","category":"method"},{"location":"api/#DirectedAcyclicGraphs.isequal_local-Tuple{Tree, Tree}","page":"API","title":"DirectedAcyclicGraphs.isequal_local","text":"Is one node equal to another locally, ignoring children?\n\n\n\n\n\n","category":"method"},{"location":"api/#DirectedAcyclicGraphs.isinner-Tuple{DAG}","page":"API","title":"DirectedAcyclicGraphs.isinner","text":"Is the DAG node an inner node?\n\n\n\n\n\n","category":"method"},{"location":"api/#DirectedAcyclicGraphs.isleaf-Tuple{DAG}","page":"API","title":"DirectedAcyclicGraphs.isleaf","text":"Is the DAG node a leaf node?\n\n\n\n\n\n","category":"method"},{"location":"api/#DirectedAcyclicGraphs.isroot-Tuple{Tree}","page":"API","title":"DirectedAcyclicGraphs.isroot","text":"Is the node the root of its tree?\n\n\n\n\n\n","category":"method"},{"location":"api/#DirectedAcyclicGraphs.label_nodes-Tuple{DAG}","page":"API","title":"DirectedAcyclicGraphs.label_nodes","text":"Assign an integer label to each circuit node, bottom up, starting at 1\n\n\n\n\n\n","category":"method"},{"location":"api/#DirectedAcyclicGraphs.lca-Tuple{Tree, Tree, Function}","page":"API","title":"DirectedAcyclicGraphs.lca","text":"Find the least common ancestor. Assumes the Tree has access to a parent.  A given descends_from function is required to quickly check whether a node is an ancestor.\n\n\n\n\n\n","category":"method"},{"location":"api/#DirectedAcyclicGraphs.leaf_stats-Tuple{DAG}","page":"API","title":"DirectedAcyclicGraphs.leaf_stats","text":"leaf_stats(c::DAG)\n\nGive count of types of leaf nodes in the graph\n\n\n\n\n\n","category":"method"},{"location":"api/#DirectedAcyclicGraphs.leafnodes-Tuple{DAG}","page":"API","title":"DirectedAcyclicGraphs.leafnodes","text":"Get the list of leaf nodes in a given graph\n\n\n\n\n\n","category":"method"},{"location":"api/#DirectedAcyclicGraphs.left_most_descendent-Tuple{DAG}","page":"API","title":"DirectedAcyclicGraphs.left_most_descendent","text":"left_most_descendent(root::DAG)::DAG\n\nReturn the left-most descendent.\n\n\n\n\n\n","category":"method"},{"location":"api/#DirectedAcyclicGraphs.linearize-Union{Tuple{DAG}, Tuple{T}, Tuple{DAG, Type{T}}} where T","page":"API","title":"DirectedAcyclicGraphs.linearize","text":"Order the DAG's nodes bottom-up in a list (with optional element type)\n\n\n\n\n\n","category":"method"},{"location":"api/#DirectedAcyclicGraphs.map_values-Union{Tuple{K}, Tuple{Function, AbstractDict{K, V} where V, Type}} where K","page":"API","title":"DirectedAcyclicGraphs.map_values","text":"Map the values in the dictionary, retaining the same keys\n\n\n\n\n\n","category":"method"},{"location":"api/#DirectedAcyclicGraphs.node_stats-Tuple{DAG}","page":"API","title":"DirectedAcyclicGraphs.node_stats","text":"node_stats(c::DAG)\n\nGive count of types and fan-ins of all nodes in the graph\n\n\n\n\n\n","category":"method"},{"location":"api/#DirectedAcyclicGraphs.num_children-Tuple{DAG}","page":"API","title":"DirectedAcyclicGraphs.num_children","text":"Get the number of children of a given inner DAG node\n\n\n\n\n\n","category":"method"},{"location":"api/#DirectedAcyclicGraphs.num_edges","page":"API","title":"DirectedAcyclicGraphs.num_edges","text":"Number of edges in the DAG\n\n\n\n\n\n","category":"function"},{"location":"api/#DirectedAcyclicGraphs.num_innernodes-Tuple{DAG}","page":"API","title":"DirectedAcyclicGraphs.num_innernodes","text":"Count the number of inner nodes in a given graph\n\n\n\n\n\n","category":"method"},{"location":"api/#DirectedAcyclicGraphs.num_leafnodes-Tuple{DAG}","page":"API","title":"DirectedAcyclicGraphs.num_leafnodes","text":"Count the number of leaf nodes in a given graph\n\n\n\n\n\n","category":"method"},{"location":"api/#DirectedAcyclicGraphs.num_nodes","page":"API","title":"DirectedAcyclicGraphs.num_nodes","text":"num_nodes(node::DAG)\n\nCount the number of nodes in the DAG\n\n\n\n\n\n","category":"function"},{"location":"api/#DirectedAcyclicGraphs.num_parents-Tuple{DAG}","page":"API","title":"DirectedAcyclicGraphs.num_parents","text":"num_parents(root::DAG)\n\nCount the number of parents for each node in DAG under root\n\n\n\n\n\n","category":"method"},{"location":"api/#DirectedAcyclicGraphs.parent_stats-Tuple{DAG}","page":"API","title":"DirectedAcyclicGraphs.parent_stats","text":"parent_stats(c::DAG)\n\nGive number of nodes grouped by (type, parent_count)\n\n\n\n\n\n","category":"method"},{"location":"api/#DirectedAcyclicGraphs.print_tree","page":"API","title":"DirectedAcyclicGraphs.print_tree","text":"Print the given tree\n\n\n\n\n\n","category":"function"},{"location":"api/#DirectedAcyclicGraphs.right_most_descendent-Tuple{DAG}","page":"API","title":"DirectedAcyclicGraphs.right_most_descendent","text":"right_most_descendent(root::DAG)::DAG\n\nReturn the right-most descendent.\n\n\n\n\n\n","category":"method"},{"location":"api/#DirectedAcyclicGraphs.root-Tuple{Tree}","page":"API","title":"DirectedAcyclicGraphs.root","text":"Get the root of the given tree node\n\n\n\n\n\n","category":"method"},{"location":"api/#DirectedAcyclicGraphs.tree_num_edges","page":"API","title":"DirectedAcyclicGraphs.tree_num_edges","text":"tree_num_edges(node::DAG)::BigInt\n\nCompute the number of edges in the tree-unfolding of the DAG. \n\n\n\n\n\n","category":"function"},{"location":"api/#DirectedAcyclicGraphs.tree_num_nodes","page":"API","title":"DirectedAcyclicGraphs.tree_num_nodes","text":"tree_num_nodes(node::DAG)::BigInt\n\nCompute the number of nodes in of a tree-unfolding of the DAG. \n\n\n\n\n\n","category":"function"},{"location":"installation/#Installation","page":"Installation","title":"Installation","text":"","category":"section"},{"location":"installation/#Prerequisites","page":"Installation","title":"Prerequisites","text":"","category":"section"},{"location":"installation/","page":"Installation","title":"Installation","text":"Julia 1.6 or greater. For installation, please refer to the official Julia Website.","category":"page"},{"location":"installation/#Installing-DirectedAcyclicGraphs","page":"Installation","title":"Installing DirectedAcyclicGraphs","text":"","category":"section"},{"location":"installation/#From-Command-Line","page":"Installation","title":"From Command Line","text":"","category":"section"},{"location":"installation/","page":"Installation","title":"Installation","text":"To install the latest stable release, run:","category":"page"},{"location":"installation/","page":"Installation","title":"Installation","text":"julia -e 'using Pkg; Pkg.add(\"DirectedAcyclicGraphs\")'","category":"page"},{"location":"installation/","page":"Installation","title":"Installation","text":"To install the package with the latest commits on master branch, run:","category":"page"},{"location":"installation/","page":"Installation","title":"Installation","text":"julia -e 'using Pkg; Pkg.add(PackageSpec(url=\"https://github.com/Juice-jl/DirectedAcyclicGraphs.jl.git\"))'","category":"page"},{"location":"installation/#From-Julia-Pkg-REPL","page":"Installation","title":"From Julia Pkg REPL","text":"","category":"section"},{"location":"installation/","page":"Installation","title":"Installation","text":"note: Note\nTo get to Pkg mode, you need to run julia, then to press ]. Press backspace or ^C to get back to normal REPL mode.","category":"page"},{"location":"installation/","page":"Installation","title":"Installation","text":"While in Pkg mode, run the following to install the latest release:","category":"page"},{"location":"installation/","page":"Installation","title":"Installation","text":"] add DirectedAcyclicGraphs","category":"page"},{"location":"installation/","page":"Installation","title":"Installation","text":"Similarly, to install from the latest commits on master branch, run:","category":"page"},{"location":"installation/","page":"Installation","title":"Installation","text":"] add DirectedAcyclicGraphs#master","category":"page"},{"location":"installation/#Testing","page":"Installation","title":"Testing","text":"","category":"section"},{"location":"installation/","page":"Installation","title":"Installation","text":"If you are installing the latest commit, we recommend running the test suite to make sure everything is in order, to do that run:","category":"page"},{"location":"installation/","page":"Installation","title":"Installation","text":"julia --color=yes -e 'using Pkg; Pkg.test(\"DirectedAcyclicGraphs\")'","category":"page"},{"location":"#DirectedAcyclicGraphs.jl","page":"Home","title":"DirectedAcyclicGraphs.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This package provides tools to represent Directed Acyclic Graphs (DAGs), additionaly it includes common tasks that are relevant to DirectedAcyclicGraphs, see the API section for me details.","category":"page"}]
}