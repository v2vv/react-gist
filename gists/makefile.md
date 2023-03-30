1.自定义函数 
```
$(call <expression>,<parm1>,<parm2>,<parm3>...)$(funcname :)

# Makefile 内容
hello = "hello " $(1) " world"

all:
    @echo $(call hello,"我是参数1")

# bash 中执行 make
$ make
hello 我是参数1 world
```
2.Foreach 循环
```
$(foreach <var>,<list>,<text>)
```
3.条件判断
```
# Makefile 内容
all:
ifeq ("aa", "bb")
    @echo "equal"
else
    @echo "not equal"
endif

# bash 中执行 make
$ make
not equalifreq 
```
4.link 
https://www.cnblogs.com/wittxie/p/9836097.html
