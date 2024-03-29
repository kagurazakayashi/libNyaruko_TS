// 顏色庫

/**
 * 基本颜色
 */
export default class NyaColors {
  r = [
    "#FF0000",
    "#FF8080",
    "#FF4040",
    "#FF2020",
    "#FF1010",
    "#FF0808",
    "#FF0404",
    "#FF0202",
    "#FF0101",
  ];
  g = [
    "#00FF00",
    "#80FF80",
    "#40FF40",
    "#20FF20",
    "#10FF10",
    "#08FF08",
    "#04FF04",
    "#02FF02",
    "#01FF01",
  ];
  b = [
    "#0000FF",
    "#8080FF",
    "#4040FF",
    "#2020FF",
    "#1010FF",
    "#0808FF",
    "#0404FF",
    "#0202FF",
    "#0101FF",
  ];
  y = [
    "#FFFF00",
    "#FFFF80",
    "#FFFF40",
    "#FFFF20",
    "#FFFF10",
    "#FFFF08",
    "#FFFF04",
    "#FFFF02",
    "#FFFF01",
  ];
  c = [
    "#00FFFF",
    "#80FFFF",
    "#40FFFF",
    "#20FFFF",
    "#10FFFF",
    "#08FFFF",
    "#04FFFF",
    "#02FFFF",
    "#01FFFF",
  ];
  m = [
    "#FF00FF",
    "#FF80FF",
    "#FF40FF",
    "#FF20FF",
    "#FF10FF",
    "#FF08FF",
    "#FF04FF",
    "#FF02FF",
    "#FF01FF",
  ];
  w = [
    "#FFFFFF",
    "#C0C0C0",
    "#808080",
    "#404040",
    "#202020",
    "#101010",
    "#080808",
    "#040404",
    "#020202",
  ];
  k = [
    "#000000",
    "#808080",
    "#404040",
    "#202020",
    "#101010",
    "#080808",
    "#040404",
    "#020202",
    "#010101",
  ];
}

/**
 * Flutter / Material / Colors 类 颜色库
 * constants which represent Material design's color palette.
 * https://api.flutter.dev/flutter/material/Colors-class.html
 * https://material.io/design/color/
 */
export class NyaColorsMD {
  static readonly amber = {
    50: "FFF8E1",
    100: "FFECB3",
    200: "FFE082",
    300: "FFD54F",
    400: "FFCA28",
    500: "FFC107",
    600: "FFB300",
    700: "FFA000",
    800: "FF8F00",
    900: "FF6F00",
  };
  static readonly amberAccent = {
    100: "FFE57F",
    200: "FFD740",
    400: "FFC400",
    700: "FFAB00",
  };
  static readonly black = {
    0: "00000000",
    12: "0000001F",
    26: "00000042",
    38: "00000061",
    54: "00000073",
    70: "0000008A",
    87: "000000DD",
  };
  static readonly blue = {
    50: "E3F2FD",
    100: "BBDEFB",
    200: "90CAF9",
    300: "64B5F6",
    400: "42A5F5",
    500: "2196F3",
    600: "1E88E5",
    700: "1976D2",
    800: "1565C0",
    900: "0D47A1",
  };
  static readonly blueAccent = {
    100: "82B1FF",
    200: "448AFF",
    400: "2979FF",
    700: "2962FF",
  };
  static readonly blueGrey = {
    50: "ECEFF1",
    100: "CFD8DC",
    200: "B0BEC5",
    300: "90A4AE",
    400: "78909C",
    500: "607D8B",
    600: "546E7A",
    700: "455A64",
    800: "37474F",
    900: "263238",
  };
  static readonly brown = {
    50: "EFEBE9",
    100: "D7CCC8",
    200: "BCAAA4",
    300: "A1887F",
    400: "8D6E63",
    500: "795548",
    600: "6D4C41",
    700: "5D4037",
    800: "4E342E",
    900: "3E2723",
  };
  static readonly cyan = {
    50: "E0F7FA",
    100: "B2EBF2",
    200: "80DEEA",
    300: "4DD0E1",
    400: "26C6DA",
    500: "00BCD4",
    600: "00ACC1",
    700: "0097A7",
    800: "00838F",
    900: "006064",
  };
  static readonly cyanAccent = {
    100: "84FFFF",
    200: "18FFFF",
    400: "00E5FF",
    700: "00B8D4",
  };
  static readonly deepOrange = {
    50: "FBE9E7",
    100: "FFCCBC",
    200: "FFAB91",
    300: "FF8A65",
    400: "FF7043",
    500: "FF5722",
    600: "F4511E",
    700: "E64A19",
    800: "D84315",
    900: "BF360C",
  };
  static readonly deepOrangeAccent = {
    100: "FF9E80",
    200: "FF6E40",
    400: "FF3D00",
    700: "DD2C00",
  };
  static readonly deepPurple = {
    50: "EDE7F6",
    100: "D1C4E9",
    200: "B39DDB",
    300: "9575CD",
    400: "7E57C2",
    500: "673AB7",
    600: "5E35B1",
    700: "512DA8",
    800: "4527A0",
    900: "311B92",
  };
  static readonly deepPurpleAccent = {
    100: "B388FF",
    200: "7C4DFF",
    400: "651FFF",
    700: "6200EA",
  };
  static readonly green = {
    50: "E8F5E9",
    100: "C8E6C9",
    200: "A5D6A7",
    300: "81C784",
    400: "66BB6A",
    500: "4CAF50",
    600: "43A047",
    700: "388E3C",
    800: "2E7D32",
    900: "1B5E20",
  };
  static readonly greenAccent = {
    100: "B9F6CA",
    200: "69F0AE",
    400: "00E676",
    700: "00C853",
  };
  static readonly grey = {
    50: "FAFAFA",
    100: "F5F5F5",
    200: "EEEEEE",
    300: "E0E0E0",
    400: "BDBDBD",
    500: "9E9E9E",
    600: "757575",
    700: "616161",
    800: "424242",
    900: "212121",
  };
  static readonly indigo = {
    50: "E8EAF6",
    100: "C5CAE9",
    200: "9FA8DA",
    300: "7986CB",
    400: "5C6BC0",
    500: "3F51B5",
    600: "3949AB",
    700: "303F9F",
    800: "283593",
    900: "1A237E",
  };
  static readonly indigoAccent = {
    100: "8C9EFF",
    200: "536DFE",
    400: "3D5AFE",
    700: "304FFE",
  };
  static readonly lightBlue = {
    50: "E1F5FE",
    100: "B3E5FC",
    200: "81D4FA",
    300: "4FC3F7",
    400: "29B6F6",
    500: "03A9F4",
    600: "039BE5",
    700: "0288D1",
    800: "0277BD",
    900: "01579B",
  };
  static readonly lightBlueAccent = {
    100: "80D8FF",
    200: "40C4FF",
    400: "00B0FF",
    700: "0091EA",
  };
  static readonly lightGreen = {
    50: "F1F8E9",
    100: "DCEDC8",
    200: "C5E1A5",
    300: "AED581",
    400: "9CCC65",
    500: "8BC34A",
    600: "7CB342",
    700: "689F38",
    800: "558B2F",
    900: "33691E",
  };
  static readonly lightGreenAccent = {
    100: "CCFF90",
    200: "B2FF59",
    400: "76FF03",
    700: "64DD17",
  };
  static readonly lime = {
    50: "F9FBE7",
    100: "F0F4C3",
    200: "E6EE9C",
    300: "DCE775",
    400: "D4E157",
    500: "CDDC39",
    600: "C0CA33",
    700: "AFB42B",
    800: "9E9D24",
    900: "827717",
  };
  static readonly limeAccent = {
    100: "F4FF81",
    200: "EEFF41",
    400: "C6FF00",
    700: "AEEA00",
  };
  static readonly orange = {
    50: "FFF3E0",
    100: "FFE0B2",
    200: "FFCC80",
    300: "FFB74D",
    400: "FFA726",
    500: "FF9800",
    600: "FB8C00",
    700: "F57C00",
    800: "EF6C00",
    900: "E65100",
  };
  static readonly orangeAccent = {
    100: "FFD180",
    200: "FFAB40",
    400: "FF9100",
    700: "FF6D00",
  };
  static readonly pink = {
    50: "FCE4EC",
    100: "F8BBD0",
    200: "F48FB1",
    300: "F06292",
    400: "EC407A",
    500: "E91E63",
    600: "D81B60",
    700: "C2185B",
    800: "AD1457",
    900: "880E4F",
  };
  static readonly pinkAccent = {
    100: "FF80AB",
    200: "FF4081",
    400: "F50057",
    700: "C51162",
  };
  static readonly purple = {
    50: "F3E5F5",
    100: "E1BEE7",
    200: "CE93D8",
    300: "BA68C8",
    400: "AB47BC",
    500: "9C27B0",
    600: "8E24AA",
    700: "7B1FA2",
    800: "6A1B9A",
    900: "4A148C",
  };
  static readonly purpleAccent = {
    100: "EA80FC",
    200: "E040FB",
    400: "D500F9",
    700: "AA00FF",
  };
  static readonly red = {
    50: "FFEBEE",
    100: "FFCDD2",
    200: "EF9A9A",
    300: "E57373",
    400: "EF5350",
    500: "F44336",
    600: "E53935",
    700: "D32F2F",
    800: "C62828",
    900: "B71C1C",
  };
  static readonly redAccent = {
    100: "FF8A80",
    200: "FF5252",
    400: "FF1744",
    700: "D50000",
  };
  static readonly teal = {
    50: "E0F2F1",
    100: "B2DFDB",
    200: "80CBC4",
    300: "4DB6AC",
    400: "26A69A",
    500: "009688",
    600: "00897B",
    700: "00796B",
    800: "00695C",
    900: "004D40",
  };
  static readonly tealAccent = {
    100: "A7FFEB",
    200: "64FFDA",
    400: "1DE9B6",
    700: "00BFA5",
  };
  static readonly white = {
    0: "FFFFFFFF",
    10: "FFFFFF1A",
    12: "FFFFFF1F",
    24: "FFFFFF3D",
    30: "FFFFFF4D",
    38: "FFFFFF62",
    54: "FFFFFF8A",
    60: "FFFFFF99",
    70: "FFFFFFB3",
  };
  static readonly yellow = {
    50: "FFFDE7",
    100: "FFF9C4",
    200: "FFF59D",
    300: "FFF176",
    400: "FFEE58",
    500: "FFEB3B",
    600: "FDD835",
    700: "FBC02D",
    800: "F9A825",
    900: "F57F17",
  };
  static readonly yellowAccent = {
    100: "FFFF8D",
    200: "FFFF00",
    400: "FFEA00",
    700: "FFD600",
  };
}
/**
 * WEB 标准颜色
 */
export class NyaColorsWeb {
  static readonly aliceBlue = "#F0F8FF"; // 爱丽丝蓝
  static readonly antiqueWhite = "#FAEBD7"; // 古董白
  static readonly aquaMarine = "#7FFFD4"; // 碧绿
  static readonly azure = "#F0FFFF"; // 青白色
  static readonly beige = "#F5F5DC"; // 米色
  static readonly bisque = "#FFE4C4"; // 陶坯黄
  static readonly black = "#000000"; // 黑色
  static readonly blanchedAlmond = "#FFEBCD"; // 杏仁白
  static readonly blue = "#0000FF"; // 蓝色
  static readonly blueViolet = "#8A2BE2"; // 蓝紫色
  static readonly brown = "#A52A2A"; // 褐色
  static readonly burlyWood = "#DEB887"; // 硬木褐
  static readonly cadetBlue = "#5F9EA0"; // 军服蓝
  static readonly chartReuse = "#7FFF00"; // 查特酒绿
  static readonly chocolate = "#D2691E"; // 巧克力色
  static readonly coral = "#FF7F50"; // 珊瑚红
  static readonly cornFlowerBlue = "#6495ED"; // 矢车菊蓝
  static readonly cornSilk = "#FFF8DC"; // 玉米穗黄
  static readonly crimson = "#DC143C"; // 绯红
  static readonly cyan = "#00FFFF"; // 青色
  static readonly aqua = "#00FFFF"; // 青色
  static readonly darkBlue = "#00008B"; // 深蓝
  static readonly darkCyan = "#008B8B"; // 深青
  static readonly darkGoldenRod = "#B8860B"; // 深金菊黄
  static readonly darkGray = "#A9A9A9"; // 暗灰
  static readonly darkGreen = "#006400"; // 深绿
  static readonly darkKhaki = "#BDB76B"; // 深卡其色
  static readonly darkMagenta = "#8B008B"; // 深品红
  static readonly darkOliveGreen = "#556B2F"; // 深橄榄绿
  static readonly darkOrange = "#FF8C00"; // 深橙
  static readonly darkOrchid = "#9932CC"; // 深洋兰紫
  static readonly darkRed = "#8B0000"; // 深红
  static readonly darkSalmon = "#E9967A"; // 深鲑红
  static readonly darkSeaGreen = "#8FBC8F"; // 深海藻绿
  static readonly darkSlateBlue = "#483D8B"; // 深岩蓝
  static readonly darkSlateGray = "#2F4F4F"; // 深岩灰
  static readonly darkTurquoise = "#00CED1"; // 深松石绿
  static readonly darkViolet = "#9400d3"; // 深紫
  static readonly deepPink = "#FF1493"; // 深粉
  static readonly deepSkyBlue = "#00BFFF"; // 深天蓝
  static readonly dimGray = "#696969"; // 昏灰
  static readonly dodgerBlue = "#1E90FF"; // 湖蓝
  static readonly fireBrick = "#B22222"; // 火砖红
  static readonly floralWhite = "#FFFAF0"; // 花卉白
  static readonly forestGreen = "#228B22"; // 森林绿
  static readonly gainsBoro = "#DCDCDC"; // 庚氏灰
  static readonly ghostWhite = "#F8F8FF"; // 幽灵白
  static readonly gold = "#FFD700"; // 金色
  static readonly goldenRod = "#DAA520"; // 金菊黄
  static readonly gray = "#808080"; // 灰色
  static readonly green = "#008000"; // 调和绿
  static readonly greenYellow = "#ADFF2F"; // 黄绿色
  static readonly honeyDew = "#F0FFF0"; // 蜜瓜绿
  static readonly hotPink = "#FF69B4"; // 艳粉
  static readonly indianRed = "#CD5C5C"; // 印度红
  static readonly indigo = "#4B0082"; // 靛蓝
  static readonly ivory = "#FFFFF0"; // 象牙白
  static readonly khaki = "#F0E68C"; // 卡其色
  static readonly lavender = "#E6E6FA"; // 薰衣草紫
  static readonly lavenderBlush = "#FFF0F5"; // 薰衣草红
  static readonly lawnGreen = "#7CFC00"; // 草坪绿
  static readonly lemonChiffon = "#FFFACD"; // 柠檬绸黄
  static readonly lightBlue = "#ADD8E6"; // 浅蓝
  static readonly lightCoral = "#F08080"; // 浅珊瑚红
  static readonly lightCyan = "#E0FFFF"; // 浅青
  static readonly lightGoldenRodYellow = "#FAFAD2"; // 浅金菊黄
  static readonly lightGray = "#D3D3D3"; // 亮灰
  static readonly lightGreen = "#90EE90"; // 浅绿
  static readonly lightPink = "#FFB6C1"; // 浅粉
  static readonly lightSalmon = "#FFA07A"; // 浅鲑红
  static readonly lightSeaGreen = "#20B2AA"; // 浅海藻绿
  static readonly lightSkyBlue = "#87CEFA"; // 浅天蓝
  static readonly lightSlateGray = "#778899"; // 浅岩灰
  static readonly lightSteelBlue = "#B0C4DE"; // 亮钢蓝
  static readonly lightYellow = "#FFFFE0"; // 浅黄
  static readonly lime = "#00FF00"; // 绿色
  static readonly limeGreen = "#32CD32"; // 青柠绿
  static readonly linen = "#FAF0E6"; // 亚麻色
  static readonly magenta = "#FF00FF"; // 洋红
  static readonly fuchsia = "#FF00FF"; // 洋红
  static readonly maroon = "#800000"; // 栗色
  static readonly mediumAquaMarine = "#66CDAA"; // 中碧绿
  static readonly mediumBlue = "#0000CD"; // 中蓝
  static readonly mediumOrchid = "#BA55D3"; // 中洋兰紫
  static readonly mediumPurple = "#9370DB"; // 中紫
  static readonly mediumSeaGreen = "#3CB371"; // 中海藻绿
  static readonly mediumSlateBlue = "#7B68EE"; // 中岩蓝
  static readonly mediumSpringGreen = "#00FA9A"; // 中嫩绿
  static readonly mediumTurquoise = "#48D1CC"; // 中松石绿
  static readonly mediumVioletRed = "#C71585"; // 中紫红
  static readonly midNightBlue = "#191970"; // 午夜蓝
  static readonly mintCream = "#F5FFFA"; // 薄荷乳白
  static readonly mistyRose = "#FFE4E1"; // 雾玫瑰红
  static readonly moccasin = "#FFE4B5"; // 鹿皮色
  static readonly navajoWhite = "#FFDEAD"; // 土著白
  static readonly navy = "#000080"; // 藏青
  static readonly oldLace = "#FDF5E6"; // 旧蕾丝白
  static readonly olive = "#808000"; // 橄榄色
  static readonly oliveDrab = "#6B8E23"; // 橄榄绿
  static readonly orange = "#FFA500"; // 橙色
  static readonly orangeRed = "#FF4500"; // 橘红
  static readonly orchid = "#DA70D6"; // 洋兰紫
  static readonly paleGoldenRod = "#EEE8AA"; // 白金菊黄
  static readonly paleGreen = "#98FB98"; // 白绿色
  static readonly paleTurquoise = "#AFEEEE"; // 白松石绿
  static readonly paleVioletRed = "#DB7093"; // 弱紫罗兰红
  static readonly papayaWhip = "#FFEFD5"; // 番木瓜橙
  static readonly peachPuff = "#FFDAB9"; // 粉扑桃色
  static readonly peru = "#CD853F"; // 秘鲁红
  static readonly pink = "#FFC0CB"; // 粉色
  static readonly plum = "#DDA0DD"; // 李紫
  static readonly powderBlue = "#B0E0E6"; // 粉末蓝
  static readonly purple = "#800080"; // 紫色
  static readonly red = "#FF0000"; // 红色
  static readonly rosyBrown = "#BC8F8F"; // 玫瑰褐
  static readonly royalBlue = "#4169E1"; // 品蓝
  static readonly saddleBrown = "#8B4513"; // 鞍褐
  static readonly salmon = "#FA8072"; // 鲑红
  static readonly sandyBrown = "#F4A460"; // 沙褐
  static readonly seaGreen = "#2E8B57"; // 海藻绿
  static readonly seaShell = "#FFF5EE"; // 贝壳白
  static readonly sienna = "#A0522D"; // 土黄赭
  static readonly silver = "#C0C0C0"; // 银色
  static readonly skyBlue = "#87CEEB"; // 天蓝
  static readonly slateBlue = "#6A5ACD"; // 岩蓝
  static readonly slateGray = "#708090"; // 岩灰
  static readonly snow = "#FFFAFA"; // 雪白
  static readonly springGreen = "#00FF7F"; // 春绿
  static readonly steelBlue = "#4682B4"; // 钢青
  static readonly tan = "#D2B48C"; // 日晒褐
  static readonly teal = "#008080"; // 鸭翅绿
  static readonly thistle = "#D8BFD8"; // 蓟紫
  static readonly tomato = "#FF6347"; // 番茄红
  static readonly turquoise = "#40E0D0"; // 松石绿
  static readonly violet = "#EE82EE"; // 紫罗兰色
  static readonly wheat = "#F5DEB3"; // 麦色
  static readonly white = "#FFFFFF"; // 白色
  static readonly whiteSmoke = "#F5F5F5"; // 烟雾白
  static readonly yellow = "#FFFF00"; // 黄色
  static readonly yellowGreen = "#9ACD32"; // 暗黄绿色
}

/**
 * 日本の伝統色
 * 颜色数据取自 https://nipponcolors.com/
 * 颜色数据来自 “日本の伝統色 The Traditional Colors of Japan”. PIE BOOKS, 2007.
 */
export class NyaColorsJ {
  static readonly nadeshiko = "#DC9FB4"; // 撫子
  static readonly kohbai = "#E16B8C"; // 紅梅
  static readonly suoh = "#8E354A"; // 蘇芳
  static readonly taikoh = "#F8C3CD"; // 退紅
  static readonly ikkonzome = "#F4A7B9"; // 一斥染
  static readonly kuwazome = "#64363C"; // 桑染
  static readonly momo = "#F596AA"; // 桃
  static readonly ichigo = "#B5495B"; // 苺
  static readonly usubeni = "#E87A90"; // 薄紅
  static readonly imayoh = "#D05A6E"; // 今様
  static readonly nakabeni = "#DB4D6D"; // 中紅
  static readonly sakura = "#FEDFE1"; // 桜
  static readonly umenezumi = "#9E7A7A"; // 梅鼠
  static readonly karakurenai = "#D0104C"; // 韓紅花
  static readonly enji = "#9F353A"; // 燕脂
  static readonly kurenai = "#CB1B45"; // 紅
  static readonly toki = "#EEA9A9"; // 鴇
  static readonly cyohsyun = "#BF6766"; // 長春
  static readonly kokiake = "#86473F"; // 深緋
  static readonly sakuranezumi = "#B19693"; // 桜鼠
  static readonly jinzamomi = "#EB7A77"; // 甚三紅
  static readonly azuki = "#954A45"; // 小豆
  static readonly suohkoh = "#A96360"; // 蘇芳香
  static readonly akabeni = "#CB4042"; // 赤紅
  static readonly shinsyu = "#AB3B3A"; // 真朱
  static readonly haizakura = "#D7C4BB"; // 灰桜
  static readonly kuriume = "#904840"; // 栗梅
  static readonly ebicha = "#734338"; // 海老茶
  static readonly ginsyu = "#C73E3A"; // 銀朱
  static readonly kurotobi = "#554236"; // 黒鳶
  static readonly benitobi = "#994639"; // 紅鳶
  static readonly akebono = "#F19483"; // 曙
  static readonly benikaba = "#B54434"; // 紅樺
  static readonly mizugaki = "#B9887D"; // 水がき
  static readonly sangosyu = "#F17C67"; // 珊瑚朱
  static readonly benihiwada = "#884C3A"; // 紅檜皮
  static readonly syojyohi = "#E83015"; // 猩猩緋
  static readonly entan = "#D75455"; // 鉛丹
  static readonly shikancha = "#B55D4C"; // 芝翫茶
  static readonly hiwada = "#854836"; // 檜皮
  static readonly kakishibu = "#A35E47"; // 柿渋
  static readonly ake = "#CC543A"; // 緋
  static readonly tobi = "#724832"; // 鳶
  static readonly benihi = "#F75C2F"; // 紅緋
  static readonly kurikawacha = "#6A4028"; // 栗皮茶
  static readonly bengara = "#9A5034"; // 弁柄
  static readonly terigaki = "#C46243"; // 照柿
  static readonly edocha = "#AF5F3C"; // 江戸茶
  static readonly araisyu = "#FB966E"; // 洗朱
  static readonly momoshiocha = "#724938"; // 百塩茶
  static readonly karacha = "#B47157"; // 唐茶
  static readonly tokigaracha = "#DB8E71"; // ときがら茶
  static readonly ohni = "#F05E1C"; // 黄丹
  static readonly sohi = "#ED784A"; // 纁
  static readonly ensyucha = "#CA7853"; // 遠州茶
  static readonly kabacha = "#B35C37"; // 樺茶
  static readonly kogecha = "#563F2E"; // 焦茶
  static readonly akakoh = "#E3916E"; // 赤香
  static readonly suzumecha = "#8F5A3C"; // 雀茶
  static readonly shishi = "#F0A986"; // 宍
  static readonly sodenkaracha = "#A0674B"; // 宗伝唐茶
  static readonly kaba = "#C1693C"; // 樺
  static readonly kokikuchinashi = "#FB9966"; // 深支子
  static readonly kurumi = "#947A6D"; // 胡桃
  static readonly taisya = "#A36336"; // 代赭
  static readonly araigaki = "#E79460"; // 洗柿
  static readonly kohrozen = "#7D532C"; // 黄櫨染
  static readonly akakuchiba = "#C78550"; // 赤朽葉
  static readonly tonocha = "#985F2A"; // 礪茶
  static readonly akashirotsurubami = "#E1A679"; // 赤白橡
  static readonly sencha = "#855B32"; // 煎茶
  static readonly kanzo = "#FC9F4D"; // 萱草
  static readonly sharegaki = "#FFBA84"; // 洒落柿
  static readonly beniukon = "#E98B2A"; // 紅鬱金
  static readonly umezome = "#E9A368"; // 梅染
  static readonly biwacha = "#B17844"; // 枇杷茶
  static readonly chojicha = "#96632E"; // 丁子茶
  static readonly kenpohzome = "#43341B"; // 憲法染
  static readonly kohaku = "#CA7A2C"; // 琥珀
  static readonly usugaki = "#ECB88A"; // 薄柿
  static readonly kyara = "#78552B"; // 伽羅
  static readonly chojizome = "#B07736"; // 丁子染
  static readonly fushizome = "#967249"; // 柴染
  static readonly kuchiba = "#E2943B"; // 朽葉
  static readonly kincha = "#C7802D"; // 金茶
  static readonly kitsune = "#9B6E23"; // 狐
  static readonly susutake = "#6E552F"; // 煤竹
  static readonly usukoh = "#EBB471"; // 薄香
  static readonly tonoko = "#D7B98E"; // 砥粉
  static readonly ginsusutake = "#82663A"; // 銀煤竹
  static readonly ohdo = "#B68E55"; // 黄土
  static readonly shiracha = "#BC9F77"; // 白茶
  static readonly kobicha = "#876633"; // 媚茶
  static readonly kigaracha = "#C18A26"; // 黄唐茶
  static readonly yamabuki = "#FFB11B"; // 山吹
  static readonly yamabukicha = "#D19826"; // 山吹茶
  static readonly hajizome = "#DDA52D"; // 櫨染
  static readonly kuwacha = "#C99833"; // 桑茶
  static readonly tamago = "#F9BF45"; // 玉子
  static readonly shirotsurubami = "#DCB879"; // 白橡
  static readonly kitsurubami = "#BA9132"; // 黄橡
  static readonly tamamorokoshi = "#E8B647"; // 玉蜀黍
  static readonly hanaba = "#F7C242"; // 花葉
  static readonly namakabe = "#7D6C46"; // 生壁
  static readonly torinoko = "#DAC9A6"; // 鳥の子
  static readonly usuki = "#FAD689"; // 浅黄
  static readonly kikuchiba = "#D9AB42"; // 黄朽葉
  static readonly kuchinashi = "#F6C555"; // 梔子
  static readonly tohoh = "#FFC408"; // 籐黄
  static readonly ukon = "#EFBB24"; // 鬱金
  static readonly karashi = "#CAAD5F"; // 芥子
  static readonly higosusutake = "#8D742A"; // 肥後煤竹
  static readonly rikyushiracha = "#B4A582"; // 利休白茶
  static readonly aku = "#877F6C"; // 灰汁
  static readonly rikyucha = "#897D55"; // 利休茶
  static readonly rokohcha = "#74673E"; // 路考茶
  static readonly nataneyu = "#A28C37"; // 菜種油
  static readonly uguisucha = "#6C6024"; // 鶯茶
  static readonly kimirucha = "#867835"; // 黄海松茶
  static readonly mirucha = "#62592C"; // 海松茶
  static readonly kariyasu = "#E9CD4C"; // 刈安
  static readonly nanohana = "#F7D94C"; // 菜の花
  static readonly kihada = "#FBE251"; // 黄蘗
  static readonly mushikuri = "#D9CD90"; // 蒸栗
  static readonly aokuchiba = "#ADA142"; // 青朽葉
  static readonly ominaeshi = "#DDD23B"; // 女郎花
  static readonly hiwacha = "#A5A051"; // 鶸茶
  static readonly hiwa = "#BEC23F"; // 鶸
  static readonly uguisu = "#6C6A2D"; // 鶯
  static readonly yanagicha = "#939650"; // 柳茶
  static readonly koke = "#838A2D"; // 苔
  static readonly kikujin = "#B1B479"; // 麹塵
  static readonly rikancha = "#616138"; // 璃寛茶
  static readonly aikobicha = "#4B4E2A"; // 藍媚茶
  static readonly miru = "#5B622E"; // 海松
  static readonly sensaicha = "#4D5139"; // 千歳茶
  static readonly baikocha = "#89916B"; // 梅幸茶
  static readonly hiwamoegi = "#90B44B"; // 鶸萌黄
  static readonly yanagizome = "#91AD70"; // 柳染
  static readonly urayanagi = "#B5CAA0"; // 裏柳
  static readonly iwaicha = "#646A58"; // 岩井茶
  static readonly moegi = "#7BA23F"; // 萌黄
  static readonly nae = "#86C166"; // 苗
  static readonly yanagisusutake = "#4A593D"; // 柳煤竹
  static readonly matsuba = "#42602D"; // 松葉
  static readonly aoni = "#516E41"; // 青丹
  static readonly usuao = "#91B493"; // 薄青
  static readonly yanaginezumi = "#808F7C"; // 柳鼠
  static readonly tokiwa = "#1B813E"; // 常磐
  static readonly wakatake = "#5DAC81"; // 若竹
  static readonly chitosemidori = "#36563C"; // 千歳緑
  static readonly midori = "#227D51"; // 緑
  static readonly byakuroku = "#A8D8B9"; // 白緑
  static readonly oitake = "#6A8372"; // 老竹
  static readonly tokusa = "#2D6D4B"; // 木賊
  static readonly onandocha = "#465D4C"; // 御納戸茶
  static readonly rokusyoh = "#24936E"; // 緑青
  static readonly sabiseiji = "#86A697"; // 錆青磁
  static readonly aotake = "#00896C"; // 青竹
  static readonly veludo = "#096148"; // ビロード
  static readonly mushiao = "#20604F"; // 虫襖
  static readonly aimirucha = "#0F4C3A"; // 藍海松茶
  static readonly tonocha2 = "#4F726C"; // 沈香茶
  static readonly aomidori = "#00AA90"; // 青緑
  static readonly seiji = "#69B0AC"; // 青磁
  static readonly tetsu = "#26453D"; // 鉄
  static readonly mizuasagi = "#66BAB7"; // 水浅葱
  static readonly seiheki = "#268785"; // 青碧
  static readonly sabitetsuonando = "#405B55"; // 錆鉄御納戸
  static readonly korainando = "#305A56"; // 高麗納戸
  static readonly byakugun = "#78C2C4"; // 白群
  static readonly omeshicha = "#376B6D"; // 御召茶
  static readonly kamenozoki = "#A5DEE4"; // 瓶覗
  static readonly fukagawanezumi = "#77969A"; // 深川鼠
  static readonly sabiasagi = "#6699A1"; // 錆浅葱
  static readonly mizu = "#81C7D4"; // 水
  static readonly asagi = "#33A6B8"; // 浅葱
  static readonly onando = "#0C4842"; // 御納戸
  static readonly ai = "#0D5661"; // 藍
  static readonly shinbashi = "#0089A7"; // 新橋
  static readonly sabionando = "#336774"; // 錆御納戸
  static readonly tetsuonando = "#255359"; // 鉄御納戸
  static readonly hanaasagi = "#1E88A8"; // 花浅葱
  static readonly ainezumi = "#566C73"; // 藍鼠
  static readonly masuhana = "#577C8A"; // 舛花
  static readonly sora = "#58B2DC"; // 空
  static readonly noshimehana = "#2B5F75"; // 熨斗目花
  static readonly chigusa = "#3A8FB7"; // 千草
  static readonly omeshionando = "#2E5C6E"; // 御召御納戸
  static readonly hanada = "#006284"; // 縹
  static readonly wasurenagusa = "#7DB9DE"; // 勿忘草
  static readonly gunjyo = "#51A8DD"; // 群青
  static readonly tsuyukusa = "#2EA9DF"; // 露草
  static readonly kurotsurubami = "#0B1013"; // 黒橡
  static readonly kon = "#0F2540"; // 紺
  static readonly kachi = "#08192D"; // 褐
  static readonly ruri = "#005CAF"; // 瑠璃
  static readonly rurikon = "#0B346E"; // 瑠璃紺
  static readonly benimidori = "#7B90D2"; // 紅碧
  static readonly fujinezumi = "#6E75A4"; // 藤鼠
  static readonly tetsukon = "#261E47"; // 鉄紺
  static readonly konjyo = "#113285"; // 紺青
  static readonly benikakehana = "#4E4F97"; // 紅掛花
  static readonly konkikyo = "#211E55"; // 紺桔梗
  static readonly fuji = "#8B81C3"; // 藤
  static readonly futaai = "#70649A"; // 二藍
  static readonly ouchi = "#9B90C2"; // 楝
  static readonly fujimurasaki = "#8A6BBE"; // 藤紫
  static readonly kikyo = "#6A4C9C"; // 桔梗
  static readonly shion = "#8F77B5"; // 紫苑
  static readonly messhi = "#533D5B"; // 滅紫
  static readonly usu = "#B28FCE"; // 薄
  static readonly hashita = "#986DB2"; // 半
  static readonly edomurasaki = "#77428D"; // 江戸紫
  static readonly shikon = "#3C2F41"; // 紫紺
  static readonly kokimurasaki = "#4A225D"; // 深紫
  static readonly sumire = "#66327C"; // 菫
  static readonly murasaki = "#592C63"; // 紫
  static readonly ayame = "#6F3381"; // 菖蒲
  static readonly fujisusutake = "#574C57"; // 藤煤竹
  static readonly benifuji = "#B481BB"; // 紅藤
  static readonly kurobeni = "#3F2B36"; // 黒紅
  static readonly nasukon = "#572A3F"; // 茄子紺
  static readonly budohnezumi = "#5E3D50"; // 葡萄鼠
  static readonly hatobanezumi = "#72636E"; // 鳩羽鼠
  static readonly kakitsubata = "#622954"; // 杜若
  static readonly ebizome = "#6D2E5B"; // 蒲葡
  static readonly botan = "#C1328E"; // 牡丹
  static readonly umemurasaki = "#A8497A"; // 梅紫
  static readonly nisemurasaki = "#562E37"; // 似紫
  static readonly tsutsuji = "#E03C8A"; // 躑躅
  static readonly murasakitobi = "#60373E"; // 紫鳶
  static readonly shironeri = "#FCFAF2"; // 白練
  static readonly gofun = "#FFFFFB"; // 胡粉
  static readonly shironezumi = "#BDC0BA"; // 白鼠
  static readonly ginnezumi = "#91989F"; // 銀鼠
  static readonly namari = "#787878"; // 鉛
  static readonly hai = "#828282"; // 灰
  static readonly sunezumi = "#787D7B"; // 素鼠
  static readonly rikyunezumi = "#707C74"; // 利休鼠
  static readonly nibi = "#656765"; // 鈍
  static readonly aonibi = "#535953"; // 青鈍
  static readonly dobunezumi = "#4F4F48"; // 溝鼠
  static readonly benikeshinezumi = "#52433D"; // 紅消鼠
  static readonly aisumicha = "#373C38"; // 藍墨茶
  static readonly binrojizome = "#3A3226"; // 檳榔子染
  static readonly keshizumi = "#434343"; // 消炭
  static readonly sumi = "#1C1C1C"; // 墨
  static readonly kuro = "#080808"; // 黒
  static readonly ro = "#0C0C0C"; // 呂
}

/**
 * 中国传统色
 * 颜色数据取自 http://zhongguose.com/
 * 颜色数据来自 《色谱》. 中科院科技情报编委会名词室. 科学出版社, 1957.
 */
