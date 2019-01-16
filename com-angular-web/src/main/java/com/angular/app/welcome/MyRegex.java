package com.angular.app.welcome;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class MyRegex {
	
	public static void main(String args[]) 
	{ 
		/*
		EEID Phase3 regex - /^[A-Za-z\u00C0-\u00FF][A-Za-z\u00C0-\u00FF '\-]
		                                            Unknown macro: {0,98}
		                                            [A-Za-z\u00C0-\u00FF]$/
		                                            New Phase3 regex Remove the alphabet accents in the regex
		                                            ^[a-zA-Z\'\-\ ]{2, 64}$  
		                                            */
		// Create a pattern to be searched 
		Pattern pattern = Pattern.compile("^[a-zA-Z\\'\\-\\]\\{2,64}$"); 

		// Search above pattern in "geeksforgeeks.org" 
		Matcher m = pattern.matcher("ger"); 

		// Print starting and ending indexes of the pattern 
		// in text 
		/*while (m.find()) 
			System.out.println("Pattern found from " + m.start() + 
							" to " + (m.end()-1)); */
		
		if(m.matches()) {
			System.out.println("Valid String");
		} else {
			System.out.println("Invalid String");
		}
	} 

}
