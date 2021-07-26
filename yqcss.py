#coding: utf-8
#!/usr/bin/python3
# 雅詩 CSS 相容性最佳化工具 (PY3)
# by 神楽坂雅詩
import os
import sys
types = ["-webkit-", "-moz-", "-ms-", "-o-"]


def keyframes(fileline: list) -> list:
    working = False
    nowline = list()
    newfile = list()
    nowjob = "@keyframes"
    nowtype = [nowjob]
    for typen in types:
        nowtype.append("@" + typen + "keyframes")
    lc = -1
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
                        nline = nowline.copy()
                        nline[0] = nowline[0].replace(nowjob, newtype)
                        # print(nowline[0] + "->" + nline[0])
                        for l in nline:
                            newfile.append(l)
                    nowline = []
        else:
            newfile.append(line)
    return newfile


def animation(fileline: list) -> list:
    newfile = list()
    nowtype = list()
    for typen in types:
        nowtype.append(typen + "animation")
    nowjob = "animation"
    for line in fileline:
        newfile.append(line)
        if nowjob in line:
            for newtype in nowtype:
                out = line.replace(nowjob, newtype)
                newfile.append(out)
                # print(line + "->" + out)
    return newfile


def transform(fileline: list) -> list:
    newfile = list()
    nowtype = list()
    for typen in types:
        nowtype.append(typen + "transform")
    nowjob = "transform"
    for line in fileline:
        newfile.append(line)
        if nowjob in line:
            for newtype in nowtype:
                out = line.replace(nowjob, newtype)
                newfile.append(out)
                # print(line + "->" + out)
    return newfile


if len(sys.argv) < 3:
    print("help: yqcss.py <in.css> <out.css>")
    print("or: yqcss.py <cssdir> <outdir>")
    quit()

fileList = []
dirpath = sys.argv[1]
dirpathTo = sys.argv[2]

if os.path.isdir(dirpath):
    print("[YQCSS] Dir: " + dirpath)
    listdir = os.listdir(dirpath)
    for fname in listdir:
        fnameArr = fname.split('.')
        extName = fnameArr[-1]
        if extName == "css" and os.path.isdir(fname) == False:
            pathFT = [os.path.join(dirpath, fname),
                      os.path.join(dirpathTo, fname)]
            fileList.append(pathFT)
elif os.path.isfile(dirpath):
    fileList = [[dirpath, dirpathTo]]

for pathFT in fileList:
    fpath = pathFT[0]
    tpath = pathFT[1]
    print("[YQCSS] File: " + fpath + ' -> ' + tpath)

    f = open(fpath, 'r', encoding='utf-8')
    fileline = list()
    for line in f.readlines():
        fileline.append(line)
    f.close()

    oldLength = len(fileline)

    fileline = keyframes(fileline)
    fileline = animation(fileline)
    fileline = transform(fileline)

    newLength = len(fileline)
    lineadd = newLength - oldLength
    linestr = str(lineadd)
    if lineadd >= 0:
        linestr = "+" + linestr
    else:
        linestr += " [!]"

    fw = open(tpath, 'w')
    for line in fileline:
        line = line.replace("\r", "")
        line = line.replace("\n", "")
        fw.write(line)
        fw.write("\n")
    fw.close()

    print("[YQCSS] Line: " + str(oldLength) +
          " -> " + str(newLength) + " ( "+linestr+" )")