export class NyaColorsC {
  static readonly anyuzi = "#5C2223"; // 暗玉紫
  static readonly mudanfenhong = "#EEA2A4"; // 牡丹粉红
  static readonly lizi1 = "#5A191B"; // 栗紫
  static readonly xiangyehong = "#F07C82"; // 香叶红
  static readonly putaojiangzi = "#5A1216"; // 葡萄酱紫
  static readonly yanhong1 = "#ED5A65"; // 艳红
  static readonly yuhong = "#C04851"; // 玉红
  static readonly chahuahong = "#EE3F4D"; // 茶花红
  static readonly gaolianghong = "#C02C38"; // 高粱红
  static readonly manjianghong = "#A7535A"; // 满江红
  static readonly shubihong = "#E3B4B8"; // 鼠鼻红
  static readonly hehuanhong = "#F0A1A8"; // 合欢红
  static readonly chunmeihong = "#F1939C"; // 春梅红
  static readonly xiancaihong = "#A61B29"; // 苋菜红
  static readonly yanhong2 = "#894E54"; // 烟红
  static readonly meihong = "#C45A65"; // 莓红
  static readonly eguanhong = "#D11A2D"; // 鹅冠红
  static readonly fengyehong = "#C21F30"; // 枫叶红
  static readonly tangchangpuhong = "#DE1C31"; // 唐菖蒲红
  static readonly zaohong = "#7C1823"; // 枣红
  static readonly zhuganzi = "#541E24"; // 猪肝紫
  static readonly putaozi = "#4C1F24"; // 葡萄紫
  static readonly anziyuanhong = "#82202B"; // 暗紫苑红
  static readonly yanhong3 = "#82111F"; // 殷红
  static readonly caomolihong = "#EF475D"; // 草茉莉红
  static readonly jiangzi = "#4D1018"; // 酱紫
  static readonly shanchahong = "#ED556A"; // 山茶红
  static readonly xinhui = "#7A7374"; // 锌灰
  static readonly haitanghong = "#F03752"; // 海棠红
  static readonly jifenhong = "#E6D2D5"; // 蓟粉红
  static readonly shiruihong = "#F0C9CF"; // 石蕊红
  static readonly danshuhong1 = "#EE2746"; // 淡曙红
  static readonly lizi2 = "#2B1216"; // 李紫
  static readonly shizhuhong = "#EE4863"; // 石竹红
  static readonly danqianhong = "#E77C8E"; // 淡茜红
  static readonly jinyuzi = "#500A16"; // 金鱼紫
  static readonly shanlidouhong = "#C27C88"; // 山黎豆红
  static readonly shubeihui = "#73575C"; // 鼠背灰
  static readonly danruixianghong = "#EE4866"; // 淡蕊香红
  static readonly ganzhezi = "#621624"; // 甘蔗紫
  static readonly yuejihong = "#CE5777"; // 月季红
  static readonly jianjingyuhong = "#CC163A"; // 尖晶玉红
  static readonly shuihong = "#F1C4CD"; // 水红
  static readonly jianghong = "#EEB8C3"; // 姜红
  static readonly luhui = "#856D72"; // 芦灰
  static readonly qiepizi = "#2D0C13"; // 茄皮紫
  static readonly cangyinghui = "#36282B"; // 苍蝇灰
  static readonly jinkuihong = "#BF3553"; // 锦葵红
  static readonly fentuanhuahong = "#EC9BAD"; // 粉团花红
  static readonly shizhuzi = "#63071C"; // 石竹紫
  static readonly luanshizi = "#30161C"; // 卵石紫
  static readonly jinghong = "#EEA6B7"; // 晶红
  static readonly zhilanzi = "#E9CCD3"; // 芝兰紫
  static readonly shaoyaogenghong = "#EBA0B3"; // 芍药耕红
  static readonly muyunhui = "#4F383E"; // 暮云灰
  static readonly jiangdouhong = "#ED9DB2"; // 豇豆红
  static readonly baochunhong = "#EC8AA4"; // 报春红
  static readonly danjianghong = "#EC7696"; // 淡绛红
  static readonly fengxianhuahong = "#EA7293"; // 凤仙花红
  static readonly xiaguanghong = "#EF82A0"; // 霞光红
  static readonly xidanhong = "#EC2C64"; // 喜蛋红
  static readonly jiazhutaohong = "#EB507E"; // 夹竹桃红
  static readonly songyemudanhong = "#EB3C70"; // 松叶牡丹红
  static readonly lianbanhong = "#EA517F"; // 莲瓣红
  static readonly baijihong = "#DE7897"; // 白芨红
  static readonly yinhonghui = "#B598A1"; // 隐红灰
  static readonly wenpohong = "#ED2F6A"; // 榲桲红
  static readonly cujiangcaohong = "#C5708B"; // 酢酱草红
  static readonly huoezi = "#33141E"; // 火鹅紫
  static readonly yaoguanzi = "#621D34"; // 鹞冠紫
  static readonly pinhong = "#EF3473"; // 品红
  static readonly moshizi = "#382129"; // 磨石紫
  static readonly mozi = "#310F1B"; // 墨紫
  static readonly tanzi = "#381924"; // 檀紫
  static readonly chuhehong = "#E16C96"; // 初荷红
  static readonly caitouzi = "#951C48"; // 菜头紫
  static readonly putaojiuhong = "#62102E"; // 葡萄酒红
  static readonly danqingzi = "#E0C8D1"; // 淡青紫
  static readonly bogenhong = "#D13C74"; // 菠根红
  static readonly haixiangzi = "#4B1E2F"; // 海象紫
  static readonly tuyanhong = "#EC4E8A"; // 兔眼红
  static readonly nenlinghong = "#DE3F7C"; // 嫩菱红
  static readonly yangcongzi = "#A8456B"; // 洋葱紫
  static readonly diaozhonghuahong = "#CE5E8A"; // 吊钟花红
  static readonly ganzi = "#461629"; // 绀紫
  static readonly zijinghong = "#EE2C79"; // 紫荆红
  static readonly biandouhuahong = "#EF498B"; // 扁豆花红
  static readonly mabiancaozi = "#EDE3E7"; // 马鞭草紫
  static readonly canghuahong = "#EC2D7A"; // 藏花红
  static readonly banjiuhui = "#482936"; // 斑鸠灰
  static readonly gutongzi = "#440E25"; // 古铜紫
  static readonly danzihong = "#D2568C"; // 丹紫红
  static readonly dingxiangdanzi = "#E9D7DF"; // 丁香淡紫
  static readonly meiguihong = "#D2357D"; // 玫瑰红
  static readonly gudinghui = "#36292F"; // 古鼎灰
  static readonly lingmenghong = "#D276A3"; // 菱锰红
  static readonly yingcaozi = "#C06F98"; // 樱草紫
  static readonly longxuhong = "#CC5595"; // 龙须红
  static readonly dianqishihong = "#C35691"; // 电气石红
  static readonly meiguizi = "#BA2F7B"; // 玫瑰紫
  static readonly xiancaizi = "#9B1E64"; // 苋菜紫
  static readonly zihui = "#5D3F51"; // 紫灰
  static readonly longjingyuzi = "#4E2A40"; // 龙睛鱼紫
  static readonly qinghakezi = "#BC84A8"; // 青蛤壳紫
  static readonly luolanzi = "#C08EAF"; // 萝兰紫
  static readonly biqizi = "#411C35"; // 荸荠紫
  static readonly doukouzi = "#AD6598"; // 豆蔻紫
  static readonly biandouzi = "#A35C8F"; // 扁豆紫
  static readonly qianniuzi = "#681752"; // 牵牛紫
  static readonly zizi = "#894276"; // 芓紫
  static readonly gejinzi = "#7E2065"; // 葛巾紫
  static readonly qinglian = "#8B2671"; // 青莲
  static readonly jiehuazi = "#983680"; // 芥花紫
  static readonly fengxinzi = "#C8ADC4"; // 凤信紫
  static readonly shenqianniuzi = "#1C0D1A"; // 深牵牛紫
  static readonly weizi = "#7E1671"; // 魏紫
  static readonly wumeizi = "#1E131D"; // 乌梅紫
  static readonly jiegengzi = "#813C85"; // 桔梗紫
  static readonly danqianniuzi = "#D1C2D3"; // 淡牵牛紫
  static readonly jianfengzi = "#3E3841"; // 剑锋紫
  static readonly xunzi = "#815C94"; // 蕈紫
  static readonly jinzi = "#806D9E"; // 槿紫
  static readonly qianshibai = "#E2E1E4"; // 芡食白
  static readonly longkuizi = "#322F3B"; // 龙葵紫
  static readonly tengluozi = "#8076A3"; // 藤萝紫
  static readonly shayuhui = "#35333C"; // 沙鱼灰
  static readonly anlongdanzi = "#22202E"; // 暗龙胆紫
  static readonly anlanzi = "#131124"; // 暗蓝紫
  static readonly yeputaozi = "#302F4B"; // 野葡萄紫
  static readonly yejuzi = "#525288"; // 野菊紫
  static readonly shuiniuhui = "#2F2F35"; // 水牛灰
  static readonly yuanshanzi = "#CCCCD6"; // 远山紫
  static readonly luodianzi = "#74759B"; // 螺甸紫
  static readonly jingshizi = "#1F2040"; // 晶石紫
  static readonly mantianxingzi = "#2E317C"; // 满天星紫
  static readonly danlanzi = "#A7A8BD"; // 淡蓝紫
  static readonly shangengzi = "#61649F"; // 山梗紫
  static readonly niujiaohui = "#2D2E36"; // 牛角灰
  static readonly yuweihui = "#5E616D"; // 鱼尾灰
  static readonly waguanhui = "#47484C"; // 瓦罐灰
  static readonly ganglan = "#0F1423"; // 钢蓝
  static readonly yanhanlan = "#131824"; // 燕颔蓝
  static readonly jingyuhui = "#475164"; // 鲸鱼灰
  static readonly qinghui = "#2B333E"; // 青灰
  static readonly gelan = "#1C2938"; // 鸽蓝
  static readonly anlan = "#101F30"; // 暗蓝
  static readonly gangqing = "#142334"; // 钢青
  static readonly haitaolan = "#15559A"; // 海涛蓝
  static readonly feiyancaolan = "#0F59A4"; // 飞燕草蓝
  static readonly dianqing = "#1661AB"; // 靛青
  static readonly ananlan = "#3170A7"; // 安安蓝
  static readonly haijunlan = "#346C9C"; // 海军蓝
  static readonly jingtailan = "#2775B6"; // 景泰蓝
  static readonly pinlan = "#2B73AF"; // 品蓝
  static readonly niluolan = "#2474B5"; // 尼罗蓝
  static readonly diechilan = "#4E7CA1"; // 蝶翅蓝
  static readonly huaqing = "#2376B7"; // 花青
  static readonly yanlan = "#144A74"; // 鷃蓝
  static readonly xinglan = "#93B5CF"; // 星蓝
  static readonly honglan = "#2177B8"; // 虹蓝
  static readonly bolinlan = "#126BAE"; // 柏林蓝
  static readonly qunqing = "#1772B4"; // 群青
  static readonly yunshuilan = "#BACCD9"; // 云水蓝
  static readonly yushandoulan = "#619AC3"; // 羽扇豆蓝
  static readonly zhanjianhui = "#495C69"; // 战舰灰
  static readonly qingshanlan = "#8FB2C9"; // 晴山蓝
  static readonly jinglan = "#5698C3"; // 睛蓝
  static readonly tangcilan = "#11659A"; // 搪磁蓝
  static readonly chaolan = "#2983BB"; // 潮蓝
  static readonly tianlan = "#1677B3"; // 天蓝
  static readonly dalishihui = "#C4CBCF"; // 大理石灰
  static readonly qianniuhualan = "#1177B0"; // 牵牛花蓝
  static readonly baoshilan = "#2486B9"; // 宝石蓝
  static readonly danlanhui = "#5E7987"; // 淡蓝灰
  static readonly nenhui = "#74787A"; // 嫩灰
  static readonly yinyubai = "#CDD1D3"; // 银鱼白
  static readonly youlan = "#1781B5"; // 釉蓝
  static readonly jianshilan = "#66A9C9"; // 涧石蓝
  static readonly yuantianlan = "#D0DFE6"; // 远天蓝
  static readonly yunshanlan = "#2F90B9"; // 云山蓝
  static readonly qiubolan = "#8ABCD1"; // 秋波蓝
  static readonly jingtianlan = "#C3D7DF"; // 井天蓝
  static readonly yuanweilan = "#158BB8"; // 鸢尾蓝
  static readonly yunfengbai = "#D8E3E7"; // 云峰白
  static readonly xinghui = "#B2BBBE"; // 星灰
  static readonly gulan = "#1A94BC"; // 钴蓝
  static readonly biqing = "#5CB3CC"; // 碧青
  static readonly canglan = "#134857"; // 苍蓝
  static readonly shenhuilan = "#132C33"; // 深灰蓝
  static readonly huilan = "#21373D"; // 灰蓝
  static readonly hushuilan = "#B0D5DF"; // 湖水蓝
  static readonly haiqing = "#22A2C3"; // 海青
  static readonly huanghunhui = "#474B4C"; // 黄昏灰
  static readonly jiqing = "#63BBD0"; // 霁青
  static readonly yuqinlan = "#126E82"; // 玉鈫蓝
  static readonly danfanlan = "#0F95B0"; // 胆矾蓝
  static readonly jianniaolan = "#1491A8"; // 樫鸟蓝
  static readonly oulan = "#C7D2D4"; // 鸥蓝
  static readonly cuilan = "#1E9EB3"; // 翠蓝
  static readonly qingtinglan = "#3B818C"; // 蜻蜓蓝
  static readonly kongquelan = "#0EB0C9"; // 孔雀蓝
  static readonly weilan = "#29B7CB"; // 蔚蓝
  static readonly pubulan = "#51C4D3"; // 瀑布蓝
  static readonly shanlan = "#7CABB1"; // 闪蓝
  static readonly dianzilan = "#10AEC2"; // 甸子蓝
  static readonly wanbolan = "#648E93"; // 晚波蓝
  static readonly qingshuilan = "#93D5DC"; // 清水蓝
  static readonly xiayunhui = "#617172"; // 夏云灰
  static readonly haitianlan = "#C6E6E8"; // 海天蓝
  static readonly xiakeqing = "#869D9D"; // 虾壳青
  static readonly shilv = "#57C3C2"; // 石绿
  static readonly qionghui = "#C4D7D6"; // 穹灰
  static readonly meidielv = "#12AA9C"; // 美蝶绿
  static readonly ehui = "#737C7B"; // 垩灰
  static readonly lanlv = "#12A182"; // 蓝绿
  static readonly zhulv = "#1BA784"; // 竹绿
  static readonly yadinglv = "#428675"; // 亚丁绿
  static readonly yueyingbai = "#C0C4C3"; // 月影白
  static readonly haiwanglv = "#248067"; // 海王绿
  static readonly shenhailv = "#1A3B32"; // 深海绿
  static readonly lvhui = "#314A43"; // 绿灰
  static readonly qingfanlv = "#2C9678"; // 青矾绿
  static readonly canglv = "#223E36"; // 苍绿
  static readonly feiquanlv = "#497568"; // 飞泉绿
  static readonly mangconglv = "#141E1B"; // 莽丛绿
  static readonly wuzhilv = "#69A794"; // 梧枝绿
  static readonly tonglv = "#2BAE85"; // 铜绿
  static readonly caoyuanyuanlv = "#9ABEAF"; // 草原远绿
  static readonly walv = "#45B787"; // 蛙绿
  static readonly langhualv = "#92B3A5"; // 浪花绿
  static readonly ganlanlv1 = "#1F2623"; // 苷蓝绿
  static readonly fenlv = "#83CBAC"; // 粉绿
  static readonly danlvhui = "#70887D"; // 淡绿灰
  static readonly maimiaolv = "#55BB8A"; // 麦苗绿
  static readonly cuilv = "#20A162"; // 翠绿
  static readonly conglv = "#40A070"; // 葱绿
  static readonly heyelv = "#1A6840"; // 荷叶绿
  static readonly danlv = "#61AC85"; // 淡绿
  static readonly tianyuanlv = "#68B88E"; // 田园绿
  static readonly yuzanlv = "#A4CAB6"; // 玉簪绿
  static readonly chanlv = "#3C9566"; // 蟾绿
  static readonly koushaolv = "#5DBE8A"; // 蔻梢绿
  static readonly bohelv = "#207F4C"; // 薄荷绿
  static readonly yuebai = "#EEF7F2"; // 月白
  static readonly danbaishilv = "#579572"; // 蛋白石绿
  static readonly zhuhuanglv = "#B9DEC9"; // 竹篁绿
  static readonly kongquelv = "#229453"; // 孔雀绿
  static readonly gongdianlv = "#20894D"; // 宫殿绿
  static readonly yunshanlv = "#15231B"; // 云杉绿
  static readonly maolv = "#66C18C"; // 毛绿
  static readonly bingshanlan = "#A4ACA7"; // 冰山蓝
  static readonly minghui = "#8A988E"; // 明灰
  static readonly minglv = "#9ECCAB"; // 明绿
  static readonly songshuanglv = "#83A78D"; // 松霜绿
  static readonly baiqucailv = "#485B4D"; // 白屈菜绿
  static readonly langyanhui = "#5D655F"; // 狼烟灰
  static readonly wasonglv = "#6E8B74"; // 瓦松绿
  static readonly hujishenglv = "#2B312C"; // 槲寄生绿
  static readonly dancuilv = "#C6DFC8"; // 淡翠绿
  static readonly yusuilv = "#41B349"; // 玉髓绿
  static readonly xianlv = "#43B244"; // 鲜绿
  static readonly youlv = "#253D24"; // 油绿
  static readonly baoshilv = "#41AE3C"; // 宝石绿
  static readonly jialingshuilv = "#ADD5A2"; // 嘉陵水绿
  static readonly tianluolv = "#5E665B"; // 田螺绿
  static readonly shuilv = "#8CC269"; // 水绿
  static readonly yingwulv = "#5BAE23"; // 鹦鹉绿
  static readonly aibeilv = "#DFECD5"; // 艾背绿
  static readonly ailv = "#CAD3C3"; // 艾绿
  static readonly niehui = "#9FA39A"; // 镍灰
  static readonly ganlanshilv = "#B2CF87"; // 橄榄石绿
  static readonly yalv = "#96C24E"; // 芽绿
  static readonly nenjulv = "#F0F5E5"; // 嫩菊绿
  static readonly luweilv = "#B7D07A"; // 芦苇绿
  static readonly yaohuang = "#D0DEAA"; // 姚黄
  static readonly enyoulv = "#373834"; // 蒽油绿
  static readonly pingguolv = "#BACF65"; // 苹果绿
  static readonly haimeilv = "#E2E7BF"; // 海沬绿
  static readonly ganlanhuanglv = "#BEC936"; // 橄榄黄绿
  static readonly huaihuahuanglv = "#D2D97A"; // 槐花黄绿
  static readonly diehuang = "#E2D849"; // 蝶黄
  static readonly xiangyabai = "#FFFEF8"; // 象牙白
  static readonly ganlanlv2 = "#5E5314"; // 橄榄绿
  static readonly xuebai = "#FFFEF9"; // 雪白
  static readonly danhuilv = "#AD9E5F"; // 淡灰绿
  static readonly foshouhuang = "#FED71A"; // 佛手黄
  static readonly rubai = "#F9F4DC"; // 乳白
  static readonly xiangjiaohuang = "#E4BF11"; // 香蕉黄
  static readonly xinhelv = "#D2B116"; // 新禾绿
  static readonly youcaihuahuang = "#FBDA41"; // 油菜花黄
  static readonly qiukuihuang = "#EED045"; // 秋葵黄
  static readonly youhuang1 = "#F1CA17"; // 柚黄
  static readonly caohuang = "#D2B42C"; // 草黄
  static readonly liuhuahuang = "#F2CE2B"; // 硫华黄
  static readonly jianghuang = "#E2C027"; // 姜黄
  static readonly tanshuilv = "#645822"; // 潭水绿
  static readonly jinguahuang = "#FCD217"; // 金瓜黄
  static readonly maiganhuang = "#F8DF70"; // 麦秆黄
  static readonly haohuang = "#DFC243"; // 蒿黄
  static readonly molihuang = "#F8DF72"; // 茉莉黄
  static readonly tenghuang = "#FFD111"; // 藤黄
  static readonly mangguohuang = "#DDC871"; // 芒果黄
  static readonly haishenhui = "#FFFEFA"; // 海参灰
  static readonly biluochunlv = "#867018"; // 碧螺春绿
  static readonly tailv = "#887322"; // 苔绿
  static readonly ningmenghuang = "#FCD337"; // 柠檬黄
  static readonly caohuilv = "#8E804B"; // 草灰绿
  static readonly xiangrikuihuang = "#FECC11"; // 向日葵黄
  static readonly suxinhuang = "#FCCB16"; // 素馨黄
  static readonly ruyahuang = "#FFC90C"; // 乳鸭黄
  static readonly yuehui = "#B7AE8F"; // 月灰
  static readonly kuishanhuang = "#F8D86A"; // 葵扇黄
  static readonly dadouhuang = "#FBCD31"; // 大豆黄
  static readonly jinzhanhuang = "#FCC307"; // 金盏黄
  static readonly juleibai = "#E9DDB6"; // 菊蕾白
  static readonly huanglianhuang = "#FCC515"; // 黄连黄
  static readonly xingrenhuang = "#F7E8AA"; // 杏仁黄
  static readonly guhuang = "#E8B004"; // 谷黄
  static readonly muguahuang = "#F9C116"; // 木瓜黄
  static readonly danjianhuang = "#F9D770"; // 淡茧黄
  static readonly yalihuang = "#FBC82F"; // 雅梨黄
  static readonly yinbai = "#F1F0ED"; // 银白
  static readonly zonglvlv = "#5B4913"; // 棕榈绿
  static readonly yingwuguanhuang = "#F6C430"; // 鹦鹉冠黄
  static readonly kulv = "#B78D12"; // 枯绿
  static readonly qianlaohuang = "#F9BD10"; // 浅烙黄
  static readonly danmihuang = "#F9D367"; // 淡密黄
  static readonly jiehuang = "#D9A40E"; // 芥黄
  static readonly zhizihuang = "#EBB10D"; // 栀子黄
  static readonly anhaishuilv = "#584717"; // 暗海水绿
  static readonly miehuang = "#F7DE98"; // 篾黄
  static readonly bangroubai = "#F9F1DB"; // 蚌肉白
  static readonly chaomihuang = "#F4CE69"; // 炒米黄
  static readonly hupohuang = "#FEBA07"; // 琥珀黄
  static readonly huilv = "#8A6913"; // 灰绿
  static readonly zongyelv = "#876818"; // 粽叶绿
  static readonly chenhui = "#B6A476"; // 尘灰
  static readonly youhuang2 = "#FCB70A"; // 鼬黄
  static readonly xiangyahuang = "#F0D695"; // 象牙黄
  static readonly jiaoqing = "#87723E"; // 鲛青
  static readonly douzhihuang = "#F8E8C1"; // 豆汁黄
  static readonly tuhuang = "#D6A01D"; // 土黄
  static readonly xiangshuimeiguihuang = "#F7DA94"; // 香水玫瑰黄
  static readonly hupihuang = "#EAAD1A"; // 虎皮黄
  static readonly jidanhuang = "#FBB612"; // 鸡蛋黄
  static readonly yinshuhui = "#B5AA90"; // 银鼠灰
  static readonly yudubai = "#F7F4ED"; // 鱼肚白
  static readonly chushuxinghuang = "#F8BC31"; // 初熟杏黄
  static readonly shanjihuang = "#B78B26"; // 山鸡黄
  static readonly lianzibai = "#E5D3AA"; // 莲子白
  static readonly xiekehui = "#695E45"; // 蟹壳灰
  static readonly shashihuang = "#E5B751"; // 沙石黄
  static readonly gancaohuang = "#F3BF4C"; // 甘草黄
  static readonly yanyuhui = "#685E48"; // 燕羽灰
  static readonly ezhanghuang = "#FBB929"; // 鹅掌黄
  static readonly maiyatanghuang = "#F9D27D"; // 麦芽糖黄
  static readonly qiantuose = "#E2C17C"; // 浅驼色
  static readonly bailingniaohui = "#B4A992"; // 百灵鸟灰
  static readonly laohuang = "#F6DEAD"; // 酪黄
  static readonly liroubai = "#F2E6CE"; // 荔肉白
  static readonly danrouse = "#F8E0B0"; // 淡肉色
  static readonly hetunhui = "#393733"; // 河豚灰
  static readonly yililv = "#835E1D"; // 蜴蜊绿
  static readonly hanbaiyu = "#F8F4ED"; // 汉白玉
  static readonly chengpihuang = "#FCA104"; // 橙皮黄
  static readonly laiyanglihuang = "#815F25"; // 莱阳梨黄
  static readonly pipahuang = "#FCA106"; // 枇杷黄
  static readonly jinyehuang = "#FFA60F"; // 金叶黄
  static readonly canghuang = "#806332"; // 苍黄
  static readonly fenbai = "#FBF2E3"; // 粉白
  static readonly danjucheng = "#FBA414"; // 淡橘橙
  static readonly zhenzhuhui = "#E4DFD7"; // 珍珠灰
  static readonly guibeihuang = "#826B48"; // 龟背黄
  static readonly qianhui1 = "#DAD4CB"; // 浅灰
  static readonly qianhui2 = "#BBB5AC"; // 铅灰
  static readonly zhonghui = "#BBB5AC"; // 中灰
  static readonly xionghuang = "#FF9900"; // 雄黄
  static readonly mihuang = "#FBB957"; // 蜜黄
  static readonly fengfanhuang = "#DC9123"; // 风帆黄
  static readonly guipidanzong = "#C09351"; // 桂皮淡棕
  static readonly jinyinghuang = "#F4A83A"; // 金莺黄
  static readonly rouse = "#F7C173"; // 肉色
  static readonly diaoyezong = "#E7A23F"; // 凋叶棕
  static readonly gutonglv = "#533C1B"; // 古铜绿
  static readonly luoyingdanfen = "#F9E8D0"; // 落英淡粉
  static readonly ruanmuhuang = "#DE9E44"; // 软木黄
  static readonly guarangfen = "#F9CB8B"; // 瓜瓤粉
  static readonly liuehuang = "#F9A633"; // 榴萼黄
  static readonly daimaohuang = "#DAA45A"; // 玳瑁黄
  static readonly jiaochalv = "#553B18"; // 焦茶绿
  static readonly xiekelv = "#513C20"; // 蟹壳绿
  static readonly shanjihe = "#986524"; // 山鸡褐
  static readonly houmaohui = "#97846C"; // 猴毛灰
  static readonly lujiaozong = "#E3BD8D"; // 鹿角棕
  static readonly dansongyan = "#4D4030"; // 淡松烟
  static readonly wanshoujuhuang = "#FB8B05"; // 万寿菊黄
  static readonly dankehuang = "#F8C387"; // 蛋壳黄
  static readonly xinghuang = "#F28E16"; // 杏黄
  static readonly ganlanhui = "#503E2A"; // 橄榄灰
  static readonly hehui = "#4A4035"; // 鹤灰
  static readonly manaohui = "#CFCCC9"; // 玛瑙灰
  static readonly danyinhui = "#C1B2A3"; // 淡银灰
  static readonly wahui = "#867E76"; // 瓦灰
  static readonly yehui = "#847C74"; // 夜灰
  static readonly beiguahuang = "#FC8C23"; // 北瓜黄
  static readonly hehuabai = "#FBECDE"; // 荷花白
  static readonly songshuhui = "#4F4032"; // 松鼠灰
  static readonly danmifen = "#FBEEE2"; // 淡米粉
  static readonly shenhui = "#81776E"; // 深灰
  static readonly haiouhui = "#9A8878"; // 海鸥灰
  static readonly chahe = "#5D3D21"; // 茶褐
  static readonly tuose = "#66462A"; // 驼色
  static readonly yinhui = "#918072"; // 银灰
  static readonly lupihe = "#D99156"; // 鹿皮褐
  static readonly binglangzong = "#C1651A"; // 槟榔综
  static readonly xiaohui = "#D4C4B7"; // 晓灰
  static readonly danzhe = "#BE7E4A"; // 淡赭
  static readonly gutonghe = "#5C3719"; // 古铜褐
  static readonly jizong = "#DE7622"; // 麂棕
  static readonly zuiguarou = "#DB8540"; // 醉瓜肉
  static readonly yanhui = "#80766E"; // 雁灰
  static readonly guiyuhong = "#F09C5A"; // 鲑鱼红
  static readonly jucheng = "#F97D1C"; // 橘橙
  static readonly jinhuang = "#F26B1F"; // 金黄
  static readonly meiguifen = "#F8B37F"; // 玫瑰粉
  static readonly meirenjiaocheng = "#FA7E23"; // 美人焦橙
  static readonly mise = "#F9E9CD"; // 米色
  static readonly zhuwanghui = "#B7A091"; // 蛛网灰
  static readonly dankafei = "#945833"; // 淡咖啡
  static readonly hailuocheng = "#F0945D"; // 海螺橙
  static readonly yanshizong = "#964D22"; // 岩石棕
  static readonly mangguozong = "#954416"; // 芒果棕
  static readonly taocihong = "#E16723"; // 陶瓷红
  static readonly boluohong = "#FC7930"; // 菠萝红
  static readonly yujinhong = "#CF7543"; // 余烬红
  static readonly jinlianhuacheng = "#F86B1D"; // 金莲花橙
  static readonly huozhuanhong = "#CD6227"; // 火砖红
  static readonly chutaofenhong = "#F6DCCE"; // 初桃粉红
  static readonly tiezong = "#D85916"; // 铁棕
  static readonly jieqiaodanfenhong = "#F7CFBA"; // 介壳淡粉红
  static readonly xiekehong = "#F27635"; // 蟹壳红
  static readonly jintuo = "#E46828"; // 金驼
  static readonly yanhanhong = "#FC6315"; // 燕颔红
  static readonly dankekezong = "#B7511D"; // 淡可可棕
  static readonly chenxihong = "#EA8958"; // 晨曦红
  static readonly yufenhong = "#E8B49A"; // 玉粉红
  static readonly yeqiangweihong = "#FB9968"; // 野蔷薇红
  static readonly ouhe = "#EDC3AE"; // 藕荷
  static readonly changshihui = "#363433"; // 长石灰
  static readonly zhonghonghui = "#8B614D"; // 中红灰
  static readonly huonizong = "#AA6A4C"; // 火泥棕
  static readonly ganhong = "#A6522C"; // 绀红
  static readonly meijianghong = "#FA5D19"; // 莓酱红
  static readonly dingxiangzong = "#71361D"; // 丁香棕
  static readonly danmeiguihui = "#B89485"; // 淡玫瑰灰
  static readonly guaranghong = "#F68C60"; // 瓜瓤红
  static readonly dancanghuahong = "#F6AD8F"; // 淡藏花红
  static readonly sunpizong = "#732E12"; // 筍皮棕
  static readonly runhong = "#F7CDBC"; // 润红
  static readonly longjingyuhong = "#EF632B"; // 龙睛鱼红
  static readonly dantuhuang = "#8C4B31"; // 淡土黄
  static readonly zhumuhui = "#64483D"; // 珠母灰
  static readonly furonghong = "#F9723D"; // 芙蓉红
  static readonly luoxiahong = "#CF4813"; // 落霞红
  static readonly faluohong = "#EE8055"; // 法螺红
  static readonly caozhuhong = "#F8EBE6"; // 草珠红
  static readonly kafei = "#753117"; // 咖啡
  static readonly zhonghuituo = "#603D30"; // 中灰驼
  static readonly yekezong = "#883A1E"; // 椰壳棕
  static readonly xiemaohong = "#B14B28"; // 蟹蝥红
  static readonly dandousha = "#873D24"; // 淡豆沙
  static readonly dantaohong = "#F6CEC1"; // 淡桃红
  static readonly dantiehui = "#5B423A"; // 淡铁灰
  static readonly shibanhui = "#624941"; // 石板灰
  static readonly danlizong = "#673424"; // 淡栗棕
  static readonly yinzhu = "#F43E06"; // 银朱
  static readonly caomeihong = "#EF6F48"; // 草莓红
  static readonly yangshuixianhong = "#F4C7BA"; // 洋水仙红
  static readonly zhuhong = "#ED5126"; // 朱红
  static readonly liuhuahong = "#F34718"; // 榴花红
  static readonly shihong = "#F2481B"; // 柿红
  static readonly kekezong = "#652B1C"; // 可可棕
  static readonly danyingsuhong = "#EEA08C"; // 淡罂粟红
  static readonly dahong = "#F04B22"; // 大红
  static readonly zhayezong = "#692A1B"; // 柞叶棕
  static readonly qingtinghong = "#F1441D"; // 蜻蜓红
  static readonly xiangshuzong = "#773D31"; // 橡树棕
  static readonly jiahong = "#EEAA9C"; // 颊红
  static readonly taohong = "#F0ADA0"; // 桃红
  static readonly huoyanzong = "#863020"; // 火岩棕
  static readonly dantengluozi = "#F2E7E5"; // 淡藤萝紫
  static readonly zheshi = "#862617"; // 赭石
  static readonly tieshuihong = "#F5391C"; // 铁水红
  static readonly yanzhihong = "#F03F24"; // 胭脂红
  static readonly jiguanghong = "#F33B1F"; // 极光红
  static readonly honggonghong = "#F23E23"; // 红汞红
  static readonly luobohong = "#F13C22"; // 萝卜红
  static readonly quhong = "#F05A46"; // 曲红
  static readonly guqiaohong = "#F17666"; // 谷鞘红
  static readonly pingguohong = "#F15642"; // 苹果红
  static readonly guihong = "#F25A47"; // 桂红
  static readonly fenhong = "#F2B9B2"; // 粉红
  static readonly antuozong = "#592620"; // 暗驼棕
  static readonly xiyanghong = "#DE2A18"; // 夕阳红
  static readonly yingtaohong = "#ED3321"; // 樱桃红
  static readonly shanhuhong = "#F04A3A"; // 珊瑚红
  static readonly huoshanzong = "#482522"; // 火山棕
  static readonly lizong = "#5C1E19"; // 栗棕
  static readonly hedinghong = "#D42517"; // 鹤顶红
  static readonly shehong = "#F19790"; // 舌红
  static readonly exueshihong = "#AB372F"; // 鹅血石红
  static readonly jiangzong = "#5A1F1B"; // 酱棕
  static readonly yusaihong = "#ED3B2F"; // 鱼鳃红
  static readonly lusuihui = "#BDAEAD"; // 芦穗灰
  static readonly lichunhong = "#EB261A"; // 丽春红
  static readonly fupenzihong = "#AC1F18"; // 覆盆子红
  static readonly haibaohui = "#483332"; // 海报灰
  static readonly dousha = "#481E1C"; // 豆沙
  static readonly liuzihong = "#F1908C"; // 榴子红
  static readonly qiuhaitanghong = "#EC2B24"; // 秋海棠红
  static readonly wuhuaguohong = "#EFAFAD"; // 无花果红
  static readonly danfei = "#F2CAC9"; // 淡绯
  static readonly meiguihui = "#4B2E2B"; // 玫瑰灰
  static readonly danshuhong2 = "#ED4845"; // 淡菽红
  static readonly goushuhong = "#ED3333"; // 枸枢红
  static readonly diaozi = "#5D3131"; // 貂紫
}

