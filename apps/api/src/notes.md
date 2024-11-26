# Notes

## Goals

1. Create enough functionality where this program can contribute to itself with some user intervention (turing complete with intervention)
2. Expand on functionality to make process easier

## Sub Goals

1. Assume that the prompt is to contribute to a code base
2. Digest the code repository or relevant portion of the repository
   a. Clone the repository (skipping this for now, using local repo)
   b. Perform code analysis on a particular directory
3. Create changes
   a. Provision a location of the file system for the AI to write changes (same as the directory above whitelist for development)
   b. Attach prompt and context to request
4. Create feedback loop (manual intervention / guide rail to prevent infinite loop)
   a. Run commands such as test, lint, build and pipe into context for another change request (with a slightly different prompt)
   b. Create condition to exit feedback loop
5. Commit and push changes (manual at first)
6. Continue feedback loop (triggered by PR activity)
