public class Solution {
    public int Reverse(int x) {
        bool isNegative =  x < 0;
        long absNum = Math.Abs((long)x);  
        string stringInt = absNum.ToString();
        string reversedString = "";
        
        for (int i = stringInt.Length - 1; i >= 0; i--) {
            reversedString += stringInt[i];
        }

        try {
            int reversedInt = int.Parse(reversedString);
            return isNegative ? -reversedInt : reversedInt;
        } catch (OverflowException) {
            return 0;
        }
        
    }
}