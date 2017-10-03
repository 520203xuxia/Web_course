<%@page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@page import="java.util.Date" %>
<html>
<body>
	当前时间是：<%=new Date()%>
	当前时间是：<%=new Date().toLocaleString()%>
</body>
</html>