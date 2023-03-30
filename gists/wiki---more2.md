# Form 类

命名空间: System.Windows.Forms
程序集:
System.Windows.Forms.dll
表示组成应用程序的用户界面的窗口或对话框。


public class Form : System.Windows.Forms.ContainerControl

- 方法
    - Form 构造函数
        命名空间: System.Windows.Forms
        程序集: System.Windows.Forms.dll
        初始化 Form 类的新实例。
    - close（）
    
    
[link](./C.md)

# Math 类

命名空间: System
程序集: System.Runtime.dll
为三角函数、对数函数和其他通用数学函数提供常数和静态方法。

# TextWriter
4
# using语句

有些类型的非托管对象数量有限制或很耗费系统资源。在使用完它们后，尽可能快地释放它们是非常重要的。

# try catch finally return

1、不管有木有出现异常，finally块中代码都会执行；
2、当try和catch中有return时，finally仍然会执行；

引用：https://blog.csdn.net/kavensu/article/details/8067850

# 托管/非托管资源

- 资源分为两种，托管的内存资源，这是不需要我们操心的，系统已经为我们进行管理了；那么对于非托管的资源，这里再重申一下，就是Stream，数据库的连接，GDI+的相关对象，还有Com对象等等这些资源，需要我们手动去释放。

- 对于非托管资源，您在应用程序中使用完这些非托管资源之后，必须显示的释放他们，例如System.IO.StreamReader的一个文件对象，必须显示的调用对象的Close()方法关闭它，否则会占用系统的内存和资源，而且可能会出现意想不到的错误。

# Streams

流所在的命名空间也是System.IO，主要包括文本文件的读写、图像和声音文件的读写、二进制文件的读写等。

- StreamReader 类

    使用该表中的构造方法即可创建 StreamReader 类的实例，通过实例调用其提供的类成 员能进行文件的读取操作。

- StreamWriter 类

    在创建了 StreamWriter 类dff的实例后即可调用其类成员，完成向文件中写入信息的操作。
    
# 方法关键字

    - ref 关键字
    
        变量作为参数传给方法，同时希望在方法执行完成后，对参数所做的修改能够反映到变量上

# 线程
```c#
Thread thread1 = new Thread(new ThreadStart(Thread1));
thread1.Start();
static void Thread1(){

}
```

# 委托与回调
    delegate


# 嵌套类 包含类 

    不论外部类型是类、接口还是构造，嵌套类型均默认为 private；仅可从其包含类型中进行访问。
    
    类”的嵌套类型可以是 public、protected、internal、protected internal、private 或 private protected。
    
    构造的嵌套类型可以是 public、internal 或 private。
    
    嵌套类型（或内部类型）可访问包含类型（或外部类型）。 若要访问包含类型，请将其作为参数传递给嵌套类型的构造函数。
    
    嵌套类型可以访问其包含类型可以访问的所有成员。 它可以访问包含类型的私有成员和受保护成员（包括所有继承的受保护成员）。

    嵌套类可以访问所有包含类对象
    
    外部类只能够访问修饰符为public、internal嵌套类的字段、方法、属性。

    类内部可以访问所有private对象
    
    如果嵌套的类声明为私有，就不能在包含类外部实例化嵌套类。
    
    使用嵌套类的一个原因是嵌套类可以访问其包含类的私有和受保护成员。


# 构造函数 

 

# 静态 static

不会被实例化，可通过类名访问，有公私两种

# 公共 public

# 私有 private

# 分部类 partial

# 实例化
# A collapsible section with markdown
<details>
  <summary>Click to expand!</summary>
  
  ## Heading
  1. A numbered
  2. list
     * With some
     * Sub bullets
</details>

# 字段 属性

1.关于字段

a.字段又称为：“成员变量”，一般在类的内部做数据交互使用。

b.字段命名规范：camel命名法（首单词字母小写）。

2.通俗的理解：

私有化：字段就好比我们的个人财产，仅供个人使用，所以一般是private修饰。

添加标准：根据程序的功能需求，具体来添加需要的不同类型的字段。

1.属性的使用

作用：在面向对象设计中主要使用属性描述对象的静态特征。

要求：一般采用Pascal命名法（首字母大写），数据类型要和对应的字段要一致。

2.属性的理解

a.属性其实就是外界访问私有字段的入口，属性本身不保存任何数据，在对属性赋值和读取的时候其实就是操作的对应私有字段。

b.属性本质其实就是一个方法，通过get和set方法来操作对应的字段，通过反编译工具我们可以看出

属性（方法）

