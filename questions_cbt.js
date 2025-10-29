const quizData = [
  {
    "question": "What is the default value of a bool variable in C#?",
    "options": [
      "A. TRUE",
      "B. FALSE",
      "C. 0",
      "D. null"
    ],
    "correct": "B. FALSE"
  },
  {
    "question": "Which validator ensures the user enters a number within a specified range in ASP.NET?",
    "options": [
      "A. RangeValidator",
      "B. RequiredFieldValidator",
      "C. RegularExpressionValidator",
      "D. CompareValidator"
    ],
    "correct": "A. RangeValidator"
  },
  {
    "question": "How can you retrieve the value of a cookie in ASP.NET?",
    "options": [
      "A. Request.Cookies[\"name\"]",
      "B. Response.Cookies[\"name\"]",
      "C. Session[\"name\"]",
      "D. ViewState[\"name\"]"
    ],
    "correct": "A. Request.Cookies[\"name\"]"
  },
  {
    "question": "Which class in .NET is used to serialize an object into XML?",
    "options": [
      "A. XmlDocument",
      "B. XmlSerializer",
      "C. XmlReader",
      "D. XmlWriter"
    ],
    "correct": "B. XmlSerializer"
  },
  {
    "question": "What is the main purpose of XML serialization in .NET?",
    "options": [
      "A. To store object data in binary format",
      "B. To convert an object into an XML format for storage or transfer",
      "C. To validate XML against XSD",
      "D. To encrypt XML data"
    ],
    "correct": "B. To convert an object into an XML format for storage or transfer"
  },
  {
    "question": "Which of the following can be used to read an XML document into a DataSet?",
    "options": [
      "A. DataSet.ReadXml()",
      "B. DataSet.LoadXml()",
      "C. XmlDocument.Read()",
      "D. XmlSerializer.Read()"
    ],
    "correct": "A. DataSet.ReadXml()"
  },
  {
    "question": "Which control in Windows Forms allows the user to select one item from a list?",
    "options": [
      "A. ListBox",
      "B. ComboBox",
      "C. TextBox",
      "D. Label"
    ],
    "correct": "B. ComboBox"
  },
  {
    "question": "In C#, which keyword is used to inherit a class?",
    "options": [
      "A. extends",
      "B. inherits",
      "C. :",
      "D. implements"
    ],
    "correct": "C. :"
  },
  {
    "question": "Which event is triggered when a form is loaded in Windows Forms?",
    "options": [
      "A. Click",
      "B. Load",
      "C. TextChanged",
      "D. Activated"
    ],
    "correct": "B. Load"
  },
  {
    "question": "Which of the following is true about static classes in C#?",
    "options": [
      "A. Can be instantiated",
      "B. Can contain only static members",
      "C. Can inherit another class",
      "D. Can contain abstract methods"
    ],
    "correct": "B. Can contain only static members"
  },
  {
    "question": "Predict the Output: int[] arr={1,2,3}; Console.WriteLine(arr.Length);",
    "options": [
      "A. 2",
      "B. 3",
      "C. 0",
      "D. Error"
    ],
    "correct": "B. 3"
  },
  {
    "question": "What happens if a DataSet is filled but table name is incorrect when binding GridView?",
    "options": [
      "A. Shows empty data",
      "B. Runtime error",
      "C. Compilation error",
      "D. Previous data shown"
    ],
    "correct": "A. Shows empty data"
  },
  {
    "question": "Predict the Output: int x=10; int y=3; Console.WriteLine(x%y);",
    "options": [
      "A. 1",
      "B. 0",
      "C. 3",
      "D. 10"
    ],
    "correct": "A. 1"
  },
  {
    "question": "Predict the Output: DataSet ds=new DataSet(); ds.ReadXml(\"students.xml\");",
    "options": [
      "A. Loads XML if file exists",
      "B. Compile-time error",
      "C. Runtime error if XML malformed",
      "D. Both A and C"
    ],
    "correct": "D. Both A and C"
  },
  {
    "question": "Predict the Output: XmlDocument doc=new XmlDocument(); doc.LoadXml(\"<student><name>John</name></student>\"); Console.WriteLine(doc.DocumentElement.Name);",
    "options": [
      "A. student",
      "B. name",
      "C. John",
      "D. Error"
    ],
    "correct": "A. student"
  },
  {
    "question": "Which property of a GridView is used to bind data in ASP.NET?",
    "options": [
      "A. DataSourceID",
      "B. DataSource",
      "C. DataBind()",
      "D. Both B and C"
    ],
    "correct": "D. Both B and C"
  },
  {
    "question": "Which control in ASP.NET allows multiple selections from a list?",
    "options": [
      "A. DropDownList",
      "B. TextBox",
      "C. RadioButton",
      "D. CheckBoxList"
    ],
    "correct": "D. CheckBoxList"
  },
  {
    "question": "Which ASP.NET state management mechanism stores data on the client in a small file managed by the browser?",
    "options": [
      "A. Session",
      "B. ViewState",
      "C. Application",
      "D. Cookies"
    ],
    "correct": "D. Cookies"
  },
  {
    "question": "Which method of DataSet writes XML schema and data to a file?",
    "options": [
      "A. WriteXmlSchema()",
      "B. WriteXml()",
      "C. ReadXml()",
      "D. ReadXmlSchema()"
    ],
    "correct": "A. WriteXmlSchema()"
  },
  {
    "question": "Which method is used to start a transaction in ADO.NET?",
    "options": [
      "A. BeginTransaction()",
      "B. StartTransaction()",
      "C. Commit()",
      "D. Rollback()"
    ],
    "correct": "A. BeginTransaction()"
  },
  {
    "question": "What is the purpose of SqlDataAdapter in ADO.NET?",
    "options": [
      "A. Connect to database",
      "B. Fill a DataSet and update database",
      "C. Execute stored procedure",
      "D. Bind data to web control"
    ],
    "correct": "B. Fill a DataSet and update database"
  },
  {
    "question": "Which statement is true about ViewState in ASP.NET?",
    "options": [
      "A. Stored on server",
      "B. Stored on client",
      "C. Cannot store objects",
      "D. Only used for sessions"
    ],
    "correct": "B. Stored on client"
  },
  {
    "question": "Which C# keyword is used to declare a class that cannot be instantiated?",
    "options": [
      "A. sealed",
      "B. static",
      "C. abstract",
      "D. virtual"
    ],
    "correct": "C. abstract"
  },
  {
    "question": "Which class in ADO.NET is used to execute SQL queries that return data?",
    "options": [
      "A. SqlCommand",
      "B. SqlDataAdapter",
      "C. SqlDataReader",
      "D. DataSet"
    ],
    "correct": "C. SqlDataReader"
  },
  {
    "question": "Which XML node type represents the actual content between tags?",
    "options": [
      "A. Attribute",
      "B. Element",
      "C. Comment",
      "D. Declaration"
    ],
    "correct": "B. Element"
  },
  {
    "question": "Identify the error: int x; x = \"10\";",
    "options": [
      "A. No error",
      "B. Type mismatch",
      "C. Syntax error",
      "D. Runtime error"
    ],
    "correct": "B. Type mismatch"
  },
  {
    "question": "What will be printed? char ch='a'; if(ch>='A' && ch<='Z') Console.WriteLine(\"Upper\"); else Console.WriteLine(\"Lower\");",
    "options": [
      "A. Upper",
      "B. Lower",
      "C. Error",
      "D. No output"
    ],
    "correct": "B. Lower"
  },
  {
    "question": "What happens if you try to instantiate a static class in C#?",
    "options": [
      "A. Allowed",
      "B. Compile-time error",
      "C. Runtime exception",
      "D. Produces default object"
    ],
    "correct": "B. Compile-time error"
  },
  {
    "question": "Identify error: SqlConnection con = new SqlConnection(); con.ConnectionString=@\"xxx\"; SqlCommand cmd = new SqlCommand(\"SELECT * FROM tbl\"); SqlDataReader dr = cmd.ExecuteReader();",
    "options": [
      "A. Connection not opened",
      "B. SqlCommand syntax wrong",
      "C. ExecuteReader() wrong",
      "D. No error"
    ],
    "correct": "A. Connection not opened"
  },
  {
    "question": "Predict the output: string s=\"Hello\"; Console.WriteLine(s[1]);",
    "options": [
      "A. H",
      "B. e",
      "C. l",
      "D. o"
    ],
    "correct": "B. e"
  }
]