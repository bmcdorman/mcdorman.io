# Overview
Designed and implemented Semio Studio, a comprehensive suite of web-based tools for social robot designers to rapidly create, test, and deploy a variety of artifacts, including:

 - Conversational dialog
 - Parameterized animations, including physical and virtual (i.e., on-screen) joints.
 - Map annotations (e.g., zones, speed limits, etc.)
 - Intents with custom data types (e.g., structures and enumerations)
 - Audio playback and referencing

Studio is capable of connecting directly to a robot running Semio's on-robot software for live testing and playback of skills, animations, and more.

# Front-end
Front-end implemented in React and TypeScript. WebSockets utilized for realtime updates from backend and communication with robots.

# Back-end
Backend implemented in TypeScript and RethinkDB, with realtime record updates (similar to Google Docs). Deployed to a Kubernetes cluster on Google Cloud Platform.