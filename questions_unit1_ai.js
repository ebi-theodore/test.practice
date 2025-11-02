const quizData = 
    [
  {
    "question": "What is the primary goal of AI?",
    "options": [
      "Replicate human brain structure",
      "Enable machines to solve tasks that require intelligence",
      "Replace human labor",
      "Build faster computers"
    ],
    "correct": "Enable machines to solve tasks that require intelligence"
  },
  {
    "question": "Which of the following is NOT a traditional AI problem-solving task?",
    "options": [
      "Playing chess",
      "Doing arithmetic by hand",
      "Language translation",
      "Image recognition"
    ],
    "correct": "Doing arithmetic by hand"
  },
  {
    "question": "A task is considered “intelligent” if it involves",
    "options": [
      "Human emotions",
      "Complex pattern recognition, reasoning, learning, or adaptation",
      "Physical labor",
      "Simple arithmetic only"
    ],
    "correct": "Complex pattern recognition, reasoning, learning, or adaptation"
  },
  {
    "question": "The Turing Test evaluates",
    "options": [
      "A machine’s speed",
      "Machine intelligence via indistinguishability",
      "Human IQ",
      "Computational complexity"
    ],
    "correct": "Machine intelligence via indistinguishability"
  },
  {
    "question": "Which statement is true about AI’s “weak” vs “strong” definitions?",
    "options": [
      "Both involve human-like emotions",
      "Weak AI simulates intelligence; strong AI means real understanding",
      "Strong AI cannot ever be built",
      "Weak AI is rule-based only"
    ],
    "correct": "Weak AI simulates intelligence; strong AI means real understanding"
  },
  {
    "question": "All of the following are fields that intersect with AI EXCEPT",
    "options": [
      "Philosophy",
      "Neuroscience",
      "Astrology",
      "Linguistics"
    ],
    "correct": "Astrology"
  },
  {
    "question": "Which AI approach uses large data to learn statistical patterns?",
    "options": [
      "Logic-based",
      "Rule-based",
      "Machine learning",
      "Planning"
    ],
    "correct": "Machine learning"
  },
  {
    "question": "“Rational agent” refers to",
    "options": [
      "Any software program",
      "An entity that maximizes expected performance measure",
      "An agent that acts randomly",
      "A human being"
    ],
    "correct": "An entity that maximizes expected performance measure"
  },
  {
    "question": "What is a “performance measure”?",
    "options": [
      "How humans judge machine output",
      "A numerical reward function defining success",
      "The agent’s CPU speed",
      "A debugging tool"
    ],
    "correct": "A numerical reward function defining success"
  },
  {
    "question": "One main challenge for building AI systems is",
    "options": [
      "Lack of hardware",
      "Difficulty in specifying the environment",
      "Absence of problems",
      "Too much automation"
    ],
    "correct": "Difficulty in specifying the environment"
  },
  {
    "question": "Which of these is NOT a typical AI subfield?",
    "options": [
      "Planning",
      "Signal processing",
      "Knowledge representation",
      "Natural language processing"
    ],
    "correct": "Signal processing"
  },
  {
    "question": "Agent design must consider all EXCEPT",
    "options": [
      "The agent’s sensors",
      "The agent’s actuators",
      "The agent’s feelings",
      "The agent’s environment"
    ],
    "correct": "The agent’s feelings"
  },
  {
    "question": "Which of these criteria is NOT part of the AI definition in code-based thinking?",
    "options": [
      "Thinks like humans",
      "Acts like humans",
      "Thinks rationally",
      "Uses emotions"
    ],
    "correct": "Uses emotions"
  },
  {
    "question": "The term “knowledge engineering” refers to",
    "options": [
      "Building logic circuits",
      "Acquiring and encoding domain knowledge",
      "Data mining",
      "GPU design"
    ],
    "correct": "Acquiring and encoding domain knowledge"
  },
  {
    "question": "Which of these systems is most associated with expert systems?",
    "options": [
      "Siri",
      "Mycin",
      "AlphaGo",
      "Tesla autopilot"
    ],
    "correct": "Mycin"
  },
  {
    "question": "The AI field that focuses on how to represent information about the world is",
    "options": [
      "Planning",
      "Perception",
      "Knowledge representation",
      "Search"
    ],
    "correct": "Knowledge representation"
  },
  {
    "question": "Which architecture uses production rules and an inference engine?",
    "options": [
      "Blackboard system",
      "Expert system",
      "Neural network",
      "Planner"
    ],
    "correct": "Expert system"
  },
  {
    "question": "The AI subfield dealing with pattern recognition focuses on",
    "options": [
      "Logic",
      "Statistics",
      "Heuristics",
      "Planning"
    ],
    "correct": "Statistics"
  },
  {
    "question": "AI goals include all EXCEPT",
    "options": [
      "Understanding perception",
      "Natural dialogue",
      "Physical agility",
      "Generating electricity"
    ],
    "correct": "Generating electricity"
  },
  {
    "question": "“General AI” means",
    "options": [
      "AI that is good at gaming",
      "AI that can perform any intellectual task like a  human",
      "AI specialized in one domain",
      "Military AI"
    ],
    "correct": "AI that can perform any intellectual task like a human"
  },
  {
    "question": "An agent’s “utility function” represents",
    "options": [
      "Its hard-coded goals",
      "Preferences over states of the world",
      "Only terminal rewards",
      "CPU utility"
    ],
    "correct": "Preferences over states of the world"
  },
  {
    "question": "Which is a historical symbolic AI programming language?",
    "options": [
      "Python",
      "LISP",
      "Java",
      "C++"
    ],
    "correct": "LISP"
  },
  {
    "question": "An “agent function” maps",
    "options": [
      "Observations to actions",
      "States to rewards",
      "Goals to plans",
      "Data to parameters"
    ],
    "correct": "Observations to actions"
  },
  {
    "question": "The PEAS framework includes all EXCEPT:",
    "options": [
      "Performance",
      "Environment",
      "Actuators",
      "Sensors"
    ],
    "correct": "Performance"
  },
  {
    "question": "Which is part of agent architecture?",
    "options": [
      "Utility functions",
      "Neural net library",
      "Hardware + software",
      "Utility theory"
    ],
    "correct": "Hardware + software"
  },
  {
    "question": "A purely reactive agent",
    "options": [
      "Uses planning",
      "Responds only to current percepts",
      "Keeps track of the world model",
      "Is learning-based"
    ],
    "correct": "Responds only to current percepts"
  },
  {
    "question": "Model-based agents require",
    "options": [
      "No memory",
      "A model of how the world evolves",
      "No sensors",
      "Only reflex rules"
    ],
    "correct": "A model of how the world evolves"
  },
  {
    "question": "A goal-based agent adds",
    "options": [
      "Goals and planning capabilities",
      "Sensors",
      "Reflex actions only",
      "A utility function"
    ],
    "correct": "Goals and planning capabilities"
  },
  {
    "question": "Utility-based agents enhance goal agents by",
    "options": [
      "Seeking multiple goals only",
      "Measuring desirability via utility",
      "Being purely reactive",
      "Using no models"
    ],
    "correct": "Measuring desirability via utility"
  },
  {
    "question": "What does the “simple reflex agent” rely on?",
    "options": [
      "Utility function",
      "Condition–action rules",
      "Full search",
      "Utility maximization"
    ],
    "correct": "Condition–action rules"
  },
  {
    "question": "Which agent type makes decisions by weighing trade-offs?",
    "options": [
      "Reflex",
      "Model-based",
      "Utility-based",
      "Goal-based"
    ],
    "correct": "Utility-based"
  },
  {
    "question": "A learning agent has all EXCEPT:",
    "options": [
      "Learning element",
      "Performance element",
      "Genetic algorithm",
      "Critic"
    ],
    "correct": "Genetic algorithm"
  },
  {
    "question": "Which is a utility-based agent example?",
    "options": [
      "Basic thermostat",
      "Chess program evaluating positions",
      "Rule-based spam filter",
      "Doorbell camera"
    ],
    "correct": "Chess program evaluating positions"
  },
  {
    "question": "Which scenario suggests partially observable environment?",
    "options": [
      "Tic-Tac-Toe",
      "Chess",
      "Driving in fog",
      "Solving Sudoku"
    ],
    "correct": "Driving in fog"
  },
  {
    "question": "Stochastic environments involve",
    "options": [
      "No randomness",
      "Random outcomes in actions or percepts",
      "One fixed outcome",
      "Fully observable sensors"
    ],
    "correct": "Random outcomes in actions or percepts"
  },
  {
    "question": "What is a multi-agent environment?",
    "options": [
      "Only one agent exists",
      "Other agents work concurrently",
      "No environment exists",
      "Deterministic setting"
    ],
    "correct": "Other agents work concurrently"
  },
  {
    "question": "Which is NOT a property of environments?",
    "options": [
      "Observable vs partially observable",
      "Discrete vs continuous",
      "Safe vs dangerous",
      "Single vs multi-agent"
    ],
    "correct": "Safe vs dangerous"
  },
  {
    "question": "Utility is necessary when",
    "options": [
      "Goals suffice",
      "Trade-offs are needed",
      "Only reflex reactions",
      "No goals exist"
    ],
    "correct": "Trade-offs are needed"
  },
  {
    "question": "Which architecture is least flexible?",
    "options": [
      "Simple reflex",
      "Goal-based",
      "Model-based",
      "Learning agent"
    ],
    "correct": "Simple reflex"
  },
  {
    "question": "A fully observable, deterministic, static environment means",
    "options": [
      "Stochastic outcome",
      "No hidden information, unchanging environment",
      "Changing during planning",
      "Random percepts each time"
    ],
    "correct": "No hidden information, unchanging environment"
  },
  {
    "question": "A “learning element” in an agent does",
    "options": [
      "Store actuators",
      "Improve agent based on feedback",
      "Plan goals",
      "Execute reflexes"
    ],
    "correct": "Improve agent based on feedback"
  },
  {
    "question": "Which example demands learning?",
    "options": [
      "Vacuum agent in known layout",
      "Chatbot improving through feedback",
      "Chess engine with fixed eval function",
      "Rule-based thermostat"
    ],
    "correct": "Chatbot improving through feedback"
  },
  {
    "question": "“Observability” refers to",
    "options": [
      "Sensing entire world or not",
      "Agent’s self-concept",
      "Utility measurement",
      "Hardware visibility"
    ],
    "correct": "Sensing entire world or not"
  },
  {
    "question": "In model-based reflex agents, “model” is used to",
    "options": [
      "Store training data",
      "Track unobserved aspects",
      "Compute utility",
      "Execute actions"
    ],
    "correct": "Track unobserved aspects"
  },
  {
    "question": "Sequence: Observe–Think–Act is used by",
    "options": [
      "Reflex only",
      "Goal-based agents",
      "Stochastic agents only",
      "Learning only"
    ],
    "correct": "Goal-based agents"
  },
  {
    "question": "Which environment permits partial control?",
    "options": [
      "Deterministic",
      "Stochastic",
      "Episodic",
      "Single agent"
    ],
    "correct": "Stochastic"
  },
  {
    "question": "Which is an example of an episodic environment?",
    "options": [
      "Chess",
      "Email spam filter",
      "Driving",
      "Crossword puzzle"
    ],
    "correct": "Email spam filter"
  },
  {
    "question": "Which is NOT a measure of success in AI agent design?",
    "options": [
      "Task performance",
      "Speed",
      "Rationality",
      "Physical appearance"
    ],
    "correct": "Physical appearance"
  },
  {
    "question": "“Intelligent behavior” is best described as",
    "options": [
      "Random actions",
      "Goal-achieving actions under uncertainty",
      "Magic",
      "Strictly rule-following"
    ],
    "correct": "Goal-achieving actions under uncertainty"
  },
  {
    "question": "The phrase “AI winter” refers to",
    "options": [
      "Cold labs",
      "Periods of reduced funding/interest",
      "The winter solstice",
      "Robots malfunctioning in winter"
    ],
    "correct": "Periods of reduced funding/interest"
  },
]