a.属性一般是向外提供数据，主要用来描述对象的静态特征，所以，属性一般是public。

b.属性具备get和set方法，可以在方法里加入逻辑处理数据，灵活拓展使用。

```c#
   private string name;
   public string Name   
   {
      get 
      {
         return name; 
      }
      set 
      {
         name = value; 
      }
   }                 //简写 public string Name {get;set;}
```
# MOS管导通压降

MOS管导通压降不像三极管有个现成的参数，但是其规格书中有导通电阻Rds(on)这个参数，根据MOS管的Vgs电压，对应有一定值的Rds(on)，然后就通过电流Id*Rds(on)来计算压降。

180nm工艺及以下的制程基本都能达到50mV以下了（IDS=1mA）

# 阈值电压(Vgs(th)@Id)

当器件由耗尽向反型转变时，要经历一个 Si 表面电子浓度等于空穴浓度的状态。此时器 件处于临界导通状态，器件的栅电压定义为阈值电压，

# 编译

将一种代码转换（transform）为另一种代码的过程。

不是只有转为机器码才称为编译，你自定义一种编译器把Python转为Python也叫编译。

编译器的目的是将一种语言转换成另一种语言。把编译器想象成一个翻译器。你会雇一个翻译来听你说英语，然后说日语：

一些编译器会编译成可以直接在系统上执行的低级机器代码。其他编译器会编译成一种中间语言，由虚拟机执行。

选择编译器时要做出的一个重要决定是系统可移植性要求。Java和.NET CLR将编译成一种中间语言，以便编译后的代码可以跨多个系统架构移植。C、Go、C++ 和 Pascal 将编译成一个低级可执行文件，该可执行文件只能在与其编译的系统类似的系统上运行。

由于 Python 应用程序通常作为源代码分发，因此 Python 运行时的作用是转换 Python 源代码并一步执行。在内部，CPython 运行时会编译您的代码。一个流行的误解是 Python 是一种解释型语言。它实际上是编译的。

Python 代码不会编译成机器代码。它被编译成一种称为字节码的特殊低级中间语言，只有 CPython 才能理解。此代码存储在.pyc隐藏目录中的文件中并缓存以供大型C程序执行。如果您在不更改源代码的情况下两次运行同一个 Python 应用程序，那么第二次运行速度总是会快得多。这是因为它加载编译的字节码并直接执行它。

“Python是一种基于解释器的,面向对象的解释型语言。解释器会逐行读取代码;首先将Python编译为字节码,然后由大型C程序解释。”


# 编译器的工作方式

- 自托管编译器是用它们编译的语言编写的编译器，例如 Go 编译器。  
- 源到源编译器是用另一种已经有编译器的语言编写的编译器。  
如果您正在从头开始编写一种新的编程语言，那么您需要一个可执行应用程序来编译您的编译器！你需要一个编译器来执行任何事情，所以当开发新语言时，它们通常首先用更老的、更成熟的语言编写。

Go 编程语言就是一个很好的例子。第一个 Go 编译器是用 C 编写的，然后一旦可以编译 Go，就用 Go 重写编译器。

CPython 保留了它的 C 传统：许多标准库模块，如ssl模块或sockets模块，都是用 C 编写的，以访问低级操作系统 API。Windows 和 Linux 内核中用于创建网络套接字、使用文件系统或与显示交互的 API都是用 C 编写的。 Python 的可扩展层专注于 C 语言是有意义的。在本文的后面，我们将介绍 Python 标准库和 C 模块。

有一个用 Python 编写的 Python 编译器，称为PyPy。PyPy 的标志是一个Ouroboros，代表编译器的自托管性质。

Python 交叉编译器的另一个示例是Jython。Jython 是用 Java 编写的，从 Python 源代码编译成 Java 字节码。与 CPython 可以轻松导入 C 库并从 Python 中使用它们一样，Jython 可以轻松导入和引用 Java 模块和类。=

https://realpython.com/cpython-source-code-guide/# 

# C# SaveFileDialog  用法

- 保存文件对话框

- 代码示例：

```c#
 SaveFileDialog saveFileDialog1 = new SaveFileDialog();
        private void button3_Click(object sender, EventArgs e)
        {
            
            //richTextBox1.SaveFile("txtName", RichTextBoxStreamType.PlainText);
            if (this.richTextBox1.Text == "")
                return;
            //saveFileDialog1.DefaultExt = "txt";
            saveFileDialog1.Filter = "Text files (*.txt)|*.txt|All files (*.*)|*.*";
            if (this.saveFileDialog1.ShowDialog() == DialogResult.Cancel)
                return;
            string FileName = this.saveFileDialog1.FileName;

            if (saveFileDialog1.ShowDialog() == DialogResult.OK && FileName.Length > 0)
            {
                // Save the contents of the RichTextBox into the file.
                richTextBox1.SaveFile(saveFileDialog1.FileName, RichTextBoxStreamType.PlainText);
                MessageBox.Show("文件已成功保存");
            }
        }
```


