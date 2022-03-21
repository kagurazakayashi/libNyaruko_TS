#coding: utf-8
#!/usr/bin/python3
# 雅詩 CSS JS 程式碼嵌入器 (PY3)
import sys


def loadfiletext(filename: str) -> str:
    linei = 0
    line = ""
    lines = ""
    f = open(filename, "r", encoding="UTF-8")
    try:
        line = f.readline()
        lines = line
    except Exception as e:
        print(pyname,"Read line 0 ERR: "+e)
    while line:
        linei+=1
        try:
            line = f.readline()
            lines += line
        except Exception as e:
            print(pyname,"Read line "+str(linei)+" ERR: "+e)
    f.close()
    return lines


def findword(text: str, start: str, end: str, tag: str):
    # for m in re.finditer(find, text):
    #     print("ll found", m.start(), m.end())
    startpos: int = text.find(start)
    if (startpos < 0):
        return text
    surplus: str = text[startpos:len(text)-1]
    endpos: int = surplus.find(end) + startpos + len(end)
    dom: str = text[startpos:endpos]
    patharr: list[str] = dom.split("\"")
    path: str = patharr[len(patharr)-2]
    print(pyname, "Including: " + path)
    exfiletext: str = loadfiletext(path)
    print(pyname, "Included: " + path + " (" + str(len(exfiletext)) + ")")
    tagstart:str = "<"+tag+">"
    tagend:str = "</"+tag+">"
    exfiletext = tagstart+exfiletext+tagend
    return text.replace(dom, exfiletext)

def convert(html:str)->str:
    newhtml:str = findword(html, "<script src=", "></script>", "script")
    newhtml = findword(newhtml, "<link rel=\"stylesheet\" href=", ">", "style")
    return newhtml


pyname: str = "["+sys.argv[0]+"] "
htmlfile: str = "index.html"
if len(sys.argv) > 1:
    if sys.argv[1] == "--help":
        print("help: "+sys.argv[0]+" [in.html] [out.html]")
        print("    [in.html] default: index.html")
        print("    [out.html] default: [in.html]")
        quit()
    htmlfile = sys.argv[1]
newhtmlfile = htmlfile
if len(sys.argv) > 2:
    newhtmlfile = sys.argv[2]
print(pyname, "Loading: " + htmlfile)
html: str = loadfiletext(htmlfile)
print(pyname, "Loaded: " + htmlfile + " (" + str(len(html)) + ")")
html = convert(html)
print(pyname, "Writing: " + newhtmlfile)
fw = open(newhtmlfile, "w", encoding="UTF-8")
fw.write(html)
fw.close()
print(pyname, "Write complete: " + newhtmlfile + " (" + str(len(html)) + ")")
