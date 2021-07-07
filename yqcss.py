#coding: utf-8
#!/usr/bin/python3
# 雅詩 CSS 相容性最佳化工具 (PY3)
# by 神楽坂雅詩
import sys
print("<YQCSS>")
types = ["-webkit-", "-moz-", "-ms-", "-o-"]
def keyframes(fileline):
    working = False
    nowline = list()
    newfile = list()
    nowtype = list()
    for typen in types:
        nowtype.append("@" + typen + "keyframes")
    nowjob = "@keyframes"
    for line in fileline:
        if nowjob in line:
            print(line)
            working = True
        if working:
            nowline.append(line)
        newfile.append(line)
        if len(line) == 0 or line[0:1] != "}":
            continue
        working = False
        for newtype in nowtype:
            if len(nowline) == 0:
                continue
            nowline0 = nowline[0]
            nowline[0] = nowline[0].replace(nowjob, newtype)
            for newline in nowline:
                newfile.append(newline)
            nowline[0] = nowline0
        nowline = list()
    return newfile

def animation(fileline):
    newfile = list()
    nowtype = list()
    for typen in types:
        nowtype.append(typen + "animation")
    nowjob = "animation"
    for line in fileline:
        newfile.append(line)
        if nowjob in line:
            print(line)
            for newtype in nowtype:
                newfile.append(line.replace(nowjob, newtype))
    return newfile

def transform(fileline):
    newfile = list()
    nowtype = list()
    for typen in types:
        nowtype.append(typen + "transform")
    nowjob = "transform"
    for line in fileline:
        newfile.append(line)
        if nowjob in line:
            print(line)
            newfile.append(line)
            for newtype in nowtype:
                newfile.append(line.replace(nowjob, newtype))
    return newfile

if len(sys.argv) < 3 :
    print("help: css-compatibility.py <in.css> <out.css>")
    quit()
f = open(sys.argv[1], 'r', encoding='utf-8')
fileline = list()
for line in f.readlines():
    fileline.append(line)
f.close()

fileline = keyframes(fileline)
fileline = animation(fileline)
fileline = transform(fileline)

fw = open(sys.argv[2], 'w')
for line in fileline:
    line = line.replace("\r", "")
    line = line.replace("\n", "")
    fw.write(line)
    fw.write("\n")
fw.close()
print("</YQCSS>")