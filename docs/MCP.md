# MCP connection decision
Status: not applicable. No Model Context Protocol client/server, AI-agent runtime, MCP credentials or tool permissions are shipped with the website.

## Rationale
The showroom reads bundled public content and performs local browser interactions. It does not need an agent to query a database, browse the web or operate external tools. AI-generated vehicle imagery does not imply an operational AI integration.

## Verification and operations
No MCP startup command, config file, transport, server URL or retry loop exists. There are no MCP requests to test. Coding-assistant rules are in the root AGENTS.md; those instructions are not a runtime agent system.

## Future gate
If an MCP feature is later requested, define its user purpose, deployment process, allowed tools, authentication, least privilege, secrets, logging/redaction, timeouts, failure handling and human confirmation boundaries. Test unauthorized access and destructive-tool restrictions before enabling it. Do not add a placeholder server and label it connected.