# 串口类 

```c#
using System.IO.Ports;
SerialPort serialPort1 = new SerialPort();
```

# OutputStreamWriter 

没有对话框

saveFile的原理就是将流写入到需要写入的文件，通过可以用“FileOutputStream”创建文件实例，之后过“OutputStreamWriter”流的形式进行存储，举例：
```c#
public void saveFile( ){
OutputStreamWriter pw = null;//定义一个流
pw = new OutputStreamWriter(new FileOutputStream(“D:/test.txt”),"GBK");//确认流的输出文件和编码格式，此过程创建了“test.txt”实例
pw.write("我是要写入到记事本文件的内容");//将要写入文件的内容，可以多次write
pw.close();//关闭流
}
备注：文件流用完之后必须及时通过close方法关闭，否则会一直处于打开状态，直至程序停止，增加系统负担。

```

# System.IO.StreamWriter

写入文件，没有对话框

using System.IO

example：
```c#
string[] lines = { "My first string", "My second string", "and even a third string" };
using (System.IO.StreamWriter sw = new System.IO.StreamWriter(@"C:\MyFolder\OutputText.txt"))
{
    foreach (string line in lines)
    {
        sw.WriteLine(line);
    }
}

```
请注意，StreamWriter可以bool在其构造函数中接收第二个参数，从而允许写入Append文件而不是覆盖文件：
```c#
bool appendExistingFile = true;
using (System.IO.StreamWriter sw = new System.IO.StreamWriter(@"C:\MyFolder\OutputText.txt", appendExistingFile ))
{
    sw.WriteLine("This line will be appended to the existing file");
}
```


# AMBA规范

- AMBA总线规范是ARM公司提出的总线规范，被大多数SoC设计采用，它规定了AHB (Advanced High-performance Bus)、ASB (Advanced System Bus)、APB (Advanced Peripheral Bus)。


# AHB 系统总线

AHB=Advanced High Performance Bus，译作高级高性能总线。如同USB（Universal Serial Bus）一样，也是一种总线接口。
AHB主要用于高性能模块(如CPU、DMA和DSP等)之间的连接，作为SoC的片上系统总线，它包括以下一些特性：单个时钟边沿操作；非三态的实现方式；支持突发传输；支持分段传输；支持多个主控制器；可配置32位~128位总线宽度；支持字节、半字和字的传输。AHB 系统由主模块、从模块和基础结构(Infrastructure)3部分组成，整个AHB总线上的传输都由主模块发出，由从模块负责回应。基础结构则由仲裁器(arbiter)、主模块到从模块的多路器、从模块到主模块的多路器、译码器(decoder)、虚拟从模块(dummy Slave)、虚拟主模块(dummy Master)所组成。针对Soc设计中IP复用问题提出了一种新的解决办法。传统的方法是将特定功能模块的非标准接口标准化为AHB主/从设备接口。本文提出了一种新的基于ARM的Soc通用平台设计寄存器总线标准接口，这种设计使整个系统的结构清晰，增强系统的通用性与系统中功能模块的可移植性。

AHB总线的强大之处在于它可以将微控制器（CPU）、高带宽的片上RAM、高带宽的外部存储器接口、DMA总线master、各种拥有AHB接口的控制器等等连接起来构成一个独立的完整的SOC系统，不仅如此，还可以通过AHB-APB桥来连接APB总线系统。AHB可以成为一个完整独立的SOC芯片的骨架。

- AHB用于高性能、高时钟频率的系统结构，
    - AHB 系统由主模块、从模块和基础结构(Infrastructure)3部分组成，整个AHB总线上的传输都由主模块发出，由从模块负责回应。APB，是Advanced Peripheral Bus的缩写，这是一种外围总线。
    - 典型的应用如ARM核与系统内部的高速RAM、NAND FLASH、DMA、Bridge的连接。主要用于高性能模块(如CPU、DMA和DSP等)之间的连接。

- AHB基本特性
    - Burst传输
    - Split事务处理
    - 单周期master移交
    - 单一时钟沿操作
    - 无三态
    - 更宽的数据总线配置（64/128）
    - 流水线操作
    - 可支持多个总线主设备（最多16个）

