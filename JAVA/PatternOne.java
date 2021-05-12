public class PatternOne {
    public static void main(String[] args) {       
        int x;
        for(int i= 0; i<2; i++)
        {
            x = 3*i ;
            for(int j=1; j<x; j++)
            {
                System.out.print(" ");
            }
            for(int j=0; j<5-x; j++)
            {
                System.out.print("*");
            }
            System.out.println("");
        }
        for(int i=0; i<1; i++)
        {
            for(int j=0; j<5; j++)
            {
                System.out.print("*");
            }
        }
    }
}
