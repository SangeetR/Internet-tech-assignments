//First.java  
// import java.applet.Applet;  
import java.awt.Graphics;  
public class hello extends Applet{  
  
public void paint(Graphics g){  
g.drawString("welcome to applet",50,150); 

}  
  
}  
/* 
<applet code="hello.class" width="300" height="300"> 
</applet> 
*/  
// Drawing shapes

import java.applet.Applet;
import java.awt.*;

public class GraphicsDemo extends Applet{

public void paint(Graphics g){
g.setColor(Color.red);
g.drawString("Welcome",50, 50);
g.drawLine(20,30,20,300);
g.drawLine(20,30,200,30);
g.drawRect(70,100,30,30);
g.fillRect(170,100,30,30);
g.drawOval(70,200,30,30);

g.setColor(Color.blue);
g.fillOval(170,200,30,30);
g.drawArc(90,150,30,30,30,270);
g.fillArc(270,150,30,30,0,180);

}
}