- AHB总线的组成
    AHB总线由Master、Slave和Infrastructure构成。Infrastructure由arbiter、数据多路、地址控制多路、译码器构成。
    1. 主设备Master
        - 发起一次读/写操作
        - 某一时刻只允许一个主设备使用总线

    2. 从设备Slave
        - 响应一次读/写操作
        - 通过地址映射来选择使用哪一个从设备

    3. 仲裁器arbiter
        - 允许某一个主设备控制总线

    4. 译码器decoder
        - 通过地址译码决定选择哪一个从设备

    5. 总线可以分为三组
        - 写数据总线（HWDATA）
        - 读数据总线（HRDATA）
        - 地址控制总线（HADDR）
- 总线操作
     1. 有需要占用总线的Master向arbiter发出请求，arbiter授权给指定的master。任一时间周期只有一个master可以接入总线，对其指定的slave进行读写操作。
     2. 获得授权的总线开始AHB传输，首先发出地址和控制信号，提供地址信息、传输方向、带宽和burst类型。总线统一规划slave的地址，译码器根据地址和控制信号确定哪个slave与master进行数据通信。数据传输通过数据总线完成。为避免出现三态总线，AHB将读写总线分开，写数据总线用于从master到slave的数据传输，读数据总线用于从slave到master的数据传输。每笔传输包括一个地址和控制周期，一个或多个数据周期。地址和控制周期不能被扩展，因此slave必须在一个周期内采样地址信号。数据周期可以通过HREADY信号扩展，但HREADY为低时给传输加入一个等待状态以使slave获得额外的时间来提供或采样数据，另外slave通过响应信号HRESP反映传输状态。
     3. 一般情况下master完成完整的burst传输，arbiter才会授权给其他的master接入总线，然而为避免过大的判决延迟，arbiter也可能打断burst传输。在这种情况下master必须再次接入总线以进行中断的burst剩余部分的传输。
     
- 基本传输
    - 一笔传输由如下两部分组成：
        - 地址阶段：一个周期
        - 数据阶段：一个或多个周期，由HBURST信号决定需要几个有效周期，可以由HREADY发出请求延长一个周期。








# APB 外围总线

APB用于连接外部设备，对性能要求不高，而考虑低功耗问题。它的总线架构不像 AHB支持多个主模块，在APB里面唯一的主模块就是APB 桥。再往下，APB2负责AD，I/O，高级TIM，串口1；APB1负责DA，USB，SPI，I2C，CAN，串口2345，普通TIM。

# ASB

ASB是AHB的一种替代方案。



# C#项目引用

- 先把项目添加进来，然后右击 等待别的项目引用进来的 项目，找到“添加”，“引用”，“解决方案”，”“项目”，勾选并确定就好了。

- 项目到项目的引用在于它在生成系统中创建了项目之间的依赖项，如果从上次生成引用项目之后它发生了变化，就会生成依赖项目。

- 如果删除项目，引用连接也会删除，

#  C#项目DLL引用

- 首先，把两个项目放在同一个解决方案中
    - 例如：启动项目AAA，待引用项目BBB
- 然后，生成项目BBB的dll
    - 右击项目BBB，在出现菜单中，点击生成
- 其次，项目AAA添加引用
    - 在项目AAA中添加引用，即BBB生成的dll
- 更新，需要重新生成 DLL




# TASK

```c#
　　var t1 = new Task(() => TaskMethod("Task 1"));
　　t1.Start();
　　Task.WaitAll(t1);//等待所有任务结束 
```

```c#
Task.Factory.StartNew(() => TaskMethod("Task 3")); 直接异步的方法 

//或者 var t3=Task.Factory.StartNew(() => TaskMethod("Task 3"));

Task.WaitAll(t3);//等待所有任务结束
```

组合任务.ContinueWith

虽然Task以其强大的Api,以及封装,让我们在CLR环境下,能完成高效率的编程,但是它并不是没有缺点的,高效率的背后,肯定带来的性能的损失,这一点很多类似的框架都能说明,

from：https://www.cnblogs.com/zhaoshujie/p/11082753.html

# ThreadPool

为什么MS要推出Task,而不推Thread和ThreadPool,以下是我的见解:

(1)、Thread的Api并不靠谱,甚至MS自己都不推荐,原因,它将整个Thread类都不开放给Windows Sotre程序,且它的Api过于强大,如果在程序中过度使用,维护的成本太高,想想代码中充斥着挂起线程,阻塞线程、后期的应用程序很难维护.

