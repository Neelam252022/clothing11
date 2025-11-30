- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: '18'
    # cache: 'npm' removed - no lock file

- name: Install dependencies
  run: npm install  
