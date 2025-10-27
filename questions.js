const quizData = [
  {
    "question": "What is the delivery model for computing resources like storage, processing power, and applications over the internet called?",
    "options": ["Client/Server Computing", "Distributed Computing", "Cloud Computing", "Thin Client"],
    "correct": "Cloud Computing"
  },
  {
    "question": "A cloud computing resource exclusively used inside a single business or organization is known as a:",
    "options": ["Public cloud", "Hybrid cloud", "Private cloud", "Shared community cloud"],
    "correct": "Private cloud"
  },
  {
    "question": "Which component of a cloud client is characterized by having no internal hard disks, relying on the server to perform all the work?",
    "options": ["Mobile client", "Thin client", "Thick client", "Distributed client"],
    "correct": "Thin client"
  },
  {
    "question": "Which characteristic of cloud computing means you are charged only for the resources you consume?",
    "options": ["Broad Network Access", "Scalability", "Measured Service (Pay-as-you-Go)", "Shared Resources"],
    "correct": "Measured Service (Pay-as-you-Go)"
  },
  {
    "question": "Which of the following is NOT one of the three components cloud computing is classified into?",
    "options": ["Clients", "Data centre", "Distributed servers", "Mainframe"],
    "correct": "Mainframe"
  },
  {
    "question": "The characteristic that allows a shopping website to handle more traffic during sales and reduce resources afterwards is called:",
    "options": ["On-Demand Self-service", "Measured Service", "Broad Network Access", "Scalability"],
    "correct": "Scalability"
  },
  {
    "question": "What is considered the 'heart of cloud computing'?",
    "options": ["Hardware", "Operating System", "Virtualization", "Application"],
    "correct": "Virtualization"
  },
  {
    "question": "Which layer is responsible for creating the environment for the guest to operate?",
    "options": ["Host Operating System", "Application layer", "Virtualization layer", "Guest OS"],
    "correct": "Virtualization layer"
  },
  {
    "question": "What type of virtualization splits one physical server into many independent virtual servers?",
    "options": ["Storage virtualization", "Network virtualization", "Application virtualization", "Server virtualization"],
    "correct": "Server virtualization"
  },
  {
    "question": "Which cloud service model uses virtualization to rent out virtual servers to users (like AWS or Azure)?",
    "options": ["PaaS", "SaaS", "IaaS (Infrastructure-as-a-Service)", "XaaS"],
    "correct": "IaaS (Infrastructure-as-a-Service)"
  },
  {
    "question": "What is the key software component in virtualization that allows multiple VMs to run on a single physical machine?",
    "options": ["Router", "Hypervisor", "Virtual Storage", "Guest OS"],
    "correct": "Hypervisor"
  },
  {
    "question": "Which type of hypervisor operates directly on the physical hardware without an underlying operating system?",
    "options": ["Type 2 (Hosted)", "Hybrid", "Para-virtualization", "Type 1 (Bare-Metal)"],
    "correct": "Type 1 (Bare-Metal)"
  },
  {
    "question": "A web service allows applications to send and receive messages between a client and a server using standardized protocols like:",
    "options": ["HTML", "FTP", "HTTP or HTTPS", "TCP/IP"],
    "correct": "HTTP or HTTPS"
  },
  {
    "question": "Which component of a web service defines rules for sending messages between computers, often using XML format over HTTP?",
    "options": ["WSDL", "UDDI", "SOAP (Simple Object Access Protocol)", "REST"],
    "correct": "SOAP (Simple Object Access Protocol)"
  },
  {
    "question": "What language is used in a web service request and response to ensure all systems can understand it?",
    "options": ["HTML", "Java", "XML", "Python"],
    "correct": "XML"
  },
  {
    "question": "A web service feature where the client waits for the server's response before continuing its tasks is known as:",
    "options": ["Loosely Coupled", "Asynchronous", "Synchronous", "Coarse-Grained"],
    "correct": "Synchronous"
  },
  {
    "question": "A web service is considered Loosely Coupled because the client and server are:",
    "options": ["Tightly linked", "Independent", "Written in the same language", "Always asynchronous"],
    "correct": "Independent"
  },
  {
    "question": "Errors in SOAP are handled clearly through what mechanism?",
    "options": ["XML Errors", "SOAP Failures", "SOAP Faults", "HTTP Status Codes"],
    "correct": "SOAP Faults"
  },
  {
    "question": "Cloud security refers to the technologies and policies used to protect what three elements?",
    "options": ["Users, Networks, Servers", "Information, Data, Applications", "Hardware, Software, People", "Privacy, Access, Availability"],
    "correct": "Information, Data, Applications"
  },
  {
    "question": "Which cloud type, in addition to public and private, should be considered when evaluating risk?",
    "options": ["Multi-tenant", "Single-tenant", "Shared community", "Hosted"],
    "correct": "Shared community"
  },
  {
    "question": "Which risk is explicitly mentioned as needing to be evaluated when securing the cloud?",
    "options": ["Natural disasters", "Loss of privacy", "Software licensing issues", "Employee turnover"],
    "correct": "Loss of privacy"
  },
  {
    "question": "What technique can the cloud provider use to aggregate storage assets into a cloud storage system?",
    "options": ["CPU virtualization", "Storage virtualization", "Network virtualization", "Tenancy management"],
    "correct": "Storage virtualization"
  },
  {
    "question": "What is the term for a cloud environment where a single cloud customer uses the computing resources?",
    "options": ["Multi-tenant", "Dual-tenant", "Single-tenant", "Shared Community"],
    "correct": "Single-tenant"
  },
  {
    "question": "What is the main challenge of Multi-tenancy?",
    "options": ["High cost", "Ensuring one user cannot access another user's data", "Difficulty in physical location", "Low data speed"],
    "correct": "Ensuring one user cannot access another user's data"
  },
  {
    "question": "Adobe Creative Cloud Firefly is a set of tools primarily powered by:",
    "options": ["Machine Learning", "Internet of Things", "Artificial Intelligence (AI)", "Virtualization"],
    "correct": "Artificial Intelligence (AI)"
  },
  {
    "question": "Which Firefly design model is used to modify or enhance images by adding or removing elements?",
    "options": ["Text-to-Image", "Generative fill model", "Text effects model", "Style transfer model"],
    "correct": "Generative fill model"
  },
  {
    "question": "Which Firefly design model transforms a photo to resemble an iconic painting style, like 'Van Gogh's Starry Night'?",
    "options": ["Image Enhancement Model", "Logo Generation Model", "Style transfer model", "Video Effects Model"],
    "correct": "Style transfer model"
  },
  {
    "question": "What is GitHub primarily used for by developers?",
    "options": ["Creating video games", "Storing and sharing their code", "Running virtual machines", "Managing payroll"],
    "correct": "Storing and sharing their code"
  },
  {
    "question": "In GitHub, what is a repository (repo) considered?",
    "options": ["A list of users", "The main folder for a project", "A type of server", "A bug tracking tool"],
    "correct": "The main folder for a project"
  },
  {
    "question": "In GitHub, a Commit represents what?",
    "options": ["A request to merge changes", "A copy of the repository", "Changes made to files", "A bug report"],
    "correct": "Changes made to files"
  }
]