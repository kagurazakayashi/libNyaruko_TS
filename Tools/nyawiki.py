#coding: utf-8
#!/usr/bin/python3
# 雅詩 Wiki 生成器 (PY3)

import sys
import os
import opencc

if len(sys.argv) <= 2:
    exit(1)

fromDir = sys.argv[1]
toDir = sys.argv[2]
pyname: str = "["+sys.argv[0]+"] "
opencconv = opencc.OpenCC('tw2sp.json')

def genMD(fromFile: str, toFile: str) -> str:
    f = open(fromFile, 'r', encoding="utf-8", newline="\n")
    mode:int = -1
    (path, filename) = os.path.split(fromFile)
    tmpStr:str = "# " + filename + "\n"
    newFile: list[str] = []
    for line in f.readlines():
        line = line.strip()
        line = opencconv.convert(line)
        if mode == -1:
            tmpStr += "**" + line.replace("//", "") + "**\n\n"
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
            newFile.append(tmpStr)
            tmpStr = ""
            mode = 0
        if mode > 0 and "*/" in line:
            mode = 3
    f.close()
    newFileStr:str = "\n".join(newFile)
    fw = open(toFile, "w", encoding="utf-8", newline="\n")
    fw.write(newFileStr)
    fw.close()

if not os.path.isdir(fromDir):
    os.makedirs(fromDir)
if not os.path.isdir(toDir):
    os.makedirs(toDir)
listdir:list[str] = os.listdir(fromDir)
for name in listdir:
    (file, ext) = os.path.splitext(name)
    if ext == ".ts":
        fromPath:str = fromDir + "/" + name
        toPath:str = toDir + "/" + file + ".md"
        print(pyname, fromPath, " -> ", toPath)
        genMD(fromPath, toPath)