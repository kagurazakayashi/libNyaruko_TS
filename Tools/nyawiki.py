#coding: utf-8
#!/usr/bin/python3
# 雅詩 Wiki 生成器 (PY3)

import sys
import opencc

if len(sys.argv) <= 1:
    exit(1)

f = open(sys.argv[1], 'r', encoding="utf-8", newline="\n")
result = list()
mode = -1
tmpStr = ""
print("# " + sys.argv[1].strip())
opencconv = opencc.OpenCC('tw2sp.json')
for line in f.readlines():
    line = line.strip()
    line = opencconv.convert(line)
    if mode == -1:
        tmpStr = "**" + line.replace("//", "").strip() + "**\n\n"
        mode = 0
    elif mode == 0:
        if "/**" in line:
            mode = 1
    elif mode == 1:
        line = line.replace("* ", "")
        tmpStr += "## " + line + "\n- `<[code]>`\n"
        mode = 2
    elif mode == 2 and "*/" not in line:
        line = line.replace("@param ", "")
        line = line.replace("@return ", "")
        line = line.replace("{", "`")
        line = line.replace("}", "`")
        line = line.replace("* ", "")
        tmpStr += "  - " + line + "\n"
    elif mode == 3:
        tmpStr = tmpStr.replace("<[code]>", line.replace(" {", ""))
        print(tmpStr)
        tmpStr = ""
        mode = 0
    if mode > 0 and "*/" in line:
        mode = 3
f.close()