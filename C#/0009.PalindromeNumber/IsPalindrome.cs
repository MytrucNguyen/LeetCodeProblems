public class Solution {
    public bool IsPalindrome(int x) {

        if (x < 0) {
            return false;
        }

        string reversedString = new string(x.ToString().Reverse().ToArray());
        return reversedString == x.ToString();
    }
}