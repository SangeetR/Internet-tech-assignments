
import java.awt.event.*;  
import javax.swing.*;

public class JavaFormAssignment extends JFrame {  
    
    public JavaFormAssignment(String sup)
    {
        super(sup);
        generateUI();
        setSize(400, 600);
        setVisible(true);
     
    }

    public void generateUI() {
        // var button1 = new JButton("btn1");
        // var button2 = new JButton("btn2");
        var basePanel = new JPanel();
        
        basePanel.add(namePanelGen());
        basePanel.add(deptPanelGen());
        basePanel.add(sexPanelGen());
        basePanel.add(topicCoveredGen());
        basePanel.add(submitPanelGen());
        basePanel.add(dispPanel());

        basePanel.setLayout(new BoxLayout(basePanel, BoxLayout.Y_AXIS));
        add(basePanel);
    }

    public JPanel namePanelGen()
    {
        JPanel namePanel = new JPanel();
        JLabel nameLabel = new JLabel("Name:");
        JTextField nameText = new JTextField(15);

        namePanel.add(nameLabel);
        namePanel.add(nameText);
        namePanel.setSize(400, 5);
        return namePanel;
    }

    public JPanel deptPanelGen()
    {
        JPanel deptPanel = new JPanel();
        JLabel deptLabel = new JLabel("Department:");
        // JTextField deptText = new JTextField(15);
        String[] deptNames = new String[] {"Physics", "Maths", "CS"};
        JComboBox deptList =  new JComboBox<>(deptNames);

        deptPanel.add(deptLabel);
        deptPanel.add(deptList);
        return deptPanel;
    }

    public JPanel sexPanelGen()
    {
        JPanel sexPanel = new JPanel();
        JLabel sexLabel = new JLabel("Sex");
        ButtonGroup sex = new ButtonGroup();
        JRadioButton male = new JRadioButton("Male", true);
        JRadioButton female = new JRadioButton("Female", true);
        
        sex.add(male);
        sex.add(female);

        sexPanel.add(sexLabel);
        sexPanel.add(male);
        sexPanel.add(female);
        return sexPanel;
    }

    public JPanel topicCoveredGen()
    {
        JPanel topicCovered = new JPanel();
        JLabel topicLabel = new JLabel("Topic Covered(by you):");

        JCheckBox html = new JCheckBox("HTML", true);
        JCheckBox css = new JCheckBox("CSS");
        JCheckBox js = new JCheckBox("JavaScript");
        JCheckBox applet = new JCheckBox("Applet");
        JCheckBox swings = new JCheckBox("Swings");
        JCheckBox db = new JCheckBox("Servelet & JDBC/ODBC");


        topicCovered.add(topicLabel);
        topicCovered.add(html);
        topicCovered.add(css);
        topicCovered.add(js);
        topicCovered.add(applet);
        topicCovered.add(swings);
        topicCovered.add(db);
        return topicCovered;
    }

    public JPanel dispPanel() {
        JPanel disp = new JPanel();
        JLabel dispLabel = new JLabel("Records:");

        String[] data =new String[] {"Name: Sangeet Rathi \n Sex: Male \n Department: Physics", "Name: KK \n Sex: Male \n Department: Physics"};
        JList dataList = new JList(data);
        JScrollPane listScr = new JScrollPane();
        listScr.getViewport().add(dataList);

        disp.add(dispLabel);
        disp.add(listScr);
        return disp;
    } 

    public JPanel submitPanelGen()
    {
        JPanel submitPanel = new JPanel();
        JButton submitButton = new JButton("Submit");

        submitPanel.add(submitButton);
        return submitPanel;
    }
    
public static void main(String[] args) {  
    var main = new JavaFormAssignment("Java Lab Assignment");
}  

}