(2)、ThreadPool最大的问题是,所有的辅助线程都是异步的,没有向Thread的Join方法那样去等待一个线程执行完,然后执行回调函数的机制,也就是你无法判断线程什么时候执行完,也没有机制获得线程的返回值,所有MS推出了Task来解决Thread和ThreadPool的问题

当然最主要的是,Thread和Thread好用.因为Task是它们的升级版,升级版当然比较好.

form：https://www.cnblogs.com/dashanboke/p/10655266.html

# 跨线程的访问-子线程访问主线程的控件

在WinForm 处理多线程访问主线程的控件时候、会无法访问


方案一：去掉线程访问主线程UI控件的安全检查，使用：
Control.CheckForIllegalCrossThreadCalls = false;

方案二：使用委托，将对主线程的UI控件操作推送了该线程的消息队列里，使用的方法为：Invoke方法和BeginInvoke方法，前一个是同步方法，后一个为异步方法；

方案三：使用同步上下文：SynchronizationContext方法，该方法是取得主线程的上下文信息，然后在子线程将访问UI控件方法推送到UI上下文的消息队列里，使用POST或者Send；

方案四：在命名空间:   System.ComponentModel 里有个BackgroundWorker类，它是在一个单独的线程里执行，下图拷贝官网说明：

form：https://www.cnblogs.com/djzxjblogs/p/7525206.html
C# WinForm 跨线程访问控件:https://www.cnblogs.com/moon-boke/p/12551074.html




# Control类



# 阻塞





# ISynchronizeInvoke

- 如果从另外一个线程操作windows窗体上的控件，就会和主线程产生竞争，造成不可预料的结果，甚至死锁。因此windows GUI编程有一个规则，就是只能通过创建控件的线程来操作控件的数据，否则就可能产生不可预料的结果。

- 因此，dotnet里面，为了方便地解决这些问题，Control类实现了ISynchronizeInvoke接口，提供了Invoke和BeginInvoke方法来提供让其它线程更新GUI界面控件的机制。

- Invoke or BeginInvoke

    - 使用Invoke完成一个委托方法的封送，就类似于使用SendMessage方法来给界面线程发送消息，是一个同步方法。也就是说在Invoke封送的方法被执行完毕前，Invoke方法不会返回，从而调用者线程将被阻塞。

    - 使用BeginInvoke方法封送一个委托方法，类似于使用PostMessage进行通信，这是一个异步方法。也就是该方法封送完毕后马上返回，不会等待委托方法的执行结束，调用者线程将不会被阻塞。但是调用者也可以使用EndInvoke() 方法或者其它类似WaitHandle机制等待异步操作的完成。

    - 但是在内部实现上，Invoke和BeginInvoke都是用了PostMessage方法，从而避免了SendMessage带来的问题。而Invoke方法的同步阻塞是靠WaitHandle机制来完成的。

    - 如果你的后台线程在更新一个UI控件的状态后不需要等待，而是要继续往下处理，那么你就应该使用BeginInvoke来进行异步处理。

    - 如果你的后台线程需要操作UI控件，并且需要等到该操作执行完毕才能继续执行，那么你就应该使用Invoke。否则，在后台线程和主截面线程共享某些状态数据的情况下，如果不同步调用，而是各自继续执行的话，可能会造成执行序列上的问题，虽然不发生死锁，但是会出现不可预料的显示结果或者数据处理错误。
    
button1.Invoke(new invokeDelegate(invokeMethod));  
    
    
```C#
private void button1_Click(object sender, EventArgs e)
      {
          this.BeginInvoke(new Action(delegate()
          {
              this.button1.Text = "test";
          }));
      }
```

- InvokeRequired

    - 可以看到ISynchronizeInvoke有一个属性，InvokeRequired。这个属性就是用来在编程的时候确定，一个对象访问UI控件的时候是否需要使用Invoke或者BeginInvoke来进行封送。如果不需要那么就可以直接更新。在调用者对象和UI对象同属一个线程的时候这个属性返回false。
    
    
form：https://www.cnblogs.com/nimorl/p/9645173.html


# delegate


# 16进制字符型转二进制

- Convert.ToInt32("0xaa", 16)
    不一定需要添加0x，直接使用aa也是可以
    Convert.ToInt32("0xaa", 16) == Convert.ToInt32("aa", 16)

# 二进制/十进制转二进制字符型
System.Convert.ToString(d, 2);// d为int类型 以4为例，输出为100
System.Convert.ToString(d, 2);// d为int类型 以0X14为例，输出为10100



# 索引器

```C#

public static RegisterManager RegManager { get; set; }  == public static RegisterManager RegManager 可读可写

```

# 函数调用方法

实例化，静态调用，继承，委托函数


# 接口