/*
Preview.md :
[日本の伝統色](#日本の伝統色) | [中国传统色](#中国传统色)

# 日本の伝統色
《日本の伝統色 The Traditional Colors of Japan》. PIE BOOKS, 2007.

| ID | 预览   | 名称   | 英文   | 色号    | 反预览 | 反色号 |
| -- | ------ | ------ | ------ | ------- | ------ | ------- |
| 1 | <font color=#DC9FB4>██████</font> | <font color=#DC9FB4>撫子</font> | <font color=#DC9FB4>NADESHIKO</font> | <font color=#DC9FB4>#DC9FB4</font> | <font color=#23604B>██████</font> | <font color=#23604B>#23604B</font> |
| 2 | <font color=#E16B8C>██████</font> | <font color=#E16B8C>紅梅</font> | <font color=#E16B8C>KOHBAI</font> | <font color=#E16B8C>#E16B8C</font> | <font color=#1E9473>██████</font> | <font color=#1E9473>#1E9473</font> |
| 3 | <font color=#8E354A>██████</font> | <font color=#8E354A>蘇芳</font> | <font color=#8E354A>SUOH</font> | <font color=#8E354A>#8E354A</font> | <font color=#71CAB5>██████</font> | <font color=#71CAB5>#71CAB5</font> |
| 4 | <font color=#F8C3CD>██████</font> | <font color=#F8C3CD>退紅</font> | <font color=#F8C3CD>TAIKOH</font> | <font color=#F8C3CD>#F8C3CD</font> | <font color=#073C32>██████</font> | <font color=#073C32>#073C32</font> |
| 5 | <font color=#F4A7B9>██████</font> | <font color=#F4A7B9>一斥染</font> | <font color=#F4A7B9>IKKONZOME</font> | <font color=#F4A7B9>#F4A7B9</font> | <font color=#0B5846>██████</font> | <font color=#0B5846>#0B5846</font> |
| 6 | <font color=#64363C>██████</font> | <font color=#64363C>桑染</font> | <font color=#64363C>KUWAZOME</font> | <font color=#64363C>#64363C</font> | <font color=#9BC9C3>██████</font> | <font color=#9BC9C3>#9BC9C3</font> |
| 7 | <font color=#F596AA>██████</font> | <font color=#F596AA>桃</font> | <font color=#F596AA>MOMO</font> | <font color=#F596AA>#F596AA</font> | <font color=#0A6955>██████</font> | <font color=#0A6955>#0A6955</font> |
| 8 | <font color=#B5495B>██████</font> | <font color=#B5495B>苺</font> | <font color=#B5495B>ICHIGO</font> | <font color=#B5495B>#B5495B</font> | <font color=#4AB6A4>██████</font> | <font color=#4AB6A4>#4AB6A4</font> |
| 9 | <font color=#E87A90>██████</font> | <font color=#E87A90>薄紅</font> | <font color=#E87A90>USUBENI</font> | <font color=#E87A90>#E87A90</font> | <font color=#17856F>██████</font> | <font color=#17856F>#17856F</font> |
| 10 | <font color=#D05A6E>██████</font> | <font color=#D05A6E>今様</font> | <font color=#D05A6E>IMAYOH</font> | <font color=#D05A6E>#D05A6E</font> | <font color=#2FA591>██████</font> | <font color=#2FA591>#2FA591</font> |
| 11 | <font color=#DB4D6D>██████</font> | <font color=#DB4D6D>中紅</font> | <font color=#DB4D6D>NAKABENI</font> | <font color=#DB4D6D>#DB4D6D</font> | <font color=#24B292>██████</font> | <font color=#24B292>#24B292</font> |
| 12 | <font color=#FEDFE1>██████</font> | <font color=#FEDFE1>桜</font> | <font color=#FEDFE1>SAKURA</font> | <font color=#FEDFE1>#FEDFE1</font> | <font color=#01201E>██████</font> | <font color=#01201E>#01201E</font> |
| 13 | <font color=#9E7A7A>██████</font> | <font color=#9E7A7A>梅鼠</font> | <font color=#9E7A7A>UMENEZUMI</font> | <font color=#9E7A7A>#9E7A7A</font> | <font color=#618585>██████</font> | <font color=#618585>#618585</font> |
| 14 | <font color=#D0104C>██████</font> | <font color=#D0104C>韓紅花</font> | <font color=#D0104C>KARAKURENAI</font> | <font color=#D0104C>#D0104C</font> | <font color=#2FEFB3>██████</font> | <font color=#2FEFB3>#2FEFB3</font> |
| 15 | <font color=#9F353A>██████</font> | <font color=#9F353A>燕脂</font> | <font color=#9F353A>ENJI</font> | <font color=#9F353A>#9F353A</font> | <font color=#60CAC5>██████</font> | <font color=#60CAC5>#60CAC5</font> |
| 16 | <font color=#CB1B45>██████</font> | <font color=#CB1B45>紅</font> | <font color=#CB1B45>KURENAI</font> | <font color=#CB1B45>#CB1B45</font> | <font color=#34E4BA>██████</font> | <font color=#34E4BA>#34E4BA</font> |
| 17 | <font color=#EEA9A9>██████</font> | <font color=#EEA9A9>鴇</font> | <font color=#EEA9A9>TOKI</font> | <font color=#EEA9A9>#EEA9A9</font> | <font color=#115656>██████</font> | <font color=#115656>#115656</font> |
| 18 | <font color=#BF6766>██████</font> | <font color=#BF6766>長春</font> | <font color=#BF6766>CYOHSYUN</font> | <font color=#BF6766>#BF6766</font> | <font color=#409899>██████</font> | <font color=#409899>#409899</font> |
| 19 | <font color=#86473F>██████</font> | <font color=#86473F>深緋</font> | <font color=#86473F>KOKIAKE</font> | <font color=#86473F>#86473F</font> | <font color=#79B8C0>██████</font> | <font color=#79B8C0>#79B8C0</font> |
| 20 | <font color=#B19693>██████</font> | <font color=#B19693>桜鼠</font> | <font color=#B19693>SAKURANEZUMI</font> | <font color=#B19693>#B19693</font> | <font color=#4E696C>██████</font> | <font color=#4E696C>#4E696C</font> |
| 21 | <font color=#EB7A77>██████</font> | <font color=#EB7A77>甚三紅</font> | <font color=#EB7A77>JINZAMOMI</font> | <font color=#EB7A77>#EB7A77</font> | <font color=#148588>██████</font> | <font color=#148588>#148588</font> |
| 22 | <font color=#954A45>██████</font> | <font color=#954A45>小豆</font> | <font color=#954A45>AZUKI</font> | <font color=#954A45>#954A45</font> | <font color=#6AB5BA>██████</font> | <font color=#6AB5BA>#6AB5BA</font> |
| 23 | <font color=#A96360>██████</font> | <font color=#A96360>蘇芳香</font> | <font color=#A96360>SUOHKOH</font> | <font color=#A96360>#A96360</font> | <font color=#569C9F>██████</font> | <font color=#569C9F>#569C9F</font> |
| 24 | <font color=#CB4042>██████</font> | <font color=#CB4042>赤紅</font> | <font color=#CB4042>AKABENI</font> | <font color=#CB4042>#CB4042</font> | <font color=#34BFBD>██████</font> | <font color=#34BFBD>#34BFBD</font> |
| 25 | <font color=#AB3B3A>██████</font> | <font color=#AB3B3A>真朱</font> | <font color=#AB3B3A>SHINSYU</font> | <font color=#AB3B3A>#AB3B3A</font> | <font color=#54C4C5>██████</font> | <font color=#54C4C5>#54C4C5</font> |
| 26 | <font color=#D7C4BB>██████</font> | <font color=#D7C4BB>灰桜</font> | <font color=#D7C4BB>HAIZAKURA</font> | <font color=#D7C4BB>#D7C4BB</font> | <font color=#283B44>██████</font> | <font color=#283B44>#283B44</font> |
| 27 | <font color=#904840>██████</font> | <font color=#904840>栗梅</font> | <font color=#904840>KURIUME</font> | <font color=#904840>#904840</font> | <font color=#6FB7BF>██████</font> | <font color=#6FB7BF>#6FB7BF</font> |
| 28 | <font color=#734338>██████</font> | <font color=#734338>海老茶</font> | <font color=#734338>EBICHA</font> | <font color=#734338>#734338</font> | <font color=#8CBCC7>██████</font> | <font color=#8CBCC7>#8CBCC7</font> |
| 29 | <font color=#C73E3A>██████</font> | <font color=#C73E3A>銀朱</font> | <font color=#C73E3A>GINSYU</font> | <font color=#C73E3A>#C73E3A</font> | <font color=#38C1C5>██████</font> | <font color=#38C1C5>#38C1C5</font> |
| 30 | <font color=#554236>██████</font> | <font color=#554236>黒鳶</font> | <font color=#554236>KUROTOBI</font> | <font color=#554236>#554236</font> | <font color=#AABDC9>██████</font> | <font color=#AABDC9>#AABDC9</font> |
| 31 | <font color=#994639>██████</font> | <font color=#994639>紅鳶</font> | <font color=#994639>BENITOBI</font> | <font color=#994639>#994639</font> | <font color=#66B9C6>██████</font> | <font color=#66B9C6>#66B9C6</font> |
| 32 | <font color=#F19483>██████</font> | <font color=#F19483>曙</font> | <font color=#F19483>AKEBONO</font> | <font color=#F19483>#F19483</font> | <font color=#0E6B7C>██████</font> | <font color=#0E6B7C>#0E6B7C</font> |
| 33 | <font color=#B54434>██████</font> | <font color=#B54434>紅樺</font> | <font color=#B54434>BENIKABA</font> | <font color=#B54434>#B54434</font> | <font color=#4ABBCB>██████</font> | <font color=#4ABBCB>#4ABBCB</font> |
| 34 | <font color=#B9887D>██████</font> | <font color=#B9887D>水がき</font> | <font color=#B9887D>MIZUGAKI</font> | <font color=#B9887D>#B9887D</font> | <font color=#467782>██████</font> | <font color=#467782>#467782</font> |
| 35 | <font color=#F17C67>██████</font> | <font color=#F17C67>珊瑚朱</font> | <font color=#F17C67>SANGOSYU</font> | <font color=#F17C67>#F17C67</font> | <font color=#0E8398>██████</font> | <font color=#0E8398>#0E8398</font> |
| 36 | <font color=#884C3A>██████</font> | <font color=#884C3A>紅檜皮</font> | <font color=#884C3A>BENIHIWADA</font> | <font color=#884C3A>#884C3A</font> | <font color=#77B3C5>██████</font> | <font color=#77B3C5>#77B3C5</font> |
| 37 | <font color=#E83015>██████</font> | <font color=#E83015>猩猩緋</font> | <font color=#E83015>SYOJYOHI</font> | <font color=#E83015>#E83015</font> | <font color=#17CFEA>██████</font> | <font color=#17CFEA>#17CFEA</font> |
| 38 | <font color=#D75455>██████</font> | <font color=#D75455>鉛丹</font> | <font color=#D75455>ENTAN</font> | <font color=#D75455>#D75455</font> | <font color=#28ABAA>██████</font> | <font color=#28ABAA>#28ABAA</font> |
| 39 | <font color=#B55D4C>██████</font> | <font color=#B55D4C>芝翫茶</font> | <font color=#B55D4C>SHIKANCHA</font> | <font color=#B55D4C>#B55D4C</font> | <font color=#4AA2B3>██████</font> | <font color=#4AA2B3>#4AA2B3</font> |
| 40 | <font color=#854836>██████</font> | <font color=#854836>檜皮</font> | <font color=#854836>HIWADA</font> | <font color=#854836>#854836</font> | <font color=#7AB7C9>██████</font> | <font color=#7AB7C9>#7AB7C9</font> |
| 41 | <font color=#A35E47>██████</font> | <font color=#A35E47>柿渋</font> | <font color=#A35E47>KAKISHIBU</font> | <font color=#A35E47>#A35E47</font> | <font color=#5CA1B8>██████</font> | <font color=#5CA1B8>#5CA1B8</font> |
| 42 | <font color=#CC543A>██████</font> | <font color=#CC543A>緋</font> | <font color=#CC543A>AKE</font> | <font color=#CC543A>#CC543A</font> | <font color=#33ABC5>██████</font> | <font color=#33ABC5>#33ABC5</font> |
| 43 | <font color=#724832>██████</font> | <font color=#724832>鳶</font> | <font color=#724832>TOBI</font> | <font color=#724832>#724832</font> | <font color=#8DB7CD>██████</font> | <font color=#8DB7CD>#8DB7CD</font> |
| 44 | <font color=#F75C2F>██████</font> | <font color=#F75C2F>紅緋</font> | <font color=#F75C2F>BENIHI</font> | <font color=#F75C2F>#F75C2F</font> | <font color=#08A3D0>██████</font> | <font color=#08A3D0>#08A3D0</font> |
| 45 | <font color=#6A4028>██████</font> | <font color=#6A4028>栗皮茶</font> | <font color=#6A4028>KURIKAWACHA</font> | <font color=#6A4028>#6A4028</font> | <font color=#95BFD7>██████</font> | <font color=#95BFD7>#95BFD7</font> |
| 46 | <font color=#9A5034>██████</font> | <font color=#9A5034>弁柄</font> | <font color=#9A5034>BENGARA</font> | <font color=#9A5034>#9A5034</font> | <font color=#65AFCB>██████</font> | <font color=#65AFCB>#65AFCB</font> |
| 47 | <font color=#C46243>██████</font> | <font color=#C46243>照柿</font> | <font color=#C46243>TERIGAKI</font> | <font color=#C46243>#C46243</font> | <font color=#3B9DBC>██████</font> | <font color=#3B9DBC>#3B9DBC</font> |
| 48 | <font color=#AF5F3C>██████</font> | <font color=#AF5F3C>江戸茶</font> | <font color=#AF5F3C>EDOCHA</font> | <font color=#AF5F3C>#AF5F3C</font> | <font color=#50A0C3>██████</font> | <font color=#50A0C3>#50A0C3</font> |
| 49 | <font color=#FB966E>██████</font> | <font color=#FB966E>洗朱</font> | <font color=#FB966E>ARAISYU</font> | <font color=#FB966E>#FB966E</font> | <font color=#046991>██████</font> | <font color=#046991>#046991</font> |
| 50 | <font color=#724938>██████</font> | <font color=#724938>百塩茶</font> | <font color=#724938>MOMOSHIOCHA</font> | <font color=#724938>#724938</font> | <font color=#8DB6C7>██████</font> | <font color=#8DB6C7>#8DB6C7</font> |
| 51 | <font color=#B47157>██████</font> | <font color=#B47157>唐茶</font> | <font color=#B47157>KARACHA</font> | <font color=#B47157>#B47157</font> | <font color=#4B8EA8>██████</font> | <font color=#4B8EA8>#4B8EA8</font> |
| 52 | <font color=#DB8E71>██████</font> | <font color=#DB8E71>ときがら茶</font> | <font color=#DB8E71>TOKIGARACHA</font> | <font color=#DB8E71>#DB8E71</font> | <font color=#24718E>██████</font> | <font color=#24718E>#24718E</font> |
| 53 | <font color=#F05E1C>██████</font> | <font color=#F05E1C>黄丹</font> | <font color=#F05E1C>OHNI</font> | <font color=#F05E1C>#F05E1C</font> | <font color=#0FA1E3>██████</font> | <font color=#0FA1E3>#0FA1E3</font> |
| 54 | <font color=#ED784A>██████</font> | <font color=#ED784A>纁</font> | <font color=#ED784A>SOHI</font> | <font color=#ED784A>#ED784A</font> | <font color=#1287B5>██████</font> | <font color=#1287B5>#1287B5</font> |
| 55 | <font color=#CA7853>██████</font> | <font color=#CA7853>遠州茶</font> | <font color=#CA7853>ENSYUCHA</font> | <font color=#CA7853>#CA7853</font> | <font color=#3587AC>██████</font> | <font color=#3587AC>#3587AC</font> |
| 56 | <font color=#B35C37>██████</font> | <font color=#B35C37>樺茶</font> | <font color=#B35C37>KABACHA</font> | <font color=#B35C37>#B35C37</font> | <font color=#4CA3C8>██████</font> | <font color=#4CA3C8>#4CA3C8</font> |
| 57 | <font color=#563F2E>██████</font> | <font color=#563F2E>焦茶</font> | <font color=#563F2E>KOGECHA</font> | <font color=#563F2E>#563F2E</font> | <font color=#A9C0D1>██████</font> | <font color=#A9C0D1>#A9C0D1</font> |
| 58 | <font color=#E3916E>██████</font> | <font color=#E3916E>赤香</font> | <font color=#E3916E>AKAKOH</font> | <font color=#E3916E>#E3916E</font> | <font color=#1C6E91>██████</font> | <font color=#1C6E91>#1C6E91</font> |
| 59 | <font color=#8F5A3C>██████</font> | <font color=#8F5A3C>雀茶</font> | <font color=#8F5A3C>SUZUMECHA</font> | <font color=#8F5A3C>#8F5A3C</font> | <font color=#70A5C3>██████</font> | <font color=#70A5C3>#70A5C3</font> |
| 60 | <font color=#F0A986>██████</font> | <font color=#F0A986>宍</font> | <font color=#F0A986>SHISHI</font> | <font color=#F0A986>#F0A986</font> | <font color=#0F5679>██████</font> | <font color=#0F5679>#0F5679</font> |
| 61 | <font color=#A0674B>██████</font> | <font color=#A0674B>宗伝唐茶</font> | <font color=#A0674B>SODENKARACHA</font> | <font color=#A0674B>#A0674B</font> | <font color=#5F98B4>██████</font> | <font color=#5F98B4>#5F98B4</font> |
| 62 | <font color=#C1693C>██████</font> | <font color=#C1693C>樺</font> | <font color=#C1693C>KABA</font> | <font color=#C1693C>#C1693C</font> | <font color=#3E96C3>██████</font> | <font color=#3E96C3>#3E96C3</font> |
| 63 | <font color=#FB9966>██████</font> | <font color=#FB9966>深支子</font> | <font color=#FB9966>KOKIKUCHINASHI</font> | <font color=#FB9966>#FB9966</font> | <font color=#046699>██████</font> | <font color=#046699>#046699</font> |
| 64 | <font color=#947A6D>██████</font> | <font color=#947A6D>胡桃</font> | <font color=#947A6D>KURUMI</font> | <font color=#947A6D>#947A6D</font> | <font color=#6B8592>██████</font> | <font color=#6B8592>#6B8592</font> |
| 65 | <font color=#A36336>██████</font> | <font color=#A36336>代赭</font> | <font color=#A36336>TAISYA</font> | <font color=#A36336>#A36336</font> | <font color=#5C9CC9>██████</font> | <font color=#5C9CC9>#5C9CC9</font> |
| 66 | <font color=#E79460>██████</font> | <font color=#E79460>洗柿</font> | <font color=#E79460>ARAIGAKI</font> | <font color=#E79460>#E79460</font> | <font color=#186B9F>██████</font> | <font color=#186B9F>#186B9F</font> |
| 67 | <font color=#7D532C>██████</font> | <font color=#7D532C>黄櫨染</font> | <font color=#7D532C>KOHROZEN</font> | <font color=#7D532C>#7D532C</font> | <font color=#82ACD3>██████</font> | <font color=#82ACD3>#82ACD3</font> |
| 68 | <font color=#C78550>██████</font> | <font color=#C78550>赤朽葉</font> | <font color=#C78550>AKAKUCHIBA</font> | <font color=#C78550>#C78550</font> | <font color=#387AAF>██████</font> | <font color=#387AAF>#387AAF</font> |
| 69 | <font color=#985F2A>██████</font> | <font color=#985F2A>礪茶</font> | <font color=#985F2A>TONOCHA</font> | <font color=#985F2A>#985F2A</font> | <font color=#67A0D5>██████</font> | <font color=#67A0D5>#67A0D5</font> |
| 70 | <font color=#E1A679>██████</font> | <font color=#E1A679>赤白橡</font> | <font color=#E1A679>AKASHIROTSURUBAMI</font> | <font color=#E1A679>#E1A679</font> | <font color=#1E5986>██████</font> | <font color=#1E5986>#1E5986</font> |
| 71 | <font color=#855B32>██████</font> | <font color=#855B32>煎茶</font> | <font color=#855B32>SENCHA</font> | <font color=#855B32>#855B32</font> | <font color=#7AA4CD>██████</font> | <font color=#7AA4CD>#7AA4CD</font> |
| 72 | <font color=#FC9F4D>██████</font> | <font color=#FC9F4D>萱草</font> | <font color=#FC9F4D>KANZO</font> | <font color=#FC9F4D>#FC9F4D</font> | <font color=#0360B2>██████</font> | <font color=#0360B2>#0360B2</font> |
| 73 | <font color=#FFBA84>██████</font> | <font color=#FFBA84>洒落柿</font> | <font color=#FFBA84>SHAREGAKI</font> | <font color=#FFBA84>#FFBA84</font> | <font color=#00457B>██████</font> | <font color=#00457B>#00457B</font> |
| 74 | <font color=#E98B2A>██████</font> | <font color=#E98B2A>紅鬱金</font> | <font color=#E98B2A>BENIUKON</font> | <font color=#E98B2A>#E98B2A</font> | <font color=#1674D5>██████</font> | <font color=#1674D5>#1674D5</font> |
| 75 | <font color=#E9A368>██████</font> | <font color=#E9A368>梅染</font> | <font color=#E9A368>UMEZOME</font> | <font color=#E9A368>#E9A368</font> | <font color=#165C97>██████</font> | <font color=#165C97>#165C97</font> |
| 76 | <font color=#B17844>██████</font> | <font color=#B17844>枇杷茶</font> | <font color=#B17844>BIWACHA</font> | <font color=#B17844>#B17844</font> | <font color=#4E87BB>██████</font> | <font color=#4E87BB>#4E87BB</font> |
| 77 | <font color=#96632E>██████</font> | <font color=#96632E>丁子茶</font> | <font color=#96632E>CHOJICHA</font> | <font color=#96632E>#96632E</font> | <font color=#699CD1>██████</font> | <font color=#699CD1>#699CD1</font> |
| 78 | <font color=#43341B>██████</font> | <font color=#43341B>憲法染</font> | <font color=#43341B>KENPOHZOME</font> | <font color=#43341B>#43341B</font> | <font color=#BCCBE4>██████</font> | <font color=#BCCBE4>#BCCBE4</font> |
| 79 | <font color=#CA7A2C>██████</font> | <font color=#CA7A2C>琥珀</font> | <font color=#CA7A2C>KOHAKU</font> | <font color=#CA7A2C>#CA7A2C</font> | <font color=#3585D3>██████</font> | <font color=#3585D3>#3585D3</font> |
| 80 | <font color=#ECB88A>██████</font> | <font color=#ECB88A>薄柿</font> | <font color=#ECB88A>USUGAKI</font> | <font color=#ECB88A>#ECB88A</font> | <font color=#134775>██████</font> | <font color=#134775>#134775</font> |
| 81 | <font color=#78552B>██████</font> | <font color=#78552B>伽羅</font> | <font color=#78552B>KYARA</font> | <font color=#78552B>#78552B</font> | <font color=#87AAD4>██████</font> | <font color=#87AAD4>#87AAD4</font> |
| 82 | <font color=#B07736>██████</font> | <font color=#B07736>丁子染</font> | <font color=#B07736>CHOJIZOME</font> | <font color=#B07736>#B07736</font> | <font color=#4F88C9>██████</font> | <font color=#4F88C9>#4F88C9</font> |
| 83 | <font color=#967249>██████</font> | <font color=#967249>柴染</font> | <font color=#967249>FUSHIZOME</font> | <font color=#967249>#967249</font> | <font color=#698DB6>██████</font> | <font color=#698DB6>#698DB6</font> |
| 84 | <font color=#E2943B>██████</font> | <font color=#E2943B>朽葉</font> | <font color=#E2943B>KUCHIBA</font> | <font color=#E2943B>#E2943B</font> | <font color=#1D6BC4>██████</font> | <font color=#1D6BC4>#1D6BC4</font> |
| 85 | <font color=#C7802D>██████</font> | <font color=#C7802D>金茶</font> | <font color=#C7802D>KINCHA</font> | <font color=#C7802D>#C7802D</font> | <font color=#387FD2>██████</font> | <font color=#387FD2>#387FD2</font> |
| 86 | <font color=#9B6E23>██████</font> | <font color=#9B6E23>狐</font> | <font color=#9B6E23>KITSUNE</font> | <font color=#9B6E23>#9B6E23</font> | <font color=#6491DC>██████</font> | <font color=#6491DC>#6491DC</font> |
| 87 | <font color=#6E552F>██████</font> | <font color=#6E552F>煤竹</font> | <font color=#6E552F>SUSUTAKE</font> | <font color=#6E552F>#6E552F</font> | <font color=#91AAD0>██████</font> | <font color=#91AAD0>#91AAD0</font> |
| 88 | <font color=#EBB471>██████</font> | <font color=#EBB471>薄香</font> | <font color=#EBB471>USUKOH</font> | <font color=#EBB471>#EBB471</font> | <font color=#144B8E>██████</font> | <font color=#144B8E>#144B8E</font> |
| 89 | <font color=#D7B98E>██████</font> | <font color=#D7B98E>砥粉</font> | <font color=#D7B98E>TONOKO</font> | <font color=#D7B98E>#D7B98E</font> | <font color=#284671>██████</font> | <font color=#284671>#284671</font> |
| 90 | <font color=#82663A>██████</font> | <font color=#82663A>銀煤竹</font> | <font color=#82663A>GINSUSUTAKE</font> | <font color=#82663A>#82663A</font> | <font color=#7D99C5>██████</font> | <font color=#7D99C5>#7D99C5</font> |
| 91 | <font color=#B68E55>██████</font> | <font color=#B68E55>黄土</font> | <font color=#B68E55>OHDO</font> | <font color=#B68E55>#B68E55</font> | <font color=#4971AA>██████</font> | <font color=#4971AA>#4971AA</font> |
| 92 | <font color=#BC9F77>██████</font> | <font color=#BC9F77>白茶</font> | <font color=#BC9F77>SHIRACHA</font> | <font color=#BC9F77>#BC9F77</font> | <font color=#436088>██████</font> | <font color=#436088>#436088</font> |
| 93 | <font color=#876633>██████</font> | <font color=#876633>媚茶</font> | <font color=#876633>KOBICHA</font> | <font color=#876633>#876633</font> | <font color=#7899CC>██████</font> | <font color=#7899CC>#7899CC</font> |
| 94 | <font color=#C18A26>██████</font> | <font color=#C18A26>黄唐茶</font> | <font color=#C18A26>KIGARACHA</font> | <font color=#C18A26>#C18A26</font> | <font color=#3E75D9>██████</font> | <font color=#3E75D9>#3E75D9</font> |
| 95 | <font color=#FFB11B>██████</font> | <font color=#FFB11B>山吹</font> | <font color=#FFB11B>YAMABUKI</font> | <font color=#FFB11B>#FFB11B</font> | <font color=#004EE4>██████</font> | <font color=#004EE4>#004EE4</font> |
| 96 | <font color=#D19826>██████</font> | <font color=#D19826>山吹茶</font> | <font color=#D19826>YAMABUKICHA</font> | <font color=#D19826>#D19826</font> | <font color=#2E67D9>██████</font> | <font color=#2E67D9>#2E67D9</font> |
| 97 | <font color=#DDA52D>██████</font> | <font color=#DDA52D>櫨染</font> | <font color=#DDA52D>HAJIZOME</font> | <font color=#DDA52D>#DDA52D</font> | <font color=#225AD2>██████</font> | <font color=#225AD2>#225AD2</font> |
| 98 | <font color=#C99833>██████</font> | <font color=#C99833>桑茶</font> | <font color=#C99833>KUWACHA</font> | <font color=#C99833>#C99833</font> | <font color=#3667CC>██████</font> | <font color=#3667CC>#3667CC</font> |
| 99 | <font color=#F9BF45>██████</font> | <font color=#F9BF45>玉子</font> | <font color=#F9BF45>TAMAGO</font> | <font color=#F9BF45>#F9BF45</font> | <font color=#0640BA>██████</font> | <font color=#0640BA>#0640BA</font> |
| 100 | <font color=#DCB879>██████</font> | <font color=#DCB879>白橡</font> | <font color=#DCB879>SHIROTSURUBAMI</font> | <font color=#DCB879>#DCB879</font> | <font color=#234786>██████</font> | <font color=#234786>#234786</font> |
| 101 | <font color=#BA9132>██████</font> | <font color=#BA9132>黄橡</font> | <font color=#BA9132>KITSURUBAMI</font> | <font color=#BA9132>#BA9132</font> | <font color=#456ECD>██████</font> | <font color=#456ECD>#456ECD</font> |
| 102 | <font color=#E8B647>██████</font> | <font color=#E8B647>玉蜀黍</font> | <font color=#E8B647>TAMAMOROKOSHI</font> | <font color=#E8B647>#E8B647</font> | <font color=#1749B8>██████</font> | <font color=#1749B8>#1749B8</font> |
| 103 | <font color=#F7C242>██████</font> | <font color=#F7C242>花葉</font> | <font color=#F7C242>HANABA</font> | <font color=#F7C242>#F7C242</font> | <font color=#083DBD>██████</font> | <font color=#083DBD>#083DBD</font> |
| 104 | <font color=#7D6C46>██████</font> | <font color=#7D6C46>生壁</font> | <font color=#7D6C46>NAMAKABE</font> | <font color=#7D6C46>#7D6C46</font> | <font color=#8293B9>██████</font> | <font color=#8293B9>#8293B9</font> |
| 105 | <font color=#DAC9A6>██████</font> | <font color=#DAC9A6>鳥の子</font> | <font color=#DAC9A6>TORINOKO</font> | <font color=#DAC9A6>#DAC9A6</font> | <font color=#253659>██████</font> | <font color=#253659>#253659</font> |
| 106 | <font color=#FAD689>██████</font> | <font color=#FAD689>浅黄</font> | <font color=#FAD689>USUKI</font> | <font color=#FAD689>#FAD689</font> | <font color=#052976>██████</font> | <font color=#052976>#052976</font> |
| 107 | <font color=#D9AB42>██████</font> | <font color=#D9AB42>黄朽葉</font> | <font color=#D9AB42>KIKUCHIBA</font> | <font color=#D9AB42>#D9AB42</font> | <font color=#2654BD>██████</font> | <font color=#2654BD>#2654BD</font> |
| 108 | <font color=#F6C555>██████</font> | <font color=#F6C555>梔子</font> | <font color=#F6C555>KUCHINASHI</font> | <font color=#F6C555>#F6C555</font> | <font color=#093AAA>██████</font> | <font color=#093AAA>#093AAA</font> |
| 109 | <font color=#FFC408>██████</font> | <font color=#FFC408>籐黄</font> | <font color=#FFC408>TOHOH</font> | <font color=#FFC408>#FFC408</font> | <font color=#003BF7>██████</font> | <font color=#003BF7>#003BF7</font> |
| 110 | <font color=#EFBB24>██████</font> | <font color=#EFBB24>鬱金</font> | <font color=#EFBB24>UKON</font> | <font color=#EFBB24>#EFBB24</font> | <font color=#1044DB>██████</font> | <font color=#1044DB>#1044DB</font> |
| 111 | <font color=#CAAD5F>██████</font> | <font color=#CAAD5F>芥子</font> | <font color=#CAAD5F>KARASHI</font> | <font color=#CAAD5F>#CAAD5F</font> | <font color=#3552A0>██████</font> | <font color=#3552A0>#3552A0</font> |
| 112 | <font color=#8D742A>██████</font> | <font color=#8D742A>肥後煤竹</font> | <font color=#8D742A>HIGOSUSUTAKE</font> | <font color=#8D742A>#8D742A</font> | <font color=#728BD5>██████</font> | <font color=#728BD5>#728BD5</font> |
| 113 | <font color=#B4A582>██████</font> | <font color=#B4A582>利休白茶</font> | <font color=#B4A582>RIKYUSHIRACHA</font> | <font color=#B4A582>#B4A582</font> | <font color=#4B5A7D>██████</font> | <font color=#4B5A7D>#4B5A7D</font> |
| 114 | <font color=#877F6C>██████</font> | <font color=#877F6C>灰汁</font> | <font color=#877F6C>AKU</font> | <font color=#877F6C>#877F6C</font> | <font color=#788093>██████</font> | <font color=#788093>#788093</font> |
| 115 | <font color=#897D55>██████</font> | <font color=#897D55>利休茶</font> | <font color=#897D55>RIKYUCHA</font> | <font color=#897D55>#897D55</font> | <font color=#7682AA>██████</font> | <font color=#7682AA>#7682AA</font> |
| 116 | <font color=#74673E>██████</font> | <font color=#74673E>路考茶</font> | <font color=#74673E>ROKOHCHA</font> | <font color=#74673E>#74673E</font> | <font color=#8B98C1>██████</font> | <font color=#8B98C1>#8B98C1</font> |
| 117 | <font color=#A28C37>██████</font> | <font color=#A28C37>菜種油</font> | <font color=#A28C37>NATANEYU</font> | <font color=#A28C37>#A28C37</font> | <font color=#5D73C8>██████</font> | <font color=#5D73C8>#5D73C8</font> |
| 118 | <font color=#6C6024>██████</font> | <font color=#6C6024>鶯茶</font> | <font color=#6C6024>UGUISUCHA</font> | <font color=#6C6024>#6C6024</font> | <font color=#939FDB>██████</font> | <font color=#939FDB>#939FDB</font> |
| 119 | <font color=#867835>██████</font> | <font color=#867835>黄海松茶</font> | <font color=#867835>KIMIRUCHA</font> | <font color=#867835>#867835</font> | <font color=#7987CA>██████</font> | <font color=#7987CA>#7987CA</font> |
| 120 | <font color=#62592C>██████</font> | <font color=#62592C>海松茶</font> | <font color=#62592C>MIRUCHA</font> | <font color=#62592C>#62592C</font> | <font color=#9DA6D3>██████</font> | <font color=#9DA6D3>#9DA6D3</font> |
| 121 | <font color=#E9CD4C>██████</font> | <font color=#E9CD4C>刈安</font> | <font color=#E9CD4C>KARIYASU</font> | <font color=#E9CD4C>#E9CD4C</font> | <font color=#1632B3>██████</font> | <font color=#1632B3>#1632B3</font> |
| 122 | <font color=#F7D94C>██████</font> | <font color=#F7D94C>菜の花</font> | <font color=#F7D94C>NANOHANA</font> | <font color=#F7D94C>#F7D94C</font> | <font color=#0826B3>██████</font> | <font color=#0826B3>#0826B3</font> |
| 123 | <font color=#FBE251>██████</font> | <font color=#FBE251>黄蘗</font> | <font color=#FBE251>KIHADA</font> | <font color=#FBE251>#FBE251</font> | <font color=#041DAE>██████</font> | <font color=#041DAE>#041DAE</font> |
| 124 | <font color=#D9CD90>██████</font> | <font color=#D9CD90>蒸栗</font> | <font color=#D9CD90>MUSHIKURI</font> | <font color=#D9CD90>#D9CD90</font> | <font color=#26326F>██████</font> | <font color=#26326F>#26326F</font> |
| 125 | <font color=#ADA142>██████</font> | <font color=#ADA142>青朽葉</font> | <font color=#ADA142>AOKUCHIBA</font> | <font color=#ADA142>#ADA142</font> | <font color=#525EBD>██████</font> | <font color=#525EBD>#525EBD</font> |
| 126 | <font color=#DDD23B>██████</font> | <font color=#DDD23B>女郎花</font> | <font color=#DDD23B>OMINAESHI</font> | <font color=#DDD23B>#DDD23B</font> | <font color=#222DC4>██████</font> | <font color=#222DC4>#222DC4</font> |
| 127 | <font color=#A5A051>██████</font> | <font color=#A5A051>鶸茶</font> | <font color=#A5A051>HIWACHA</font> | <font color=#A5A051>#A5A051</font> | <font color=#5A5FAE>██████</font> | <font color=#5A5FAE>#5A5FAE</font> |
| 128 | <font color=#BEC23F>██████</font> | <font color=#BEC23F>鶸</font> | <font color=#BEC23F>HIWA</font> | <font color=#BEC23F>#BEC23F</font> | <font color=#413DC0>██████</font> | <font color=#413DC0>#413DC0</font> |
| 129 | <font color=#6C6A2D>██████</font> | <font color=#6C6A2D>鶯</font> | <font color=#6C6A2D>UGUISU</font> | <font color=#6C6A2D>#6C6A2D</font> | <font color=#9395D2>██████</font> | <font color=#9395D2>#9395D2</font> |
| 130 | <font color=#939650>██████</font> | <font color=#939650>柳茶</font> | <font color=#939650>YANAGICHA</font> | <font color=#939650>#939650</font> | <font color=#6C69AF>██████</font> | <font color=#6C69AF>#6C69AF</font> |
| 131 | <font color=#838A2D>██████</font> | <font color=#838A2D>苔</font> | <font color=#838A2D>KOKE</font> | <font color=#838A2D>#838A2D</font> | <font color=#7C75D2>██████</font> | <font color=#7C75D2>#7C75D2</font> |
| 132 | <font color=#B1B479>██████</font> | <font color=#B1B479>麹塵</font> | <font color=#B1B479>KIKUJIN</font> | <font color=#B1B479>#B1B479</font> | <font color=#4E4B86>██████</font> | <font color=#4E4B86>#4E4B86</font> |
| 133 | <font color=#616138>██████</font> | <font color=#616138>璃寛茶</font> | <font color=#616138>RIKANCHA</font> | <font color=#616138>#616138</font> | <font color=#9E9EC7>██████</font> | <font color=#9E9EC7>#9E9EC7</font> |
| 134 | <font color=#4B4E2A>██████</font> | <font color=#4B4E2A>藍媚茶</font> | <font color=#4B4E2A>AIKOBICHA</font> | <font color=#4B4E2A>#4B4E2A</font> | <font color=#B4B1D5>██████</font> | <font color=#B4B1D5>#B4B1D5</font> |
| 135 | <font color=#5B622E>██████</font> | <font color=#5B622E>海松</font> | <font color=#5B622E>MIRU</font> | <font color=#5B622E>#5B622E</font> | <font color=#A49DD1>██████</font> | <font color=#A49DD1>#A49DD1</font> |
| 136 | <font color=#4D5139>██████</font> | <font color=#4D5139>千歳茶</font> | <font color=#4D5139>SENSAICHA</font> | <font color=#4D5139>#4D5139</font> | <font color=#B2AEC6>██████</font> | <font color=#B2AEC6>#B2AEC6</font> |
| 137 | <font color=#89916B>██████</font> | <font color=#89916B>梅幸茶</font> | <font color=#89916B>BAIKOCHA</font> | <font color=#89916B>#89916B</font> | <font color=#766E94>██████</font> | <font color=#766E94>#766E94</font> |
| 138 | <font color=#90B44B>██████</font> | <font color=#90B44B>鶸萌黄</font> | <font color=#90B44B>HIWAMOEGI</font> | <font color=#90B44B>#90B44B</font> | <font color=#6F4BB4>██████</font> | <font color=#6F4BB4>#6F4BB4</font> |
| 139 | <font color=#91AD70>██████</font> | <font color=#91AD70>柳染</font> | <font color=#91AD70>YANAGIZOME</font> | <font color=#91AD70>#91AD70</font> | <font color=#6E528F>██████</font> | <font color=#6E528F>#6E528F</font> |
| 140 | <font color=#B5CAA0>██████</font> | <font color=#B5CAA0>裏柳</font> | <font color=#B5CAA0>URAYANAGI</font> | <font color=#B5CAA0>#B5CAA0</font> | <font color=#4A355F>██████</font> | <font color=#4A355F>#4A355F</font> |
| 141 | <font color=#646A58>██████</font> | <font color=#646A58>岩井茶</font> | <font color=#646A58>IWAICHA</font> | <font color=#646A58>#646A58</font> | <font color=#9B95A7>██████</font> | <font color=#9B95A7>#9B95A7</font> |
| 142 | <font color=#7BA23F>██████</font> | <font color=#7BA23F>萌黄</font> | <font color=#7BA23F>MOEGI</font> | <font color=#7BA23F>#7BA23F</font> | <font color=#845DC0>██████</font> | <font color=#845DC0>#845DC0</font> |
| 143 | <font color=#86C166>██████</font> | <font color=#86C166>苗</font> | <font color=#86C166>NAE</font> | <font color=#86C166>#86C166</font> | <font color=#793E99>██████</font> | <font color=#793E99>#793E99</font> |
| 144 | <font color=#4A593D>██████</font> | <font color=#4A593D>柳煤竹</font> | <font color=#4A593D>YANAGISUSUTAKE</font> | <font color=#4A593D>#4A593D</font> | <font color=#B5A6C2>██████</font> | <font color=#B5A6C2>#B5A6C2</font> |
| 145 | <font color=#42602D>██████</font> | <font color=#42602D>松葉</font> | <font color=#42602D>MATSUBA</font> | <font color=#42602D>#42602D</font> | <font color=#BD9FD2>██████</font> | <font color=#BD9FD2>#BD9FD2</font> |
| 146 | <font color=#516E41>██████</font> | <font color=#516E41>青丹</font> | <font color=#516E41>AONI</font> | <font color=#516E41>#516E41</font> | <font color=#AE91BE>██████</font> | <font color=#AE91BE>#AE91BE</font> |
| 147 | <font color=#91B493>██████</font> | <font color=#91B493>薄青</font> | <font color=#91B493>USUAO</font> | <font color=#91B493>#91B493</font> | <font color=#6E4B6C>██████</font> | <font color=#6E4B6C>#6E4B6C</font> |
| 148 | <font color=#808F7C>██████</font> | <font color=#808F7C>柳鼠</font> | <font color=#808F7C>YANAGINEZUMI</font> | <font color=#808F7C>#808F7C</font> | <font color=#7F7083>██████</font> | <font color=#7F7083>#7F7083</font> |
| 149 | <font color=#1B813E>██████</font> | <font color=#1B813E>常磐</font> | <font color=#1B813E>TOKIWA</font> | <font color=#1B813E>#1B813E</font> | <font color=#E47EC1>██████</font> | <font color=#E47EC1>#E47EC1</font> |
| 150 | <font color=#5DAC81>██████</font> | <font color=#5DAC81>若竹</font> | <font color=#5DAC81>WAKATAKE</font> | <font color=#5DAC81>#5DAC81</font> | <font color=#A2537E>██████</font> | <font color=#A2537E>#A2537E</font> |
| 151 | <font color=#36563C>██████</font> | <font color=#36563C>千歳緑</font> | <font color=#36563C>CHITOSEMIDORI</font> | <font color=#36563C>#36563C</font> | <font color=#C9A9C3>██████</font> | <font color=#C9A9C3>#C9A9C3</font> |
| 152 | <font color=#227D51>██████</font> | <font color=#227D51>緑</font> | <font color=#227D51>MIDORI</font> | <font color=#227D51>#227D51</font> | <font color=#DD82AE>██████</font> | <font color=#DD82AE>#DD82AE</font> |
| 153 | <font color=#A8D8B9>██████</font> | <font color=#A8D8B9>白緑</font> | <font color=#A8D8B9>BYAKUROKU</font> | <font color=#A8D8B9>#A8D8B9</font> | <font color=#572746>██████</font> | <font color=#572746>#572746</font> |
| 154 | <font color=#6A8372>██████</font> | <font color=#6A8372>老竹</font> | <font color=#6A8372>OITAKE</font> | <font color=#6A8372>#6A8372</font> | <font color=#957C8D>██████</font> | <font color=#957C8D>#957C8D</font> |
| 155 | <font color=#2D6D4B>██████</font> | <font color=#2D6D4B>木賊</font> | <font color=#2D6D4B>TOKUSA</font> | <font color=#2D6D4B>#2D6D4B</font> | <font color=#D292B4>██████</font> | <font color=#D292B4>#D292B4</font> |
| 156 | <font color=#465D4C>██████</font> | <font color=#465D4C>御納戸茶</font> | <font color=#465D4C>ONANDOCHA</font> | <font color=#465D4C>#465D4C</font> | <font color=#B9A2B3>██████</font> | <font color=#B9A2B3>#B9A2B3</font> |
| 157 | <font color=#24936E>██████</font> | <font color=#24936E>緑青</font> | <font color=#24936E>ROKUSYOH</font> | <font color=#24936E>#24936E</font> | <font color=#DB6C91>██████</font> | <font color=#DB6C91>#DB6C91</font> |
| 158 | <font color=#86A697>██████</font> | <font color=#86A697>錆青磁</font> | <font color=#86A697>SABISEIJI</font> | <font color=#86A697>#86A697</font> | <font color=#795968>██████</font> | <font color=#795968>#795968</font> |
| 159 | <font color=#00896C>██████</font> | <font color=#00896C>青竹</font> | <font color=#00896C>AOTAKE</font> | <font color=#00896C>#00896C</font> | <font color=#FF7693>██████</font> | <font color=#FF7693>#FF7693</font> |
| 160 | <font color=#096148>██████</font> | <font color=#096148>ビロード</font> | <font color=#096148>VELUDO</font> | <font color=#096148>#096148</font> | <font color=#F69EB7>██████</font> | <font color=#F69EB7>#F69EB7</font> |
| 161 | <font color=#20604F>██████</font> | <font color=#20604F>虫襖</font> | <font color=#20604F>MUSHIAO</font> | <font color=#20604F>#20604F</font> | <font color=#DF9FB0>██████</font> | <font color=#DF9FB0>#DF9FB0</font> |
| 162 | <font color=#0F4C3A>██████</font> | <font color=#0F4C3A>藍海松茶</font> | <font color=#0F4C3A>AIMIRUCHA</font> | <font color=#0F4C3A>#0F4C3A</font> | <font color=#F0B3C5>██████</font> | <font color=#F0B3C5>#F0B3C5</font> |
| 163 | <font color=#4F726C>██████</font> | <font color=#4F726C>沈香茶</font> | <font color=#4F726C>TONOCHA2</font> | <font color=#4F726C>#4F726C</font> | <font color=#B08D93>██████</font> | <font color=#B08D93>#B08D93</font> |
| 164 | <font color=#00AA90>██████</font> | <font color=#00AA90>青緑</font> | <font color=#00AA90>AOMIDORI</font> | <font color=#00AA90>#00AA90</font> | <font color=#FF556F>██████</font> | <font color=#FF556F>#FF556F</font> |
| 165 | <font color=#69B0AC>██████</font> | <font color=#69B0AC>青磁</font> | <font color=#69B0AC>SEIJI</font> | <font color=#69B0AC>#69B0AC</font> | <font color=#964F53>██████</font> | <font color=#964F53>#964F53</font> |
| 166 | <font color=#26453D>██████</font> | <font color=#26453D>鉄</font> | <font color=#26453D>TETSU</font> | <font color=#26453D>#26453D</font> | <font color=#D9BAC2>██████</font> | <font color=#D9BAC2>#D9BAC2</font> |
| 167 | <font color=#66BAB7>██████</font> | <font color=#66BAB7>水浅葱</font> | <font color=#66BAB7>MIZUASAGI</font> | <font color=#66BAB7>#66BAB7</font> | <font color=#994548>██████</font> | <font color=#994548>#994548</font> |
| 168 | <font color=#268785>██████</font> | <font color=#268785>青碧</font> | <font color=#268785>SEIHEKI</font> | <font color=#268785>#268785</font> | <font color=#D9787A>██████</font> | <font color=#D9787A>#D9787A</font> |
| 169 | <font color=#405B55>██████</font> | <font color=#405B55>錆鉄御納戸</font> | <font color=#405B55>SABITETSUONANDO</font> | <font color=#405B55>#405B55</font> | <font color=#BFA4AA>██████</font> | <font color=#BFA4AA>#BFA4AA</font> |
| 170 | <font color=#305A56>██████</font> | <font color=#305A56>高麗納戸</font> | <font color=#305A56>KORAINANDO</font> | <font color=#305A56>#305A56</font> | <font color=#CFA5A9>██████</font> | <font color=#CFA5A9>#CFA5A9</font> |
| 171 | <font color=#78C2C4>██████</font> | <font color=#78C2C4>白群</font> | <font color=#78C2C4>BYAKUGUN</font> | <font color=#78C2C4>#78C2C4</font> | <font color=#873D3B>██████</font> | <font color=#873D3B>#873D3B</font> |
| 172 | <font color=#376B6D>██████</font> | <font color=#376B6D>御召茶</font> | <font color=#376B6D>OMESHICHA</font> | <font color=#376B6D>#376B6D</font> | <font color=#C89492>██████</font> | <font color=#C89492>#C89492</font> |
| 173 | <font color=#A5DEE4>██████</font> | <font color=#A5DEE4>瓶覗</font> | <font color=#A5DEE4>KAMENOZOKI</font> | <font color=#A5DEE4>#A5DEE4</font> | <font color=#5A211B>██████</font> | <font color=#5A211B>#5A211B</font> |
| 174 | <font color=#77969A>██████</font> | <font color=#77969A>深川鼠</font> | <font color=#77969A>FUKAGAWANEZUMI</font> | <font color=#77969A>#77969A</font> | <font color=#886965>██████</font> | <font color=#886965>#886965</font> |
| 175 | <font color=#6699A1>██████</font> | <font color=#6699A1>錆浅葱</font> | <font color=#6699A1>SABIASAGI</font> | <font color=#6699A1>#6699A1</font> | <font color=#99665E>██████</font> | <font color=#99665E>#99665E</font> |
| 176 | <font color=#81C7D4>██████</font> | <font color=#81C7D4>水</font> | <font color=#81C7D4>MIZU</font> | <font color=#81C7D4>#81C7D4</font> | <font color=#7E382B>██████</font> | <font color=#7E382B>#7E382B</font> |
| 177 | <font color=#33A6B8>██████</font> | <font color=#33A6B8>浅葱</font> | <font color=#33A6B8>ASAGI</font> | <font color=#33A6B8>#33A6B8</font> | <font color=#CC5947>██████</font> | <font color=#CC5947>#CC5947</font> |
| 178 | <font color=#0C4842>██████</font> | <font color=#0C4842>御納戸</font> | <font color=#0C4842>ONANDO</font> | <font color=#0C4842>#0C4842</font> | <font color=#F3B7BD>██████</font> | <font color=#F3B7BD>#F3B7BD</font> |
| 179 | <font color=#0D5661>██████</font> | <font color=#0D5661>藍</font> | <font color=#0D5661>AI</font> | <font color=#0D5661>#0D5661</font> | <font color=#F2A99E>██████</font> | <font color=#F2A99E>#F2A99E</font> |
| 180 | <font color=#0089A7>██████</font> | <font color=#0089A7>新橋</font> | <font color=#0089A7>SHINBASHI</font> | <font color=#0089A7>#0089A7</font> | <font color=#FF7658>██████</font> | <font color=#FF7658>#FF7658</font> |
| 181 | <font color=#336774>██████</font> | <font color=#336774>錆御納戸</font> | <font color=#336774>SABIONANDO</font> | <font color=#336774>#336774</font> | <font color=#CC988B>██████</font> | <font color=#CC988B>#CC988B</font> |
| 182 | <font color=#255359>██████</font> | <font color=#255359>鉄御納戸</font> | <font color=#255359>TETSUONANDO</font> | <font color=#255359>#255359</font> | <font color=#DAACA6>██████</font> | <font color=#DAACA6>#DAACA6</font> |
| 183 | <font color=#1E88A8>██████</font> | <font color=#1E88A8>花浅葱</font> | <font color=#1E88A8>HANAASAGI</font> | <font color=#1E88A8>#1E88A8</font> | <font color=#E17757>██████</font> | <font color=#E17757>#E17757</font> |
| 184 | <font color=#566C73>██████</font> | <font color=#566C73>藍鼠</font> | <font color=#566C73>AINEZUMI</font> | <font color=#566C73>#566C73</font> | <font color=#A9938C>██████</font> | <font color=#A9938C>#A9938C</font> |
| 185 | <font color=#577C8A>██████</font> | <font color=#577C8A>舛花</font> | <font color=#577C8A>MASUHANA</font> | <font color=#577C8A>#577C8A</font> | <font color=#A88375>██████</font> | <font color=#A88375>#A88375</font> |
| 186 | <font color=#58B2DC>██████</font> | <font color=#58B2DC>空</font> | <font color=#58B2DC>SORA</font> | <font color=#58B2DC>#58B2DC</font> | <font color=#A74D23>██████</font> | <font color=#A74D23>#A74D23</font> |
| 187 | <font color=#2B5F75>██████</font> | <font color=#2B5F75>熨斗目花</font> | <font color=#2B5F75>NOSHIMEHANA</font> | <font color=#2B5F75>#2B5F75</font> | <font color=#D4A08A>██████</font> | <font color=#D4A08A>#D4A08A</font> |
| 188 | <font color=#3A8FB7>██████</font> | <font color=#3A8FB7>千草</font> | <font color=#3A8FB7>CHIGUSA</font> | <font color=#3A8FB7>#3A8FB7</font> | <font color=#C57048>██████</font> | <font color=#C57048>#C57048</font> |
| 189 | <font color=#2E5C6E>██████</font> | <font color=#2E5C6E>御召御納戸</font> | <font color=#2E5C6E>OMESHIONANDO</font> | <font color=#2E5C6E>#2E5C6E</font> | <font color=#D1A391>██████</font> | <font color=#D1A391>#D1A391</font> |
| 190 | <font color=#006284>██████</font> | <font color=#006284>縹</font> | <font color=#006284>HANADA</font> | <font color=#006284>#006284</font> | <font color=#FF9D7B>██████</font> | <font color=#FF9D7B>#FF9D7B</font> |
| 191 | <font color=#7DB9DE>██████</font> | <font color=#7DB9DE>勿忘草</font> | <font color=#7DB9DE>WASURENAGUSA</font> | <font color=#7DB9DE>#7DB9DE</font> | <font color=#824621>██████</font> | <font color=#824621>#824621</font> |
| 192 | <font color=#51A8DD>██████</font> | <font color=#51A8DD>群青</font> | <font color=#51A8DD>GUNJYO</font> | <font color=#51A8DD>#51A8DD</font> | <font color=#AE5722>██████</font> | <font color=#AE5722>#AE5722</font> |
| 193 | <font color=#2EA9DF>██████</font> | <font color=#2EA9DF>露草</font> | <font color=#2EA9DF>TSUYUKUSA</font> | <font color=#2EA9DF>#2EA9DF</font> | <font color=#D15620>██████</font> | <font color=#D15620>#D15620</font> |
| 194 | <font color=#0B1013>██████</font> | <font color=#0B1013>黒橡</font> | <font color=#0B1013>KUROTSURUBAMI</font> | <font color=#0B1013>#0B1013</font> | <font color=#F4EFEC>██████</font> | <font color=#F4EFEC>#F4EFEC</font> |
| 195 | <font color=#0F2540>██████</font> | <font color=#0F2540>紺</font> | <font color=#0F2540>KON</font> | <font color=#0F2540>#0F2540</font> | <font color=#F0DABF>██████</font> | <font color=#F0DABF>#F0DABF</font> |
| 196 | <font color=#08192D>██████</font> | <font color=#08192D>褐</font> | <font color=#08192D>KACHI</font> | <font color=#08192D>#08192D</font> | <font color=#F7E6D2>██████</font> | <font color=#F7E6D2>#F7E6D2</font> |
| 197 | <font color=#005CAF>██████</font> | <font color=#005CAF>瑠璃</font> | <font color=#005CAF>RURI</font> | <font color=#005CAF>#005CAF</font> | <font color=#FFA350>██████</font> | <font color=#FFA350>#FFA350</font> |
| 198 | <font color=#0B346E>██████</font> | <font color=#0B346E>瑠璃紺</font> | <font color=#0B346E>RURIKON</font> | <font color=#0B346E>#0B346E</font> | <font color=#F4CB91>██████</font> | <font color=#F4CB91>#F4CB91</font> |
| 199 | <font color=#7B90D2>██████</font> | <font color=#7B90D2>紅碧</font> | <font color=#7B90D2>BENIMIDORI</font> | <font color=#7B90D2>#7B90D2</font> | <font color=#846F2D>██████</font> | <font color=#846F2D>#846F2D</font> |
| 200 | <font color=#6E75A4>██████</font> | <font color=#6E75A4>藤鼠</font> | <font color=#6E75A4>FUJINEZUMI</font> | <font color=#6E75A4>#6E75A4</font> | <font color=#918A5B>██████</font> | <font color=#918A5B>#918A5B</font> |
| 201 | <font color=#261E47>██████</font> | <font color=#261E47>鉄紺</font> | <font color=#261E47>TETSUKON</font> | <font color=#261E47>#261E47</font> | <font color=#D9E1B8>██████</font> | <font color=#D9E1B8>#D9E1B8</font> |
| 202 | <font color=#113285>██████</font> | <font color=#113285>紺青</font> | <font color=#113285>KONJYO</font> | <font color=#113285>#113285</font> | <font color=#EECD7A>██████</font> | <font color=#EECD7A>#EECD7A</font> |
| 203 | <font color=#4E4F97>██████</font> | <font color=#4E4F97>紅掛花</font> | <font color=#4E4F97>BENIKAKEHANA</font> | <font color=#4E4F97>#4E4F97</font> | <font color=#B1B068>██████</font> | <font color=#B1B068>#B1B068</font> |
| 204 | <font color=#211E55>██████</font> | <font color=#211E55>紺桔梗</font> | <font color=#211E55>KONKIKYO</font> | <font color=#211E55>#211E55</font> | <font color=#DEE1AA>██████</font> | <font color=#DEE1AA>#DEE1AA</font> |
| 205 | <font color=#8B81C3>██████</font> | <font color=#8B81C3>藤</font> | <font color=#8B81C3>FUJI</font> | <font color=#8B81C3>#8B81C3</font> | <font color=#747E3C>██████</font> | <font color=#747E3C>#747E3C</font> |
| 206 | <font color=#70649A>██████</font> | <font color=#70649A>二藍</font> | <font color=#70649A>FUTAAI</font> | <font color=#70649A>#70649A</font> | <font color=#8F9B65>██████</font> | <font color=#8F9B65>#8F9B65</font> |
| 207 | <font color=#9B90C2>██████</font> | <font color=#9B90C2>楝</font> | <font color=#9B90C2>OUCHI</font> | <font color=#9B90C2>#9B90C2</font> | <font color=#646F3D>██████</font> | <font color=#646F3D>#646F3D</font> |
| 208 | <font color=#8A6BBE>██████</font> | <font color=#8A6BBE>藤紫</font> | <font color=#8A6BBE>FUJIMURASAKI</font> | <font color=#8A6BBE>#8A6BBE</font> | <font color=#759441>██████</font> | <font color=#759441>#759441</font> |
| 209 | <font color=#6A4C9C>██████</font> | <font color=#6A4C9C>桔梗</font> | <font color=#6A4C9C>KIKYO</font> | <font color=#6A4C9C>#6A4C9C</font> | <font color=#95B363>██████</font> | <font color=#95B363>#95B363</font> |
| 210 | <font color=#8F77B5>██████</font> | <font color=#8F77B5>紫苑</font> | <font color=#8F77B5>SHION</font> | <font color=#8F77B5>#8F77B5</font> | <font color=#70884A>██████</font> | <font color=#70884A>#70884A</font> |
| 211 | <font color=#533D5B>██████</font> | <font color=#533D5B>滅紫</font> | <font color=#533D5B>MESSHI</font> | <font color=#533D5B>#533D5B</font> | <font color=#ACC2A4>██████</font> | <font color=#ACC2A4>#ACC2A4</font> |
| 212 | <font color=#B28FCE>██████</font> | <font color=#B28FCE>薄</font> | <font color=#B28FCE>USU</font> | <font color=#B28FCE>#B28FCE</font> | <font color=#4D7031>██████</font> | <font color=#4D7031>#4D7031</font> |
| 213 | <font color=#986DB2>██████</font> | <font color=#986DB2>半</font> | <font color=#986DB2>HASHITA</font> | <font color=#986DB2>#986DB2</font> | <font color=#67924D>██████</font> | <font color=#67924D>#67924D</font> |
| 214 | <font color=#77428D>██████</font> | <font color=#77428D>江戸紫</font> | <font color=#77428D>EDOMURASAKI</font> | <font color=#77428D>#77428D</font> | <font color=#88BD72>██████</font> | <font color=#88BD72>#88BD72</font> |
| 215 | <font color=#3C2F41>██████</font> | <font color=#3C2F41>紫紺</font> | <font color=#3C2F41>SHIKON</font> | <font color=#3C2F41>#3C2F41</font> | <font color=#C3D0BE>██████</font> | <font color=#C3D0BE>#C3D0BE</font> |
| 216 | <font color=#4A225D>██████</font> | <font color=#4A225D>深紫</font> | <font color=#4A225D>KOKIMURASAKI</font> | <font color=#4A225D>#4A225D</font> | <font color=#B5DDA2>██████</font> | <font color=#B5DDA2>#B5DDA2</font> |
| 217 | <font color=#66327C>██████</font> | <font color=#66327C>菫</font> | <font color=#66327C>SUMIRE</font> | <font color=#66327C>#66327C</font> | <font color=#99CD83>██████</font> | <font color=#99CD83>#99CD83</font> |
| 218 | <font color=#592C63>██████</font> | <font color=#592C63>紫</font> | <font color=#592C63>MURASAKI</font> | <font color=#592C63>#592C63</font> | <font color=#A6D39C>██████</font> | <font color=#A6D39C>#A6D39C</font> |
| 219 | <font color=#6F3381>██████</font> | <font color=#6F3381>菖蒲</font> | <font color=#6F3381>AYAME</font> | <font color=#6F3381>#6F3381</font> | <font color=#90CC7E>██████</font> | <font color=#90CC7E>#90CC7E</font> |
| 220 | <font color=#574C57>██████</font> | <font color=#574C57>藤煤竹</font> | <font color=#574C57>FUJISUSUTAKE</font> | <font color=#574C57>#574C57</font> | <font color=#A8B3A8>██████</font> | <font color=#A8B3A8>#A8B3A8</font> |
| 221 | <font color=#B481BB>██████</font> | <font color=#B481BB>紅藤</font> | <font color=#B481BB>BENIFUJI</font> | <font color=#B481BB>#B481BB</font> | <font color=#4B7E44>██████</font> | <font color=#4B7E44>#4B7E44</font> |
| 222 | <font color=#3F2B36>██████</font> | <font color=#3F2B36>黒紅</font> | <font color=#3F2B36>KUROBENI</font> | <font color=#3F2B36>#3F2B36</font> | <font color=#C0D4C9>██████</font> | <font color=#C0D4C9>#C0D4C9</font> |
| 223 | <font color=#572A3F>██████</font> | <font color=#572A3F>茄子紺</font> | <font color=#572A3F>NASUKON</font> | <font color=#572A3F>#572A3F</font> | <font color=#A8D5C0>██████</font> | <font color=#A8D5C0>#A8D5C0</font> |
| 224 | <font color=#5E3D50>██████</font> | <font color=#5E3D50>葡萄鼠</font> | <font color=#5E3D50>BUDOHNEZUMI</font> | <font color=#5E3D50>#5E3D50</font> | <font color=#A1C2AF>██████</font> | <font color=#A1C2AF>#A1C2AF</font> |
| 225 | <font color=#72636E>██████</font> | <font color=#72636E>鳩羽鼠</font> | <font color=#72636E>HATOBANEZUMI</font> | <font color=#72636E>#72636E</font> | <font color=#8D9C91>██████</font> | <font color=#8D9C91>#8D9C91</font> |
| 226 | <font color=#622954>██████</font> | <font color=#622954>杜若</font> | <font color=#622954>KAKITSUBATA</font> | <font color=#622954>#622954</font> | <font color=#9DD6AB>██████</font> | <font color=#9DD6AB>#9DD6AB</font> |
| 227 | <font color=#6D2E5B>██████</font> | <font color=#6D2E5B>蒲葡</font> | <font color=#6D2E5B>EBIZOME</font> | <font color=#6D2E5B>#6D2E5B</font> | <font color=#92D1A4>██████</font> | <font color=#92D1A4>#92D1A4</font> |
| 228 | <font color=#C1328E>██████</font> | <font color=#C1328E>牡丹</font> | <font color=#C1328E>BOTAN</font> | <font color=#C1328E>#C1328E</font> | <font color=#3ECD71>██████</font> | <font color=#3ECD71>#3ECD71</font> |
| 229 | <font color=#A8497A>██████</font> | <font color=#A8497A>梅紫</font> | <font color=#A8497A>UMEMURASAKI</font> | <font color=#A8497A>#A8497A</font> | <font color=#57B685>██████</font> | <font color=#57B685>#57B685</font> |
| 230 | <font color=#562E37>██████</font> | <font color=#562E37>似紫</font> | <font color=#562E37>NISEMURASAKI</font> | <font color=#562E37>#562E37</font> | <font color=#A9D1C8>██████</font> | <font color=#A9D1C8>#A9D1C8</font> |
| 231 | <font color=#E03C8A>██████</font> | <font color=#E03C8A>躑躅</font> | <font color=#E03C8A>TSUTSUJI</font> | <font color=#E03C8A>#E03C8A</font> | <font color=#1FC375>██████</font> | <font color=#1FC375>#1FC375</font> |
| 232 | <font color=#60373E>██████</font> | <font color=#60373E>紫鳶</font> | <font color=#60373E>MURASAKITOBI</font> | <font color=#60373E>#60373E</font> | <font color=#9FC8C1>██████</font> | <font color=#9FC8C1>#9FC8C1</font> |
| 233 | <font color=#FCFAF2>██████</font> | <font color=#FCFAF2>白練</font> | <font color=#FCFAF2>SHIRONERI</font> | <font color=#FCFAF2>#FCFAF2</font> | <font color=#03050D>██████</font> | <font color=#03050D>#03050D</font> |
| 234 | <font color=#FFFFFB>██████</font> | <font color=#FFFFFB>胡粉</font> | <font color=#FFFFFB>GOFUN</font> | <font color=#FFFFFB>#FFFFFB</font> | <font color=#000004>██████</font> | <font color=#000004>#000004</font> |
| 235 | <font color=#BDC0BA>██████</font> | <font color=#BDC0BA>白鼠</font> | <font color=#BDC0BA>SHIRONEZUMI</font> | <font color=#BDC0BA>#BDC0BA</font> | <font color=#423F45>██████</font> | <font color=#423F45>#423F45</font> |
| 236 | <font color=#91989F>██████</font> | <font color=#91989F>銀鼠</font> | <font color=#91989F>GINNEZUMI</font> | <font color=#91989F>#91989F</font> | <font color=#6E6760>██████</font> | <font color=#6E6760>#6E6760</font> |
| 237 | <font color=#787878>██████</font> | <font color=#787878>鉛</font> | <font color=#787878>NAMARI</font> | <font color=#787878>#787878</font> | <font color=#878787>██████</font> | <font color=#878787>#878787</font> |
| 238 | <font color=#828282>██████</font> | <font color=#828282>灰</font> | <font color=#828282>HAI</font> | <font color=#828282>#828282</font> | <font color=#7D7D7D>██████</font> | <font color=#7D7D7D>#7D7D7D</font> |
| 239 | <font color=#787D7B>██████</font> | <font color=#787D7B>素鼠</font> | <font color=#787D7B>SUNEZUMI</font> | <font color=#787D7B>#787D7B</font> | <font color=#878284>██████</font> | <font color=#878284>#878284</font> |
| 240 | <font color=#707C74>██████</font> | <font color=#707C74>利休鼠</font> | <font color=#707C74>RIKYUNEZUMI</font> | <font color=#707C74>#707C74</font> | <font color=#8F838B>██████</font> | <font color=#8F838B>#8F838B</font> |
| 241 | <font color=#656765>██████</font> | <font color=#656765>鈍</font> | <font color=#656765>NIBI</font> | <font color=#656765>#656765</font> | <font color=#9A989A>██████</font> | <font color=#9A989A>#9A989A</font> |
| 242 | <font color=#535953>██████</font> | <font color=#535953>青鈍</font> | <font color=#535953>AONIBI</font> | <font color=#535953>#535953</font> | <font color=#ACA6AC>██████</font> | <font color=#ACA6AC>#ACA6AC</font> |
| 243 | <font color=#4F4F48>██████</font> | <font color=#4F4F48>溝鼠</font> | <font color=#4F4F48>DOBUNEZUMI</font> | <font color=#4F4F48>#4F4F48</font> | <font color=#B0B0B7>██████</font> | <font color=#B0B0B7>#B0B0B7</font> |
| 244 | <font color=#52433D>██████</font> | <font color=#52433D>紅消鼠</font> | <font color=#52433D>BENIKESHINEZUMI</font> | <font color=#52433D>#52433D</font> | <font color=#ADBCC2>██████</font> | <font color=#ADBCC2>#ADBCC2</font> |
| 245 | <font color=#373C38>██████</font> | <font color=#373C38>藍墨茶</font> | <font color=#373C38>AISUMICHA</font> | <font color=#373C38>#373C38</font> | <font color=#C8C3C7>██████</font> | <font color=#C8C3C7>#C8C3C7</font> |
| 246 | <font color=#3A3226>██████</font> | <font color=#3A3226>檳榔子染</font> | <font color=#3A3226>BINROJIZOME</font> | <font color=#3A3226>#3A3226</font> | <font color=#C5CDD9>██████</font> | <font color=#C5CDD9>#C5CDD9</font> |
| 247 | <font color=#434343>██████</font> | <font color=#434343>消炭</font> | <font color=#434343>KESHIZUMI</font> | <font color=#434343>#434343</font> | <font color=#BCBCBC>██████</font> | <font color=#BCBCBC>#BCBCBC</font> |
| 248 | <font color=#1C1C1C>██████</font> | <font color=#1C1C1C>墨</font> | <font color=#1C1C1C>SUMI</font> | <font color=#1C1C1C>#1C1C1C</font> | <font color=#E3E3E3>██████</font> | <font color=#E3E3E3>#E3E3E3</font> |
| 249 | <font color=#080808>██████</font> | <font color=#080808>黒</font> | <font color=#080808>KURO</font> | <font color=#080808>#080808</font> | <font color=#F7F7F7>██████</font> | <font color=#F7F7F7>#F7F7F7</font> |
| 250 | <font color=#0C0C0C>██████</font> | <font color=#0C0C0C>呂</font> | <font color=#0C0C0C>RO</font> | <font color=#0C0C0C>#0C0C0C</font> | <font color=#F3F3F3>██████</font> | <font color=#F3F3F3>#F3F3F3</font> |

# 中国传统色
《色谱》. 中科院科技情报编委会名词室. 科学出版社, 1957.

| ID | 预览   | 名称   | 英文   | 色号    | 反预览 | 反色号 |
| -- | ------ | ------ | ------ | ------- | ------ | ------- |
| 1 | <font color=#5C2223>██████</font> | <font color=#5C2223>暗玉紫</font> | <font color=#5C2223>ANYUZI</font> | <font color=#5C2223>#5C2223</font> | <font color=#A3DDDC>██████</font> | <font color=#A3DDDC>#A3DDDC</font> |
| 2 | <font color=#EEA2A4>██████</font> | <font color=#EEA2A4>牡丹粉红</font> | <font color=#EEA2A4>MUDANFENHONG</font> | <font color=#EEA2A4>#EEA2A4</font> | <font color=#115D5B>██████</font> | <font color=#115D5B>#115D5B</font> |
| 3 | <font color=#5A191B>██████</font> | <font color=#5A191B>栗紫</font> | <font color=#5A191B>LIZI</font> | <font color=#5A191B>#5A191B</font> | <font color=#A5E6E4>██████</font> | <font color=#A5E6E4>#A5E6E4</font> |
| 4 | <font color=#F07C82>██████</font> | <font color=#F07C82>香叶红</font> | <font color=#F07C82>XIANGYEHONG</font> | <font color=#F07C82>#F07C82</font> | <font color=#0F837D>██████</font> | <font color=#0F837D>#0F837D</font> |
| 5 | <font color=#5A1216>██████</font> | <font color=#5A1216>葡萄酱紫</font> | <font color=#5A1216>PUTAOJIANGZI</font> | <font color=#5A1216>#5A1216</font> | <font color=#A5EDE9>██████</font> | <font color=#A5EDE9>#A5EDE9</font> |
| 6 | <font color=#ED5A65>██████</font> | <font color=#ED5A65>艳红</font> | <font color=#ED5A65>YANHONG</font> | <font color=#ED5A65>#ED5A65</font> | <font color=#12A59A>██████</font> | <font color=#12A59A>#12A59A</font> |
| 7 | <font color=#C04851>██████</font> | <font color=#C04851>玉红</font> | <font color=#C04851>YUHONG</font> | <font color=#C04851>#C04851</font> | <font color=#3FB7AE>██████</font> | <font color=#3FB7AE>#3FB7AE</font> |
| 8 | <font color=#EE3F4D>██████</font> | <font color=#EE3F4D>茶花红</font> | <font color=#EE3F4D>CHAHUAHONG</font> | <font color=#EE3F4D>#EE3F4D</font> | <font color=#11C0B2>██████</font> | <font color=#11C0B2>#11C0B2</font> |
| 9 | <font color=#C02C38>██████</font> | <font color=#C02C38>高粱红</font> | <font color=#C02C38>GAOLIANGHONG</font> | <font color=#C02C38>#C02C38</font> | <font color=#3FD3C7>██████</font> | <font color=#3FD3C7>#3FD3C7</font> |
| 10 | <font color=#A7535A>██████</font> | <font color=#A7535A>满江红</font> | <font color=#A7535A>MANJIANGHONG</font> | <font color=#A7535A>#A7535A</font> | <font color=#58ACA5>██████</font> | <font color=#58ACA5>#58ACA5</font> |
| 11 | <font color=#E3B4B8>██████</font> | <font color=#E3B4B8>鼠鼻红</font> | <font color=#E3B4B8>SHUBIHONG</font> | <font color=#E3B4B8>#E3B4B8</font> | <font color=#1C4B47>██████</font> | <font color=#1C4B47>#1C4B47</font> |
| 12 | <font color=#F0A1A8>██████</font> | <font color=#F0A1A8>合欢红</font> | <font color=#F0A1A8>HEHUANHONG</font> | <font color=#F0A1A8>#F0A1A8</font> | <font color=#0F5E57>██████</font> | <font color=#0F5E57>#0F5E57</font> |
| 13 | <font color=#F1939C>██████</font> | <font color=#F1939C>春梅红</font> | <font color=#F1939C>CHUNMEIHONG</font> | <font color=#F1939C>#F1939C</font> | <font color=#0E6C63>██████</font> | <font color=#0E6C63>#0E6C63</font> |
| 14 | <font color=#A61B29>██████</font> | <font color=#A61B29>苋菜红</font> | <font color=#A61B29>XIANCAIHONG</font> | <font color=#A61B29>#A61B29</font> | <font color=#59E4D6>██████</font> | <font color=#59E4D6>#59E4D6</font> |
| 15 | <font color=#894E54>██████</font> | <font color=#894E54>烟红</font> | <font color=#894E54>YANHONG</font> | <font color=#894E54>#894E54</font> | <font color=#76B1AB>██████</font> | <font color=#76B1AB>#76B1AB</font> |
| 16 | <font color=#C45A65>██████</font> | <font color=#C45A65>莓红</font> | <font color=#C45A65>MEIHONG</font> | <font color=#C45A65>#C45A65</font> | <font color=#3BA59A>██████</font> | <font color=#3BA59A>#3BA59A</font> |
| 17 | <font color=#D11A2D>██████</font> | <font color=#D11A2D>鹅冠红</font> | <font color=#D11A2D>EGUANHONG</font> | <font color=#D11A2D>#D11A2D</font> | <font color=#2EE5D2>██████</font> | <font color=#2EE5D2>#2EE5D2</font> |
| 18 | <font color=#C21F30>██████</font> | <font color=#C21F30>枫叶红</font> | <font color=#C21F30>FENGYEHONG</font> | <font color=#C21F30>#C21F30</font> | <font color=#3DE0CF>██████</font> | <font color=#3DE0CF>#3DE0CF</font> |
| 19 | <font color=#DE1C31>██████</font> | <font color=#DE1C31>唐菖蒲红</font> | <font color=#DE1C31>TANGCHANGPUHONG</font> | <font color=#DE1C31>#DE1C31</font> | <font color=#21E3CE>██████</font> | <font color=#21E3CE>#21E3CE</font> |
| 20 | <font color=#7C1823>██████</font> | <font color=#7C1823>枣红</font> | <font color=#7C1823>ZAOHONG</font> | <font color=#7C1823>#7C1823</font> | <font color=#83E7DC>██████</font> | <font color=#83E7DC>#83E7DC</font> |
| 21 | <font color=#541E24>██████</font> | <font color=#541E24>猪肝紫</font> | <font color=#541E24>ZHUGANZI</font> | <font color=#541E24>#541E24</font> | <font color=#ABE1DB>██████</font> | <font color=#ABE1DB>#ABE1DB</font> |
| 22 | <font color=#4C1F24>██████</font> | <font color=#4C1F24>葡萄紫</font> | <font color=#4C1F24>PUTAOZI</font> | <font color=#4C1F24>#4C1F24</font> | <font color=#B3E0DB>██████</font> | <font color=#B3E0DB>#B3E0DB</font> |
| 23 | <font color=#82202B>██████</font> | <font color=#82202B>暗紫苑红</font> | <font color=#82202B>ANZIYUANHONG</font> | <font color=#82202B>#82202B</font> | <font color=#7DDFD4>██████</font> | <font color=#7DDFD4>#7DDFD4</font> |
| 24 | <font color=#82111F>██████</font> | <font color=#82111F>殷红</font> | <font color=#82111F>YANHONG</font> | <font color=#82111F>#82111F</font> | <font color=#7DEEE0>██████</font> | <font color=#7DEEE0>#7DEEE0</font> |
| 25 | <font color=#EF475D>██████</font> | <font color=#EF475D>草茉莉红</font> | <font color=#EF475D>CAOMOLIHONG</font> | <font color=#EF475D>#EF475D</font> | <font color=#10B8A2>██████</font> | <font color=#10B8A2>#10B8A2</font> |
| 26 | <font color=#4D1018>██████</font> | <font color=#4D1018>酱紫</font> | <font color=#4D1018>JIANGZI</font> | <font color=#4D1018>#4D1018</font> | <font color=#B2EFE7>██████</font> | <font color=#B2EFE7>#B2EFE7</font> |
| 27 | <font color=#ED556A>██████</font> | <font color=#ED556A>山茶红</font> | <font color=#ED556A>SHANCHAHONG</font> | <font color=#ED556A>#ED556A</font> | <font color=#12AA95>██████</font> | <font color=#12AA95>#12AA95</font> |
| 28 | <font color=#7A7374>██████</font> | <font color=#7A7374>锌灰</font> | <font color=#7A7374>XINHUI</font> | <font color=#7A7374>#7A7374</font> | <font color=#858C8B>██████</font> | <font color=#858C8B>#858C8B</font> |
| 29 | <font color=#F03752>██████</font> | <font color=#F03752>海棠红</font> | <font color=#F03752>HAITANGHONG</font> | <font color=#F03752>#F03752</font> | <font color=#0FC8AD>██████</font> | <font color=#0FC8AD>#0FC8AD</font> |
| 30 | <font color=#E6D2D5>██████</font> | <font color=#E6D2D5>蓟粉红</font> | <font color=#E6D2D5>JIFENHONG</font> | <font color=#E6D2D5>#E6D2D5</font> | <font color=#192D2A>██████</font> | <font color=#192D2A>#192D2A</font> |
| 31 | <font color=#F0C9CF>██████</font> | <font color=#F0C9CF>石蕊红</font> | <font color=#F0C9CF>SHIRUIHONG</font> | <font color=#F0C9CF>#F0C9CF</font> | <font color=#0F3630>██████</font> | <font color=#0F3630>#0F3630</font> |
| 32 | <font color=#EE2746>██████</font> | <font color=#EE2746>淡曙红</font> | <font color=#EE2746>DANSHUHONG</font> | <font color=#EE2746>#EE2746</font> | <font color=#11D8B9>██████</font> | <font color=#11D8B9>#11D8B9</font> |
| 33 | <font color=#2B1216>██████</font> | <font color=#2B1216>李紫</font> | <font color=#2B1216>LIZI</font> | <font color=#2B1216>#2B1216</font> | <font color=#D4EDE9>██████</font> | <font color=#D4EDE9>#D4EDE9</font> |
| 34 | <font color=#EE4863>██████</font> | <font color=#EE4863>石竹红</font> | <font color=#EE4863>SHIZHUHONG</font> | <font color=#EE4863>#EE4863</font> | <font color=#11B79C>██████</font> | <font color=#11B79C>#11B79C</font> |
| 35 | <font color=#E77C8E>██████</font> | <font color=#E77C8E>淡茜红</font> | <font color=#E77C8E>DANQIANHONG</font> | <font color=#E77C8E>#E77C8E</font> | <font color=#188371>██████</font> | <font color=#188371>#188371</font> |
| 36 | <font color=#500A16>██████</font> | <font color=#500A16>金鱼紫</font> | <font color=#500A16>JINYUZI</font> | <font color=#500A16>#500A16</font> | <font color=#AFF5E9>██████</font> | <font color=#AFF5E9>#AFF5E9</font> |
| 37 | <font color=#C27C88>██████</font> | <font color=#C27C88>山黎豆红</font> | <font color=#C27C88>SHANLIDOUHONG</font> | <font color=#C27C88>#C27C88</font> | <font color=#3D8377>██████</font> | <font color=#3D8377>#3D8377</font> |
| 38 | <font color=#73575C>██████</font> | <font color=#73575C>鼠背灰</font> | <font color=#73575C>SHUBEIHUI</font> | <font color=#73575C>#73575C</font> | <font color=#8CA8A3>██████</font> | <font color=#8CA8A3>#8CA8A3</font> |
| 39 | <font color=#EE4866>██████</font> | <font color=#EE4866>淡蕊香红</font> | <font color=#EE4866>DANRUIXIANGHONG</font> | <font color=#EE4866>#EE4866</font> | <font color=#11B799>██████</font> | <font color=#11B799>#11B799</font> |
| 40 | <font color=#621624>██████</font> | <font color=#621624>甘蔗紫</font> | <font color=#621624>GANZHEZI</font> | <font color=#621624>#621624</font> | <font color=#9DE9DB>██████</font> | <font color=#9DE9DB>#9DE9DB</font> |
| 41 | <font color=#CE5777>██████</font> | <font color=#CE5777>月季红</font> | <font color=#CE5777>YUEJIHONG</font> | <font color=#CE5777>#CE5777</font> | <font color=#31A888>██████</font> | <font color=#31A888>#31A888</font> |
| 42 | <font color=#CC163A>██████</font> | <font color=#CC163A>尖晶玉红</font> | <font color=#CC163A>JIANJINGYUHONG</font> | <font color=#CC163A>#CC163A</font> | <font color=#33E9C5>██████</font> | <font color=#33E9C5>#33E9C5</font> |
| 43 | <font color=#F1C4CD>██████</font> | <font color=#F1C4CD>水红</font> | <font color=#F1C4CD>SHUIHONG</font> | <font color=#F1C4CD>#F1C4CD</font> | <font color=#0E3B32>██████</font> | <font color=#0E3B32>#0E3B32</font> |
| 44 | <font color=#EEB8C3>██████</font> | <font color=#EEB8C3>姜红</font> | <font color=#EEB8C3>JIANGHONG</font> | <font color=#EEB8C3>#EEB8C3</font> | <font color=#11473C>██████</font> | <font color=#11473C>#11473C</font> |
| 45 | <font color=#856D72>██████</font> | <font color=#856D72>芦灰</font> | <font color=#856D72>LUHUI</font> | <font color=#856D72>#856D72</font> | <font color=#7A928D>██████</font> | <font color=#7A928D>#7A928D</font> |
| 46 | <font color=#2D0C13>██████</font> | <font color=#2D0C13>茄皮紫</font> | <font color=#2D0C13>QIEPIZI</font> | <font color=#2D0C13>#2D0C13</font> | <font color=#D2F3EC>██████</font> | <font color=#D2F3EC>#D2F3EC</font> |
| 47 | <font color=#36282B>██████</font> | <font color=#36282B>苍蝇灰</font> | <font color=#36282B>CANGYINGHUI</font> | <font color=#36282B>#36282B</font> | <font color=#C9D7D4>██████</font> | <font color=#C9D7D4>#C9D7D4</font> |
| 48 | <font color=#BF3553>██████</font> | <font color=#BF3553>锦葵红</font> | <font color=#BF3553>JINKUIHONG</font> | <font color=#BF3553>#BF3553</font> | <font color=#40CAAC>██████</font> | <font color=#40CAAC>#40CAAC</font> |
| 49 | <font color=#EC9BAD>██████</font> | <font color=#EC9BAD>粉团花红</font> | <font color=#EC9BAD>FENTUANHUAHONG</font> | <font color=#EC9BAD>#EC9BAD</font> | <font color=#136452>██████</font> | <font color=#136452>#136452</font> |
| 50 | <font color=#63071C>██████</font> | <font color=#63071C>石竹紫</font> | <font color=#63071C>SHIZHUZI</font> | <font color=#63071C>#63071C</font> | <font color=#9CF8E3>██████</font> | <font color=#9CF8E3>#9CF8E3</font> |
| 51 | <font color=#30161C>██████</font> | <font color=#30161C>卵石紫</font> | <font color=#30161C>LUANSHIZI</font> | <font color=#30161C>#30161C</font> | <font color=#CFE9E3>██████</font> | <font color=#CFE9E3>#CFE9E3</font> |
| 52 | <font color=#EEA6B7>██████</font> | <font color=#EEA6B7>晶红</font> | <font color=#EEA6B7>JINGHONG</font> | <font color=#EEA6B7>#EEA6B7</font> | <font color=#115948>██████</font> | <font color=#115948>#115948</font> |
| 53 | <font color=#E9CCD3>██████</font> | <font color=#E9CCD3>芝兰紫</font> | <font color=#E9CCD3>ZHILANZI</font> | <font color=#E9CCD3>#E9CCD3</font> | <font color=#16332C>██████</font> | <font color=#16332C>#16332C</font> |
| 54 | <font color=#EBA0B3>██████</font> | <font color=#EBA0B3>芍药耕红</font> | <font color=#EBA0B3>SHAOYAOGENGHONG</font> | <font color=#EBA0B3>#EBA0B3</font> | <font color=#145F4C>██████</font> | <font color=#145F4C>#145F4C</font> |
| 55 | <font color=#4F383E>██████</font> | <font color=#4F383E>暮云灰</font> | <font color=#4F383E>MUYUNHUI</font> | <font color=#4F383E>#4F383E</font> | <font color=#B0C7C1>██████</font> | <font color=#B0C7C1>#B0C7C1</font> |
| 56 | <font color=#ED9DB2>██████</font> | <font color=#ED9DB2>豇豆红</font> | <font color=#ED9DB2>JIANGDOUHONG</font> | <font color=#ED9DB2>#ED9DB2</font> | <font color=#12624D>██████</font> | <font color=#12624D>#12624D</font> |
| 57 | <font color=#EC8AA4>██████</font> | <font color=#EC8AA4>报春红</font> | <font color=#EC8AA4>BAOCHUNHONG</font> | <font color=#EC8AA4>#EC8AA4</font> | <font color=#13755B>██████</font> | <font color=#13755B>#13755B</font> |
| 58 | <font color=#EC7696>██████</font> | <font color=#EC7696>淡绛红</font> | <font color=#EC7696>DANJIANGHONG</font> | <font color=#EC7696>#EC7696</font> | <font color=#138969>██████</font> | <font color=#138969>#138969</font> |
| 59 | <font color=#EA7293>██████</font> | <font color=#EA7293>凤仙花红</font> | <font color=#EA7293>FENGXIANHUAHONG</font> | <font color=#EA7293>#EA7293</font> | <font color=#158D6C>██████</font> | <font color=#158D6C>#158D6C</font> |
| 60 | <font color=#EF82A0>██████</font> | <font color=#EF82A0>霞光红</font> | <font color=#EF82A0>XIAGUANGHONG</font> | <font color=#EF82A0>#EF82A0</font> | <font color=#107D5F>██████</font> | <font color=#107D5F>#107D5F</font> |
| 61 | <font color=#EC2C64>██████</font> | <font color=#EC2C64>喜蛋红</font> | <font color=#EC2C64>XIDANHONG</font> | <font color=#EC2C64>#EC2C64</font> | <font color=#13D39B>██████</font> | <font color=#13D39B>#13D39B</font> |
| 62 | <font color=#EB507E>██████</font> | <font color=#EB507E>夹竹桃红</font> | <font color=#EB507E>JIAZHUTAOHONG</font> | <font color=#EB507E>#EB507E</font> | <font color=#14AF81>██████</font> | <font color=#14AF81>#14AF81</font> |
| 63 | <font color=#EB3C70>██████</font> | <font color=#EB3C70>松叶牡丹红</font> | <font color=#EB3C70>SONGYEMUDANHONG</font> | <font color=#EB3C70>#EB3C70</font> | <font color=#14C38F>██████</font> | <font color=#14C38F>#14C38F</font> |
| 64 | <font color=#EA517F>██████</font> | <font color=#EA517F>莲瓣红</font> | <font color=#EA517F>LIANBANHONG</font> | <font color=#EA517F>#EA517F</font> | <font color=#15AE80>██████</font> | <font color=#15AE80>#15AE80</font> |
| 65 | <font color=#DE7897>██████</font> | <font color=#DE7897>白芨红</font> | <font color=#DE7897>BAIJIHONG</font> | <font color=#DE7897>#DE7897</font> | <font color=#218768>██████</font> | <font color=#218768>#218768</font> |
| 66 | <font color=#B598A1>██████</font> | <font color=#B598A1>隐红灰</font> | <font color=#B598A1>YINHONGHUI</font> | <font color=#B598A1>#B598A1</font> | <font color=#4A675E>██████</font> | <font color=#4A675E>#4A675E</font> |
| 67 | <font color=#ED2F6A>██████</font> | <font color=#ED2F6A>榲桲红</font> | <font color=#ED2F6A>WENPOHONG</font> | <font color=#ED2F6A>#ED2F6A</font> | <font color=#12D095>██████</font> | <font color=#12D095>#12D095</font> |
| 68 | <font color=#C5708B>██████</font> | <font color=#C5708B>酢酱草红</font> | <font color=#C5708B>CUJIANGCAOHONG</font> | <font color=#C5708B>#C5708B</font> | <font color=#3A8F74>██████</font> | <font color=#3A8F74>#3A8F74</font> |
| 69 | <font color=#33141E>██████</font> | <font color=#33141E>火鹅紫</font> | <font color=#33141E>HUOEZI</font> | <font color=#33141E>#33141E</font> | <font color=#CCEBE1>██████</font> | <font color=#CCEBE1>#CCEBE1</font> |
| 70 | <font color=#621D34>██████</font> | <font color=#621D34>鹞冠紫</font> | <font color=#621D34>YAOGUANZI</font> | <font color=#621D34>#621D34</font> | <font color=#9DE2CB>██████</font> | <font color=#9DE2CB>#9DE2CB</font> |
| 71 | <font color=#EF3473>██████</font> | <font color=#EF3473>品红</font> | <font color=#EF3473>PINHONG</font> | <font color=#EF3473>#EF3473</font> | <font color=#10CB8C>██████</font> | <font color=#10CB8C>#10CB8C</font> |
| 72 | <font color=#382129>██████</font> | <font color=#382129>磨石紫</font> | <font color=#382129>MOSHIZI</font> | <font color=#382129>#382129</font> | <font color=#C7DED6>██████</font> | <font color=#C7DED6>#C7DED6</font> |
| 73 | <font color=#310F1B>██████</font> | <font color=#310F1B>墨紫</font> | <font color=#310F1B>MOZI</font> | <font color=#310F1B>#310F1B</font> | <font color=#CEF0E4>██████</font> | <font color=#CEF0E4>#CEF0E4</font> |
| 74 | <font color=#381924>██████</font> | <font color=#381924>檀紫</font> | <font color=#381924>TANZI</font> | <font color=#381924>#381924</font> | <font color=#C7E6DB>██████</font> | <font color=#C7E6DB>#C7E6DB</font> |
| 75 | <font color=#E16C96>██████</font> | <font color=#E16C96>初荷红</font> | <font color=#E16C96>CHUHEHONG</font> | <font color=#E16C96>#E16C96</font> | <font color=#1E9369>██████</font> | <font color=#1E9369>#1E9369</font> |
| 76 | <font color=#951C48>██████</font> | <font color=#951C48>菜头紫</font> | <font color=#951C48>CAITOUZI</font> | <font color=#951C48>#951C48</font> | <font color=#6AE3B7>██████</font> | <font color=#6AE3B7>#6AE3B7</font> |
| 77 | <font color=#62102E>██████</font> | <font color=#62102E>葡萄酒红</font> | <font color=#62102E>PUTAOJIUHONG</font> | <font color=#62102E>#62102E</font> | <font color=#9DEFD1>██████</font> | <font color=#9DEFD1>#9DEFD1</font> |
| 78 | <font color=#E0C8D1>██████</font> | <font color=#E0C8D1>淡青紫</font> | <font color=#E0C8D1>DANQINGZI</font> | <font color=#E0C8D1>#E0C8D1</font> | <font color=#1F372E>██████</font> | <font color=#1F372E>#1F372E</font> |
| 79 | <font color=#D13C74>██████</font> | <font color=#D13C74>菠根红</font> | <font color=#D13C74>BOGENHONG</font> | <font color=#D13C74>#D13C74</font> | <font color=#2EC38B>██████</font> | <font color=#2EC38B>#2EC38B</font> |
| 80 | <font color=#4B1E2F>██████</font> | <font color=#4B1E2F>海象紫</font> | <font color=#4B1E2F>HAIXIANGZI</font> | <font color=#4B1E2F>#4B1E2F</font> | <font color=#B4E1D0>██████</font> | <font color=#B4E1D0>#B4E1D0</font> |
| 81 | <font color=#EC4E8A>██████</font> | <font color=#EC4E8A>兔眼红</font> | <font color=#EC4E8A>TUYANHONG</font> | <font color=#EC4E8A>#EC4E8A</font> | <font color=#13B175>██████</font> | <font color=#13B175>#13B175</font> |
| 82 | <font color=#DE3F7C>██████</font> | <font color=#DE3F7C>嫩菱红</font> | <font color=#DE3F7C>NENLINGHONG</font> | <font color=#DE3F7C>#DE3F7C</font> | <font color=#21C083>██████</font> | <font color=#21C083>#21C083</font> |
| 83 | <font color=#A8456B>██████</font> | <font color=#A8456B>洋葱紫</font> | <font color=#A8456B>YANGCONGZI</font> | <font color=#A8456B>#A8456B</font> | <font color=#57BA94>██████</font> | <font color=#57BA94>#57BA94</font> |
| 84 | <font color=#CE5E8A>██████</font> | <font color=#CE5E8A>吊钟花红</font> | <font color=#CE5E8A>DIAOZHONGHUAHONG</font> | <font color=#CE5E8A>#CE5E8A</font> | <font color=#31A175>██████</font> | <font color=#31A175>#31A175</font> |
| 85 | <font color=#461629>██████</font> | <font color=#461629>绀紫</font> | <font color=#461629>GANZI</font> | <font color=#461629>#461629</font> | <font color=#B9E9D6>██████</font> | <font color=#B9E9D6>#B9E9D6</font> |
| 86 | <font color=#EE2C79>██████</font> | <font color=#EE2C79>紫荆红</font> | <font color=#EE2C79>ZIJINGHONG</font> | <font color=#EE2C79>#EE2C79</font> | <font color=#11D386>██████</font> | <font color=#11D386>#11D386</font> |
| 87 | <font color=#EF498B>██████</font> | <font color=#EF498B>扁豆花红</font> | <font color=#EF498B>BIANDOUHUAHONG</font> | <font color=#EF498B>#EF498B</font> | <font color=#10B674>██████</font> | <font color=#10B674>#10B674</font> |
| 88 | <font color=#EDE3E7>██████</font> | <font color=#EDE3E7>马鞭草紫</font> | <font color=#EDE3E7>MABIANCAOZI</font> | <font color=#EDE3E7>#EDE3E7</font> | <font color=#121C18>██████</font> | <font color=#121C18>#121C18</font> |
| 89 | <font color=#EC2D7A>██████</font> | <font color=#EC2D7A>藏花红</font> | <font color=#EC2D7A>CANGHUAHONG</font> | <font color=#EC2D7A>#EC2D7A</font> | <font color=#13D285>██████</font> | <font color=#13D285>#13D285</font> |
| 90 | <font color=#482936>██████</font> | <font color=#482936>斑鸠灰</font> | <font color=#482936>BANJIUHUI</font> | <font color=#482936>#482936</font> | <font color=#B7D6C9>██████</font> | <font color=#B7D6C9>#B7D6C9</font> |
| 91 | <font color=#440E25>██████</font> | <font color=#440E25>古铜紫</font> | <font color=#440E25>GUTONGZI</font> | <font color=#440E25>#440E25</font> | <font color=#BBF1DA>██████</font> | <font color=#BBF1DA>#BBF1DA</font> |
| 92 | <font color=#D2568C>██████</font> | <font color=#D2568C>丹紫红</font> | <font color=#D2568C>DANZIHONG</font> | <font color=#D2568C>#D2568C</font> | <font color=#2DA973>██████</font> | <font color=#2DA973>#2DA973</font> |
| 93 | <font color=#E9D7DF>██████</font> | <font color=#E9D7DF>丁香淡紫</font> | <font color=#E9D7DF>DINGXIANGDANZI</font> | <font color=#E9D7DF>#E9D7DF</font> | <font color=#162820>██████</font> | <font color=#162820>#162820</font> |
| 94 | <font color=#D2357D>██████</font> | <font color=#D2357D>玫瑰红</font> | <font color=#D2357D>MEIGUIHONG</font> | <font color=#D2357D>#D2357D</font> | <font color=#2DCA82>██████</font> | <font color=#2DCA82>#2DCA82</font> |
| 95 | <font color=#36292F>██████</font> | <font color=#36292F>古鼎灰</font> | <font color=#36292F>GUDINGHUI</font> | <font color=#36292F>#36292F</font> | <font color=#C9D6D0>██████</font> | <font color=#C9D6D0>#C9D6D0</font> |
| 96 | <font color=#D276A3>██████</font> | <font color=#D276A3>菱锰红</font> | <font color=#D276A3>LINGMENGHONG</font> | <font color=#D276A3>#D276A3</font> | <font color=#2D895C>██████</font> | <font color=#2D895C>#2D895C</font> |
| 97 | <font color=#C06F98>██████</font> | <font color=#C06F98>樱草紫</font> | <font color=#C06F98>YINGCAOZI</font> | <font color=#C06F98>#C06F98</font> | <font color=#3F9067>██████</font> | <font color=#3F9067>#3F9067</font> |
| 98 | <font color=#CC5595>██████</font> | <font color=#CC5595>龙须红</font> | <font color=#CC5595>LONGXUHONG</font> | <font color=#CC5595>#CC5595</font> | <font color=#33AA6A>██████</font> | <font color=#33AA6A>#33AA6A</font> |
| 99 | <font color=#C35691>██████</font> | <font color=#C35691>电气石红</font> | <font color=#C35691>DIANQISHIHONG</font> | <font color=#C35691>#C35691</font> | <font color=#3CA96E>██████</font> | <font color=#3CA96E>#3CA96E</font> |
| 100 | <font color=#BA2F7B>██████</font> | <font color=#BA2F7B>玫瑰紫</font> | <font color=#BA2F7B>MEIGUIZI</font> | <font color=#BA2F7B>#BA2F7B</font> | <font color=#45D084>██████</font> | <font color=#45D084>#45D084</font> |
| 101 | <font color=#9B1E64>██████</font> | <font color=#9B1E64>苋菜紫</font> | <font color=#9B1E64>XIANCAIZI</font> | <font color=#9B1E64>#9B1E64</font> | <font color=#64E19B>██████</font> | <font color=#64E19B>#64E19B</font> |
| 102 | <font color=#5D3F51>██████</font> | <font color=#5D3F51>紫灰</font> | <font color=#5D3F51>ZIHUI</font> | <font color=#5D3F51>#5D3F51</font> | <font color=#A2C0AE>██████</font> | <font color=#A2C0AE>#A2C0AE</font> |
| 103 | <font color=#4E2A40>██████</font> | <font color=#4E2A40>龙睛鱼紫</font> | <font color=#4E2A40>LONGJINGYUZI</font> | <font color=#4E2A40>#4E2A40</font> | <font color=#B1D5BF>██████</font> | <font color=#B1D5BF>#B1D5BF</font> |
| 104 | <font color=#BC84A8>██████</font> | <font color=#BC84A8>青蛤壳紫</font> | <font color=#BC84A8>QINGHAKEZI</font> | <font color=#BC84A8>#BC84A8</font> | <font color=#437B57>██████</font> | <font color=#437B57>#437B57</font> |
| 105 | <font color=#C08EAF>██████</font> | <font color=#C08EAF>萝兰紫</font> | <font color=#C08EAF>LUOLANZI</font> | <font color=#C08EAF>#C08EAF</font> | <font color=#3F7150>██████</font> | <font color=#3F7150>#3F7150</font> |
| 106 | <font color=#411C35>██████</font> | <font color=#411C35>荸荠紫</font> | <font color=#411C35>BIQIZI</font> | <font color=#411C35>#411C35</font> | <font color=#BEE3CA>██████</font> | <font color=#BEE3CA>#BEE3CA</font> |
| 107 | <font color=#AD6598>██████</font> | <font color=#AD6598>豆蔻紫</font> | <font color=#AD6598>DOUKOUZI</font> | <font color=#AD6598>#AD6598</font> | <font color=#529A67>██████</font> | <font color=#529A67>#529A67</font> |
| 108 | <font color=#A35C8F>██████</font> | <font color=#A35C8F>扁豆紫</font> | <font color=#A35C8F>BIANDOUZI</font> | <font color=#A35C8F>#A35C8F</font> | <font color=#5CA370>██████</font> | <font color=#5CA370>#5CA370</font> |
| 109 | <font color=#681752>██████</font> | <font color=#681752>牵牛紫</font> | <font color=#681752>QIANNIUZI</font> | <font color=#681752>#681752</font> | <font color=#97E8AD>██████</font> | <font color=#97E8AD>#97E8AD</font> |
| 110 | <font color=#894276>██████</font> | <font color=#894276>芓紫</font> | <font color=#894276>ZIZI</font> | <font color=#894276>#894276</font> | <font color=#76BD89>██████</font> | <font color=#76BD89>#76BD89</font> |
| 111 | <font color=#7E2065>██████</font> | <font color=#7E2065>葛巾紫</font> | <font color=#7E2065>GEJINZI</font> | <font color=#7E2065>#7E2065</font> | <font color=#81DF9A>██████</font> | <font color=#81DF9A>#81DF9A</font> |
| 112 | <font color=#8B2671>██████</font> | <font color=#8B2671>青莲</font> | <font color=#8B2671>QINGLIAN</font> | <font color=#8B2671>#8B2671</font> | <font color=#74D98E>██████</font> | <font color=#74D98E>#74D98E</font> |
| 113 | <font color=#983680>██████</font> | <font color=#983680>芥花紫</font> | <font color=#983680>JIEHUAZI</font> | <font color=#983680>#983680</font> | <font color=#67C97F>██████</font> | <font color=#67C97F>#67C97F</font> |
| 114 | <font color=#C8ADC4>██████</font> | <font color=#C8ADC4>凤信紫</font> | <font color=#C8ADC4>FENGXINZI</font> | <font color=#C8ADC4>#C8ADC4</font> | <font color=#37523B>██████</font> | <font color=#37523B>#37523B</font> |
| 115 | <font color=#1C0D1A>██████</font> | <font color=#1C0D1A>深牵牛紫</font> | <font color=#1C0D1A>SHENQIANNIUZI</font> | <font color=#1C0D1A>#1C0D1A</font> | <font color=#E3F2E5>██████</font> | <font color=#E3F2E5>#E3F2E5</font> |
| 116 | <font color=#7E1671>██████</font> | <font color=#7E1671>魏紫</font> | <font color=#7E1671>WEIZI</font> | <font color=#7E1671>#7E1671</font> | <font color=#81E98E>██████</font> | <font color=#81E98E>#81E98E</font> |
| 117 | <font color=#1E131D>██████</font> | <font color=#1E131D>乌梅紫</font> | <font color=#1E131D>WUMEIZI</font> | <font color=#1E131D>#1E131D</font> | <font color=#E1ECE2>██████</font> | <font color=#E1ECE2>#E1ECE2</font> |
| 118 | <font color=#813C85>██████</font> | <font color=#813C85>桔梗紫</font> | <font color=#813C85>JIEGENGZI</font> | <font color=#813C85>#813C85</font> | <font color=#7EC37A>██████</font> | <font color=#7EC37A>#7EC37A</font> |
| 119 | <font color=#D1C2D3>██████</font> | <font color=#D1C2D3>淡牵牛紫</font> | <font color=#D1C2D3>DANQIANNIUZI</font> | <font color=#D1C2D3>#D1C2D3</font> | <font color=#2E3D2C>██████</font> | <font color=#2E3D2C>#2E3D2C</font> |
| 120 | <font color=#3E3841>██████</font> | <font color=#3E3841>剑锋紫</font> | <font color=#3E3841>JIANFENGZI</font> | <font color=#3E3841>#3E3841</font> | <font color=#C1C7BE>██████</font> | <font color=#C1C7BE>#C1C7BE</font> |
| 121 | <font color=#815C94>██████</font> | <font color=#815C94>蕈紫</font> | <font color=#815C94>XUNZI</font> | <font color=#815C94>#815C94</font> | <font color=#7EA36B>██████</font> | <font color=#7EA36B>#7EA36B</font> |
| 122 | <font color=#806D9E>██████</font> | <font color=#806D9E>槿紫</font> | <font color=#806D9E>JINZI</font> | <font color=#806D9E>#806D9E</font> | <font color=#7F9261>██████</font> | <font color=#7F9261>#7F9261</font> |
| 123 | <font color=#E2E1E4>██████</font> | <font color=#E2E1E4>芡食白</font> | <font color=#E2E1E4>QIANSHIBAI</font> | <font color=#E2E1E4>#E2E1E4</font> | <font color=#1D1E1B>██████</font> | <font color=#1D1E1B>#1D1E1B</font> |
| 124 | <font color=#322F3B>██████</font> | <font color=#322F3B>龙葵紫</font> | <font color=#322F3B>LONGKUIZI</font> | <font color=#322F3B>#322F3B</font> | <font color=#CDD0C4>██████</font> | <font color=#CDD0C4>#CDD0C4</font> |
| 125 | <font color=#8076A3>██████</font> | <font color=#8076A3>藤萝紫</font> | <font color=#8076A3>TENGLUOZI</font> | <font color=#8076A3>#8076A3</font> | <font color=#7F895C>██████</font> | <font color=#7F895C>#7F895C</font> |
| 126 | <font color=#35333C>██████</font> | <font color=#35333C>沙鱼灰</font> | <font color=#35333C>SHAYUHUI</font> | <font color=#35333C>#35333C</font> | <font color=#CACCC3>██████</font> | <font color=#CACCC3>#CACCC3</font> |
| 127 | <font color=#22202E>██████</font> | <font color=#22202E>暗龙胆紫</font> | <font color=#22202E>ANLONGDANZI</font> | <font color=#22202E>#22202E</font> | <font color=#DDDFD1>██████</font> | <font color=#DDDFD1>#DDDFD1</font> |
| 128 | <font color=#131124>██████</font> | <font color=#131124>暗蓝紫</font> | <font color=#131124>ANLANZI</font> | <font color=#131124>#131124</font> | <font color=#ECEEDB>██████</font> | <font color=#ECEEDB>#ECEEDB</font> |
| 129 | <font color=#302F4B>██████</font> | <font color=#302F4B>野葡萄紫</font> | <font color=#302F4B>YEPUTAOZI</font> | <font color=#302F4B>#302F4B</font> | <font color=#CFD0B4>██████</font> | <font color=#CFD0B4>#CFD0B4</font> |
| 130 | <font color=#525288>██████</font> | <font color=#525288>野菊紫</font> | <font color=#525288>YEJUZI</font> | <font color=#525288>#525288</font> | <font color=#ADAD77>██████</font> | <font color=#ADAD77>#ADAD77</font> |
| 131 | <font color=#2F2F35>██████</font> | <font color=#2F2F35>水牛灰</font> | <font color=#2F2F35>SHUINIUHUI</font> | <font color=#2F2F35>#2F2F35</font> | <font color=#D0D0CA>██████</font> | <font color=#D0D0CA>#D0D0CA</font> |
| 132 | <font color=#CCCCD6>██████</font> | <font color=#CCCCD6>远山紫</font> | <font color=#CCCCD6>YUANSHANZI</font> | <font color=#CCCCD6>#CCCCD6</font> | <font color=#333329>██████</font> | <font color=#333329>#333329</font> |
| 133 | <font color=#74759B>██████</font> | <font color=#74759B>螺甸紫</font> | <font color=#74759B>LUODIANZI</font> | <font color=#74759B>#74759B</font> | <font color=#8B8A64>██████</font> | <font color=#8B8A64>#8B8A64</font> |
| 134 | <font color=#1F2040>██████</font> | <font color=#1F2040>晶石紫</font> | <font color=#1F2040>JINGSHIZI</font> | <font color=#1F2040>#1F2040</font> | <font color=#E0DFBF>██████</font> | <font color=#E0DFBF>#E0DFBF</font> |
| 135 | <font color=#2E317C>██████</font> | <font color=#2E317C>满天星紫</font> | <font color=#2E317C>MANTIANXINGZI</font> | <font color=#2E317C>#2E317C</font> | <font color=#D1CE83>██████</font> | <font color=#D1CE83>#D1CE83</font> |
| 136 | <font color=#A7A8BD>██████</font> | <font color=#A7A8BD>淡蓝紫</font> | <font color=#A7A8BD>DANLANZI</font> | <font color=#A7A8BD>#A7A8BD</font> | <font color=#585742>██████</font> | <font color=#585742>#585742</font> |
| 137 | <font color=#61649F>██████</font> | <font color=#61649F>山梗紫</font> | <font color=#61649F>SHANGENGZI</font> | <font color=#61649F>#61649F</font> | <font color=#9E9B60>██████</font> | <font color=#9E9B60>#9E9B60</font> |
| 138 | <font color=#2D2E36>██████</font> | <font color=#2D2E36>牛角灰</font> | <font color=#2D2E36>NIUJIAOHUI</font> | <font color=#2D2E36>#2D2E36</font> | <font color=#D2D1C9>██████</font> | <font color=#D2D1C9>#D2D1C9</font> |
| 139 | <font color=#5E616D>██████</font> | <font color=#5E616D>鱼尾灰</font> | <font color=#5E616D>YUWEIHUI</font> | <font color=#5E616D>#5E616D</font> | <font color=#A19E92>██████</font> | <font color=#A19E92>#A19E92</font> |
| 140 | <font color=#47484C>██████</font> | <font color=#47484C>瓦罐灰</font> | <font color=#47484C>WAGUANHUI</font> | <font color=#47484C>#47484C</font> | <font color=#B8B7B3>██████</font> | <font color=#B8B7B3>#B8B7B3</font> |
| 141 | <font color=#0F1423>██████</font> | <font color=#0F1423>钢蓝</font> | <font color=#0F1423>GANGLAN</font> | <font color=#0F1423>#0F1423</font> | <font color=#F0EBDC>██████</font> | <font color=#F0EBDC>#F0EBDC</font> |
| 142 | <font color=#131824>██████</font> | <font color=#131824>燕颔蓝</font> | <font color=#131824>YANHANLAN</font> | <font color=#131824>#131824</font> | <font color=#ECE7DB>██████</font> | <font color=#ECE7DB>#ECE7DB</font> |
| 143 | <font color=#475164>██████</font> | <font color=#475164>鲸鱼灰</font> | <font color=#475164>JINGYUHUI</font> | <font color=#475164>#475164</font> | <font color=#B8AE9B>██████</font> | <font color=#B8AE9B>#B8AE9B</font> |
| 144 | <font color=#2B333E>██████</font> | <font color=#2B333E>青灰</font> | <font color=#2B333E>QINGHUI</font> | <font color=#2B333E>#2B333E</font> | <font color=#D4CCC1>██████</font> | <font color=#D4CCC1>#D4CCC1</font> |
| 145 | <font color=#1C2938>██████</font> | <font color=#1C2938>鸽蓝</font> | <font color=#1C2938>GELAN</font> | <font color=#1C2938>#1C2938</font> | <font color=#E3D6C7>██████</font> | <font color=#E3D6C7>#E3D6C7</font> |
| 146 | <font color=#101F30>██████</font> | <font color=#101F30>暗蓝</font> | <font color=#101F30>ANLAN</font> | <font color=#101F30>#101F30</font> | <font color=#EFE0CF>██████</font> | <font color=#EFE0CF>#EFE0CF</font> |
| 147 | <font color=#142334>██████</font> | <font color=#142334>钢青</font> | <font color=#142334>GANGQING</font> | <font color=#142334>#142334</font> | <font color=#EBDCCB>██████</font> | <font color=#EBDCCB>#EBDCCB</font> |
| 148 | <font color=#15559A>██████</font> | <font color=#15559A>海涛蓝</font> | <font color=#15559A>HAITAOLAN</font> | <font color=#15559A>#15559A</font> | <font color=#EAAA65>██████</font> | <font color=#EAAA65>#EAAA65</font> |
| 149 | <font color=#0F59A4>██████</font> | <font color=#0F59A4>飞燕草蓝</font> | <font color=#0F59A4>FEIYANCAOLAN</font> | <font color=#0F59A4>#0F59A4</font> | <font color=#F0A65B>██████</font> | <font color=#F0A65B>#F0A65B</font> |
| 150 | <font color=#1661AB>██████</font> | <font color=#1661AB>靛青</font> | <font color=#1661AB>DIANQING</font> | <font color=#1661AB>#1661AB</font> | <font color=#E99E54>██████</font> | <font color=#E99E54>#E99E54</font> |
| 151 | <font color=#3170A7>██████</font> | <font color=#3170A7>安安蓝</font> | <font color=#3170A7>ANANLAN</font> | <font color=#3170A7>#3170A7</font> | <font color=#CE8F58>██████</font> | <font color=#CE8F58>#CE8F58</font> |
| 152 | <font color=#346C9C>██████</font> | <font color=#346C9C>海军蓝</font> | <font color=#346C9C>HAIJUNLAN</font> | <font color=#346C9C>#346C9C</font> | <font color=#CB9363>██████</font> | <font color=#CB9363>#CB9363</font> |
| 153 | <font color=#2775B6>██████</font> | <font color=#2775B6>景泰蓝</font> | <font color=#2775B6>JINGTAILAN</font> | <font color=#2775B6>#2775B6</font> | <font color=#D88A49>██████</font> | <font color=#D88A49>#D88A49</font> |
| 154 | <font color=#2B73AF>██████</font> | <font color=#2B73AF>品蓝</font> | <font color=#2B73AF>PINLAN</font> | <font color=#2B73AF>#2B73AF</font> | <font color=#D48C50>██████</font> | <font color=#D48C50>#D48C50</font> |
| 155 | <font color=#2474B5>██████</font> | <font color=#2474B5>尼罗蓝</font> | <font color=#2474B5>NILUOLAN</font> | <font color=#2474B5>#2474B5</font> | <font color=#DB8B4A>██████</font> | <font color=#DB8B4A>#DB8B4A</font> |
| 156 | <font color=#4E7CA1>██████</font> | <font color=#4E7CA1>蝶翅蓝</font> | <font color=#4E7CA1>DIECHILAN</font> | <font color=#4E7CA1>#4E7CA1</font> | <font color=#B1835E>██████</font> | <font color=#B1835E>#B1835E</font> |
| 157 | <font color=#2376B7>██████</font> | <font color=#2376B7>花青</font> | <font color=#2376B7>HUAQING</font> | <font color=#2376B7>#2376B7</font> | <font color=#DC8948>██████</font> | <font color=#DC8948>#DC8948</font> |
| 158 | <font color=#144A74>██████</font> | <font color=#144A74>鷃蓝</font> | <font color=#144A74>YANLAN</font> | <font color=#144A74>#144A74</font> | <font color=#EBB58B>██████</font> | <font color=#EBB58B>#EBB58B</font> |
| 159 | <font color=#93B5CF>██████</font> | <font color=#93B5CF>星蓝</font> | <font color=#93B5CF>XINGLAN</font> | <font color=#93B5CF>#93B5CF</font> | <font color=#6C4A30>██████</font> | <font color=#6C4A30>#6C4A30</font> |
| 160 | <font color=#2177B8>██████</font> | <font color=#2177B8>虹蓝</font> | <font color=#2177B8>HONGLAN</font> | <font color=#2177B8>#2177B8</font> | <font color=#DE8847>██████</font> | <font color=#DE8847>#DE8847</font> |
| 161 | <font color=#126BAE>██████</font> | <font color=#126BAE>柏林蓝</font> | <font color=#126BAE>BOLINLAN</font> | <font color=#126BAE>#126BAE</font> | <font color=#ED9451>██████</font> | <font color=#ED9451>#ED9451</font> |
| 162 | <font color=#1772B4>██████</font> | <font color=#1772B4>群青</font> | <font color=#1772B4>QUNQING</font> | <font color=#1772B4>#1772B4</font> | <font color=#E88D4B>██████</font> | <font color=#E88D4B>#E88D4B</font> |
| 163 | <font color=#BACCD9>██████</font> | <font color=#BACCD9>云水蓝</font> | <font color=#BACCD9>YUNSHUILAN</font> | <font color=#BACCD9>#BACCD9</font> | <font color=#453326>██████</font> | <font color=#453326>#453326</font> |
| 164 | <font color=#619AC3>██████</font> | <font color=#619AC3>羽扇豆蓝</font> | <font color=#619AC3>YUSHANDOULAN</font> | <font color=#619AC3>#619AC3</font> | <font color=#9E653C>██████</font> | <font color=#9E653C>#9E653C</font> |
| 165 | <font color=#495C69>██████</font> | <font color=#495C69>战舰灰</font> | <font color=#495C69>ZHANJIANHUI</font> | <font color=#495C69>#495C69</font> | <font color=#B6A396>██████</font> | <font color=#B6A396>#B6A396</font> |
| 166 | <font color=#8FB2C9>██████</font> | <font color=#8FB2C9>晴山蓝</font> | <font color=#8FB2C9>QINGSHANLAN</font> | <font color=#8FB2C9>#8FB2C9</font> | <font color=#704D36>██████</font> | <font color=#704D36>#704D36</font> |
| 167 | <font color=#5698C3>██████</font> | <font color=#5698C3>睛蓝</font> | <font color=#5698C3>JINGLAN</font> | <font color=#5698C3>#5698C3</font> | <font color=#A9673C>██████</font> | <font color=#A9673C>#A9673C</font> |
| 168 | <font color=#11659A>██████</font> | <font color=#11659A>搪磁蓝</font> | <font color=#11659A>TANGCILAN</font> | <font color=#11659A>#11659A</font> | <font color=#EE9A65>██████</font> | <font color=#EE9A65>#EE9A65</font> |
| 169 | <font color=#2983BB>██████</font> | <font color=#2983BB>潮蓝</font> | <font color=#2983BB>CHAOLAN</font> | <font color=#2983BB>#2983BB</font> | <font color=#D67C44>██████</font> | <font color=#D67C44>#D67C44</font> |
| 170 | <font color=#1677B3>██████</font> | <font color=#1677B3>天蓝</font> | <font color=#1677B3>TIANLAN</font> | <font color=#1677B3>#1677B3</font> | <font color=#E9884C>██████</font> | <font color=#E9884C>#E9884C</font> |
| 171 | <font color=#C4CBCF>██████</font> | <font color=#C4CBCF>大理石灰</font> | <font color=#C4CBCF>DALISHIHUI</font> | <font color=#C4CBCF>#C4CBCF</font> | <font color=#3B3430>██████</font> | <font color=#3B3430>#3B3430</font> |
| 172 | <font color=#1177B0>██████</font> | <font color=#1177B0>牵牛花蓝</font> | <font color=#1177B0>QIANNIUHUALAN</font> | <font color=#1177B0>#1177B0</font> | <font color=#EE884F>██████</font> | <font color=#EE884F>#EE884F</font> |
| 173 | <font color=#2486B9>██████</font> | <font color=#2486B9>宝石蓝</font> | <font color=#2486B9>BAOSHILAN</font> | <font color=#2486B9>#2486B9</font> | <font color=#DB7946>██████</font> | <font color=#DB7946>#DB7946</font> |
| 174 | <font color=#5E7987>██████</font> | <font color=#5E7987>淡蓝灰</font> | <font color=#5E7987>DANLANHUI</font> | <font color=#5E7987>#5E7987</font> | <font color=#A18678>██████</font> | <font color=#A18678>#A18678</font> |
| 175 | <font color=#74787A>██████</font> | <font color=#74787A>嫩灰</font> | <font color=#74787A>NENHUI</font> | <font color=#74787A>#74787A</font> | <font color=#8B8785>██████</font> | <font color=#8B8785>#8B8785</font> |
| 176 | <font color=#CDD1D3>██████</font> | <font color=#CDD1D3>银鱼白</font> | <font color=#CDD1D3>YINYUBAI</font> | <font color=#CDD1D3>#CDD1D3</font> | <font color=#322E2C>██████</font> | <font color=#322E2C>#322E2C</font> |
| 177 | <font color=#1781B5>██████</font> | <font color=#1781B5>釉蓝</font> | <font color=#1781B5>YOULAN</font> | <font color=#1781B5>#1781B5</font> | <font color=#E87E4A>██████</font> | <font color=#E87E4A>#E87E4A</font> |
| 178 | <font color=#66A9C9>██████</font> | <font color=#66A9C9>涧石蓝</font> | <font color=#66A9C9>JIANSHILAN</font> | <font color=#66A9C9>#66A9C9</font> | <font color=#995636>██████</font> | <font color=#995636>#995636</font> |
| 179 | <font color=#D0DFE6>██████</font> | <font color=#D0DFE6>远天蓝</font> | <font color=#D0DFE6>YUANTIANLAN</font> | <font color=#D0DFE6>#D0DFE6</font> | <font color=#2F2019>██████</font> | <font color=#2F2019>#2F2019</font> |
| 180 | <font color=#2F90B9>██████</font> | <font color=#2F90B9>云山蓝</font> | <font color=#2F90B9>YUNSHANLAN</font> | <font color=#2F90B9>#2F90B9</font> | <font color=#D06F46>██████</font> | <font color=#D06F46>#D06F46</font> |
| 181 | <font color=#8ABCD1>██████</font> | <font color=#8ABCD1>秋波蓝</font> | <font color=#8ABCD1>QIUBOLAN</font> | <font color=#8ABCD1>#8ABCD1</font> | <font color=#75432E>██████</font> | <font color=#75432E>#75432E</font> |
| 182 | <font color=#C3D7DF>██████</font> | <font color=#C3D7DF>井天蓝</font> | <font color=#C3D7DF>JINGTIANLAN</font> | <font color=#C3D7DF>#C3D7DF</font> | <font color=#3C2820>██████</font> | <font color=#3C2820>#3C2820</font> |
| 183 | <font color=#158BB8>██████</font> | <font color=#158BB8>鸢尾蓝</font> | <font color=#158BB8>YUANWEILAN</font> | <font color=#158BB8>#158BB8</font> | <font color=#EA7447>██████</font> | <font color=#EA7447>#EA7447</font> |
| 184 | <font color=#D8E3E7>██████</font> | <font color=#D8E3E7>云峰白</font> | <font color=#D8E3E7>YUNFENGBAI</font> | <font color=#D8E3E7>#D8E3E7</font> | <font color=#271C18>██████</font> | <font color=#271C18>#271C18</font> |
| 185 | <font color=#B2BBBE>██████</font> | <font color=#B2BBBE>星灰</font> | <font color=#B2BBBE>XINGHUI</font> | <font color=#B2BBBE>#B2BBBE</font> | <font color=#4D4441>██████</font> | <font color=#4D4441>#4D4441</font> |
| 186 | <font color=#1A94BC>██████</font> | <font color=#1A94BC>钴蓝</font> | <font color=#1A94BC>GULAN</font> | <font color=#1A94BC>#1A94BC</font> | <font color=#E56B43>██████</font> | <font color=#E56B43>#E56B43</font> |
| 187 | <font color=#5CB3CC>██████</font> | <font color=#5CB3CC>碧青</font> | <font color=#5CB3CC>BIQING</font> | <font color=#5CB3CC>#5CB3CC</font> | <font color=#A34C33>██████</font> | <font color=#A34C33>#A34C33</font> |
| 188 | <font color=#134857>██████</font> | <font color=#134857>苍蓝</font> | <font color=#134857>CANGLAN</font> | <font color=#134857>#134857</font> | <font color=#ECB7A8>██████</font> | <font color=#ECB7A8>#ECB7A8</font> |
| 189 | <font color=#132C33>██████</font> | <font color=#132C33>深灰蓝</font> | <font color=#132C33>SHENHUILAN</font> | <font color=#132C33>#132C33</font> | <font color=#ECD3CC>██████</font> | <font color=#ECD3CC>#ECD3CC</font> |
| 190 | <font color=#21373D>██████</font> | <font color=#21373D>灰蓝</font> | <font color=#21373D>HUILAN</font> | <font color=#21373D>#21373D</font> | <font color=#DEC8C2>██████</font> | <font color=#DEC8C2>#DEC8C2</font> |
| 191 | <font color=#B0D5DF>██████</font> | <font color=#B0D5DF>湖水蓝</font> | <font color=#B0D5DF>HUSHUILAN</font> | <font color=#B0D5DF>#B0D5DF</font> | <font color=#4F2A20>██████</font> | <font color=#4F2A20>#4F2A20</font> |
| 192 | <font color=#22A2C3>██████</font> | <font color=#22A2C3>海青</font> | <font color=#22A2C3>HAIQING</font> | <font color=#22A2C3>#22A2C3</font> | <font color=#DD5D3C>██████</font> | <font color=#DD5D3C>#DD5D3C</font> |
| 193 | <font color=#474B4C>██████</font> | <font color=#474B4C>黄昏灰</font> | <font color=#474B4C>HUANGHUNHUI</font> | <font color=#474B4C>#474B4C</font> | <font color=#B8B4B3>██████</font> | <font color=#B8B4B3>#B8B4B3</font> |
| 194 | <font color=#63BBD0>██████</font> | <font color=#63BBD0>霁青</font> | <font color=#63BBD0>JIQING</font> | <font color=#63BBD0>#63BBD0</font> | <font color=#9C442F>██████</font> | <font color=#9C442F>#9C442F</font> |
| 195 | <font color=#126E82>██████</font> | <font color=#126E82>玉鈫蓝</font> | <font color=#126E82>YUQINLAN</font> | <font color=#126E82>#126E82</font> | <font color=#ED917D>██████</font> | <font color=#ED917D>#ED917D</font> |
| 196 | <font color=#0F95B0>██████</font> | <font color=#0F95B0>胆矾蓝</font> | <font color=#0F95B0>DANFANLAN</font> | <font color=#0F95B0>#0F95B0</font> | <font color=#F06A4F>██████</font> | <font color=#F06A4F>#F06A4F</font> |
| 197 | <font color=#1491A8>██████</font> | <font color=#1491A8>樫鸟蓝</font> | <font color=#1491A8>JIANNIAOLAN</font> | <font color=#1491A8>#1491A8</font> | <font color=#EB6E57>██████</font> | <font color=#EB6E57>#EB6E57</font> |
| 198 | <font color=#C7D2D4>██████</font> | <font color=#C7D2D4>鸥蓝</font> | <font color=#C7D2D4>OULAN</font> | <font color=#C7D2D4>#C7D2D4</font> | <font color=#382D2B>██████</font> | <font color=#382D2B>#382D2B</font> |
| 199 | <font color=#1E9EB3>██████</font> | <font color=#1E9EB3>翠蓝</font> | <font color=#1E9EB3>CUILAN</font> | <font color=#1E9EB3>#1E9EB3</font> | <font color=#E1614C>██████</font> | <font color=#E1614C>#E1614C</font> |
| 200 | <font color=#3B818C>██████</font> | <font color=#3B818C>蜻蜓蓝</font> | <font color=#3B818C>QINGTINGLAN</font> | <font color=#3B818C>#3B818C</font> | <font color=#C47E73>██████</font> | <font color=#C47E73>#C47E73</font> |
| 201 | <font color=#0EB0C9>██████</font> | <font color=#0EB0C9>孔雀蓝</font> | <font color=#0EB0C9>KONGQUELAN</font> | <font color=#0EB0C9>#0EB0C9</font> | <font color=#F14F36>██████</font> | <font color=#F14F36>#F14F36</font> |
| 202 | <font color=#29B7CB>██████</font> | <font color=#29B7CB>蔚蓝</font> | <font color=#29B7CB>WEILAN</font> | <font color=#29B7CB>#29B7CB</font> | <font color=#D64834>██████</font> | <font color=#D64834>#D64834</font> |
| 203 | <font color=#51C4D3>██████</font> | <font color=#51C4D3>瀑布蓝</font> | <font color=#51C4D3>PUBULAN</font> | <font color=#51C4D3>#51C4D3</font> | <font color=#AE3B2C>██████</font> | <font color=#AE3B2C>#AE3B2C</font> |
| 204 | <font color=#7CABB1>██████</font> | <font color=#7CABB1>闪蓝</font> | <font color=#7CABB1>SHANLAN</font> | <font color=#7CABB1>#7CABB1</font> | <font color=#83544E>██████</font> | <font color=#83544E>#83544E</font> |
| 205 | <font color=#10AEC2>██████</font> | <font color=#10AEC2>甸子蓝</font> | <font color=#10AEC2>DIANZILAN</font> | <font color=#10AEC2>#10AEC2</font> | <font color=#EF513D>██████</font> | <font color=#EF513D>#EF513D</font> |
| 206 | <font color=#648E93>██████</font> | <font color=#648E93>晚波蓝</font> | <font color=#648E93>WANBOLAN</font> | <font color=#648E93>#648E93</font> | <font color=#9B716C>██████</font> | <font color=#9B716C>#9B716C</font> |
| 207 | <font color=#93D5DC>██████</font> | <font color=#93D5DC>清水蓝</font> | <font color=#93D5DC>QINGSHUILAN</font> | <font color=#93D5DC>#93D5DC</font> | <font color=#6C2A23>██████</font> | <font color=#6C2A23>#6C2A23</font> |
| 208 | <font color=#617172>██████</font> | <font color=#617172>夏云灰</font> | <font color=#617172>XIAYUNHUI</font> | <font color=#617172>#617172</font> | <font color=#9E8E8D>██████</font> | <font color=#9E8E8D>#9E8E8D</font> |
| 209 | <font color=#C6E6E8>██████</font> | <font color=#C6E6E8>海天蓝</font> | <font color=#C6E6E8>HAITIANLAN</font> | <font color=#C6E6E8>#C6E6E8</font> | <font color=#391917>██████</font> | <font color=#391917>#391917</font> |
| 210 | <font color=#869D9D>██████</font> | <font color=#869D9D>虾壳青</font> | <font color=#869D9D>XIAKEQING</font> | <font color=#869D9D>#869D9D</font> | <font color=#796262>██████</font> | <font color=#796262>#796262</font> |
| 211 | <font color=#57C3C2>██████</font> | <font color=#57C3C2>石绿</font> | <font color=#57C3C2>SHILV</font> | <font color=#57C3C2>#57C3C2</font> | <font color=#A83C3D>██████</font> | <font color=#A83C3D>#A83C3D</font> |
| 212 | <font color=#C4D7D6>██████</font> | <font color=#C4D7D6>穹灰</font> | <font color=#C4D7D6>QIONGHUI</font> | <font color=#C4D7D6>#C4D7D6</font> | <font color=#3B2829>██████</font> | <font color=#3B2829>#3B2829</font> |
| 213 | <font color=#12AA9C>██████</font> | <font color=#12AA9C>美蝶绿</font> | <font color=#12AA9C>MEIDIELV</font> | <font color=#12AA9C>#12AA9C</font> | <font color=#ED5563>██████</font> | <font color=#ED5563>#ED5563</font> |
| 214 | <font color=#737C7B>██████</font> | <font color=#737C7B>垩灰</font> | <font color=#737C7B>EHUI</font> | <font color=#737C7B>#737C7B</font> | <font color=#8C8384>██████</font> | <font color=#8C8384>#8C8384</font> |
| 215 | <font color=#12A182>██████</font> | <font color=#12A182>蓝绿</font> | <font color=#12A182>LANLV</font> | <font color=#12A182>#12A182</font> | <font color=#ED5E7D>██████</font> | <font color=#ED5E7D>#ED5E7D</font> |
| 216 | <font color=#1BA784>██████</font> | <font color=#1BA784>竹绿</font> | <font color=#1BA784>ZHULV</font> | <font color=#1BA784>#1BA784</font> | <font color=#E4587B>██████</font> | <font color=#E4587B>#E4587B</font> |
| 217 | <font color=#428675>██████</font> | <font color=#428675>亚丁绿</font> | <font color=#428675>YADINGLV</font> | <font color=#428675>#428675</font> | <font color=#BD798A>██████</font> | <font color=#BD798A>#BD798A</font> |
| 218 | <font color=#C0C4C3>██████</font> | <font color=#C0C4C3>月影白</font> | <font color=#C0C4C3>YUEYINGBAI</font> | <font color=#C0C4C3>#C0C4C3</font> | <font color=#3F3B3C>██████</font> | <font color=#3F3B3C>#3F3B3C</font> |
| 219 | <font color=#248067>██████</font> | <font color=#248067>海王绿</font> | <font color=#248067>HAIWANGLV</font> | <font color=#248067>#248067</font> | <font color=#DB7F98>██████</font> | <font color=#DB7F98>#DB7F98</font> |
| 220 | <font color=#1A3B32>██████</font> | <font color=#1A3B32>深海绿</font> | <font color=#1A3B32>SHENHAILV</font> | <font color=#1A3B32>#1A3B32</font> | <font color=#E5C4CD>██████</font> | <font color=#E5C4CD>#E5C4CD</font> |
| 221 | <font color=#314A43>██████</font> | <font color=#314A43>绿灰</font> | <font color=#314A43>LVHUI</font> | <font color=#314A43>#314A43</font> | <font color=#CEB5BC>██████</font> | <font color=#CEB5BC>#CEB5BC</font> |
| 222 | <font color=#2C9678>██████</font> | <font color=#2C9678>青矾绿</font> | <font color=#2C9678>QINGFANLV</font> | <font color=#2C9678>#2C9678</font> | <font color=#D36987>██████</font> | <font color=#D36987>#D36987</font> |
| 223 | <font color=#223E36>██████</font> | <font color=#223E36>苍绿</font> | <font color=#223E36>CANGLV</font> | <font color=#223E36>#223E36</font> | <font color=#DDC1C9>██████</font> | <font color=#DDC1C9>#DDC1C9</font> |
| 224 | <font color=#497568>██████</font> | <font color=#497568>飞泉绿</font> | <font color=#497568>FEIQUANLV</font> | <font color=#497568>#497568</font> | <font color=#B68A97>██████</font> | <font color=#B68A97>#B68A97</font> |
| 225 | <font color=#141E1B>██████</font> | <font color=#141E1B>莽丛绿</font> | <font color=#141E1B>MANGCONGLV</font> | <font color=#141E1B>#141E1B</font> | <font color=#EBE1E4>██████</font> | <font color=#EBE1E4>#EBE1E4</font> |
| 226 | <font color=#69A794>██████</font> | <font color=#69A794>梧枝绿</font> | <font color=#69A794>WUZHILV</font> | <font color=#69A794>#69A794</font> | <font color=#96586B>██████</font> | <font color=#96586B>#96586B</font> |
| 227 | <font color=#2BAE85>██████</font> | <font color=#2BAE85>铜绿</font> | <font color=#2BAE85>TONGLV</font> | <font color=#2BAE85>#2BAE85</font> | <font color=#D4517A>██████</font> | <font color=#D4517A>#D4517A</font> |
| 228 | <font color=#9ABEAF>██████</font> | <font color=#9ABEAF>草原远绿</font> | <font color=#9ABEAF>CAOYUANYUANLV</font> | <font color=#9ABEAF>#9ABEAF</font> | <font color=#654150>██████</font> | <font color=#654150>#654150</font> |
| 229 | <font color=#45B787>██████</font> | <font color=#45B787>蛙绿</font> | <font color=#45B787>WALV</font> | <font color=#45B787>#45B787</font> | <font color=#BA4878>██████</font> | <font color=#BA4878>#BA4878</font> |
| 230 | <font color=#92B3A5>██████</font> | <font color=#92B3A5>浪花绿</font> | <font color=#92B3A5>LANGHUALV</font> | <font color=#92B3A5>#92B3A5</font> | <font color=#6D4C5A>██████</font> | <font color=#6D4C5A>#6D4C5A</font> |
| 231 | <font color=#1F2623>██████</font> | <font color=#1F2623>苷蓝绿</font> | <font color=#1F2623>GANLANLV</font> | <font color=#1F2623>#1F2623</font> | <font color=#E0D9DC>██████</font> | <font color=#E0D9DC>#E0D9DC</font> |
| 232 | <font color=#83CBAC>██████</font> | <font color=#83CBAC>粉绿</font> | <font color=#83CBAC>FENLV</font> | <font color=#83CBAC>#83CBAC</font> | <font color=#7C3453>██████</font> | <font color=#7C3453>#7C3453</font> |
| 233 | <font color=#70887D>██████</font> | <font color=#70887D>淡绿灰</font> | <font color=#70887D>DANLVHUI</font> | <font color=#70887D>#70887D</font> | <font color=#8F7782>██████</font> | <font color=#8F7782>#8F7782</font> |
| 234 | <font color=#55BB8A>██████</font> | <font color=#55BB8A>麦苗绿</font> | <font color=#55BB8A>MAIMIAOLV</font> | <font color=#55BB8A>#55BB8A</font> | <font color=#AA4475>██████</font> | <font color=#AA4475>#AA4475</font> |
| 235 | <font color=#20A162>██████</font> | <font color=#20A162>翠绿</font> | <font color=#20A162>CUILV</font> | <font color=#20A162>#20A162</font> | <font color=#DF5E9D>██████</font> | <font color=#DF5E9D>#DF5E9D</font> |
| 236 | <font color=#40A070>██████</font> | <font color=#40A070>葱绿</font> | <font color=#40A070>CONGLV</font> | <font color=#40A070>#40A070</font> | <font color=#BF5F8F>██████</font> | <font color=#BF5F8F>#BF5F8F</font> |
| 237 | <font color=#1A6840>██████</font> | <font color=#1A6840>荷叶绿</font> | <font color=#1A6840>HEYELV</font> | <font color=#1A6840>#1A6840</font> | <font color=#E597BF>██████</font> | <font color=#E597BF>#E597BF</font> |
| 238 | <font color=#61AC85>██████</font> | <font color=#61AC85>淡绿</font> | <font color=#61AC85>DANLV</font> | <font color=#61AC85>#61AC85</font> | <font color=#9E537A>██████</font> | <font color=#9E537A>#9E537A</font> |
| 239 | <font color=#68B88E>██████</font> | <font color=#68B88E>田园绿</font> | <font color=#68B88E>TIANYUANLV</font> | <font color=#68B88E>#68B88E</font> | <font color=#974771>██████</font> | <font color=#974771>#974771</font> |
| 240 | <font color=#A4CAB6>██████</font> | <font color=#A4CAB6>玉簪绿</font> | <font color=#A4CAB6>YUZANLV</font> | <font color=#A4CAB6>#A4CAB6</font> | <font color=#5B3549>██████</font> | <font color=#5B3549>#5B3549</font> |
| 241 | <font color=#3C9566>██████</font> | <font color=#3C9566>蟾绿</font> | <font color=#3C9566>CHANLV</font> | <font color=#3C9566>#3C9566</font> | <font color=#C36A99>██████</font> | <font color=#C36A99>#C36A99</font> |
| 242 | <font color=#5DBE8A>██████</font> | <font color=#5DBE8A>蔻梢绿</font> | <font color=#5DBE8A>KOUSHAOLV</font> | <font color=#5DBE8A>#5DBE8A</font> | <font color=#A24175>██████</font> | <font color=#A24175>#A24175</font> |
| 243 | <font color=#207F4C>██████</font> | <font color=#207F4C>薄荷绿</font> | <font color=#207F4C>BOHELV</font> | <font color=#207F4C>#207F4C</font> | <font color=#DF80B3>██████</font> | <font color=#DF80B3>#DF80B3</font> |
| 244 | <font color=#EEF7F2>██████</font> | <font color=#EEF7F2>月白</font> | <font color=#EEF7F2>YUEBAI</font> | <font color=#EEF7F2>#EEF7F2</font> | <font color=#11080D>██████</font> | <font color=#11080D>#11080D</font> |
| 245 | <font color=#579572>██████</font> | <font color=#579572>蛋白石绿</font> | <font color=#579572>DANBAISHILV</font> | <font color=#579572>#579572</font> | <font color=#A86A8D>██████</font> | <font color=#A86A8D>#A86A8D</font> |
| 246 | <font color=#B9DEC9>██████</font> | <font color=#B9DEC9>竹篁绿</font> | <font color=#B9DEC9>ZHUHUANGLV</font> | <font color=#B9DEC9>#B9DEC9</font> | <font color=#462136>██████</font> | <font color=#462136>#462136</font> |
| 247 | <font color=#229453>██████</font> | <font color=#229453>孔雀绿</font> | <font color=#229453>KONGQUELV</font> | <font color=#229453>#229453</font> | <font color=#DD6BAC>██████</font> | <font color=#DD6BAC>#DD6BAC</font> |
| 248 | <font color=#20894D>██████</font> | <font color=#20894D>宫殿绿</font> | <font color=#20894D>GONGDIANLV</font> | <font color=#20894D>#20894D</font> | <font color=#DF76B2>██████</font> | <font color=#DF76B2>#DF76B2</font> |
| 249 | <font color=#15231B>██████</font> | <font color=#15231B>云杉绿</font> | <font color=#15231B>YUNSHANLV</font> | <font color=#15231B>#15231B</font> | <font color=#EADCE4>██████</font> | <font color=#EADCE4>#EADCE4</font> |
| 250 | <font color=#66C18C>██████</font> | <font color=#66C18C>毛绿</font> | <font color=#66C18C>MAOLV</font> | <font color=#66C18C>#66C18C</font> | <font color=#993E73>██████</font> | <font color=#993E73>#993E73</font> |
| 251 | <font color=#A4ACA7>██████</font> | <font color=#A4ACA7>冰山蓝</font> | <font color=#A4ACA7>BINGSHANLAN</font> | <font color=#A4ACA7>#A4ACA7</font> | <font color=#5B5358>██████</font> | <font color=#5B5358>#5B5358</font> |
| 252 | <font color=#8A988E>██████</font> | <font color=#8A988E>明灰</font> | <font color=#8A988E>MINGHUI</font> | <font color=#8A988E>#8A988E</font> | <font color=#756771>██████</font> | <font color=#756771>#756771</font> |
| 253 | <font color=#9ECCAB>██████</font> | <font color=#9ECCAB>明绿</font> | <font color=#9ECCAB>MINGLV</font> | <font color=#9ECCAB>#9ECCAB</font> | <font color=#613354>██████</font> | <font color=#613354>#613354</font> |
| 254 | <font color=#83A78D>██████</font> | <font color=#83A78D>松霜绿</font> | <font color=#83A78D>SONGSHUANGLV</font> | <font color=#83A78D>#83A78D</font> | <font color=#7C5872>██████</font> | <font color=#7C5872>#7C5872</font> |
| 255 | <font color=#485B4D>██████</font> | <font color=#485B4D>白屈菜绿</font> | <font color=#485B4D>BAIQUCAILV</font> | <font color=#485B4D>#485B4D</font> | <font color=#B7A4B2>██████</font> | <font color=#B7A4B2>#B7A4B2</font> |
| 256 | <font color=#5D655F>██████</font> | <font color=#5D655F>狼烟灰</font> | <font color=#5D655F>LANGYANHUI</font> | <font color=#5D655F>#5D655F</font> | <font color=#A29AA0>██████</font> | <font color=#A29AA0>#A29AA0</font> |
| 257 | <font color=#6E8B74>██████</font> | <font color=#6E8B74>瓦松绿</font> | <font color=#6E8B74>WASONGLV</font> | <font color=#6E8B74>#6E8B74</font> | <font color=#91748B>██████</font> | <font color=#91748B>#91748B</font> |
| 258 | <font color=#2B312C>██████</font> | <font color=#2B312C>槲寄生绿</font> | <font color=#2B312C>HUJISHENGLV</font> | <font color=#2B312C>#2B312C</font> | <font color=#D4CED3>██████</font> | <font color=#D4CED3>#D4CED3</font> |
| 259 | <font color=#C6DFC8>██████</font> | <font color=#C6DFC8>淡翠绿</font> | <font color=#C6DFC8>DANCUILV</font> | <font color=#C6DFC8>#C6DFC8</font> | <font color=#392037>██████</font> | <font color=#392037>#392037</font> |
| 260 | <font color=#41B349>██████</font> | <font color=#41B349>玉髓绿</font> | <font color=#41B349>YUSUILV</font> | <font color=#41B349>#41B349</font> | <font color=#BE4CB6>██████</font> | <font color=#BE4CB6>#BE4CB6</font> |
| 261 | <font color=#43B244>██████</font> | <font color=#43B244>鲜绿</font> | <font color=#43B244>XIANLV</font> | <font color=#43B244>#43B244</font> | <font color=#BC4DBB>██████</font> | <font color=#BC4DBB>#BC4DBB</font> |
| 262 | <font color=#253D24>██████</font> | <font color=#253D24>油绿</font> | <font color=#253D24>YOULV</font> | <font color=#253D24>#253D24</font> | <font color=#DAC2DB>██████</font> | <font color=#DAC2DB>#DAC2DB</font> |
| 263 | <font color=#41AE3C>██████</font> | <font color=#41AE3C>宝石绿</font> | <font color=#41AE3C>BAOSHILV</font> | <font color=#41AE3C>#41AE3C</font> | <font color=#BE51C3>██████</font> | <font color=#BE51C3>#BE51C3</font> |
| 264 | <font color=#ADD5A2>██████</font> | <font color=#ADD5A2>嘉陵水绿</font> | <font color=#ADD5A2>JIALINGSHUILV</font> | <font color=#ADD5A2>#ADD5A2</font> | <font color=#522A5D>██████</font> | <font color=#522A5D>#522A5D</font> |
| 265 | <font color=#5E665B>██████</font> | <font color=#5E665B>田螺绿</font> | <font color=#5E665B>TIANLUOLV</font> | <font color=#5E665B>#5E665B</font> | <font color=#A199A4>██████</font> | <font color=#A199A4>#A199A4</font> |
| 266 | <font color=#8CC269>██████</font> | <font color=#8CC269>水绿</font> | <font color=#8CC269>SHUILV</font> | <font color=#8CC269>#8CC269</font> | <font color=#733D96>██████</font> | <font color=#733D96>#733D96</font> |
| 267 | <font color=#5BAE23>██████</font> | <font color=#5BAE23>鹦鹉绿</font> | <font color=#5BAE23>YINGWULV</font> | <font color=#5BAE23>#5BAE23</font> | <font color=#A451DC>██████</font> | <font color=#A451DC>#A451DC</font> |
| 268 | <font color=#DFECD5>██████</font> | <font color=#DFECD5>艾背绿</font> | <font color=#DFECD5>AIBEILV</font> | <font color=#DFECD5>#DFECD5</font> | <font color=#20132A>██████</font> | <font color=#20132A>#20132A</font> |
| 269 | <font color=#CAD3C3>██████</font> | <font color=#CAD3C3>艾绿</font> | <font color=#CAD3C3>AILV</font> | <font color=#CAD3C3>#CAD3C3</font> | <font color=#352C3C>██████</font> | <font color=#352C3C>#352C3C</font> |
| 270 | <font color=#9FA39A>██████</font> | <font color=#9FA39A>镍灰</font> | <font color=#9FA39A>NIEHUI</font> | <font color=#9FA39A>#9FA39A</font> | <font color=#605C65>██████</font> | <font color=#605C65>#605C65</font> |
| 271 | <font color=#B2CF87>██████</font> | <font color=#B2CF87>橄榄石绿</font> | <font color=#B2CF87>GANLANSHILV</font> | <font color=#B2CF87>#B2CF87</font> | <font color=#4D3078>██████</font> | <font color=#4D3078>#4D3078</font> |
| 272 | <font color=#96C24E>██████</font> | <font color=#96C24E>芽绿</font> | <font color=#96C24E>YALV</font> | <font color=#96C24E>#96C24E</font> | <font color=#693DB1>██████</font> | <font color=#693DB1>#693DB1</font> |
| 273 | <font color=#F0F5E5>██████</font> | <font color=#F0F5E5>嫩菊绿</font> | <font color=#F0F5E5>NENJULV</font> | <font color=#F0F5E5>#F0F5E5</font> | <font color=#0F0A1A>██████</font> | <font color=#0F0A1A>#0F0A1A</font> |
| 274 | <font color=#B7D07A>██████</font> | <font color=#B7D07A>芦苇绿</font> | <font color=#B7D07A>LUWEILV</font> | <font color=#B7D07A>#B7D07A</font> | <font color=#482F85>██████</font> | <font color=#482F85>#482F85</font> |
| 275 | <font color=#D0DEAA>██████</font> | <font color=#D0DEAA>姚黄</font> | <font color=#D0DEAA>YAOHUANG</font> | <font color=#D0DEAA>#D0DEAA</font> | <font color=#2F2155>██████</font> | <font color=#2F2155>#2F2155</font> |
| 276 | <font color=#373834>██████</font> | <font color=#373834>蒽油绿</font> | <font color=#373834>ENYOULV</font> | <font color=#373834>#373834</font> | <font color=#C8C7CB>██████</font> | <font color=#C8C7CB>#C8C7CB</font> |
| 277 | <font color=#BACF65>██████</font> | <font color=#BACF65>苹果绿</font> | <font color=#BACF65>PINGGUOLV</font> | <font color=#BACF65>#BACF65</font> | <font color=#45309A>██████</font> | <font color=#45309A>#45309A</font> |
| 278 | <font color=#E2E7BF>██████</font> | <font color=#E2E7BF>海沬绿</font> | <font color=#E2E7BF>HAIMEILV</font> | <font color=#E2E7BF>#E2E7BF</font> | <font color=#1D1840>██████</font> | <font color=#1D1840>#1D1840</font> |
| 279 | <font color=#BEC936>██████</font> | <font color=#BEC936>橄榄黄绿</font> | <font color=#BEC936>GANLANHUANGLV</font> | <font color=#BEC936>#BEC936</font> | <font color=#4136C9>██████</font> | <font color=#4136C9>#4136C9</font> |
| 280 | <font color=#D2D97A>██████</font> | <font color=#D2D97A>槐花黄绿</font> | <font color=#D2D97A>HUAIHUAHUANGLV</font> | <font color=#D2D97A>#D2D97A</font> | <font color=#2D2685>██████</font> | <font color=#2D2685>#2D2685</font> |
| 281 | <font color=#E2D849>██████</font> | <font color=#E2D849>蝶黄</font> | <font color=#E2D849>DIEHUANG</font> | <font color=#E2D849>#E2D849</font> | <font color=#1D27B6>██████</font> | <font color=#1D27B6>#1D27B6</font> |
| 282 | <font color=#FFFEF8>██████</font> | <font color=#FFFEF8>象牙白</font> | <font color=#FFFEF8>XIANGYABAI</font> | <font color=#FFFEF8>#FFFEF8</font> | <font color=#000107>██████</font> | <font color=#000107>#000107</font> |
| 283 | <font color=#5E5314>██████</font> | <font color=#5E5314>橄榄绿</font> | <font color=#5E5314>GANLANLV</font> | <font color=#5E5314>#5E5314</font> | <font color=#A1ACEB>██████</font> | <font color=#A1ACEB>#A1ACEB</font> |
| 284 | <font color=#FFFEF9>██████</font> | <font color=#FFFEF9>雪白</font> | <font color=#FFFEF9>XUEBAI</font> | <font color=#FFFEF9>#FFFEF9</font> | <font color=#000106>██████</font> | <font color=#000106>#000106</font> |
| 285 | <font color=#AD9E5F>██████</font> | <font color=#AD9E5F>淡灰绿</font> | <font color=#AD9E5F>DANHUILV</font> | <font color=#AD9E5F>#AD9E5F</font> | <font color=#5261A0>██████</font> | <font color=#5261A0>#5261A0</font> |
| 286 | <font color=#FED71A>██████</font> | <font color=#FED71A>佛手黄</font> | <font color=#FED71A>FOSHOUHUANG</font> | <font color=#FED71A>#FED71A</font> | <font color=#0128E5>██████</font> | <font color=#0128E5>#0128E5</font> |
| 287 | <font color=#F9F4DC>██████</font> | <font color=#F9F4DC>乳白</font> | <font color=#F9F4DC>RUBAI</font> | <font color=#F9F4DC>#F9F4DC</font> | <font color=#060B23>██████</font> | <font color=#060B23>#060B23</font> |
| 288 | <font color=#E4BF11>██████</font> | <font color=#E4BF11>香蕉黄</font> | <font color=#E4BF11>XIANGJIAOHUANG</font> | <font color=#E4BF11>#E4BF11</font> | <font color=#1B40EE>██████</font> | <font color=#1B40EE>#1B40EE</font> |
| 289 | <font color=#D2B116>██████</font> | <font color=#D2B116>新禾绿</font> | <font color=#D2B116>XINHELV</font> | <font color=#D2B116>#D2B116</font> | <font color=#2D4EE9>██████</font> | <font color=#2D4EE9>#2D4EE9</font> |
| 290 | <font color=#FBDA41>██████</font> | <font color=#FBDA41>油菜花黄</font> | <font color=#FBDA41>YOUCAIHUAHUANG</font> | <font color=#FBDA41>#FBDA41</font> | <font color=#0425BE>██████</font> | <font color=#0425BE>#0425BE</font> |
| 291 | <font color=#EED045>██████</font> | <font color=#EED045>秋葵黄</font> | <font color=#EED045>QIUKUIHUANG</font> | <font color=#EED045>#EED045</font> | <font color=#112FBA>██████</font> | <font color=#112FBA>#112FBA</font> |
| 292 | <font color=#F1CA17>██████</font> | <font color=#F1CA17>柚黄</font> | <font color=#F1CA17>YOUHUANG</font> | <font color=#F1CA17>#F1CA17</font> | <font color=#0E35E8>██████</font> | <font color=#0E35E8>#0E35E8</font> |
| 293 | <font color=#D2B42C>██████</font> | <font color=#D2B42C>草黄</font> | <font color=#D2B42C>CAOHUANG</font> | <font color=#D2B42C>#D2B42C</font> | <font color=#2D4BD3>██████</font> | <font color=#2D4BD3>#2D4BD3</font> |
| 294 | <font color=#F2CE2B>██████</font> | <font color=#F2CE2B>硫华黄</font> | <font color=#F2CE2B>LIUHUAHUANG</font> | <font color=#F2CE2B>#F2CE2B</font> | <font color=#0D31D4>██████</font> | <font color=#0D31D4>#0D31D4</font> |
| 295 | <font color=#E2C027>██████</font> | <font color=#E2C027>姜黄</font> | <font color=#E2C027>JIANGHUANG</font> | <font color=#E2C027>#E2C027</font> | <font color=#1D3FD8>██████</font> | <font color=#1D3FD8>#1D3FD8</font> |
| 296 | <font color=#645822>██████</font> | <font color=#645822>潭水绿</font> | <font color=#645822>TANSHUILV</font> | <font color=#645822>#645822</font> | <font color=#9BA7DD>██████</font> | <font color=#9BA7DD>#9BA7DD</font> |
| 297 | <font color=#FCD217>██████</font> | <font color=#FCD217>金瓜黄</font> | <font color=#FCD217>JINGUAHUANG</font> | <font color=#FCD217>#FCD217</font> | <font color=#032DE8>██████</font> | <font color=#032DE8>#032DE8</font> |
| 298 | <font color=#F8DF70>██████</font> | <font color=#F8DF70>麦秆黄</font> | <font color=#F8DF70>MAIGANHUANG</font> | <font color=#F8DF70>#F8DF70</font> | <font color=#07208F>██████</font> | <font color=#07208F>#07208F</font> |
| 299 | <font color=#DFC243>██████</font> | <font color=#DFC243>蒿黄</font> | <font color=#DFC243>HAOHUANG</font> | <font color=#DFC243>#DFC243</font> | <font color=#203DBC>██████</font> | <font color=#203DBC>#203DBC</font> |
| 300 | <font color=#F8DF72>██████</font> | <font color=#F8DF72>茉莉黄</font> | <font color=#F8DF72>MOLIHUANG</font> | <font color=#F8DF72>#F8DF72</font> | <font color=#07208D>██████</font> | <font color=#07208D>#07208D</font> |
| 301 | <font color=#FFD111>██████</font> | <font color=#FFD111>藤黄</font> | <font color=#FFD111>TENGHUANG</font> | <font color=#FFD111>#FFD111</font> | <font color=#002EEE>██████</font> | <font color=#002EEE>#002EEE</font> |
| 302 | <font color=#DDC871>██████</font> | <font color=#DDC871>芒果黄</font> | <font color=#DDC871>MANGGUOHUANG</font> | <font color=#DDC871>#DDC871</font> | <font color=#22378E>██████</font> | <font color=#22378E>#22378E</font> |
| 303 | <font color=#FFFEFA>██████</font> | <font color=#FFFEFA>海参灰</font> | <font color=#FFFEFA>HAISHENHUI</font> | <font color=#FFFEFA>#FFFEFA</font> | <font color=#000105>██████</font> | <font color=#000105>#000105</font> |
| 304 | <font color=#867018>██████</font> | <font color=#867018>碧螺春绿</font> | <font color=#867018>BILUOCHUNLV</font> | <font color=#867018>#867018</font> | <font color=#798FE7>██████</font> | <font color=#798FE7>#798FE7</font> |
| 305 | <font color=#887322>██████</font> | <font color=#887322>苔绿</font> | <font color=#887322>TAILV</font> | <font color=#887322>#887322</font> | <font color=#778CDD>██████</font> | <font color=#778CDD>#778CDD</font> |
| 306 | <font color=#FCD337>██████</font> | <font color=#FCD337>柠檬黄</font> | <font color=#FCD337>NINGMENGHUANG</font> | <font color=#FCD337>#FCD337</font> | <font color=#032CC8>██████</font> | <font color=#032CC8>#032CC8</font> |
| 307 | <font color=#8E804B>██████</font> | <font color=#8E804B>草灰绿</font> | <font color=#8E804B>CAOHUILV</font> | <font color=#8E804B>#8E804B</font> | <font color=#717FB4>██████</font> | <font color=#717FB4>#717FB4</font> |
| 308 | <font color=#FECC11>██████</font> | <font color=#FECC11>向日葵黄</font> | <font color=#FECC11>XIANGRIKUIHUANG</font> | <font color=#FECC11>#FECC11</font> | <font color=#0133EE>██████</font> | <font color=#0133EE>#0133EE</font> |
| 309 | <font color=#FCCB16>██████</font> | <font color=#FCCB16>素馨黄</font> | <font color=#FCCB16>SUXINHUANG</font> | <font color=#FCCB16>#FCCB16</font> | <font color=#0334E9>██████</font> | <font color=#0334E9>#0334E9</font> |
| 310 | <font color=#FFC90C>██████</font> | <font color=#FFC90C>乳鸭黄</font> | <font color=#FFC90C>RUYAHUANG</font> | <font color=#FFC90C>#FFC90C</font> | <font color=#0036F3>██████</font> | <font color=#0036F3>#0036F3</font> |
| 311 | <font color=#B7AE8F>██████</font> | <font color=#B7AE8F>月灰</font> | <font color=#B7AE8F>YUEHUI</font> | <font color=#B7AE8F>#B7AE8F</font> | <font color=#485170>██████</font> | <font color=#485170>#485170</font> |
| 312 | <font color=#F8D86A>██████</font> | <font color=#F8D86A>葵扇黄</font> | <font color=#F8D86A>KUISHANHUANG</font> | <font color=#F8D86A>#F8D86A</font> | <font color=#072795>██████</font> | <font color=#072795>#072795</font> |
| 313 | <font color=#FBCD31>██████</font> | <font color=#FBCD31>大豆黄</font> | <font color=#FBCD31>DADOUHUANG</font> | <font color=#FBCD31>#FBCD31</font> | <font color=#0432CE>██████</font> | <font color=#0432CE>#0432CE</font> |
| 314 | <font color=#FCC307>██████</font> | <font color=#FCC307>金盏黄</font> | <font color=#FCC307>JINZHANHUANG</font> | <font color=#FCC307>#FCC307</font> | <font color=#033CF8>██████</font> | <font color=#033CF8>#033CF8</font> |
| 315 | <font color=#E9DDB6>██████</font> | <font color=#E9DDB6>菊蕾白</font> | <font color=#E9DDB6>JULEIBAI</font> | <font color=#E9DDB6>#E9DDB6</font> | <font color=#162249>██████</font> | <font color=#162249>#162249</font> |
| 316 | <font color=#FCC515>██████</font> | <font color=#FCC515>黄连黄</font> | <font color=#FCC515>HUANGLIANHUANG</font> | <font color=#FCC515>#FCC515</font> | <font color=#033AEA>██████</font> | <font color=#033AEA>#033AEA</font> |
| 317 | <font color=#F7E8AA>██████</font> | <font color=#F7E8AA>杏仁黄</font> | <font color=#F7E8AA>XINGRENHUANG</font> | <font color=#F7E8AA>#F7E8AA</font> | <font color=#081755>██████</font> | <font color=#081755>#081755</font> |
| 318 | <font color=#E8B004>██████</font> | <font color=#E8B004>谷黄</font> | <font color=#E8B004>GUHUANG</font> | <font color=#E8B004>#E8B004</font> | <font color=#174FFB>██████</font> | <font color=#174FFB>#174FFB</font> |
| 319 | <font color=#F9C116>██████</font> | <font color=#F9C116>木瓜黄</font> | <font color=#F9C116>MUGUAHUANG</font> | <font color=#F9C116>#F9C116</font> | <font color=#063EE9>██████</font> | <font color=#063EE9>#063EE9</font> |
| 320 | <font color=#F9D770>██████</font> | <font color=#F9D770>淡茧黄</font> | <font color=#F9D770>DANJIANHUANG</font> | <font color=#F9D770>#F9D770</font> | <font color=#06288F>██████</font> | <font color=#06288F>#06288F</font> |
| 321 | <font color=#FBC82F>██████</font> | <font color=#FBC82F>雅梨黄</font> | <font color=#FBC82F>YALIHUANG</font> | <font color=#FBC82F>#FBC82F</font> | <font color=#0437D0>██████</font> | <font color=#0437D0>#0437D0</font> |
| 322 | <font color=#F1F0ED>██████</font> | <font color=#F1F0ED>银白</font> | <font color=#F1F0ED>YINBAI</font> | <font color=#F1F0ED>#F1F0ED</font> | <font color=#0E0F12>██████</font> | <font color=#0E0F12>#0E0F12</font> |
| 323 | <font color=#5B4913>██████</font> | <font color=#5B4913>棕榈绿</font> | <font color=#5B4913>ZONGLVLV</font> | <font color=#5B4913>#5B4913</font> | <font color=#A4B6EC>██████</font> | <font color=#A4B6EC>#A4B6EC</font> |
| 324 | <font color=#F6C430>██████</font> | <font color=#F6C430>鹦鹉冠黄</font> | <font color=#F6C430>YINGWUGUANHUANG</font> | <font color=#F6C430>#F6C430</font> | <font color=#093BCF>██████</font> | <font color=#093BCF>#093BCF</font> |
| 325 | <font color=#B78D12>██████</font> | <font color=#B78D12>枯绿</font> | <font color=#B78D12>KULV</font> | <font color=#B78D12>#B78D12</font> | <font color=#4872ED>██████</font> | <font color=#4872ED>#4872ED</font> |
| 326 | <font color=#F9BD10>██████</font> | <font color=#F9BD10>浅烙黄</font> | <font color=#F9BD10>QIANLAOHUANG</font> | <font color=#F9BD10>#F9BD10</font> | <font color=#0642EF>██████</font> | <font color=#0642EF>#0642EF</font> |
| 327 | <font color=#F9D367>██████</font> | <font color=#F9D367>淡密黄</font> | <font color=#F9D367>DANMIHUANG</font> | <font color=#F9D367>#F9D367</font> | <font color=#062C98>██████</font> | <font color=#062C98>#062C98</font> |
| 328 | <font color=#D9A40E>██████</font> | <font color=#D9A40E>芥黄</font> | <font color=#D9A40E>JIEHUANG</font> | <font color=#D9A40E>#D9A40E</font> | <font color=#265BF1>██████</font> | <font color=#265BF1>#265BF1</font> |
| 329 | <font color=#EBB10D>██████</font> | <font color=#EBB10D>栀子黄</font> | <font color=#EBB10D>ZHIZIHUANG</font> | <font color=#EBB10D>#EBB10D</font> | <font color=#144EF2>██████</font> | <font color=#144EF2>#144EF2</font> |
| 330 | <font color=#584717>██████</font> | <font color=#584717>暗海水绿</font> | <font color=#584717>ANHAISHUILV</font> | <font color=#584717>#584717</font> | <font color=#A7B8E8>██████</font> | <font color=#A7B8E8>#A7B8E8</font> |
| 331 | <font color=#F7DE98>██████</font> | <font color=#F7DE98>篾黄</font> | <font color=#F7DE98>MIEHUANG</font> | <font color=#F7DE98>#F7DE98</font> | <font color=#082167>██████</font> | <font color=#082167>#082167</font> |
| 332 | <font color=#F9F1DB>██████</font> | <font color=#F9F1DB>蚌肉白</font> | <font color=#F9F1DB>BANGROUBAI</font> | <font color=#F9F1DB>#F9F1DB</font> | <font color=#060E24>██████</font> | <font color=#060E24>#060E24</font> |
| 333 | <font color=#F4CE69>██████</font> | <font color=#F4CE69>炒米黄</font> | <font color=#F4CE69>CHAOMIHUANG</font> | <font color=#F4CE69>#F4CE69</font> | <font color=#0B3196>██████</font> | <font color=#0B3196>#0B3196</font> |
| 334 | <font color=#FEBA07>██████</font> | <font color=#FEBA07>琥珀黄</font> | <font color=#FEBA07>HUPOHUANG</font> | <font color=#FEBA07>#FEBA07</font> | <font color=#0145F8>██████</font> | <font color=#0145F8>#0145F8</font> |
| 335 | <font color=#8A6913>██████</font> | <font color=#8A6913>灰绿</font> | <font color=#8A6913>HUILV</font> | <font color=#8A6913>#8A6913</font> | <font color=#7596EC>██████</font> | <font color=#7596EC>#7596EC</font> |
| 336 | <font color=#876818>██████</font> | <font color=#876818>粽叶绿</font> | <font color=#876818>ZONGYELV</font> | <font color=#876818>#876818</font> | <font color=#7897E7>██████</font> | <font color=#7897E7>#7897E7</font> |
| 337 | <font color=#B6A476>██████</font> | <font color=#B6A476>尘灰</font> | <font color=#B6A476>CHENHUI</font> | <font color=#B6A476>#B6A476</font> | <font color=#495B89>██████</font> | <font color=#495B89>#495B89</font> |
| 338 | <font color=#FCB70A>██████</font> | <font color=#FCB70A>鼬黄</font> | <font color=#FCB70A>YOUHUANG</font> | <font color=#FCB70A>#FCB70A</font> | <font color=#0348F5>██████</font> | <font color=#0348F5>#0348F5</font> |
| 339 | <font color=#F0D695>██████</font> | <font color=#F0D695>象牙黄</font> | <font color=#F0D695>XIANGYAHUANG</font> | <font color=#F0D695>#F0D695</font> | <font color=#0F296A>██████</font> | <font color=#0F296A>#0F296A</font> |
| 340 | <font color=#87723E>██████</font> | <font color=#87723E>鲛青</font> | <font color=#87723E>JIAOQING</font> | <font color=#87723E>#87723E</font> | <font color=#788DC1>██████</font> | <font color=#788DC1>#788DC1</font> |
| 341 | <font color=#F8E8C1>██████</font> | <font color=#F8E8C1>豆汁黄</font> | <font color=#F8E8C1>DOUZHIHUANG</font> | <font color=#F8E8C1>#F8E8C1</font> | <font color=#07173E>██████</font> | <font color=#07173E>#07173E</font> |
| 342 | <font color=#D6A01D>██████</font> | <font color=#D6A01D>土黄</font> | <font color=#D6A01D>TUHUANG</font> | <font color=#D6A01D>#D6A01D</font> | <font color=#295FE2>██████</font> | <font color=#295FE2>#295FE2</font> |
| 343 | <font color=#F7DA94>██████</font> | <font color=#F7DA94>香水玫瑰黄</font> | <font color=#F7DA94>XIANGSHUIMEIGUIHUANG</font> | <font color=#F7DA94>#F7DA94</font> | <font color=#08256B>██████</font> | <font color=#08256B>#08256B</font> |
| 344 | <font color=#EAAD1A>██████</font> | <font color=#EAAD1A>虎皮黄</font> | <font color=#EAAD1A>HUPIHUANG</font> | <font color=#EAAD1A>#EAAD1A</font> | <font color=#1552E5>██████</font> | <font color=#1552E5>#1552E5</font> |
| 345 | <font color=#FBB612>██████</font> | <font color=#FBB612>鸡蛋黄</font> | <font color=#FBB612>JIDANHUANG</font> | <font color=#FBB612>#FBB612</font> | <font color=#0449ED>██████</font> | <font color=#0449ED>#0449ED</font> |
| 346 | <font color=#B5AA90>██████</font> | <font color=#B5AA90>银鼠灰</font> | <font color=#B5AA90>YINSHUHUI</font> | <font color=#B5AA90>#B5AA90</font> | <font color=#4A556F>██████</font> | <font color=#4A556F>#4A556F</font> |
| 347 | <font color=#F7F4ED>██████</font> | <font color=#F7F4ED>鱼肚白</font> | <font color=#F7F4ED>YUDUBAI</font> | <font color=#F7F4ED>#F7F4ED</font> | <font color=#080B12>██████</font> | <font color=#080B12>#080B12</font> |
| 348 | <font color=#F8BC31>██████</font> | <font color=#F8BC31>初熟杏黄</font> | <font color=#F8BC31>CHUSHUXINGHUANG</font> | <font color=#F8BC31>#F8BC31</font> | <font color=#0743CE>██████</font> | <font color=#0743CE>#0743CE</font> |
| 349 | <font color=#B78B26>██████</font> | <font color=#B78B26>山鸡黄</font> | <font color=#B78B26>SHANJIHUANG</font> | <font color=#B78B26>#B78B26</font> | <font color=#4874D9>██████</font> | <font color=#4874D9>#4874D9</font> |
| 350 | <font color=#E5D3AA>██████</font> | <font color=#E5D3AA>莲子白</font> | <font color=#E5D3AA>LIANZIBAI</font> | <font color=#E5D3AA>#E5D3AA</font> | <font color=#1A2C55>██████</font> | <font color=#1A2C55>#1A2C55</font> |
| 351 | <font color=#695E45>██████</font> | <font color=#695E45>蟹壳灰</font> | <font color=#695E45>XIEKEHUI</font> | <font color=#695E45>#695E45</font> | <font color=#96A1BA>██████</font> | <font color=#96A1BA>#96A1BA</font> |
| 352 | <font color=#E5B751>██████</font> | <font color=#E5B751>沙石黄</font> | <font color=#E5B751>SHASHIHUANG</font> | <font color=#E5B751>#E5B751</font> | <font color=#1A48AE>██████</font> | <font color=#1A48AE>#1A48AE</font> |
| 353 | <font color=#F3BF4C>██████</font> | <font color=#F3BF4C>甘草黄</font> | <font color=#F3BF4C>GANCAOHUANG</font> | <font color=#F3BF4C>#F3BF4C</font> | <font color=#0C40B3>██████</font> | <font color=#0C40B3>#0C40B3</font> |
| 354 | <font color=#685E48>██████</font> | <font color=#685E48>燕羽灰</font> | <font color=#685E48>YANYUHUI</font> | <font color=#685E48>#685E48</font> | <font color=#97A1B7>██████</font> | <font color=#97A1B7>#97A1B7</font> |
| 355 | <font color=#FBB929>██████</font> | <font color=#FBB929>鹅掌黄</font> | <font color=#FBB929>EZHANGHUANG</font> | <font color=#FBB929>#FBB929</font> | <font color=#0446D6>██████</font> | <font color=#0446D6>#0446D6</font> |
| 356 | <font color=#F9D27D>██████</font> | <font color=#F9D27D>麦芽糖黄</font> | <font color=#F9D27D>MAIYATANGHUANG</font> | <font color=#F9D27D>#F9D27D</font> | <font color=#062D82>██████</font> | <font color=#062D82>#062D82</font> |
| 357 | <font color=#E2C17C>██████</font> | <font color=#E2C17C>浅驼色</font> | <font color=#E2C17C>QIANTUOSE</font> | <font color=#E2C17C>#E2C17C</font> | <font color=#1D3E83>██████</font> | <font color=#1D3E83>#1D3E83</font> |
| 358 | <font color=#B4A992>██████</font> | <font color=#B4A992>百灵鸟灰</font> | <font color=#B4A992>BAILINGNIAOHUI</font> | <font color=#B4A992>#B4A992</font> | <font color=#4B566D>██████</font> | <font color=#4B566D>#4B566D</font> |
| 359 | <font color=#F6DEAD>██████</font> | <font color=#F6DEAD>酪黄</font> | <font color=#F6DEAD>LAOHUANG</font> | <font color=#F6DEAD>#F6DEAD</font> | <font color=#092152>██████</font> | <font color=#092152>#092152</font> |
| 360 | <font color=#F2E6CE>██████</font> | <font color=#F2E6CE>荔肉白</font> | <font color=#F2E6CE>LIROUBAI</font> | <font color=#F2E6CE>#F2E6CE</font> | <font color=#0D1931>██████</font> | <font color=#0D1931>#0D1931</font> |
| 361 | <font color=#F8E0B0>██████</font> | <font color=#F8E0B0>淡肉色</font> | <font color=#F8E0B0>DANROUSE</font> | <font color=#F8E0B0>#F8E0B0</font> | <font color=#071F4F>██████</font> | <font color=#071F4F>#071F4F</font> |
| 362 | <font color=#393733>██████</font> | <font color=#393733>河豚灰</font> | <font color=#393733>HETUNHUI</font> | <font color=#393733>#393733</font> | <font color=#C6C8CC>██████</font> | <font color=#C6C8CC>#C6C8CC</font> |
| 363 | <font color=#835E1D>██████</font> | <font color=#835E1D>蜴蜊绿</font> | <font color=#835E1D>YILILV</font> | <font color=#835E1D>#835E1D</font> | <font color=#7CA1E2>██████</font> | <font color=#7CA1E2>#7CA1E2</font> |
| 364 | <font color=#F8F4ED>██████</font> | <font color=#F8F4ED>汉白玉</font> | <font color=#F8F4ED>HANBAIYU</font> | <font color=#F8F4ED>#F8F4ED</font> | <font color=#070B12>██████</font> | <font color=#070B12>#070B12</font> |
| 365 | <font color=#FCA104>██████</font> | <font color=#FCA104>橙皮黄</font> | <font color=#FCA104>CHENGPIHUANG</font> | <font color=#FCA104>#FCA104</font> | <font color=#035EFB>██████</font> | <font color=#035EFB>#035EFB</font> |
| 366 | <font color=#815F25>██████</font> | <font color=#815F25>莱阳梨黄</font> | <font color=#815F25>LAIYANGLIHUANG</font> | <font color=#815F25>#815F25</font> | <font color=#7EA0DA>██████</font> | <font color=#7EA0DA>#7EA0DA</font> |
| 367 | <font color=#FCA106>██████</font> | <font color=#FCA106>枇杷黄</font> | <font color=#FCA106>PIPAHUANG</font> | <font color=#FCA106>#FCA106</font> | <font color=#035EF9>██████</font> | <font color=#035EF9>#035EF9</font> |
| 368 | <font color=#FFA60F>██████</font> | <font color=#FFA60F>金叶黄</font> | <font color=#FFA60F>JINYEHUANG</font> | <font color=#FFA60F>#FFA60F</font> | <font color=#0059F0>██████</font> | <font color=#0059F0>#0059F0</font> |
| 369 | <font color=#806332>██████</font> | <font color=#806332>苍黄</font> | <font color=#806332>CANGHUANG</font> | <font color=#806332>#806332</font> | <font color=#7F9CCD>██████</font> | <font color=#7F9CCD>#7F9CCD</font> |
| 370 | <font color=#FBF2E3>██████</font> | <font color=#FBF2E3>粉白</font> | <font color=#FBF2E3>FENBAI</font> | <font color=#FBF2E3>#FBF2E3</font> | <font color=#040D1C>██████</font> | <font color=#040D1C>#040D1C</font> |
| 371 | <font color=#FBA414>██████</font> | <font color=#FBA414>淡橘橙</font> | <font color=#FBA414>DANJUCHENG</font> | <font color=#FBA414>#FBA414</font> | <font color=#045BEB>██████</font> | <font color=#045BEB>#045BEB</font> |
| 372 | <font color=#E4DFD7>██████</font> | <font color=#E4DFD7>珍珠灰</font> | <font color=#E4DFD7>ZHENZHUHUI</font> | <font color=#E4DFD7>#E4DFD7</font> | <font color=#1B2028>██████</font> | <font color=#1B2028>#1B2028</font> |
| 373 | <font color=#826B48>██████</font> | <font color=#826B48>龟背黄</font> | <font color=#826B48>GUIBEIHUANG</font> | <font color=#826B48>#826B48</font> | <font color=#7D94B7>██████</font> | <font color=#7D94B7>#7D94B7</font> |
| 374 | <font color=#DAD4CB>██████</font> | <font color=#DAD4CB>浅灰</font> | <font color=#DAD4CB>QIANHUI</font> | <font color=#DAD4CB>#DAD4CB</font> | <font color=#252B34>██████</font> | <font color=#252B34>#252B34</font> |
| 375 | <font color=#BBB5AC>██████</font> | <font color=#BBB5AC>铅灰</font> | <font color=#BBB5AC>QIANHUI</font> | <font color=#BBB5AC>#BBB5AC</font> | <font color=#444A53>██████</font> | <font color=#444A53>#444A53</font> |
| 376 | <font color=#BBB5AC>██████</font> | <font color=#BBB5AC>中灰</font> | <font color=#BBB5AC>ZHONGHUI</font> | <font color=#BBB5AC>#BBB5AC</font> | <font color=#444A53>██████</font> | <font color=#444A53>#444A53</font> |
| 377 | <font color=#FF9900>██████</font> | <font color=#FF9900>雄黄</font> | <font color=#FF9900>XIONGHUANG</font> | <font color=#FF9900>#FF9900</font> | <font color=#0066FF>██████</font> | <font color=#0066FF>#0066FF</font> |
| 378 | <font color=#FBB957>██████</font> | <font color=#FBB957>蜜黄</font> | <font color=#FBB957>MIHUANG</font> | <font color=#FBB957>#FBB957</font> | <font color=#0446A8>██████</font> | <font color=#0446A8>#0446A8</font> |
| 379 | <font color=#DC9123>██████</font> | <font color=#DC9123>风帆黄</font> | <font color=#DC9123>FENGFANHUANG</font> | <font color=#DC9123>#DC9123</font> | <font color=#236EDC>██████</font> | <font color=#236EDC>#236EDC</font> |
| 380 | <font color=#C09351>██████</font> | <font color=#C09351>桂皮淡棕</font> | <font color=#C09351>GUIPIDANZONG</font> | <font color=#C09351>#C09351</font> | <font color=#3F6CAE>██████</font> | <font color=#3F6CAE>#3F6CAE</font> |
| 381 | <font color=#F4A83A>██████</font> | <font color=#F4A83A>金莺黄</font> | <font color=#F4A83A>JINYINGHUANG</font> | <font color=#F4A83A>#F4A83A</font> | <font color=#0B57C5>██████</font> | <font color=#0B57C5>#0B57C5</font> |
| 382 | <font color=#F7C173>██████</font> | <font color=#F7C173>肉色</font> | <font color=#F7C173>ROUSE</font> | <font color=#F7C173>#F7C173</font> | <font color=#083E8C>██████</font> | <font color=#083E8C>#083E8C</font> |
| 383 | <font color=#E7A23F>██████</font> | <font color=#E7A23F>凋叶棕</font> | <font color=#E7A23F>DIAOYEZONG</font> | <font color=#E7A23F>#E7A23F</font> | <font color=#185DC0>██████</font> | <font color=#185DC0>#185DC0</font> |
| 384 | <font color=#533C1B>██████</font> | <font color=#533C1B>古铜绿</font> | <font color=#533C1B>GUTONGLV</font> | <font color=#533C1B>#533C1B</font> | <font color=#ACC3E4>██████</font> | <font color=#ACC3E4>#ACC3E4</font> |
| 385 | <font color=#F9E8D0>██████</font> | <font color=#F9E8D0>落英淡粉</font> | <font color=#F9E8D0>LUOYINGDANFEN</font> | <font color=#F9E8D0>#F9E8D0</font> | <font color=#06172F>██████</font> | <font color=#06172F>#06172F</font> |
| 386 | <font color=#DE9E44>██████</font> | <font color=#DE9E44>软木黄</font> | <font color=#DE9E44>RUANMUHUANG</font> | <font color=#DE9E44>#DE9E44</font> | <font color=#2161BB>██████</font> | <font color=#2161BB>#2161BB</font> |
| 387 | <font color=#F9CB8B>██████</font> | <font color=#F9CB8B>瓜瓤粉</font> | <font color=#F9CB8B>GUARANGFEN</font> | <font color=#F9CB8B>#F9CB8B</font> | <font color=#063474>██████</font> | <font color=#063474>#063474</font> |
| 388 | <font color=#F9A633>██████</font> | <font color=#F9A633>榴萼黄</font> | <font color=#F9A633>LIUEHUANG</font> | <font color=#F9A633>#F9A633</font> | <font color=#0659CC>██████</font> | <font color=#0659CC>#0659CC</font> |
| 389 | <font color=#DAA45A>██████</font> | <font color=#DAA45A>玳瑁黄</font> | <font color=#DAA45A>DAIMAOHUANG</font> | <font color=#DAA45A>#DAA45A</font> | <font color=#255BA5>██████</font> | <font color=#255BA5>#255BA5</font> |
| 390 | <font color=#553B18>██████</font> | <font color=#553B18>焦茶绿</font> | <font color=#553B18>JIAOCHALV</font> | <font color=#553B18>#553B18</font> | <font color=#AAC4E7>██████</font> | <font color=#AAC4E7>#AAC4E7</font> |
| 391 | <font color=#513C20>██████</font> | <font color=#513C20>蟹壳绿</font> | <font color=#513C20>XIEKELV</font> | <font color=#513C20>#513C20</font> | <font color=#AEC3DF>██████</font> | <font color=#AEC3DF>#AEC3DF</font> |
| 392 | <font color=#986524>██████</font> | <font color=#986524>山鸡褐</font> | <font color=#986524>SHANJIHE</font> | <font color=#986524>#986524</font> | <font color=#679ADB>██████</font> | <font color=#679ADB>#679ADB</font> |
| 393 | <font color=#97846C>██████</font> | <font color=#97846C>猴毛灰</font> | <font color=#97846C>HOUMAOHUI</font> | <font color=#97846C>#97846C</font> | <font color=#687B93>██████</font> | <font color=#687B93>#687B93</font> |
| 394 | <font color=#E3BD8D>██████</font> | <font color=#E3BD8D>鹿角棕</font> | <font color=#E3BD8D>LUJIAOZONG</font> | <font color=#E3BD8D>#E3BD8D</font> | <font color=#1C4272>██████</font> | <font color=#1C4272>#1C4272</font> |
| 395 | <font color=#4D4030>██████</font> | <font color=#4D4030>淡松烟</font> | <font color=#4D4030>DANSONGYAN</font> | <font color=#4D4030>#4D4030</font> | <font color=#B2BFCF>██████</font> | <font color=#B2BFCF>#B2BFCF</font> |
| 396 | <font color=#FB8B05>██████</font> | <font color=#FB8B05>万寿菊黄</font> | <font color=#FB8B05>WANSHOUJUHUANG</font> | <font color=#FB8B05>#FB8B05</font> | <font color=#0474FA>██████</font> | <font color=#0474FA>#0474FA</font> |
| 397 | <font color=#F8C387>██████</font> | <font color=#F8C387>蛋壳黄</font> | <font color=#F8C387>DANKEHUANG</font> | <font color=#F8C387>#F8C387</font> | <font color=#073C78>██████</font> | <font color=#073C78>#073C78</font> |
| 398 | <font color=#F28E16>██████</font> | <font color=#F28E16>杏黄</font> | <font color=#F28E16>XINGHUANG</font> | <font color=#F28E16>#F28E16</font> | <font color=#0D71E9>██████</font> | <font color=#0D71E9>#0D71E9</font> |
| 399 | <font color=#503E2A>██████</font> | <font color=#503E2A>橄榄灰</font> | <font color=#503E2A>GANLANHUI</font> | <font color=#503E2A>#503E2A</font> | <font color=#AFC1D5>██████</font> | <font color=#AFC1D5>#AFC1D5</font> |
| 400 | <font color=#4A4035>██████</font> | <font color=#4A4035>鹤灰</font> | <font color=#4A4035>HEHUI</font> | <font color=#4A4035>#4A4035</font> | <font color=#B5BFCA>██████</font> | <font color=#B5BFCA>#B5BFCA</font> |
| 401 | <font color=#CFCCC9>██████</font> | <font color=#CFCCC9>玛瑙灰</font> | <font color=#CFCCC9>MANAOHUI</font> | <font color=#CFCCC9>#CFCCC9</font> | <font color=#303336>██████</font> | <font color=#303336>#303336</font> |
| 402 | <font color=#C1B2A3>██████</font> | <font color=#C1B2A3>淡银灰</font> | <font color=#C1B2A3>DANYINHUI</font> | <font color=#C1B2A3>#C1B2A3</font> | <font color=#3E4D5C>██████</font> | <font color=#3E4D5C>#3E4D5C</font> |
| 403 | <font color=#867E76>██████</font> | <font color=#867E76>瓦灰</font> | <font color=#867E76>WAHUI</font> | <font color=#867E76>#867E76</font> | <font color=#798189>██████</font> | <font color=#798189>#798189</font> |
| 404 | <font color=#847C74>██████</font> | <font color=#847C74>夜灰</font> | <font color=#847C74>YEHUI</font> | <font color=#847C74>#847C74</font> | <font color=#7B838B>██████</font> | <font color=#7B838B>#7B838B</font> |
| 405 | <font color=#FC8C23>██████</font> | <font color=#FC8C23>北瓜黄</font> | <font color=#FC8C23>BEIGUAHUANG</font> | <font color=#FC8C23>#FC8C23</font> | <font color=#0373DC>██████</font> | <font color=#0373DC>#0373DC</font> |
| 406 | <font color=#FBECDE>██████</font> | <font color=#FBECDE>荷花白</font> | <font color=#FBECDE>HEHUABAI</font> | <font color=#FBECDE>#FBECDE</font> | <font color=#041321>██████</font> | <font color=#041321>#041321</font> |
| 407 | <font color=#4F4032>██████</font> | <font color=#4F4032>松鼠灰</font> | <font color=#4F4032>SONGSHUHUI</font> | <font color=#4F4032>#4F4032</font> | <font color=#B0BFCD>██████</font> | <font color=#B0BFCD>#B0BFCD</font> |
| 408 | <font color=#FBEEE2>██████</font> | <font color=#FBEEE2>淡米粉</font> | <font color=#FBEEE2>DANMIFEN</font> | <font color=#FBEEE2>#FBEEE2</font> | <font color=#04111D>██████</font> | <font color=#04111D>#04111D</font> |
| 409 | <font color=#81776E>██████</font> | <font color=#81776E>深灰</font> | <font color=#81776E>SHENHUI</font> | <font color=#81776E>#81776E</font> | <font color=#7E8891>██████</font> | <font color=#7E8891>#7E8891</font> |
| 410 | <font color=#9A8878>██████</font> | <font color=#9A8878>海鸥灰</font> | <font color=#9A8878>HAIOUHUI</font> | <font color=#9A8878>#9A8878</font> | <font color=#657787>██████</font> | <font color=#657787>#657787</font> |
| 411 | <font color=#5D3D21>██████</font> | <font color=#5D3D21>茶褐</font> | <font color=#5D3D21>CHAHE</font> | <font color=#5D3D21>#5D3D21</font> | <font color=#A2C2DE>██████</font> | <font color=#A2C2DE>#A2C2DE</font> |
| 412 | <font color=#66462A>██████</font> | <font color=#66462A>驼色</font> | <font color=#66462A>TUOSE</font> | <font color=#66462A>#66462A</font> | <font color=#99B9D5>██████</font> | <font color=#99B9D5>#99B9D5</font> |
| 413 | <font color=#918072>██████</font> | <font color=#918072>银灰</font> | <font color=#918072>YINHUI</font> | <font color=#918072>#918072</font> | <font color=#6E7F8D>██████</font> | <font color=#6E7F8D>#6E7F8D</font> |
| 414 | <font color=#D99156>██████</font> | <font color=#D99156>鹿皮褐</font> | <font color=#D99156>LUPIHE</font> | <font color=#D99156>#D99156</font> | <font color=#266EA9>██████</font> | <font color=#266EA9>#266EA9</font> |
| 415 | <font color=#C1651A>██████</font> | <font color=#C1651A>槟榔综</font> | <font color=#C1651A>BINGLANGZONG</font> | <font color=#C1651A>#C1651A</font> | <font color=#3E9AE5>██████</font> | <font color=#3E9AE5>#3E9AE5</font> |
| 416 | <font color=#D4C4B7>██████</font> | <font color=#D4C4B7>晓灰</font> | <font color=#D4C4B7>XIAOHUI</font> | <font color=#D4C4B7>#D4C4B7</font> | <font color=#2B3B48>██████</font> | <font color=#2B3B48>#2B3B48</font> |
| 417 | <font color=#BE7E4A>██████</font> | <font color=#BE7E4A>淡赭</font> | <font color=#BE7E4A>DANZHE</font> | <font color=#BE7E4A>#BE7E4A</font> | <font color=#4181B5>██████</font> | <font color=#4181B5>#4181B5</font> |
| 418 | <font color=#5C3719>██████</font> | <font color=#5C3719>古铜褐</font> | <font color=#5C3719>GUTONGHE</font> | <font color=#5C3719>#5C3719</font> | <font color=#A3C8E6>██████</font> | <font color=#A3C8E6>#A3C8E6</font> |
| 419 | <font color=#DE7622>██████</font> | <font color=#DE7622>麂棕</font> | <font color=#DE7622>JIZONG</font> | <font color=#DE7622>#DE7622</font> | <font color=#2189DD>██████</font> | <font color=#2189DD>#2189DD</font> |
| 420 | <font color=#DB8540>██████</font> | <font color=#DB8540>醉瓜肉</font> | <font color=#DB8540>ZUIGUAROU</font> | <font color=#DB8540>#DB8540</font> | <font color=#247ABF>██████</font> | <font color=#247ABF>#247ABF</font> |
| 421 | <font color=#80766E>██████</font> | <font color=#80766E>雁灰</font> | <font color=#80766E>YANHUI</font> | <font color=#80766E>#80766E</font> | <font color=#7F8991>██████</font> | <font color=#7F8991>#7F8991</font> |
| 422 | <font color=#F09C5A>██████</font> | <font color=#F09C5A>鲑鱼红</font> | <font color=#F09C5A>GUIYUHONG</font> | <font color=#F09C5A>#F09C5A</font> | <font color=#0F63A5>██████</font> | <font color=#0F63A5>#0F63A5</font> |
| 423 | <font color=#F97D1C>██████</font> | <font color=#F97D1C>橘橙</font> | <font color=#F97D1C>JUCHENG</font> | <font color=#F97D1C>#F97D1C</font> | <font color=#0682E3>██████</font> | <font color=#0682E3>#0682E3</font> |
| 424 | <font color=#F26B1F>██████</font> | <font color=#F26B1F>金黄</font> | <font color=#F26B1F>JINHUANG</font> | <font color=#F26B1F>#F26B1F</font> | <font color=#0D94E0>██████</font> | <font color=#0D94E0>#0D94E0</font> |
| 425 | <font color=#F8B37F>██████</font> | <font color=#F8B37F>玫瑰粉</font> | <font color=#F8B37F>MEIGUIFEN</font> | <font color=#F8B37F>#F8B37F</font> | <font color=#074C80>██████</font> | <font color=#074C80>#074C80</font> |
| 426 | <font color=#FA7E23>██████</font> | <font color=#FA7E23>美人焦橙</font> | <font color=#FA7E23>MEIRENJIAOCHENG</font> | <font color=#FA7E23>#FA7E23</font> | <font color=#0581DC>██████</font> | <font color=#0581DC>#0581DC</font> |
| 427 | <font color=#F9E9CD>██████</font> | <font color=#F9E9CD>米色</font> | <font color=#F9E9CD>MISE</font> | <font color=#F9E9CD>#F9E9CD</font> | <font color=#061632>██████</font> | <font color=#061632>#061632</font> |
| 428 | <font color=#B7A091>██████</font> | <font color=#B7A091>蛛网灰</font> | <font color=#B7A091>ZHUWANGHUI</font> | <font color=#B7A091>#B7A091</font> | <font color=#485F6E>██████</font> | <font color=#485F6E>#485F6E</font> |
| 429 | <font color=#945833>██████</font> | <font color=#945833>淡咖啡</font> | <font color=#945833>DANKAFEI</font> | <font color=#945833>#945833</font> | <font color=#6BA7CC>██████</font> | <font color=#6BA7CC>#6BA7CC</font> |
| 430 | <font color=#F0945D>██████</font> | <font color=#F0945D>海螺橙</font> | <font color=#F0945D>HAILUOCHENG</font> | <font color=#F0945D>#F0945D</font> | <font color=#0F6BA2>██████</font> | <font color=#0F6BA2>#0F6BA2</font> |
| 431 | <font color=#964D22>██████</font> | <font color=#964D22>岩石棕</font> | <font color=#964D22>YANSHIZONG</font> | <font color=#964D22>#964D22</font> | <font color=#69B2DD>██████</font> | <font color=#69B2DD>#69B2DD</font> |
| 432 | <font color=#954416>██████</font> | <font color=#954416>芒果棕</font> | <font color=#954416>MANGGUOZONG</font> | <font color=#954416>#954416</font> | <font color=#6ABBE9>██████</font> | <font color=#6ABBE9>#6ABBE9</font> |
| 433 | <font color=#E16723>██████</font> | <font color=#E16723>陶瓷红</font> | <font color=#E16723>TAOCIHONG</font> | <font color=#E16723>#E16723</font> | <font color=#1E98DC>██████</font> | <font color=#1E98DC>#1E98DC</font> |
| 434 | <font color=#FC7930>██████</font> | <font color=#FC7930>菠萝红</font> | <font color=#FC7930>BOLUOHONG</font> | <font color=#FC7930>#FC7930</font> | <font color=#0386CF>██████</font> | <font color=#0386CF>#0386CF</font> |
| 435 | <font color=#CF7543>██████</font> | <font color=#CF7543>余烬红</font> | <font color=#CF7543>YUJINHONG</font> | <font color=#CF7543>#CF7543</font> | <font color=#308ABC>██████</font> | <font color=#308ABC>#308ABC</font> |
| 436 | <font color=#F86B1D>██████</font> | <font color=#F86B1D>金莲花橙</font> | <font color=#F86B1D>JINLIANHUACHENG</font> | <font color=#F86B1D>#F86B1D</font> | <font color=#0794E2>██████</font> | <font color=#0794E2>#0794E2</font> |
| 437 | <font color=#CD6227>██████</font> | <font color=#CD6227>火砖红</font> | <font color=#CD6227>HUOZHUANHONG</font> | <font color=#CD6227>#CD6227</font> | <font color=#329DD8>██████</font> | <font color=#329DD8>#329DD8</font> |
| 438 | <font color=#F6DCCE>██████</font> | <font color=#F6DCCE>初桃粉红</font> | <font color=#F6DCCE>CHUTAOFENHONG</font> | <font color=#F6DCCE>#F6DCCE</font> | <font color=#092331>██████</font> | <font color=#092331>#092331</font> |
| 439 | <font color=#D85916>██████</font> | <font color=#D85916>铁棕</font> | <font color=#D85916>TIEZONG</font> | <font color=#D85916>#D85916</font> | <font color=#27A6E9>██████</font> | <font color=#27A6E9>#27A6E9</font> |
| 440 | <font color=#F7CFBA>██████</font> | <font color=#F7CFBA>介壳淡粉红</font> | <font color=#F7CFBA>JIEQIAODANFENHONG</font> | <font color=#F7CFBA>#F7CFBA</font> | <font color=#083045>██████</font> | <font color=#083045>#083045</font> |
| 441 | <font color=#F27635>██████</font> | <font color=#F27635>蟹壳红</font> | <font color=#F27635>XIEKEHONG</font> | <font color=#F27635>#F27635</font> | <font color=#0D89CA>██████</font> | <font color=#0D89CA>#0D89CA</font> |
| 442 | <font color=#E46828>██████</font> | <font color=#E46828>金驼</font> | <font color=#E46828>JINTUO</font> | <font color=#E46828>#E46828</font> | <font color=#1B97D7>██████</font> | <font color=#1B97D7>#1B97D7</font> |
| 443 | <font color=#FC6315>██████</font> | <font color=#FC6315>燕颔红</font> | <font color=#FC6315>YANHANHONG</font> | <font color=#FC6315>#FC6315</font> | <font color=#039CEA>██████</font> | <font color=#039CEA>#039CEA</font> |
| 444 | <font color=#B7511D>██████</font> | <font color=#B7511D>淡可可棕</font> | <font color=#B7511D>DANKEKEZONG</font> | <font color=#B7511D>#B7511D</font> | <font color=#48AEE2>██████</font> | <font color=#48AEE2>#48AEE2</font> |
| 445 | <font color=#EA8958>██████</font> | <font color=#EA8958>晨曦红</font> | <font color=#EA8958>CHENXIHONG</font> | <font color=#EA8958>#EA8958</font> | <font color=#1576A7>██████</font> | <font color=#1576A7>#1576A7</font> |
| 446 | <font color=#E8B49A>██████</font> | <font color=#E8B49A>玉粉红</font> | <font color=#E8B49A>YUFENHONG</font> | <font color=#E8B49A>#E8B49A</font> | <font color=#174B65>██████</font> | <font color=#174B65>#174B65</font> |
| 447 | <font color=#FB9968>██████</font> | <font color=#FB9968>野蔷薇红</font> | <font color=#FB9968>YEQIANGWEIHONG</font> | <font color=#FB9968>#FB9968</font> | <font color=#046697>██████</font> | <font color=#046697>#046697</font> |
| 448 | <font color=#EDC3AE>██████</font> | <font color=#EDC3AE>藕荷</font> | <font color=#EDC3AE>OUHE</font> | <font color=#EDC3AE>#EDC3AE</font> | <font color=#123C51>██████</font> | <font color=#123C51>#123C51</font> |
| 449 | <font color=#363433>██████</font> | <font color=#363433>长石灰</font> | <font color=#363433>CHANGSHIHUI</font> | <font color=#363433>#363433</font> | <font color=#C9CBCC>██████</font> | <font color=#C9CBCC>#C9CBCC</font> |
| 450 | <font color=#8B614D>██████</font> | <font color=#8B614D>中红灰</font> | <font color=#8B614D>ZHONGHONGHUI</font> | <font color=#8B614D>#8B614D</font> | <font color=#749EB2>██████</font> | <font color=#749EB2>#749EB2</font> |
| 451 | <font color=#AA6A4C>██████</font> | <font color=#AA6A4C>火泥棕</font> | <font color=#AA6A4C>HUONIZONG</font> | <font color=#AA6A4C>#AA6A4C</font> | <font color=#5595B3>██████</font> | <font color=#5595B3>#5595B3</font> |
| 452 | <font color=#A6522C>██████</font> | <font color=#A6522C>绀红</font> | <font color=#A6522C>GANHONG</font> | <font color=#A6522C>#A6522C</font> | <font color=#59ADD3>██████</font> | <font color=#59ADD3>#59ADD3</font> |
| 453 | <font color=#FA5D19>██████</font> | <font color=#FA5D19>莓酱红</font> | <font color=#FA5D19>MEIJIANGHONG</font> | <font color=#FA5D19>#FA5D19</font> | <font color=#05A2E6>██████</font> | <font color=#05A2E6>#05A2E6</font> |
| 454 | <font color=#71361D>██████</font> | <font color=#71361D>丁香棕</font> | <font color=#71361D>DINGXIANGZONG</font> | <font color=#71361D>#71361D</font> | <font color=#8EC9E2>██████</font> | <font color=#8EC9E2>#8EC9E2</font> |
| 455 | <font color=#B89485>██████</font> | <font color=#B89485>淡玫瑰灰</font> | <font color=#B89485>DANMEIGUIHUI</font> | <font color=#B89485>#B89485</font> | <font color=#476B7A>██████</font> | <font color=#476B7A>#476B7A</font> |
| 456 | <font color=#F68C60>██████</font> | <font color=#F68C60>瓜瓤红</font> | <font color=#F68C60>GUARANGHONG</font> | <font color=#F68C60>#F68C60</font> | <font color=#09739F>██████</font> | <font color=#09739F>#09739F</font> |
| 457 | <font color=#F6AD8F>██████</font> | <font color=#F6AD8F>淡藏花红</font> | <font color=#F6AD8F>DANCANGHUAHONG</font> | <font color=#F6AD8F>#F6AD8F</font> | <font color=#095270>██████</font> | <font color=#095270>#095270</font> |
| 458 | <font color=#732E12>██████</font> | <font color=#732E12>筍皮棕</font> | <font color=#732E12>SUNPIZONG</font> | <font color=#732E12>#732E12</font> | <font color=#8CD1ED>██████</font> | <font color=#8CD1ED>#8CD1ED</font> |
| 459 | <font color=#F7CDBC>██████</font> | <font color=#F7CDBC>润红</font> | <font color=#F7CDBC>RUNHONG</font> | <font color=#F7CDBC>#F7CDBC</font> | <font color=#083243>██████</font> | <font color=#083243>#083243</font> |
| 460 | <font color=#EF632B>██████</font> | <font color=#EF632B>龙睛鱼红</font> | <font color=#EF632B>LONGJINGYUHONG</font> | <font color=#EF632B>#EF632B</font> | <font color=#109CD4>██████</font> | <font color=#109CD4>#109CD4</font> |
| 461 | <font color=#8C4B31>██████</font> | <font color=#8C4B31>淡土黄</font> | <font color=#8C4B31>DANTUHUANG</font> | <font color=#8C4B31>#8C4B31</font> | <font color=#73B4CE>██████</font> | <font color=#73B4CE>#73B4CE</font> |
| 462 | <font color=#64483D>██████</font> | <font color=#64483D>珠母灰</font> | <font color=#64483D>ZHUMUHUI</font> | <font color=#64483D>#64483D</font> | <font color=#9BB7C2>██████</font> | <font color=#9BB7C2>#9BB7C2</font> |
| 463 | <font color=#F9723D>██████</font> | <font color=#F9723D>芙蓉红</font> | <font color=#F9723D>FURONGHONG</font> | <font color=#F9723D>#F9723D</font> | <font color=#068DC2>██████</font> | <font color=#068DC2>#068DC2</font> |
| 464 | <font color=#CF4813>██████</font> | <font color=#CF4813>落霞红</font> | <font color=#CF4813>LUOXIAHONG</font> | <font color=#CF4813>#CF4813</font> | <font color=#30B7EC>██████</font> | <font color=#30B7EC>#30B7EC</font> |
| 465 | <font color=#EE8055>██████</font> | <font color=#EE8055>法螺红</font> | <font color=#EE8055>FALUOHONG</font> | <font color=#EE8055>#EE8055</font> | <font color=#117FAA>██████</font> | <font color=#117FAA>#117FAA</font> |
| 466 | <font color=#F8EBE6>██████</font> | <font color=#F8EBE6>草珠红</font> | <font color=#F8EBE6>CAOZHUHONG</font> | <font color=#F8EBE6>#F8EBE6</font> | <font color=#071419>██████</font> | <font color=#071419>#071419</font> |
| 467 | <font color=#753117>██████</font> | <font color=#753117>咖啡</font> | <font color=#753117>KAFEI</font> | <font color=#753117>#753117</font> | <font color=#8ACEE8>██████</font> | <font color=#8ACEE8>#8ACEE8</font> |
| 468 | <font color=#603D30>██████</font> | <font color=#603D30>中灰驼</font> | <font color=#603D30>ZHONGHUITUO</font> | <font color=#603D30>#603D30</font> | <font color=#9FC2CF>██████</font> | <font color=#9FC2CF>#9FC2CF</font> |
| 469 | <font color=#883A1E>██████</font> | <font color=#883A1E>椰壳棕</font> | <font color=#883A1E>YEKEZONG</font> | <font color=#883A1E>#883A1E</font> | <font color=#77C5E1>██████</font> | <font color=#77C5E1>#77C5E1</font> |
| 470 | <font color=#B14B28>██████</font> | <font color=#B14B28>蟹蝥红</font> | <font color=#B14B28>XIEMAOHONG</font> | <font color=#B14B28>#B14B28</font> | <font color=#4EB4D7>██████</font> | <font color=#4EB4D7>#4EB4D7</font> |
| 471 | <font color=#873D24>██████</font> | <font color=#873D24>淡豆沙</font> | <font color=#873D24>DANDOUSHA</font> | <font color=#873D24>#873D24</font> | <font color=#78C2DB>██████</font> | <font color=#78C2DB>#78C2DB</font> |
| 472 | <font color=#F6CEC1>██████</font> | <font color=#F6CEC1>淡桃红</font> | <font color=#F6CEC1>DANTAOHONG</font> | <font color=#F6CEC1>#F6CEC1</font> | <font color=#09313E>██████</font> | <font color=#09313E>#09313E</font> |
| 473 | <font color=#5B423A>██████</font> | <font color=#5B423A>淡铁灰</font> | <font color=#5B423A>DANTIEHUI</font> | <font color=#5B423A>#5B423A</font> | <font color=#A4BDC5>██████</font> | <font color=#A4BDC5>#A4BDC5</font> |
| 474 | <font color=#624941>██████</font> | <font color=#624941>石板灰</font> | <font color=#624941>SHIBANHUI</font> | <font color=#624941>#624941</font> | <font color=#9DB6BE>██████</font> | <font color=#9DB6BE>#9DB6BE</font> |
| 475 | <font color=#673424>██████</font> | <font color=#673424>淡栗棕</font> | <font color=#673424>DANLIZONG</font> | <font color=#673424>#673424</font> | <font color=#98CBDB>██████</font> | <font color=#98CBDB>#98CBDB</font> |
| 476 | <font color=#F43E06>██████</font> | <font color=#F43E06>银朱</font> | <font color=#F43E06>YINZHU</font> | <font color=#F43E06>#F43E06</font> | <font color=#0BC1F9>██████</font> | <font color=#0BC1F9>#0BC1F9</font> |
| 477 | <font color=#EF6F48>██████</font> | <font color=#EF6F48>草莓红</font> | <font color=#EF6F48>CAOMEIHONG</font> | <font color=#EF6F48>#EF6F48</font> | <font color=#1090B7>██████</font> | <font color=#1090B7>#1090B7</font> |
| 478 | <font color=#F4C7BA>██████</font> | <font color=#F4C7BA>洋水仙红</font> | <font color=#F4C7BA>YANGSHUIXIANHONG</font> | <font color=#F4C7BA>#F4C7BA</font> | <font color=#0B3845>██████</font> | <font color=#0B3845>#0B3845</font> |
| 479 | <font color=#ED5126>██████</font> | <font color=#ED5126>朱红</font> | <font color=#ED5126>ZHUHONG</font> | <font color=#ED5126>#ED5126</font> | <font color=#12AED9>██████</font> | <font color=#12AED9>#12AED9</font> |
| 480 | <font color=#F34718>██████</font> | <font color=#F34718>榴花红</font> | <font color=#F34718>LIUHUAHONG</font> | <font color=#F34718>#F34718</font> | <font color=#0CB8E7>██████</font> | <font color=#0CB8E7>#0CB8E7</font> |
| 481 | <font color=#F2481B>██████</font> | <font color=#F2481B>柿红</font> | <font color=#F2481B>SHIHONG</font> | <font color=#F2481B>#F2481B</font> | <font color=#0DB7E4>██████</font> | <font color=#0DB7E4>#0DB7E4</font> |
| 482 | <font color=#652B1C>██████</font> | <font color=#652B1C>可可棕</font> | <font color=#652B1C>KEKEZONG</font> | <font color=#652B1C>#652B1C</font> | <font color=#9AD4E3>██████</font> | <font color=#9AD4E3>#9AD4E3</font> |
| 483 | <font color=#EEA08C>██████</font> | <font color=#EEA08C>淡罂粟红</font> | <font color=#EEA08C>DANYINGSUHONG</font> | <font color=#EEA08C>#EEA08C</font> | <font color=#115F73>██████</font> | <font color=#115F73>#115F73</font> |
| 484 | <font color=#F04B22>██████</font> | <font color=#F04B22>大红</font> | <font color=#F04B22>DAHONG</font> | <font color=#F04B22>#F04B22</font> | <font color=#0FB4DD>██████</font> | <font color=#0FB4DD>#0FB4DD</font> |
| 485 | <font color=#692A1B>██████</font> | <font color=#692A1B>柞叶棕</font> | <font color=#692A1B>ZHAYEZONG</font> | <font color=#692A1B>#692A1B</font> | <font color=#96D5E4>██████</font> | <font color=#96D5E4>#96D5E4</font> |
| 486 | <font color=#F1441D>██████</font> | <font color=#F1441D>蜻蜓红</font> | <font color=#F1441D>QINGTINGHONG</font> | <font color=#F1441D>#F1441D</font> | <font color=#0EBBE2>██████</font> | <font color=#0EBBE2>#0EBBE2</font> |
| 487 | <font color=#773D31>██████</font> | <font color=#773D31>橡树棕</font> | <font color=#773D31>XIANGSHUZONG</font> | <font color=#773D31>#773D31</font> | <font color=#88C2CE>██████</font> | <font color=#88C2CE>#88C2CE</font> |
| 488 | <font color=#EEAA9C>██████</font> | <font color=#EEAA9C>颊红</font> | <font color=#EEAA9C>JIAHONG</font> | <font color=#EEAA9C>#EEAA9C</font> | <font color=#115563>██████</font> | <font color=#115563>#115563</font> |
| 489 | <font color=#F0ADA0>██████</font> | <font color=#F0ADA0>桃红</font> | <font color=#F0ADA0>TAOHONG</font> | <font color=#F0ADA0>#F0ADA0</font> | <font color=#0F525F>██████</font> | <font color=#0F525F>#0F525F</font> |
| 490 | <font color=#863020>██████</font> | <font color=#863020>火岩棕</font> | <font color=#863020>HUOYANZONG</font> | <font color=#863020>#863020</font> | <font color=#79CFDF>██████</font> | <font color=#79CFDF>#79CFDF</font> |
| 491 | <font color=#F2E7E5>██████</font> | <font color=#F2E7E5>淡藤萝紫</font> | <font color=#F2E7E5>DANTENGLUOZI</font> | <font color=#F2E7E5>#F2E7E5</font> | <font color=#0D181A>██████</font> | <font color=#0D181A>#0D181A</font> |
| 492 | <font color=#862617>██████</font> | <font color=#862617>赭石</font> | <font color=#862617>ZHESHI</font> | <font color=#862617>#862617</font> | <font color=#79D9E8>██████</font> | <font color=#79D9E8>#79D9E8</font> |
| 493 | <font color=#F5391C>██████</font> | <font color=#F5391C>铁水红</font> | <font color=#F5391C>TIESHUIHONG</font> | <font color=#F5391C>#F5391C</font> | <font color=#0AC6E3>██████</font> | <font color=#0AC6E3>#0AC6E3</font> |
| 494 | <font color=#F03F24>██████</font> | <font color=#F03F24>胭脂红</font> | <font color=#F03F24>YANZHIHONG</font> | <font color=#F03F24>#F03F24</font> | <font color=#0FC0DB>██████</font> | <font color=#0FC0DB>#0FC0DB</font> |
| 495 | <font color=#F33B1F>██████</font> | <font color=#F33B1F>极光红</font> | <font color=#F33B1F>JIGUANGHONG</font> | <font color=#F33B1F>#F33B1F</font> | <font color=#0CC4E0>██████</font> | <font color=#0CC4E0>#0CC4E0</font> |
| 496 | <font color=#F23E23>██████</font> | <font color=#F23E23>红汞红</font> | <font color=#F23E23>HONGGONGHONG</font> | <font color=#F23E23>#F23E23</font> | <font color=#0DC1DC>██████</font> | <font color=#0DC1DC>#0DC1DC</font> |
| 497 | <font color=#F13C22>██████</font> | <font color=#F13C22>萝卜红</font> | <font color=#F13C22>LUOBOHONG</font> | <font color=#F13C22>#F13C22</font> | <font color=#0EC3DD>██████</font> | <font color=#0EC3DD>#0EC3DD</font> |
| 498 | <font color=#F05A46>██████</font> | <font color=#F05A46>曲红</font> | <font color=#F05A46>QUHONG</font> | <font color=#F05A46>#F05A46</font> | <font color=#0FA5B9>██████</font> | <font color=#0FA5B9>#0FA5B9</font> |
| 499 | <font color=#F17666>██████</font> | <font color=#F17666>谷鞘红</font> | <font color=#F17666>GUQIAOHONG</font> | <font color=#F17666>#F17666</font> | <font color=#0E8999>██████</font> | <font color=#0E8999>#0E8999</font> |
| 500 | <font color=#F15642>██████</font> | <font color=#F15642>苹果红</font> | <font color=#F15642>PINGGUOHONG</font> | <font color=#F15642>#F15642</font> | <font color=#0EA9BD>██████</font> | <font color=#0EA9BD>#0EA9BD</font> |
| 501 | <font color=#F25A47>██████</font> | <font color=#F25A47>桂红</font> | <font color=#F25A47>GUIHONG</font> | <font color=#F25A47>#F25A47</font> | <font color=#0DA5B8>██████</font> | <font color=#0DA5B8>#0DA5B8</font> |
| 502 | <font color=#F2B9B2>██████</font> | <font color=#F2B9B2>粉红</font> | <font color=#F2B9B2>FENHONG</font> | <font color=#F2B9B2>#F2B9B2</font> | <font color=#0D464D>██████</font> | <font color=#0D464D>#0D464D</font> |
| 503 | <font color=#592620>██████</font> | <font color=#592620>暗驼棕</font> | <font color=#592620>ANTUOZONG</font> | <font color=#592620>#592620</font> | <font color=#A6D9DF>██████</font> | <font color=#A6D9DF>#A6D9DF</font> |
| 504 | <font color=#DE2A18>██████</font> | <font color=#DE2A18>夕阳红</font> | <font color=#DE2A18>XIYANGHONG</font> | <font color=#DE2A18>#DE2A18</font> | <font color=#21D5E7>██████</font> | <font color=#21D5E7>#21D5E7</font> |
| 505 | <font color=#ED3321>██████</font> | <font color=#ED3321>樱桃红</font> | <font color=#ED3321>YINGTAOHONG</font> | <font color=#ED3321>#ED3321</font> | <font color=#12CCDE>██████</font> | <font color=#12CCDE>#12CCDE</font> |
| 506 | <font color=#F04A3A>██████</font> | <font color=#F04A3A>珊瑚红</font> | <font color=#F04A3A>SHANHUHONG</font> | <font color=#F04A3A>#F04A3A</font> | <font color=#0FB5C5>██████</font> | <font color=#0FB5C5>#0FB5C5</font> |
| 507 | <font color=#482522>██████</font> | <font color=#482522>火山棕</font> | <font color=#482522>HUOSHANZONG</font> | <font color=#482522>#482522</font> | <font color=#B7DADD>██████</font> | <font color=#B7DADD>#B7DADD</font> |
| 508 | <font color=#5C1E19>██████</font> | <font color=#5C1E19>栗棕</font> | <font color=#5C1E19>LIZONG</font> | <font color=#5C1E19>#5C1E19</font> | <font color=#A3E1E6>██████</font> | <font color=#A3E1E6>#A3E1E6</font> |
| 509 | <font color=#D42517>██████</font> | <font color=#D42517>鹤顶红</font> | <font color=#D42517>HEDINGHONG</font> | <font color=#D42517>#D42517</font> | <font color=#2BDAE8>██████</font> | <font color=#2BDAE8>#2BDAE8</font> |
| 510 | <font color=#F19790>██████</font> | <font color=#F19790>舌红</font> | <font color=#F19790>SHEHONG</font> | <font color=#F19790>#F19790</font> | <font color=#0E686F>██████</font> | <font color=#0E686F>#0E686F</font> |
| 511 | <font color=#AB372F>██████</font> | <font color=#AB372F>鹅血石红</font> | <font color=#AB372F>EXUESHIHONG</font> | <font color=#AB372F>#AB372F</font> | <font color=#54C8D0>██████</font> | <font color=#54C8D0>#54C8D0</font> |
| 512 | <font color=#5A1F1B>██████</font> | <font color=#5A1F1B>酱棕</font> | <font color=#5A1F1B>JIANGZONG</font> | <font color=#5A1F1B>#5A1F1B</font> | <font color=#A5E0E4>██████</font> | <font color=#A5E0E4>#A5E0E4</font> |
| 513 | <font color=#ED3B2F>██████</font> | <font color=#ED3B2F>鱼鳃红</font> | <font color=#ED3B2F>YUSAIHONG</font> | <font color=#ED3B2F>#ED3B2F</font> | <font color=#12C4D0>██████</font> | <font color=#12C4D0>#12C4D0</font> |
| 514 | <font color=#BDAEAD>██████</font> | <font color=#BDAEAD>芦穗灰</font> | <font color=#BDAEAD>LUSUIHUI</font> | <font color=#BDAEAD>#BDAEAD</font> | <font color=#425152>██████</font> | <font color=#425152>#425152</font> |
| 515 | <font color=#EB261A>██████</font> | <font color=#EB261A>丽春红</font> | <font color=#EB261A>LICHUNHONG</font> | <font color=#EB261A>#EB261A</font> | <font color=#14D9E5>██████</font> | <font color=#14D9E5>#14D9E5</font> |
| 516 | <font color=#AC1F18>██████</font> | <font color=#AC1F18>覆盆子红</font> | <font color=#AC1F18>FUPENZIHONG</font> | <font color=#AC1F18>#AC1F18</font> | <font color=#53E0E7>██████</font> | <font color=#53E0E7>#53E0E7</font> |
| 517 | <font color=#483332>██████</font> | <font color=#483332>海报灰</font> | <font color=#483332>HAIBAOHUI</font> | <font color=#483332>#483332</font> | <font color=#B7CCCD>██████</font> | <font color=#B7CCCD>#B7CCCD</font> |
| 518 | <font color=#481E1C>██████</font> | <font color=#481E1C>豆沙</font> | <font color=#481E1C>DOUSHA</font> | <font color=#481E1C>#481E1C</font> | <font color=#B7E1E3>██████</font> | <font color=#B7E1E3>#B7E1E3</font> |
| 519 | <font color=#F1908C>██████</font> | <font color=#F1908C>榴子红</font> | <font color=#F1908C>LIUZIHONG</font> | <font color=#F1908C>#F1908C</font> | <font color=#0E6F73>██████</font> | <font color=#0E6F73>#0E6F73</font> |
| 520 | <font color=#EC2B24>██████</font> | <font color=#EC2B24>秋海棠红</font> | <font color=#EC2B24>QIUHAITANGHONG</font> | <font color=#EC2B24>#EC2B24</font> | <font color=#13D4DB>██████</font> | <font color=#13D4DB>#13D4DB</font> |
| 521 | <font color=#EFAFAD>██████</font> | <font color=#EFAFAD>无花果红</font> | <font color=#EFAFAD>WUHUAGUOHONG</font> | <font color=#EFAFAD>#EFAFAD</font> | <font color=#105052>██████</font> | <font color=#105052>#105052</font> |
| 522 | <font color=#F2CAC9>██████</font> | <font color=#F2CAC9>淡绯</font> | <font color=#F2CAC9>DANFEI</font> | <font color=#F2CAC9>#F2CAC9</font> | <font color=#0D3536>██████</font> | <font color=#0D3536>#0D3536</font> |
| 523 | <font color=#4B2E2B>██████</font> | <font color=#4B2E2B>玫瑰灰</font> | <font color=#4B2E2B>MEIGUIHUI</font> | <font color=#4B2E2B>#4B2E2B</font> | <font color=#B4D1D4>██████</font> | <font color=#B4D1D4>#B4D1D4</font> |
| 524 | <font color=#ED4845>██████</font> | <font color=#ED4845>淡菽红</font> | <font color=#ED4845>DANSHUHONG</font> | <font color=#ED4845>#ED4845</font> | <font color=#12B7BA>██████</font> | <font color=#12B7BA>#12B7BA</font> |
| 525 | <font color=#ED3333>██████</font> | <font color=#ED3333>枸枢红</font> | <font color=#ED3333>GOUSHUHONG</font> | <font color=#ED3333>#ED3333</font> | <font color=#12CCCC>██████</font> | <font color=#12CCCC>#12CCCC</font> |
| 526 | <font color=#5D3131>██████</font> | <font color=#5D3131>貂紫</font> | <font color=#5D3131>DIAOZI</font> | <font color=#5D3131>#5D3131</font> | <font color=#A2CECE>██████</font> | <font color=#A2CECE>#A2CECE</font> |
*/
