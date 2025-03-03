export interface TemplateSection {
  id: string;
  title: string;
  defaultContent?: string;
}

export interface TemplateType {
  id: string;
  name: string;
  description: string;
  sections: TemplateSection[];
}

export const templates: TemplateType[] = [
  {
    id: "software-design",
    name: "Software Design Document",
    description:
      "A comprehensive document for software architecture and implementation details.",
    sections: [
      {
        id: "introduction",
        title: "1. Introduction",
        defaultContent:
          "## 1.1 Purpose\n\nDescribe the purpose of this software and this document.\n\n## 1.2 Scope\n\nDefine the scope and boundaries of the software system.",
      },
      {
        id: "architecture",
        title: "2. System Architecture",
        defaultContent:
          "## 2.1 Overview\n\nProvide a high-level overview of the system architecture.\n\n## 2.2 Components\n\nDescribe the major components of the system.",
      },
      {
        id: "data-design",
        title: "3. Data Design",
        defaultContent:
          "## 3.1 Data Model\n\nDescribe the data model, including entities and relationships.\n\n## 3.2 Database Design\n\nDetail the database schema and structure.",
      },
      {
        id: "interface",
        title: "4. Interface Design",
        defaultContent:
          "## 4.1 User Interface\n\nDescribe the user interface design and user experience flow.\n\n## 4.2 API Design\n\nDetail the API endpoints and their functionality.",
      },
      {
        id: "implementation",
        title: "5. Implementation Details",
        defaultContent:
          "## 5.1 Programming Languages\n\nList the programming languages and frameworks to be used.\n\n## 5.2 Development Environment\n\nDescribe the development environment and tools.",
      },
      {
        id: "testing",
        title: "6. Testing Strategy",
        defaultContent:
          "## 6.1 Testing Approach\n\nDescribe the overall testing approach.\n\n## 6.2 Test Cases\n\nOutline key test cases and scenarios.",
      },
      {
        id: "deployment",
        title: "7. Deployment Plan",
        defaultContent:
          "## 7.1 Deployment Strategy\n\nDescribe how the software will be deployed.\n\n## 7.2 Infrastructure Requirements\n\nDetail the infrastructure needed for deployment.",
      },
    ],
  },
  {
    id: "technical-spec",
    name: "Technical Specification",
    description:
      "A detailed technical specification for implementing a specific feature or component.",
    sections: [
      {
        id: "overview",
        title: "1. Overview",
        defaultContent:
          "## 1.1 Background\n\nProvide background information on the feature or component.\n\n## 1.2 Goals\n\nList the goals and objectives of this technical specification.",
      },
      {
        id: "requirements",
        title: "2. Requirements",
        defaultContent:
          "## 2.1 Functional Requirements\n\nList the functional requirements for this feature.\n\n## 2.2 Non-functional Requirements\n\nList the non-functional requirements such as performance, security, etc.",
      },
      {
        id: "design",
        title: "3. Design",
        defaultContent:
          "## 3.1 High-level Design\n\nDescribe the high-level design of the feature.\n\n## 3.2 Detailed Design\n\nProvide detailed design specifications.",
      },
      {
        id: "implementation",
        title: "4. Implementation Plan",
        defaultContent:
          "## 4.1 Tasks\n\nBreak down the implementation into specific tasks.\n\n## 4.2 Timeline\n\nProvide an estimated timeline for implementation.",
      },
      {
        id: "testing",
        title: "5. Testing Plan",
        defaultContent:
          "## 5.1 Test Strategy\n\nDescribe the testing strategy for this feature.\n\n## 5.2 Test Cases\n\nOutline specific test cases.",
      },
      {
        id: "risks",
        title: "6. Risks and Mitigations",
        defaultContent: "Identify potential risks and their mitigations.",
      },
    ],
  },
  {
    id: "system-design",
    name: "System Design Document",
    description:
      "A document that outlines the design of an entire system, including hardware and software components.",
    sections: [
      {
        id: "introduction",
        title: "1. Introduction",
        defaultContent:
          "## 1.1 Purpose\n\nDescribe the purpose of this system and this document.\n\n## 1.2 Scope\n\nDefine the scope and boundaries of the system.",
      },
      {
        id: "system-overview",
        title: "2. System Overview",
        defaultContent:
          "## 2.1 System Description\n\nProvide a high-level description of the system.\n\n## 2.2 System Context\n\nDescribe how the system fits into the larger ecosystem.",
      },
      {
        id: "architecture",
        title: "3. System Architecture",
        defaultContent:
          "## 3.1 Architectural Style\n\nDescribe the architectural style or pattern used.\n\n## 3.2 Subsystems\n\nBreak down the system into subsystems or components.",
      },
      {
        id: "hardware",
        title: "4. Hardware Architecture",
        defaultContent:
          "## 4.1 Hardware Components\n\nDescribe the hardware components of the system.\n\n## 4.2 Network Architecture\n\nDetail the network architecture if applicable.",
      },
      {
        id: "software",
        title: "5. Software Architecture",
        defaultContent:
          "## 5.1 Software Components\n\nDescribe the software components of the system.\n\n## 5.2 Interfaces\n\nDetail the interfaces between components.",
      },
      {
        id: "data",
        title: "6. Data Architecture",
        defaultContent:
          "## 6.1 Data Model\n\nDescribe the data model used by the system.\n\n## 6.2 Data Flow\n\nDetail how data flows through the system.",
      },
      {
        id: "security",
        title: "7. Security Architecture",
        defaultContent:
          "## 7.1 Security Requirements\n\nList the security requirements for the system.\n\n## 7.2 Security Controls\n\nDescribe the security controls implemented.",
      },
      {
        id: "performance",
        title: "8. Performance",
        defaultContent:
          "## 8.1 Performance Requirements\n\nList the performance requirements for the system.\n\n## 8.2 Scalability\n\nDescribe how the system will scale.",
      },
      {
        id: "deployment",
        title: "9. Deployment Architecture",
        defaultContent:
          "## 9.1 Deployment Strategy\n\nDescribe how the system will be deployed.\n\n## 9.2 Infrastructure Requirements\n\nDetail the infrastructure needed for deployment.",
      },
    ],
  },
  {
    id: "api-design",
    name: "API Design Document",
    description:
      "A document that specifies the design of an API, including endpoints, request/response formats, and authentication.",
    sections: [
      {
        id: "introduction",
        title: "1. Introduction",
        defaultContent:
          "## 1.1 Purpose\n\nDescribe the purpose of this API and this document.\n\n## 1.2 Scope\n\nDefine the scope and boundaries of the API.",
      },
      {
        id: "overview",
        title: "2. API Overview",
        defaultContent:
          "## 2.1 API Description\n\nProvide a high-level description of the API.\n\n## 2.2 Use Cases\n\nDescribe the main use cases for the API.",
      },
      {
        id: "authentication",
        title: "3. Authentication and Authorization",
        defaultContent:
          "## 3.1 Authentication Methods\n\nDescribe the authentication methods supported by the API.\n\n## 3.2 Authorization\n\nDetail how authorization is handled.",
      },
      {
        id: "endpoints",
        title: "4. API Endpoints",
        defaultContent:
          "## 4.1 Endpoint List\n\nList all the API endpoints.\n\n## 4.2 Endpoint Details\n\nProvide detailed information for each endpoint, including parameters, request/response formats, and examples.",
      },
      {
        id: "data-models",
        title: "5. Data Models",
        defaultContent: "Describe the data models used by the API.",
      },
      {
        id: "error-handling",
        title: "6. Error Handling",
        defaultContent:
          "## 6.1 Error Codes\n\nList the error codes returned by the API.\n\n## 6.2 Error Responses\n\nDescribe the format of error responses.",
      },
      {
        id: "rate-limiting",
        title: "7. Rate Limiting",
        defaultContent:
          "Describe how rate limiting is implemented for the API.",
      },
      {
        id: "versioning",
        title: "8. Versioning",
        defaultContent: "Describe the versioning strategy for the API.",
      },
      {
        id: "security",
        title: "9. Security Considerations",
        defaultContent: "Describe the security considerations for the API.",
      },
    ],
  },
];
