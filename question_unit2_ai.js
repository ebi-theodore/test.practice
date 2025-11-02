const quizData = [  {
    "question": "Which search explores nodes level by level?",
    "options": [
      "Path cost",
      "Node depth",
      "Heuristic value",
      "Random"
    ],
    "correct": "Node depth"
  },
  {
    "question": "Time complexity of BFS with branching factor b and depth d is:",
    "options": [
      "O(b + d)",
      "O(b^d)",
      "O(d^b)",
      "O(b·d)"
    ],
    "correct": "O(b^d)"
  },
  {
    "question": "BFS requires which data structure?",
    "options": [
      "Stack",
      "Queue",
      "Priority queue",
      "Deque"
    ],
    "correct": "Queue"
  },
  {
    "question": "BFS uses exponential memory because it stores:",
    "options": [
      "Current frontier",
      "All nodes at current depth",
      "Only visited nodes",
      "Heuristic values"
    ],
    "correct": "All nodes at current depth"
  },
  {
    "question": "BFS is optimal only when:",
    "options": [
      "Edge costs differ",
      "Costs are uniform",
      "Heuristic is zero",
      "Graph is acyclic"
    ],
    "correct": "Costs are uniform"
  },
  {
    "question": "BFS is considered a:",
    "options": [
      "Depth-first search",
      "Best-first search",
      "Uninformed search",
      "Informed search"
    ],
    "correct": "Uninformed search"
  },
  {
    "question": "DFS uses which data structure?",
    "options": [
      "Priority queue",
      "Queue",
      "Stack",
      "Hash table"
    ],
    "correct": "Stack"
  },
  {
    "question": "DFS may get stuck in cycles if:",
    "options": [
      "Graph is disconnected",
      "No mechanism to avoid revisits",
      "Step costs vary",
      "Heuristic is misleading"
    ],
    "correct": "No mechanism to avoid revisits"
  },
  {
    "question": "Worst-case time complexity of DFS is:",
    "options": [
      "O(b·d)",
      "O(b^d)",
      "O(d!)",
      "O(b log d)"
    ],
    "correct": "O(b^d)"
  },
  {
    "question": "DFS is memory efficient compared to BFS because it uses:",
    "options": [
      "No memory",
      "Linear memory in depth",
      "Exponential memory",
      "The optimal path only"
    ],
    "correct": "Linear memory in depth"
  },
  {
    "question": "DFS is not complete in infinite-depth spaces unless:",
    "options": [
      "Graph is finite",
      "Cycles are absent or cut",
      "Step costs are uniform",
      "Heuristic is admissible"
    ],
    "correct": "Cycles are absent or cut"
  },
  {
    "question": "To avoid infinite loops in DFS, use:",
    "options": [
      "Heuristic",
      "Cycle detection",
      "Larger memory",
      "Shorter paths"
    ],
    "correct": "Cycle detection"
  },
  {
    "question": "UCS expands nodes based on:",
    "options": [
      "Depth",
      "Cost-so-far",
      "Heuristic",
      "Random"
    ],
    "correct": "Cost-so-far"
  },
  {
    "question": "UCS is optimal if all costs are:",
    "options": [
      "Negative",
      "Non-negative",
      "Random",
      "Unbounded"
    ],
    "correct": "Non-negative"
  },
  {
    "question": "UCS time complexity is roughly O(b^C), where C is:**",
    "options": [
      "Branching factor",
      "Maximum cost",
      "Optimal path cost",
      "Depth"
    ],
    "correct": "Optimal path cost"
  },
  {
    "question": "UCS requires which queue type?",
    "options": [
      "LIFO",
      "FIFO",
      "Priority queue",
      "Random access"
    ],
    "correct": "Priority queue"
  },
  {
    "question": "UCS behaves like BFS when step costs are:",
    "options": [
      "Uniform",
      "Nonuniform",
      "Zero",
      "Increasing"
    ],
    "correct": "Uniform"
  },
  {
    "question": "UCS is a form of:",
    "options": [
      "Depth-first search",
      "Best-first search",
      "Greedy search",
      "Heuristic search"
    ],
    "correct": "Best-first search"
  },
  {
    "question": "UCS is complete when:",
    "options": [
      "Step cost ≥ ε > 0",
      "Depth is finite",
      "Heuristic is admissible",
      "Heuristic is consistent"
    ],
    "correct": "Step cost ≥ ε > 0"
  },
  {
    "question": "Best-first search is:",
    "options": [
      "Complete",
      "Optimal",
      "Fast but not optimal",
      "Memory efficient"
    ],
    "correct": "Fast but not optimal"
  },
  {
    "question": "Best-first search may get stuck if:",
    "options": [
      "Heuristic is admissible",
      "Heuristic is perfect",
      "Heuristic misleads",
      "Heuristic is zero"
    ],
    "correct": "Heuristic misleads"
  },
  {
    "question": "Best-first is like breadth-first if:",
    "options": [
      "h = 0",
      "g = 0",
      "Graph is balanced",
      "Step costs vary"
    ],
    "correct": "h = 0"
  },
  {
    "question": "The main limitation of Best-first search is:",
    "options": [
      "High memory",
      "Slow speed",
      "Poor optimality",
      "Too deep"
    ],
    "correct": "Poor optimality"
  },
  {
    "question": "A* heuristic is admissible if it never:",
    "options": [
      "Underestimates",
      "Overestimates",
      "Equals",
      "Exceeds the true cost"
    ],
    "correct": "Exceeds the true cost"
  },
  {
    "question": "A* heuristic overestimating the cost is:",
    "options": [
      "Admissible",
      "Inadmissible",
      "Consistent",
      "Useful"
    ],
    "correct": "Inadmissible"
  },
  {
    "question": "Inconsistent admissible heuristics may cause A* to:",
    "options": [
      "Stop early",
      "Re-expand nodes",
      "Ignore g(n)",
      "Fail to find paths"
    ],
    "correct": "Re-expand nodes"
  },
  {
    "question": "A* uses which evaluation function?",
    "options": [
      "g(n)",
      "h(n)",
      "g(n) + h(n)",
      "max(g,h)"
    ],
    "correct": "g(n) + h(n)"
  },
  {
    "question": "With admissible h, A* is:",
    "options": [
      "Complete and optimal",
      "Complete only",
      "Optimal only",
      "Neither"
    ],
    "correct": "Complete and optimal"
  },
  {
    "question": "With consistent h, A* with graph search:",
    "options": [
      "May fail",
      "Is optimally efficient",
      "Is slower than BFS",
      "Loses optimality"
    ],
    "correct": "Is optimally efficient"
  },
  {
    "question": "A* must keep all generated nodes in memory to:",
    "options": [
      "Track visited only",
      "Backtrack optimal path",
      "Use DFS",
      "Use greedy jumps"
    ],
    "correct": "Backtrack optimal path"
  },
  {
    "question": "A* halts when the goal is:",
    "options": [
      "Generated",
      "Popped from priority queue",
      "In frontier",
      "At highest depth"
    ],
    "correct": "Popped from priority queue"
  },
  {
    "question": "Worst-case time complexity of A* is:",
    "options": [
      "Polynomial",
      "Exponential",
      "Constant",
      "Logarithmic"
    ],
    "correct": "Exponential"
  },
  {
    "question": "Among these, which minimizes f(n)?",
    "options": [
      "CIF",
      "Greedy",
      "A*",
      "DFS"
    ],
    "correct": "A*"
  },
  {
    "question": "UCS reduces to BFS when step costs are:",
    "options": [
      "Nonuniform",
      "Zero",
      "Uniform",
      "Infinite"
    ],
    "correct": "Uniform"
  },
  {
    "question": "Which search can handle inconsistent heuristics with proper duplicate checking?",
    "options": [
      "Greedy",
      "UCS",
      "A* with graph search",
      "BFS"
    ],
    "correct": "A* with graph search"
  },
  {
    "question": "A heuristic that overestimates is:",
    "options": [
      "Admissible",
      "Inadmissible",
      "Consistent",
      "Safe"
    ],
    "correct": "Inadmissible"
  },
  {
    "question": "A consistent heuristic guarantees no:",
    "options": [
      "Re-expansion",
      "Optimal path",
      "Completeness",
      "Memory usage"
    ],
    "correct": "Re-expansion"
  },
  {
    "question": "The quality of a heuristic improves when it is:",
    "options": [
      "Closer to zero",
      "Closer to true cost",
      "Always admissible only",
      "Random"
    ],
    "correct": "Closer to true cost"
  },
  {
    "question": "Best-first can be thought of as a special case of:",
    "options": [
      "A* with g(n) = 0",
      "A* with h(n) = 0",
      "UCS with g(n) only",
      "DFS"
    ],
    "correct": "A* with g(n) = 0"
  },
  {
    "question": "A heuristic of zero reduces A* to:",
    "options": [
      "Greedy",
      "UCS",
      "DFS",
      "BFS"
    ],
    "correct": "UCS"
  },
  {
    "question": "Best-first search works when:",
    "options": [
      "f(n) = g(n) + h(n)",
      "f(n) = h(n)",
      "f(n) = g(n)",
      "f(n) = 0"
    ],
    "correct": "f(n) = h(n)"
  },
  {
    "question": "Complete search algorithms do not guarantee optimality unless:",
    "options": [
      "Heuristic is zero",
      "Heuristic is negative",
      "Costs are uniform",
      "Graph is finite"
    ],
    "correct": "Costs are uniform"
  },
  {
    "question": "Which search uses exponential memory?",
    "options": [
      "DFS",
      "IDS",
      "A*",
      "Greedy"
    ],
    "correct": "A*"
  },
  {
    "question": "If h(n) is the perfect heuristic (true cost to goal), A* will:",
    "options": [
      "Expand all nodes",
      "Only along the optimal path",
      "Act like UCS",
      "Fail"
    ],
    "correct": "Only along the optimal path"
  },
  {
    "question": "In A* tree search, inconsistent heuristics cause:",
    "options": [
      "Termination failure",
      "Node re-expansions",
      "Immediate optimality",
      "Lower memory usage"
    ],
    "correct": "Node re-expansions"
  },
  {
    "question": "Fringe (frontier) consists of:",
    "options": [
      "Visited nodes",
      "Generated but not expanded nodes",
      "Goal nodes only",
      "Root node only"
    ],
    "correct": "Generated but not expanded nodes"
  },
  {
    "question": "For a graph with unit costs and consistent heuristic, A* and BFS/UCS will:",
    "options": [
      "Behave identically",
      "Expand fewer nodes",
      "Expand more nodes",
      "Fail"
    ],
    "correct": "Behave identically"
  },
  {
    "question": "Bidirectional search works by:",
    "options": [
      "Searching from root to leaf",
      "Searching from goal to start",
      "Searching simultaneously from both start  and goal",
      "Searching randomly"
    ],
    "correct": "Searching simultaneously from both start and goal"
  },
  {
    "question": "BFS is applied to a tree where the goal is at depth 5. If the branching factor is 3, how many nodes are generated in the worst case before the goal?",
    "options": [
      "121",
      "243",
      "364",
      "728"
    ],
    "correct": "364"
  },
  {
    "question": "BFS guarantees finding the shallowest solution. But it fails when:",
    "options": [
      "The branching factor is infinite",
      "The cost is uniform",
      "The search space is finite",
      "The graph has no cycles"
    ],
    "correct": "The branching factor is infinite"
  },]