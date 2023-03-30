




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
