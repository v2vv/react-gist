- [last](#last)

- [jupyter](#jupyter)
- [node.js](#node.js)
- [code-server](#code-server)
- [markdown](#markdown)
- [scp commond](#scp-commond)
- [makefile](#makefile)




# jupyter

# docker install jupyter lab

docker run -d -p 8891:8888 -v /root/jupyter jupyter/all-spark-notebook:ubuntu-20.04 start.sh jupyter lab

all-spark-notebook ：jupyter lab install
docker run -it --rm  -p 888:8883  -v /root/jupyter:/home/jovyan/jupyter -e JUPYTER_ENABLE_LAB=yes jupyter/all-spark-notebook:ubuntu-20.04 

```
docker run -it  \
-p 8866:8888  \
-e GRANT_SUDO=yes \
--user root \
-v /root/jupyter:/home/jovyan/jupyter \
-v /var/run/docker.sock:/var/run/docker.sock \
-v /usr/bin/docker:/usr/bin/docker \
-e JUPYTER_ENABLE_LAB=yes \
jupyter/all-spark-notebook:ubuntu-20.04 
```

`docker cp /root/jupyter/config/jupyter_lab_config.py 4c91:/home/jovyan/jupyter/.jupyter/jupyter_lab_config.py`

挂载目录权限
`chmod 777 dirname -R`
中文界面
docker exec -it contain_id bash
pip install jupyterlab-language-pack-zh-CN

# local install pip & pip 3

# jyputer start commond
jupyter lab
jupyter notebook --allow-root (super root用)
> document https://jupyterlab.readthedocs.io/en/latest/getting_started/starting.html

## cache
taken : b3849d61ea50225a73fcffd2f7bf56a6b3de4a170efea27b

## pass
https://segmentfault.com/a/1190000022706529

## config
commond: 
config: ·jupyter lab --generate-config·
edit: vim /root/.jupyter/jupyter_notebook_config.py
port: 8887
host: tencent host ip
url: tencent host ip:8887

## data
tencent server ip 122.51.221.67
linux ssh conntent /root/.ssh/authorized_keys

# node.js

# debain node.js install 
```
curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
apt-get install -y nodejs
```

curl -fOL https://github.com/cdr/code-server/releases/download/v3.11.1/code-server_3.11.1_amd64.deb
3.11.1


# scp commond
can tramslate files
scp ‪C:\Users\Mr.Stark\Downloads\chrome\code-server_3.11.1_amd64.deb root@122.51.221.67:/root
scp ‪C:\Users\Mr.Stark\Downloads\Compressed\code-server-3.11.1-linux-amd64.tar.gz root@122.51.221.67:/root
dpkg -i code-server_3.11.1_amd64.deb

# code-sever install & view in brower
install:
link:
way:
commond:
start:
export PASSWORD="lvhongyuan" && ./code-server --port 8082 --host 0.0.0.0
export PASSWORD="你自己的密码" && ./code-server --host 0.0.0.0 --port 80

export PASSWORD="lvhongyuan" && ./code-server --port 8082 --host 0.0.0.0 --open /root/ansible


docker run -d \
  --name=code-server \
  -e PUID=1000 \
  -e PGID=1000 \
  -e TZ=Europe/London \
  -e PASSWORD=password `#optional` \
  -e HASHED_PASSWORD= `#optional` \
  -e SUDO_PASSWORD=password `#optional` \
  -e SUDO_PASSWORD_HASH= `#optional` \
  -e PROXY_DOMAIN=code-server.my.domain `#optional` \
  -p 8848:8848 \
  -v /path/to/appdata/config:/config \
  --restart unless-stopped \
  ghcr.io/linuxserver/code-server

docker run -d \
  --name=code-server \
  -e TZ=Asia/Shanghai \
  -p 8557:8567 \
  -v /path/to/appdata/config:/config \
  --restart unless-stopped \
  ghcr.io/linuxserver/code-server


docker run -p 0.0.0.0:8080:8080 \
  -v "/root/project:/home/coder/project" \
  -u "$(id -u):$(id -u)" \
  -e "DOCKER_USER=$USER" \
  -e "PASSWORD=lvhongyuan" \
  -it bencdr/code-server-deploy-container:latest




# markdown

20210817 发现其他用法
- 内联链接
- 背景色
- Markdown中支持基本的HTMl语法
<table><tr><td bgcolor=orange>背景色是：orange</td></tr></table>


# debain souceslist

aliyun souces

path: /etc/apt/sources.list
> deb http://mirrors.aliyun.com/debian/ buster main non-free contrib
> deb-src http://mirrors.aliyun.com/debian/ buster main non-free contrib
> deb http://mirrors.aliyun.com/debian-security buster/updates main
> deb-src http://mirrors.aliyun.com/debian-security buster/updates main
> deb http://mirrors.aliyun.com/debian/ buster-updates main non-free contrib
> deb-src http://mirrors.aliyun.com/debian/ buster-updates main non-free contrib
> deb http://mirrors.aliyun.com/debian/ buster-backports main non-free contrib
> deb-src http://mirrors.aliyun.com/debian/ buster-backports main non-free contrib
更新源
`apt-get update`


# makefile
makefile 介绍  
[ 跟我一起写Makefile](https://seisman.github.io/how-to-write-makefile/invoke.html)

`wildcard 通配符`  
`foreach for 循环`  
`$name 变量$`  
`$@  生成文件`  
`$< 依赖文件`  
`$(OBJS:%.o=%.d) 变量用法 更改尾缀`  
`$(sort <list>) 单词排序函数（升序）`    
`+= 追加`
`hexcs.pyhex and bin 文件转换 use lib intelhex Python`  
`GNU Arm Embedded Toolchain lib用于 32 位 Arm 处理器的预构建 GNU 裸机工具链`  



# 哈希算法  
https://www.liaoxuefeng.com/wiki/1252599548343744/1304227729113121
# 对称加密  
密文=AES(密码+消息)  
https://www.liaoxuefeng.com/wiki/1252599548343744/1304227762667553
# 密钥交换  
使用DH算法可以交换公钥，生成私钥，并在产生未被传输的密钥
# 非对称加密  
RSA公钥B(加密公钥A+data)=RSA私钥b(公钥B)

# Cygwin  
Cygwin是一个在windows平台上运行的类UNIX模拟环境，是cygnus solutions公司开发的自由软件（该公司开发的著名工具还有eCos，不过现已被Redhat收购）。它对于学习UNIX/Linux操作环境，或者从UNIX到Windows的应用程序移植，或者进行某些特殊的开发工作，尤其是使用GNU工具集在Windows上进行嵌入式系统开发，非常有用。随着嵌入式系统开发在国内日渐流行，越来越多的开发者对Cygwin产生了兴趣。  
# Mingw32  
MinGW是是将GCC编译器和GNU Binutils移植到Win32平台下的产物，包括一系列头文件（Win32API）、库和可执行文件。MinGW是从Cygwin（1.3.3版）基础上发展而来。GCC支持的语言大多在MinGW也受支持，其中涵盖C、C++、Objective-C、Fortran及Ada。对于C语言之外的语言，MinGW使用标准的GNU运行库，如C++使用GNU libstdc++。但是MinGW使用Windows中的C运行库。因此用MinGW开发的程序不需要额外的第三方DLL支持就可以直接在Windows下运行，而且也不一定必须遵从GPL许可证。这同时造成了MinGW开发的程序只能使用Win32API和跨平台的第三方库，而缺少POSIX支持，大多数GNU软件无法在不修改源代码的情况下用MinGW编译。

MinGW主要由GNU binary utilities、GCC和GDB组成。同时还包括一些必要的库，例如libc（C Runtime），及专门用于Win32环境的API接口库。如果你想学习linux环境下的编程，而又不想装linux，那你就装一个MinGW吧。

# msys 
Minimal GNU（POSIX）system on Windows，是一个小型的GNU环境，包括基本的bash，make等等。与Cygwin大致相当。

# GCC 编译库
GNU编译器套件，是由GNU开发的编程语言译器。GNU编译器套件包括C、C++、 Objective-C、 Fortran、Java、Ada和Go语言前端，也包括了这些语言的库（如libstdc++，libgcj等。）

# stm32 编译库
arm架构编译C，运行于arm架构mcu上
# automake
自动生成维护makefile的工具
# cmake
自动生成维护makefile的工具


# make
工程工具，项目工程管理，运行makefile，执行编译任务
**make语法简单，且可以运行本地shell指令，可当作脚本工具使用，好好利用可实现自动化**

# gnu工具链
cpp：
进行预处理，对源代码文件中的文件包含(include)、预编译语句(如宏定义define等)进行分析；
cc1：
进行编译，生成.s为后缀的汇编文件；
as：
进行汇编，汇编语言文件经过预编译和汇编之后都生成以.o为后缀的目标文件；
ld：
进行链接，所有的目标文件被安排在可执行程序中的恰当的位置。同时，该程序所调用到的库函数也从各自所在的档案库中链接到合适的地方。

[更多gnu工具集介绍](https://blog.csdn.net/jianchi88/article/details/7053041)

# 交叉编译器，ARM EABI编译器区别

交叉编译工具链的命名规则为：arch [-vendor] [-os] [-(gnu)eabi]

arch - 体系架构，如ARM，MIPS
vendor - 工具链提供商
os - 目标操作系统
eabi - 嵌入式应用二进制接口（Embedded Application Binary Interface）
根据对操作系统的支持与否，ARM GCC可分为支持和不支持操作系统，如

arm-none-eabi：这个是没有操作系统的，自然不可能支持那些跟操作系统关系密切的函数，比如fork(2)。他使用的是newlib这个专用于嵌入式系统的C库。
arm-none-linux-eabi：用于Linux的，使用Glibc

1. arm-none-eabi-gcc
（ARM architecture，no vendor，not target an operating system，complies with the ARM EABI）
用于编译 ARM 架构的裸机系统（包括 ARM Linux 的 boot、kernel，不适用编译 Linux 应用 Application），一般适合 ARM7、Cortex-M 和 Cortex-R 内核的芯片使用，所以不支持那些跟操作系统关系密切的函数，比如fork(2)，他使用的是 newlib 这个专用于嵌入式系统的C库。

2. arm-none-linux-gnueabi-gcc
(ARM architecture, no vendor, creates binaries that run on the Linux operating system, and uses the GNU EABI)

主要用于基于ARM架构的Linux系统，可用于编译 ARM 架构的 u-boot、Linux内核、linux应用等。arm-none-linux-gnueabi基于GCC，使用Glibc库，经过 Codesourcery 公司优化过推出的编译器。arm-none-linux-gnueabi-xxx 交叉编译工具的浮点运算非常优秀。一般ARM9、ARM11、Cortex-A 内核，带有 Linux 操作系统的会用到。

3. arm-eabi-gcc
Android ARM 编译器。

4. armcc
ARM 公司推出的编译工具，功能和 arm-none-eabi 类似，可以编译裸机程序（u-boot、kernel），但是不能编译 Linux 应用程序。armcc一般和ARM开发工具一起，Keil MDK、ADS、RVDS和DS-5中的编译器都是armcc，所以 armcc 编译器都是收费的（爱国版除外，呵呵~~）。

5. arm-none-uclinuxeabi-gcc 和 arm-none-symbianelf-gcc
arm-none-uclinuxeabi 用于uCLinux，使用Glibc。

6. arm-none-symbianelf 用于symbian，没用过，不知道C库是什么 。


# jupyter lab 插件安装

# docker

docker run

-e username="ritchie": 设置环境变量； 

-p: 指定端口映射，格式为：主机(宿主)端口:容器端口

--name="nginx-lb": 为容器指定一个名称；

--volume , -v: 绑定一个卷

[top](#top)


# code-server docker

mkdir -p ~/.config
docker run -it --name code-server -p 127.0.0.1:8082:8082 \
  -v "$HOME/.config:/home/coder/.config" \
  -v "$PWD:/home/coder/project" \
  -u "$(id -u):$(id -g)" \
  -e "DOCKER_USER=$USER" \
  codercom/code-server:latest



# last

