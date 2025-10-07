const quizData = [
  {
    "question": "What is the default value of a bool variable in C#?",
    "options": ["TRUE", "FALSE", "0", "null"],
    "correct": "FALSE"
  },
  {
    "question": "Which validator ensures the user enters a number within a specified range in ASP.NET?",
    "options": ["RangeValidator", "RequiredFieldValidator", "RegularExpressionValidator", "CompareValidator"],
    "correct": "RangeValidator"
  },
  {
    "question": "How can you retrieve the value of a cookie in ASP.NET?",
    "options": ["Request.Cookies[\"name\"]", "Response.Cookies[\"name\"]", "Session[\"name\"]", "ViewState[\"name\"]"],
    "correct": "Request.Cookies[\"name\"]"
  },
  {
    "question": "Which class in .NET is used to serialize an object into XML?",
    "options": ["XmlDocument", "XmlSerializer", "XmlReader", "XmlWriter"],
    "correct": "XmlSerializer"
  },
  {
    "question": "What is the main purpose of XML serialization in .NET?",
    "options": ["To store object data in binary format", "To convert an object into an XML format for storage or transfer", "To validate XML against XSD", "To encrypt XML data"],
    "correct": "To convert an object into an XML format for storage or transfer"
  },
  {
    "question": "Which of the following can be used to read an XML document into a DataSet?",
    "options": ["DataSet.ReadXml()", "DataSet.LoadXml()", "XmlDocument.Read()", "XmlSerializer.Read()"],
    "correct": "DataSet.ReadXml()"
  },
  {
    "question": "Which control in Windows Forms allows the user to select one item from a list?",
    "options": ["ListBox", "ComboBox", "TextBox", "Label"],
    "correct": "ComboBox"
  },
  {
    "question": "In C#, which keyword is used to inherit a class?",
    "options": ["extends", "inherits", ":", "implements"],
    "correct": ":"
  },
  {
    "question": "Which event is triggered when a form is loaded in Windows Forms?",
    "options": ["Click", "Load", "TextChanged", "Activated"],
    "correct": "Load"
  },
  {
    "question": "Which of the following is true about static classes in C#?",
    "options": ["Can be instantiated", "Can contain only static members", "Can inherit another class", "Can contain abstract methods"],
    "correct": "Can contain only static members"
  },
  {
    "question": "Predict the Output: int[] arr={1,2,3}; Console.WriteLine(arr.Length);",
    "options": ["2", "3", "0", "Error"],
    "correct": "3"
  },
  {
    "question": "What happens if a DataSet is filled but table name is incorrect when binding GridView?",
    "options": ["Shows empty data", "Runtime error", "Compilation error", "Previous data shown"],
    "correct": "Shows empty data"
  },
  {
    "question": "Predict the Output: int x=10; int y=3; Console.WriteLine(x%y);",
    "options": ["1", "0", "3", "10"],
    "correct": "1"
  },
  {
    "question": "Predict the Output: DataSet ds=new DataSet(); ds.ReadXml(\"students.xml\");",
    "options": ["Loads XML if file exists", "Compile-time error", "Runtime error if XML malformed", "Both A and C"],
    "correct": "Both A and C"
  },
  {
    "question": "Predict the Output: XmlDocument doc=new XmlDocument(); doc.LoadXml(\"<student><name>John</name></student>\"); Console.WriteLine(doc.DocumentElement.Name);",
    "options": ["student", "name", "John", "Error"],
    "correct": "student"
  },
  {
    "question": "Which property of a GridView is used to bind data in ASP.NET?",
    "options": ["DataSourceID", "DataSource", "DataBind()", "Both B and C"],
    "correct": "Both B and C"
  },
  {
    "question": "Which control in ASP.NET allows multiple selections from a list?",
    "options": ["DropDownList", "TextBox", "RadioButton", "CheckBoxList"],
    "correct": "CheckBoxList"
  },
  {
    "question": "Which ASP.NET state management mechanism stores data on the client in a small file managed by the browser?",
    "options": ["Session", "ViewState", "Application", "Cookies"],
    "correct": "Cookies"
  },
  {
    "question": "Which method of DataSet writes XML schema and data to a file?",
    "options": ["WriteXmlSchema()", "WriteXml()", "ReadXml()", "ReadXmlSchema()"],
    "correct": "WriteXmlSchema()"
  },
  {
    "question": "Which method is used to start a transaction in ADO.NET?",
    "options": ["BeginTransaction()", "StartTransaction()", "Commit()", "Rollback()"],
    "correct": "BeginTransaction()"
  },
  {
    "question": "What is the purpose of SqlDataAdapter in ADO.NET?",
    "options": ["Connect to database", "Fill a DataSet and update database", "Execute stored procedure", "Bind data to web control"],
    "correct": "Fill a DataSet and update database"
  },
  {
    "question": "Which statement is true about ViewState in ASP.NET?",
    "options": ["Stored on server", "Stored on client", "Cannot store objects", "Only used for sessions"],
    "correct": "Stored on client"
  },
  {
    "question": "Which C# keyword is used to declare a class that cannot be instantiated?",
    "options": ["sealed", "static", "abstract", "virtual"],
    "correct": "abstract"
  },
  {
    "question": "Which class in ADO.NET is used to execute SQL queries that return data?",
    "options": ["SqlCommand", "SqlDataAdapter", "SqlDataReader", "DataSet"],
    "correct": "SqlDataReader"
  },
  {
    "question": "Which XML node type represents the actual content between tags?",
    "options": ["Attribute", "Element", "Comment", "Declaration"],
    "correct": "Element"
  },
  {
    "question": "Identify the error: int x; x = \"10\";",
    "options": ["No error", "Type mismatch", "Syntax error", "Runtime error"],
    "correct": "Type mismatch"
  },
  {
    "question": "What will be printed? char ch='a'; if(ch>='A' && ch<='Z') Console.WriteLine(\"Upper\"); else Console.WriteLine(\"Lower\");",
    "options": ["Upper", "Lower", "Error", "No output"],
    "correct": "Lower"
  },
  {
    "question": "What happens if you try to instantiate a static class in C#?",
    "options": ["Allowed", "Compile-time error", "Runtime exception", "Produces default object"],
    "correct": "Compile-time error"
  },
  {
    "question": "Identify error: SqlConnection con = new SqlConnection(); con.ConnectionString=@”xxx”; SqlCommand cmd = new SqlCommand(\"SELECT * FROM tbl\"); SqlDataReader dr = cmd.ExecuteReader();",
    "options": ["Connection not opened", "SqlCommand syntax wrong", "ExecuteReader() wrong", "No error"],
    "correct": "Connection not opened"
  },
  {
    "question": "Predict the output: string s=\"Hello\"; Console.WriteLine(s[1]);",
    "options": ["H", "e", "l", "o"],
    "correct": "e"
  }
]

