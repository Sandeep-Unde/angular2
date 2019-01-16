package com.angular.app.welcome;

import java.util.Comparator;

public class MyComparator implements Comparator<Student>{

	@Override
	public int compare(Student arg0, Student arg1) {
		// TODO Auto-generated method stub
		return arg0.getsName().compareTo(arg1.getsName());
	}

}
