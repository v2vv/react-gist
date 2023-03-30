1. *p++ == *(p++) 
2. *(p+1) ==  *++p 
返回值不一样，p++返回的还是当前地址，p+1返回下一个地址；且执行p++之后p的值就自增了
https://tieba.baidu.com/p/7292285585#:~:text=%E8%BF%94%E5%9B%9E%E5%80%BC%E4%B8%8D%E4%B8%80%E6%A0%B7%EF%BC%8Cp%2B%2B%E8%BF%94%E5%9B%9E%E7%9A%84%E8%BF%98%E6%98%AF%E5%BD%93%E5%89%8D%E5%9C%B0%E5%9D%80%EF%BC%8Cp%2B1%E8%BF%94%E5%9B%9E%E4%B8%8B%E4%B8%80%E4%B8%AA%E5%9C%B0%E5%9D%80%EF%BC%9B%E4%B8%94%E6%89%A7%E8%A1%8Cp%2B%2B%E4%B9%8B%E5%90%8Ep%E7%9A%84%E5%80%BC%E5%B0%B1%E8%87%AA%E5%A2%9E%E4%BA%86

3.语法 syntax

4.常量 直接常量 符号常量
- 常量是在程序执行过程中，其值不发生改变的量，分为直接常量和符号常量两种。

5.指针常量 常量指针 常量指针常量
- c的两大支柱：数组和指针，优良的继承并发扬了它的爹的两大特性：地址加偏移。
https://blog.csdn.net/weixin_52244492/article/details/124081709

6.指针数组 数组指针
https://blog.csdn.net/sanqiuai/article/details/115828251?spm=1001.2014.3001.5502

7.* 解引用 reference 引用 dereference "去引用化"
8.数组名
- 数组名只是一个常量（一个值为数组首元素地址的常量）
- 数组名的值是数组首元素的指针常量
- https://blog.csdn.net/Kwansy/article/details/78488222
- https://blog.csdn.net/bacon_zhong/article/details/122027789

9. 指针大小
- 8位cpu 1个字节
- 32位mcu 4个字节
- 64位cpu 8个字节
>> sizeof(int *) 
>> sizeof(char *)
 
10. 整型常量
- 4个字节

11. C语言的汇编表示（指针）
c的两大支柱：数组和指针，优良的继承并发扬了它的爹的两大特性：地址加偏移。
https://blog.csdn.net/sanqiuai/article/details/115799174

12. 偏移地址（Offset address)

13. C 语言指针特征
- 内存管理 (Memory Management)

14. C语言数据结构特征 (Data Structure Feature)
- 内存管理 (Memory Management)

15. 嵌入式处理器 (Embedded Processor)

16. 寄存器 (register)
- 寄存器映射 (Register Mapping)

17. 指针+1 (Pointer)
- C语言中的指针加1并不只是简单的地址加1而已，实际上指针加1，地址偏移的多少是与指针的类型相关的
```c
int a[10]={1, 2, 3, 4, 5,6,7,8,9,0};
 //a 是数组名，应为固定值，常量指针；它不能用作Lvalue(左值)，可代表元素0的地址
 //a[] 的类型为 int
 //&a 的类型为 int *[]
 //&a[] 的类型为 int *
 
//整型指针 (int *) 
int *p = a; //a 的类型为 指针常量
int *p = &a[10]; //&a[10] 的类型为 int *
//指针数组 (int *[])
int* a[10] = {(int*)1,(int*)2,(int*)3,(int*)4,(int*)5,(int*)6,(int*)7,(int*)8,(int*)9};
//数组指针 (int (*)[])
int(*pa)[10] = &a;//&a 的类型为 int *[10]
int *p = &a; 
int(*pa)[10] = (int(*)[10])a; //
```

12.数组名
- 数组名作为函数形参时，在函数体内，其失去了本身的内涵，仅仅只是一个指针；很遗憾，在失去其内涵的同时，它还失去了其常量特性，可以作自增、自减等操作，可以被修改。
- 数据名作为函数形参时，其全面沦落为一个普通指针！它的贵族身份被剥夺，成了一个地地道道的只拥有4个字节的平民。
https://www.cnblogs.com/youxin/p/3235862.html

> 数组在除了3种情况外, 其他时候都要"退化"成指向首元素的指针.比如对 char s[10] = "china";  \
这3中例外情况是: \
　(1) sizeof(s) \
　(2) &s; 代表数组指针\
　(3) 用来初始化s的"china";\
除3种情况外,数组s在表达式中都会退化为"指向数组首元素的指针", 既&s[0]

