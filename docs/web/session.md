# Session

## 会话跟踪技术

**会话**：用户打开浏览器，访问web服务器的资源，会话建立，直到有一方断开连接，会话结束。在一次会话中可以包含多次请求和响应。

**会话跟踪**：一种维护浏览器状态的方法，服务器需要识别多次请求是否来自于同一浏览器，以便在同一次会话的多次请求间**共享数据**。

HTTP协议是**无状态**的，每次浏览器向服务器请求时，服务器都会将该请求视为新的请求，因此我们需要会话跟踪技术来实现会话内数据共享。

## Cookie 基本使用

Cookie：客户端会话技术，将数据保存到客户端，以后每次请求都携带Cookie数据进行访问。

1. 创建Cookie对象，设置数据

```java
Cookie cookie = new Cookie("key","value");
```

2. 发送Cookie到客户端：使用response对象

```java
response.addCookie(cookie);
```

3. 获取客户端携带的所有Cookie，使用request对象

```java
Cookie[] cookies = request.getCookies();
```

4. 遍历数组，获取每一个Cookie对象：for
5. 使用Cookie对象方法获取数据

```java
cookie.getName();
cookie.getValue();
```

## Cookie 原理

Cookie的实现是基于HTTP协议的：

+ 响应头：set-cookie
+ 请求头：cookie

## Cookie 使用细节

### Cookie 存活时间

默认情况下，Cookie存储在浏览器中，当浏览器关闭，内存释放，则Cookie被销毁。

`setMaxAge(int seconds)`：设置Cookie存活时间。

1. 正数：将Cookie写入浏览器所在电脑的硬盘，持久化存储。到时间自动删除。
2. 负数：默认值，Cookie在当前浏览器内存中，当浏览器关闭，则Cookie被销毁。
3. 零：删除对应Cookie。

### Cookie 存储中文

Cookie 不能直接存储中文，如果需要存储，则需要使用**URL编码**进行转码：

```java
URLEncoder.encode(value,"UTF-8");	// 编码
URLDecoder.decode(value,"UTF-8");	// 解码
```

## Session 基本使用

服务端会话跟踪技术：将数据保存到服务端。JavaEE 提供 HttpSession接口来实现一次会话的多次请求间数据共享功能。

获取Session对象：

```java
HttpSession session = request.getSession();
```

Session对象功能：

| 方法                                     | 说明                  |
| ---------------------------------------- | --------------------- |
| void setAttribute(String name, Object o) | 存储数据到Session域中 |
| Object getAttribute(String name)         | 根据key，获取值       |
| void removeAttribute(String name)        | 根据key，删除该键值对 |

## Session 原理

Session是基于Cookie实现的。

![](./assets/1629430754825.png)
