#coding: utf-8
#!/usr/bin/python3
# 雅詩 CSS 相容性最佳化工具 (PY3)
# by 神楽坂雅詩
from io import TextIOWrapper
import os
import sys
types: list[str] = ["-webkit-", "-moz-", "-ms-", "-o-"]


def keyframes(fileline: list[str]) -> list[str]:
    working: bool = False
    nowline: list[str] = list()
    newfile: list[str] = list()
    nowjob: str = "@keyframes"
    nowtype: list[str] = [nowjob]
    for typen in types:
        nowtype.append("@" + typen + "keyframes")
    lc: int = -1
    for line in fileline:
        if nowjob in line:
            working = True
        if working:
            nowline.append(line)
            for char in line:
                if char == '{':
                    if lc < 0:
                        lc = 0
                    lc += 1
                elif char == '}':
                    lc -= 1
                if lc == 0:
                    lc = -1
                    working = False
                    for newtype in nowtype:
                        nline: list[str] = nowline.copy()
                        nline[0] = nowline[0].replace(nowjob, newtype)
                        # print(nowline[0] + "->" + nline[0])
                        for l in nline:
                            newfile.append(l)
                    nowline = []
        else:
            newfile.append(line)
    return newfile


def animation(fileline: list[str]) -> list[str]:
    newfile: list[str] = list()
    nowtype: list[str] = list()
    for typen in types:
        nowtype.append(typen + "animation")
    nowjob: str = "animation"
    for line in fileline:
        newfile.append(line)
        if nowjob in line:
            for newtype in nowtype:
                out: str = line.replace(nowjob, newtype)
                newfile.append(out)
                # print(line + "->" + out)
    return newfile


def transform(fileline: list[str]) -> list[str]:
    newfile: list[str] = list()
    nowtype: list[str] = list()
    for typen in types:
        nowtype.append(typen + "transform")
    nowjob: str = "transform"
    for line in fileline:
        newfile.append(line)
        if nowjob in line:
            for newtype in nowtype:
                out: str = line.replace(nowjob, newtype)
                newfile.append(out)
                # print(line + "->" + out)
    return newfile


def compression(fileline: list[str]) -> list[str]:
    newfile: list[str] = list()
    for line in fileline:
        out: str = line.strip()
        newfile.append(out)
    return newfile


if len(sys.argv) < 3:
    print("help: yqcss.py <in.css> <out.css> [-z]")
    print("or: yqcss.py <cssdir> <outdir> [-z]")
    print("z: compression")
    quit()

fileList: list[str] = []
dirpath: str = sys.argv[1]
dirpathTo: str = sys.argv[2]
comp: bool = False
if len(sys.argv) == 4 and sys.argv[3] == "-z":
    comp = True

if os.path.isdir(dirpath):
    print("[YQCSS] Dir: " + dirpath)
    listdir: list[str] = os.listdir(dirpath)
    for fname in listdir:
        fnameArr: list[str] = fname.split('.')
        extName: str = fnameArr[-1]
        if extName == "css" and os.path.isdir(fname) == False:
            pathFT: list[str] = [os.path.join(
                dirpath, fname), os.path.join(dirpathTo, fname)]
            fileList.append(pathFT)
elif os.path.isfile(dirpath):
    fileList = [[dirpath, dirpathTo]]

for i, pathFT in enumerate(fileList):
    fpath: str = pathFT[0]
    tpath: str = pathFT[1]
    zstr: str = ""
    if comp:
        zstr = " (z)"
    print("[YQCSS] File" + str(i+1) + ": " + fpath + ' -> ' + tpath + zstr)

    f: TextIOWrapper = open(fpath, 'r', encoding='utf-8')
    fileline: list[str] = list()
    oldLength: int = 0
    oldSize: int = 0
    for line in f.readlines():
        fileline.append(line)
        oldLength += 1
        oldSize += len(line)
    f.close()

    fileline = keyframes(fileline)
    fileline = animation(fileline)
    fileline = transform(fileline)
    if comp:
        fileline = compression(fileline)

    fullfile: str = ''
    for line in fileline:
        if comp:
            fullfile += line
        else:
            fullfile += line.replace("\r", "").replace("\n", "") + "\n"

    fw: TextIOWrapper = open(tpath, 'w')
    fw.write(fullfile)
    fw.close()

    newLength: int = len(fileline)
    newSize: int = len(fullfile)
    lineadd: int = newLength - oldLength
    sizeadd: int = newSize - oldSize
    linestr: str = str(lineadd)
    sizestr: str = str(sizeadd)
    if lineadd >= 0:
        linestr = "+" + linestr
    else:
        linestr += " [!]"
    if sizeadd >= 0:
        sizestr = "+" + sizestr

    print("[YQCSS] Line: " + str(oldLength) +
          " -> " + str(newLength) + " ( "+linestr+" ), Char: " + str(oldSize) +
          " -> " + str(newSize) + " ( "+sizestr+" )")
