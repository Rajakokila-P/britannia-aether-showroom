"""Validate 15-area documentation, local Markdown links and showroom alias parity."""
from pathlib import Path
import re
root = Path(__file__).resolve().parents[1]
required = ['README.md', 'AGENTS.md'] + ['docs/' + name + '.md' for name in ['PRD','DESIGN','ARCHITECTURE','DATABASE','API','PLAN','SETUP','FEATURES','AUTHENTICATION','MCP','INTEGRATIONS','TESTING','DEBUGGING','COVERAGE','VERIFICATION']]
errors = []
for name in required:
    path = root / name
    if not path.is_file() or len(path.read_text().strip()) < 100:
        errors.append('Missing or empty documentation: ' + name)
# Historical reports may refer to past audit files excluded from the repository.
for name in required:
    path = root / name
    if not path.is_file():
        continue
    for link in re.findall(r'\]\(([^)]+)\)', path.read_text()):
        if '://' in link or link.startswith(('#', 'mailto:')):
            continue
        if not (path.parent / link.split('#')[0]).exists():
            errors.append(f'{name}: missing documentation target {link}')
if (root/'site/index.html').read_bytes() != (root/'site/showroom.html').read_bytes():
    # The legacy URL deliberately has a canonical tag pointing to the homepage;
    # current source copies otherwise match in this project.
    errors.append('Showroom alias differs: review index.html versus showroom.html')
if errors:
    raise SystemExit('\n'.join(errors))
print('PASS: all 15 documentation areas, current-document links and showroom alias parity')
