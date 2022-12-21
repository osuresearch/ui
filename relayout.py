# Quick python hack

import os
import re
from glob import glob

# Convert it all from Component/index.(test|stories).tsx
# to Component/Component.(test|stories).tsx
# Easier to manage via VSCode
files = glob('src/atoms/*/index.**')

for file in files:
  dir = os.path.dirname(file)
  base = os.path.basename(dir)

  with open(dir + '/index.ts', 'w') as f:
    f.write('export * from \'./{}\';'.format(base))

  new_name = file.replace('index', base)
  os.rename(file, new_name)
  print(base)

  # os.rename(file, )