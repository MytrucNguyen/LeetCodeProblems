public class Solution {
    public int LengthOfLastWord(string s) {
        int lengthOfWord = 0;

        for (int i = s.Length-1; i >= 0; i--) {
            if (lengthOfWord == 0 && s[i] == ' ') continue;

            if(s[i] != ' ') {
                lengthOfWord++;
            } else {
                break;
            }
        }

        return lengthOfWord;
    }
}