13. sizeof
- 它是一个操作符，不过其使用方式看起来的确太像一个函数了。
- sizeof(int)就可以说明sizeof的确不是一个函数，因为函数接纳形参（一个变量），没有一个C/C++函数接纳一个数据类型（如int）为"形参"。

14. 退化 (degeneration)
15. 操作符 (operator)
16. modifiable lvalue
17. lvalue 左值 数组名未退化不可放在=左边,或自加,自减
18. 自加 self addition
19. 自减 self decrement
20. 减法 subtration
21. 元素 element
22. 情况 situation

23. &a 取址运算符
- 返回一个指针，返回 a 内存地址部分，并转换类型为常量型指针，其指针类型为a原类型指针

24. 整型常量 因和内存地址一样为整型描述符，描述的是数据而不是内存地址，可以被转换为指针类型
- (int *)1,

25. 直接指针
 - 手动指定寄存器地址 (强制转换int *)0x99
26. 寄存器指针
 - 使用系统使用的寄存器地址 (& a)(强制转换 int *)0x99


27. decimal 十进制

28. %d
十进制整数输出

29. c%
字符输出

30. s%
字符串输出

31. x%
十六进制输出，小写

32. X%
十六进制输出，大写

33. d% 
输出变量所在的地址

34. 没有这种二进制对应的格式，所以需要我们手动来实现

1. 通过库函数itoa，需要包含头文件：#include <stdlib.h>； 

2. 通过十进制转成二进制的常用方法——短除法；为方便大家使用，将两种方法都封装成了函数，源码如下：

https://blog.csdn.net/weixin_44155115/article/details/124743558

35. 位域 位字段 Bit field
```c
//位域列表的形式:
    //类型说明符  位域名:位域长度
//(定义一个位域abc,包含3个位域成员a、b和c)
    struct  abc
    {
      unsigned int a:22;//占22位
      unsigned int b:11;//占11位
      unsigned int c:22;//占6位
    }data;
//data为bs变量,占用两个字节
//一个位域必须存储在同一个字节中，不能跨两个字节。如一个字节所剩空间不够存放另一位域时，应从下一单元起存放该位域。也可以有意使某位域从下一单元开始。

```

36. 数组名和指针区别（还有数组退化等） 
https://www.cnblogs.com/youxin/p/3235862.html



37. 寄存器地址映射 regsiter address mapping
```c
//1.指针定义地址映射
volatile uint32_t* const portd_moder   = (uint32_t*) 0x40020C00;
volatile uint32_t* const portd_odr     = (uint32_t*) 0x40020C14;

*portd_moder = moder;
*portd_odr |= (1 << 8);   // led-on

// 使用宏来定义每个寄存器，如
#define UART_REGO (*(volatile uint32*) REGESTER_Address)
//移位和位掩码访问特定位。


// 使用数据结构定义
typedef struct {
    vu32 INTEN;                     // 0x00
    vu32 INTFLAG;                   // 0x04
    vu32 REV0[2];                   // 0x08
    vu32 ENC_CMD;                   // 0x10
    vu32 ENC_250us;                 // 0x14
    vu32 ENC_SIZE;                  // 0x18
    vu32 ENC_HDR;                   // 0x1c
    vu8  ENC_DATA[20];              // 0x20
    vu32 REV1[3];                   // 0x34
    vu32 DEC_CMD;                   // 0x40
    vu8  DEC_TIMEOUT;               // 0x44
    vu8  DEC_DET_TH;                // 0x45
    vu8  DEC_COUNT;                 // 0x46
    vu8  REV2;                      // 0x47
    vu32 DEC_SIZE;                  // 0x48
    vu32 DEC_HDR;                   // 0x4c
    vu8  DEC_DATA[12];              // 0x50
    vu32 REV3;                      // 0x5c
    vu8  DEC_AC_UPDATE;             // 0x60
    vu8  DEC_AC_CFG;                // 0x61
    vu8  DEC_AC_FLT_CFG;            // 0x62
    vu8  REV4;                      // 0x63
    vu16 DEC_AC_CNT;                // 0x64
    vu8  DEC_TR_CNT;                // 0x66
} COMMType;
#define COMM                        (*(COMMType *)0X500E0000)


```