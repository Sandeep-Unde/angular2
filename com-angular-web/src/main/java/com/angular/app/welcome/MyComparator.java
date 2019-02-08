package com.angular.app.welcome;

import java.util.Comparator;

public class MyComparator implements Comparator<Student>{
	
	/**
	 * 
	 * @author 046146
	 *
	 */
	public enum FIELD_SORT_IDENTIFIER {
		NAME, NUM
	}
	
	/**
	 * 
	 */
	private FIELD_SORT_IDENTIFIER sortIdentifier;
	
	/**
	 * 
	 * @param sortIdentifier
	 */
	public MyComparator(FIELD_SORT_IDENTIFIER sortIdentifier) {
		this.sortIdentifier = sortIdentifier;
	}
	
	/**
	 * 
	 */
	@Override
	public int compare(Student arg0, Student arg1) {
		int compareVal = 0;
		if (sortIdentifier.equals(FIELD_SORT_IDENTIFIER.NAME)) {
			compareVal =  arg0.getsName().compareTo(arg1.getsName());
		} else if (sortIdentifier.equals(FIELD_SORT_IDENTIFIER.NUM)) {
			compareVal = arg0.getsNo().compareTo(arg1.getsNo());
		}
		return compareVal;
	}

}
